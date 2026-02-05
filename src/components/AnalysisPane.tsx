import { useState, type RefObject } from 'react';
import type { AnalysisStage, StageName } from '../types';
import { STAGE_LABELS } from '../types';

interface AnalysisPaneProps {
  stages: AnalysisStage[];
  analysisStageRefs: RefObject<Map<string, HTMLDivElement>>;
  onEvidenceClick: (uttId: string) => void;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

function getStatusColor(status: AnalysisStage['status']): { bg: string; text: string; label: string } {
  switch (status) {
    case 'excellent':
      return { bg: 'bg-green-900/50', text: 'text-green-400', label: 'Excellent' };
    case 'good':
      return { bg: 'bg-blue-900/50', text: 'text-blue-400', label: 'Good' };
    case 'partial':
      return { bg: 'bg-yellow-900/50', text: 'text-yellow-400', label: 'Partial' };
    case 'needs_improvement':
      return { bg: 'bg-red-900/50', text: 'text-red-400', label: 'Needs Improvement' };
    default:
      return { bg: 'bg-gray-900/50', text: 'text-gray-400', label: status };
  }
}

interface StageCardProps {
  stage: AnalysisStage;
  onEvidenceClick: (uttId: string) => void;
  stageRef: (el: HTMLDivElement | null) => void;
}

function StageCard({ stage, onEvidenceClick, stageRef }: StageCardProps) {
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);
  const statusStyle = getStatusColor(stage.status);
  const visibleRecommendations = showAllRecommendations
    ? stage.recommendations
    : stage.recommendations.slice(0, 2);

  return (
    <div ref={stageRef} className="space-y-3">
      {/* Stage Header */}
      <div className="sticky top-0 bg-gray-800 py-2 z-10">
        <div className="flex items-center justify-between border-b border-gray-600 pb-2">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            {STAGE_LABELS[stage.stage as StageName] || stage.stage}
          </h3>
          <span className={`px-2 py-1 text-xs font-medium rounded ${statusStyle.bg} ${statusStyle.text}`}>
            {statusStyle.label}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Claim */}
        <div>
          <p className="text-gray-200 text-sm leading-relaxed">{stage.claim}</p>
        </div>

        {/* Evidence */}
        {stage.evidence.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Evidence</h4>
            <div className="flex flex-wrap gap-2">
              {stage.evidence.map((ev) => (
                <button
                  key={ev.evidence_id}
                  onClick={() => onEvidenceClick(ev.utt_id)}
                  className="group relative px-3 py-1.5 bg-gray-700 hover:bg-blue-700 text-gray-200 text-xs rounded-full transition-colors cursor-pointer"
                  // title={ev.why_it_matters}
                >
                  <span className="truncate max-w-[200px] inline-block">"{ev.quote}"</span>
                   <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-gray-200 text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-normal w-max max-w-[200px] z-50">
                    {ev.why_it_matters}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Impact */}
        {stage.impact.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Impact</h4>
            <ul className="space-y-1">
              {stage.impact.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-gray-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommendations */}
        {stage.recommendations.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Recommendations</h4>
            <ul className="space-y-1">
              {visibleRecommendations.map((rec, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
            {stage.recommendations.length > 2 && (
              <button
                onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                className="mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                {showAllRecommendations
                  ? 'Show less'
                  : `Show ${stage.recommendations.length - 2} more`}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function AnalysisPane({ stages, analysisStageRefs, onEvidenceClick, scrollContainerRef }: AnalysisPaneProps) {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">Analysis by Stage</h2>
      </div>
      <div ref={scrollContainerRef} className="p-4 space-y-6 max-h-[calc(100vh-280px)] overflow-y-auto">
        {stages.map((stage) => (
          <StageCard
            key={stage.stage}
            stage={stage}
            onEvidenceClick={onEvidenceClick}
            stageRef={(el) => {
              if (el && analysisStageRefs.current) {
                analysisStageRefs.current.set(stage.stage, el);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
