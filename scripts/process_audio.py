"""
Service Call Audio Transcription Script
Uses AssemblyAI API to transcribe audio with speaker labels and auto chapters.
"""

import assemblyai as aai
import json
import os
from pathlib import Path


ASSEMBLYAI_API_KEY = "f10c528d13984fb6a55cb3018776b230"  # <-- Replace with your API Key


client = OpenAI(api_key=)

# Resolve paths relative to this script's location
SCRIPT_DIR = Path(__file__).resolve().parent

# Audio file path
AUDIO_FILE = str(SCRIPT_DIR / "data" / "39472_N_Darner_Dr_2.m4a")

# Output path
OUTPUT_DIR = SCRIPT_DIR / "data"
OUTPUT_FILE = OUTPUT_DIR / "transcript.json"


def transcribe_audio():
    """Transcribe audio file using AssemblyAI with speaker labels and auto chapters."""
    # Ensure output directory exists
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Configure AssemblyAI
    aai.settings.api_key = os.getenv("ASSEMBLYAI_API_KEY")

    print(f"📂 Processing audio file: {AUDIO_FILE}")
    print("⏳ Uploading and transcribing, please wait...")

    config = aai.TranscriptionConfig(
        speech_models=["universal-3-pro"],# Use the latest high-quality model
        speaker_labels=True,      # Distinguish different speakers (technician vs customer)
        auto_chapters=True,       # Auto chapter segmentation
        language_code="en",       # English
        punctuate=True,           # Auto punctuation
        format_text=True,         # Format text
    )

    # Create transcriber and transcribe
    transcriber = aai.Transcriber()

    try:
        transcript = transcriber.transcribe(AUDIO_FILE, config=config)

        if transcript.status == aai.TranscriptStatus.error:
            print(f"❌ Transcription failed: {transcript.error}")
            return False

        # Build output JSON structure
        output_data = {
            "id": transcript.id,
            "status": transcript.status.value,
            "text": transcript.text,
            "confidence": transcript.confidence,
            "audio_duration": transcript.audio_duration,
            "words": [
                {
                    "text": word.text,
                    "start": word.start,
                    "end": word.end,
                    "confidence": word.confidence,
                    "speaker": word.speaker
                }
                for word in (transcript.words or [])
            ],
            "utterances": [
                {
                    "speaker": utterance.speaker,
                    "text": utterance.text,
                    "start": utterance.start,
                    "end": utterance.end,
                    "confidence": utterance.confidence
                }
                for utterance in (transcript.utterances or [])
            ],
            "chapters": [
                {
                    "summary": chapter.summary,
                    "headline": chapter.headline,
                    "gist": chapter.gist,
                    "start": chapter.start,
                    "end": chapter.end
                }
                for chapter in (transcript.chapters or [])
            ]
        }

        # Save to JSON file
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            json.dump(output_data, f, ensure_ascii=False, indent=2)

        print("✅ Transcription successful!")
        print(f"📄 Transcript saved to: {OUTPUT_FILE}")
        print(f"⏱️  Audio duration: {transcript.audio_duration} seconds")
        print(f"🎯 Confidence: {transcript.confidence:.2%}" if transcript.confidence else "")
        print(f"👥 Number of speakers detected: {len(set(u.speaker for u in (transcript.utterances or [])))}")
        print(f"📑 Number of auto chapters: {len(transcript.chapters or [])}")

        return True

    except Exception as e:
        print(f"❌ Error occurred: {str(e)}")
        return False


if __name__ == "__main__":
    success = transcribe_audio()
    if success:
        print("\n🎉 Processing complete! Ready for the next step of analysis.")
    else:
        print("\n⚠️  Processing incomplete, please check the error messages above.")
