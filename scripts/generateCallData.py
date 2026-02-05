#!/usr/bin/env python3
"""
Generate callData.ts from transcript.json using OpenAI API.
Reads the AssemblyAI transcript, sends it to GPT for analysis,
and writes the result as a TypeScript file.
"""

import json
import os
import re
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

SCRIPT_DIR = Path(__file__).resolve().parent
TRANSCRIPT_PATH = SCRIPT_DIR / "data" / "transcript.json"
OUTPUT_PATH = SCRIPT_DIR.parent / "src" / "data" / "callData.ts"

STAGES = [
    "introduction",
    "problem_diagnosis",
    "solution_explanation",
    "upsell_attempts",
    "maintenance_plan_offer",
    "closing_thank_you",
]

SYSTEM_PROMPT = """\
You are a service-call analyst. Given a transcript, produce a JSON object matching the CallData schema below.

## CallData schema

{
  "call": {
    "call_id": string,           // use "demo-001"
    "title": string,             // e.g. "HVAC Service Call Analysis"
    "call_type": string,         // e.g. "Repair and Sales Call"
    "participants": [
      { "id": "tech", "role": "technician", "display_name": "Field Service Rep" },
      { "id": "cust", "role": "customer", "display_name": "Luis (Homeowner)" }
    ],
    "meta": {
      "duration_sec": number,       // from audio_duration
      "service_completed": string,  // what repair was done
      "proposed_deal": string,      // what was pitched
      "deal_value_net": number,     // estimated deal value after rebates
      "close_probability": number   // 0-1
    },
    "kpis": {
      "overall_score": number,   // 0-100
      "overall_grade": string,   // >=93 A, 90-92 A-, 87-89 B+, 83-86 B, 80-82 B-, 70-79 C, else D
      "stage_scores": {
        "introduction": number,
        "problem_diagnosis": number,
        "solution_explanation": number,
        "upsell_attempts": number,
        "maintenance_plan_offer": number,
        "closing_thank_you": number
      }
    }
  },
  "transcript": {
    "utterances": [
      {
        "utt_id": string,        // keep the utt_id from input
        "t_start_ms": number,
        "t_end_ms": number,
        "speaker_id": string,    // "tech" or "cust" (map from A/B)
        "text": string,
        "stage": string,         // one of the 6 stages
        "tags": [string]         // optional semantic tags like "objection", "buying-signal"
      }
    ],
    "stages": [
      {
        "stage": string,
        "label": string,         // human-readable label
        "t_start_ms": number,
        "t_end_ms": number,
        "utt_ids": [string]
      }
    ]
  },
  "analysis": {
    "stages": [
      {
        "stage": string,
        "status": "excellent" | "good" | "partial" | "needs_improvement",
        "claim": string,
        "evidence": [
          {
            "evidence_id": string,
            "utt_id": string,
            "quote": string,          // short excerpt from that utterance
            "why_it_matters": string
          }
        ],
        "impact": [string],
        "recommendations": [string]
      }
    ],
    "sales_insights": {
      "what_went_well": [string],
      "what_was_missed": [string],
      "buying_signals": [
        { "signal": string, "utt_id": string (optional), "confidence": number (0-1) }
      ],
      "follow_up_strategy": [
        { "action": string, "owner": string, "due_in_hours": number }
      ]
    },
    "tooling_disclosure": {
      "transcription_tool": "AssemblyAI Universal-3-Pro",
      "analysis_tooling": ["OpenAI GPT analysis", "Manual verification against transcript"],
      "notes": "All insights verified against quoted utterances."
    }
  }
}

## Rules
- Map speaker "A" -> "tech", "B" -> "cust" (infer from content: tech explains equipment/pricing, customer asks questions).
- All 6 stages must appear in both transcript.stages and analysis.stages.
- Every utterance gets exactly one stage. transcript.stages[].utt_ids must list the utterances belonging to that stage.
- Evidence quotes must be real excerpts from the cited utterance (short, 10-200 chars).
- Do NOT invent facts not in the transcript.
- overall_grade must match overall_score per the grading scale above.
- buying_signals.confidence must be in [0,1].
- Include tags on utterances where semantically meaningful (e.g. "objection", "buying-signal", "acknowledgment", "concern").
"""


def main():
    transcript = json.loads(TRANSCRIPT_PATH.read_text())

    # Prepare utterances with IDs
    utterances = []
    for i, u in enumerate(transcript.get("utterances", [])):
        utterances.append({
            "utt_id": f"u{i+1:03d}",
            "speaker": u.get("speaker", ""),
            "t_start_ms": u.get("start", 0),
            "t_end_ms": u.get("end", 0),
            "text": re.sub(r"\s+", " ", u.get("text", "")).strip(),
        })

    user_prompt = f"""\
Analyze this service call transcript and produce the CallData JSON.

- audio_duration_sec: {transcript.get("audio_duration", 0)}
- {len(utterances)} utterances

Chapters (high-level summary from transcription service):
{json.dumps(transcript.get("chapters", []), indent=2)}

Utterances:
{json.dumps(utterances, indent=2)}
"""

    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    model = os.getenv("OPENAI_MODEL", "gpt-4o")

    print(f"Calling {model}...")
    response = client.chat.completions.create(
        model=model,
        temperature=0,
        max_tokens=16000,  # Increased to handle large transcripts
        response_format={"type": "json_object"},
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt},
        ],
    )

    raw_content = response.choices[0].message.content
    
    # Debug: save raw response
    debug_path = SCRIPT_DIR / "debug_response.json"
    debug_path.write_text(raw_content)
    print(f"Raw response saved to {debug_path}")
    
    # Check if response was truncated
    if response.choices[0].finish_reason != "stop":
        print(f"⚠️  Warning: Response finish_reason = {response.choices[0].finish_reason}")
        print("The response may have been truncated. Consider using a higher max_tokens or a model with larger output capacity.")
    
    try:
        result = json.loads(raw_content)
    except json.JSONDecodeError as e:
        print(f"\n❌ JSON Parse Error: {e}")
        print(f"\nContext around error (char {max(0, e.pos-200)}:{e.pos+200}):")
        print(raw_content[max(0, e.pos-200):e.pos+200])
        print("\nFull response saved to debug_response.json for inspection.")
        raise

    # Write as TypeScript
    ts_content = (
        "import type { CallData } from '../types';\n\n"
        f"export const callData: CallData = {json.dumps(result, indent=2)};\n"
    )
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(ts_content)

    utt_count = len(result.get("transcript", {}).get("utterances", []))
    print(f"Done! Wrote {OUTPUT_PATH} with {utt_count} utterances.")


if __name__ == "__main__":
    main()
