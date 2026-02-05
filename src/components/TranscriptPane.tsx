import type { RefObject } from 'react';
import type { Utterance, Participant, StageName } from '../types';
import { STAGE_LABELS } from '../types';

interface TranscriptPaneProps {
  utterances: Utterance[];
  participants: Participant[];
  utteranceRefs: RefObject<Map<string, HTMLDivElement>>;
  stageRefs: RefObject<Map<string, HTMLDivElement>>;
  highlightedUtterance: string | null;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getSpeakerDisplay(speakerId: string, participants: Participant[]): { name: string; color: string } {
  const participant = participants.find(p => p.id === speakerId);
  if (participant) {
    return {
      name: participant.display_name,
      color: participant.role === 'technician' ? 'text-blue-400' : 'text-green-400'
    };
  }
  return { name: speakerId, color: 'text-gray-400' };
}

export function TranscriptPane({
  utterances,
  participants,
  utteranceRefs,
  stageRefs,
  highlightedUtterance,
  scrollContainerRef
}: TranscriptPaneProps) {
  // Group utterances by stage
  const utterancesByStage = utterances.reduce((acc, utt) => {
    const stage = utt.stage as StageName;
    if (!acc[stage]) acc[stage] = [];
    acc[stage].push(utt);
    return acc;
  }, {} as Record<StageName, Utterance[]>);

  const stages = Object.keys(utterancesByStage) as StageName[];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">Transcript</h2>
      </div>
      <div ref={scrollContainerRef} className="p-4 space-y-6 max-h-[calc(100vh-280px)] overflow-y-auto">
        {stages.map((stage) => (
          <div
            key={stage}
            ref={(el) => {
              if (el && stageRefs.current) {
                stageRefs.current.set(stage, el);
              }
            }}
            className="space-y-3"
          >
            <div className="sticky top-0 bg-gray-800 py-2 z-10">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide border-b border-gray-600 pb-2">
                {STAGE_LABELS[stage] || stage}
              </h3>
            </div>
            {utterancesByStage[stage].map((utt) => {
              const speaker = getSpeakerDisplay(utt.speaker_id, participants);
              const isHighlighted = highlightedUtterance === utt.utt_id;

              return (
                <div
                  key={utt.utt_id}
                  ref={(el) => {
                    if (el && utteranceRefs.current) {
                      utteranceRefs.current.set(utt.utt_id, el);
                    }
                  }}
                  className={`
                    flex gap-3 p-3 rounded-lg transition-colors
                    ${isHighlighted ? 'utterance-highlight bg-blue-900/30' : 'hover:bg-gray-700/50'}
                  `}
                  data-utt-id={utt.utt_id}
                >
                  <div className="flex-shrink-0 w-12 text-right">
                    <span className="text-xs text-gray-500 font-mono">{formatTime(utt.t_start_ms)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-medium ${speaker.color}`}>{speaker.name}</span>
                      {utt.tags && utt.tags.length > 0 && (
                        <div className="flex gap-1">
                          {utt.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-1.5 py-0.5 bg-gray-700 text-gray-300 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">{utt.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
