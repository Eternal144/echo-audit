import type { StageName, StageScores } from '../types';
import { STAGE_ORDER, STAGE_LABELS } from '../types';

interface StageNavProps {
  stageScores: StageScores;
  activeStage: StageName | null;
  onStageClick: (stage: StageName) => void;
}

function getScoreColor(score: number): string {
  if (score >= 90) return 'bg-green-500';
  if (score >= 80) return 'bg-blue-500';
  if (score >= 70) return 'bg-yellow-500';
  return 'bg-red-500';
}

function getScoreBgColor(score: number): string {
  if (score >= 90) return 'bg-green-900/30 border-green-700 hover:bg-green-900/50';
  if (score >= 80) return 'bg-blue-900/30 border-blue-700 hover:bg-blue-900/50';
  if (score >= 70) return 'bg-yellow-900/30 border-yellow-700 hover:bg-yellow-900/50';
  return 'bg-red-900/30 border-red-700 hover:bg-red-900/50';
}

export function StageNav({ stageScores, activeStage, onStageClick }: StageNavProps) {
  return (
    <nav className="top-[140px] z-40 bg-gray-900/95 backdrop-blur border-b border-gray-700 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {STAGE_ORDER.map((stage) => {
            const score = stageScores[stage];
            const isActive = activeStage === stage;

            return (
              <button
                key={stage}
                onClick={() => onStageClick(stage)}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg border transition-all whitespace-nowrap cursor-pointer
                  ${getScoreBgColor(score)}
                  ${isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''}
                `}
              >
                <span className="text-gray-200 text-sm font-medium">{STAGE_LABELS[stage]}</span>
                <span className={`${getScoreColor(score)} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                  {score}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
