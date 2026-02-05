export interface Participant {
  id: string;
  role: string;
  display_name: string;
}

export interface CallMeta {
  duration_sec: number;
  service_completed: string;
  proposed_deal: string;
  deal_value_net: number;
  close_probability: number;
}

export interface StageScores {
  introduction: number;
  problem_diagnosis: number;
  solution_explanation: number;
  upsell_attempts: number;
  maintenance_plan_offer: number;
  closing_thank_you: number;
}

export interface KPIs {
  overall_score: number;
  overall_grade: string;
  stage_scores: StageScores;
}

export interface Highlights {
  top_strength: string;
  top_risk: string;
  top_sales_opportunity: string;
}

export interface Call {
  call_id: string;
  title: string;
  call_type: string;
  participants: Participant[];
  meta: CallMeta;
  kpis: KPIs;
  highlights: Highlights;
}

export interface Utterance {
  utt_id: string;
  t_start_ms: number;
  t_end_ms: number;
  speaker_id: string;
  text: string;
  stage: string;
  tags?: string[];
}

export interface Stage {
  stage: string;
  label: string;
  t_start_ms: number;
  t_end_ms: number;
  utt_ids: string[];
}

export interface Transcript {
  utterances: Utterance[];
  stages: Stage[];
}

export interface Evidence {
  evidence_id: string;
  utt_id: string;
  quote: string;
  why_it_matters: string;
}

export interface AnalysisStage {
  stage: string;
  status: 'excellent' | 'good' | 'partial' | 'needs_improvement';
  claim: string;
  evidence: Evidence[];
  impact: string[];
  recommendations: string[];
}

export interface BuyingSignal {
  signal: string;
  utt_id?: string;
  confidence: number;
}

export interface FollowUpAction {
  action: string;
  owner: string;
  due_in_hours: number;
}

export interface SalesInsights {
  what_went_well: string[];
  what_was_missed: string[];
  buying_signals: BuyingSignal[];
  follow_up_strategy: FollowUpAction[];
}

export interface ToolingDisclosure {
  transcription_tool: string;
  analysis_tooling: string[];
  notes: string;
}

export interface Analysis {
  stages: AnalysisStage[];
  sales_insights: SalesInsights;
  tooling_disclosure: ToolingDisclosure;
}

export interface CallData {
  call: Call;
  transcript: Transcript;
  analysis: Analysis;
}

export type StageName = keyof StageScores;

export const STAGE_ORDER: StageName[] = [
  'introduction',
  'problem_diagnosis',
  'solution_explanation',
  'upsell_attempts',
  'maintenance_plan_offer',
  'closing_thank_you',
];

export const STAGE_LABELS: Record<StageName, string> = {
  introduction: 'Introduction',
  problem_diagnosis: 'Problem Diagnosis',
  solution_explanation: 'Solution Explanation',
  upsell_attempts: 'Upsell Attempts',
  maintenance_plan_offer: 'Maintenance Plan',
  closing_thank_you: 'Closing',
};
