import { useState, useRef, useCallback } from 'react';
import type { CallData, StageName } from '../types';
import { STAGE_ORDER } from '../types';
import { SummaryHeader } from './SummaryHeader';
import { StageNav } from './StageNav';
import { TranscriptPane } from './TranscriptPane';
import { AnalysisPane } from './AnalysisPane';
import { SalesInsights } from './SalesInsights';
import { ToolingDisclosure } from './ToolingDisclosure';

interface AppShellProps {
  data: CallData;
}

export function AppShell({ data }: AppShellProps) {
  const [activeStage, setActiveStage] = useState<StageName | null>(null);
  const [highlightedUtterance, setHighlightedUtterance] = useState<string | null>(null);

  const utteranceRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const transcriptStageRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const analysisStageRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const transcriptScrollRef = useRef<HTMLDivElement>(null);
  const analysisScrollRef = useRef<HTMLDivElement>(null);

  const scrollToUtterance = useCallback((uttId: string) => {
    const el = utteranceRefs.current.get(uttId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedUtterance(uttId);
      setTimeout(() => setHighlightedUtterance(null), 2500);
    }
  }, []);

  const handleStageClick = useCallback((stage: StageName) => {
    setActiveStage(stage);

    // Scroll transcript to stage (within the pane)
    const transcriptEl = transcriptStageRefs.current.get(stage);
    const transcriptContainer = transcriptScrollRef.current;
    if (transcriptEl && transcriptContainer) {
      const offsetTop = transcriptEl.offsetTop - transcriptContainer.offsetTop;
      transcriptContainer.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }

    // Scroll analysis to stage (within the pane)
    const analysisEl = analysisStageRefs.current.get(stage);
    const analysisContainer = analysisScrollRef.current;
    if (analysisEl && analysisContainer) {
      const offsetTop = analysisEl.offsetTop - analysisContainer.offsetTop;
      analysisContainer.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }, []);

  const handleEvidenceClick = useCallback((uttId: string) => {
    scrollToUtterance(uttId);
  }, [scrollToUtterance]);

  // Sort analysis stages to match STAGE_ORDER
  const sortedAnalysisStages = [...data.analysis.stages].sort((a, b) => {
    const aIndex = STAGE_ORDER.indexOf(a.stage as StageName);
    const bIndex = STAGE_ORDER.indexOf(b.stage as StageName);
    return aIndex - bIndex;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <SummaryHeader call={data.call} />
      <StageNav
        stageScores={data.call.kpis.stage_scores}
        activeStage={activeStage}
        onStageClick={handleStageClick}
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Split view: Transcript | Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TranscriptPane
            utterances={data.transcript.utterances}
            participants={data.call.participants}
            utteranceRefs={utteranceRefs}
            stageRefs={transcriptStageRefs}
            highlightedUtterance={highlightedUtterance}
            scrollContainerRef={transcriptScrollRef}
          />
          <AnalysisPane
            stages={sortedAnalysisStages}
            analysisStageRefs={analysisStageRefs}
            onEvidenceClick={handleEvidenceClick}
            scrollContainerRef={analysisScrollRef}
          />
        </div>

        {/* Sales Insights */}
        <SalesInsights
          insights={data.analysis.sales_insights}
          onSignalClick={scrollToUtterance}
        />
      </main>

      <ToolingDisclosure disclosure={data.analysis.tooling_disclosure} />
    </div>
  );
}
