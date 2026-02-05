import type { Call } from '../types';

interface SummaryHeaderProps {
  call: Call;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

export function SummaryHeader({ call }: SummaryHeaderProps) {
  const { kpis, highlights, meta, call_type } = call;

  return (
    <header className="top-0 z-50 bg-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Top row: Highlight pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-900/50 rounded-full text-sm">
            <span className="text-gray-400">Type:</span>
            <span className="text-blue-300 font-medium">{call_type}</span>
          </div>
          {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-green-900/50 rounded-full text-sm">
            <span className="text-gray-400">Strength:</span>
            <span className="text-green-300 font-medium truncate max-w-xs">{highlights.top_strength}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-red-900/50 rounded-full text-sm">
            <span className="text-gray-400">Risk:</span>
            <span className="text-red-300 font-medium truncate max-w-xs">{highlights.top_risk}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-900/50 rounded-full text-sm">
            <span className="text-gray-400">Opportunity:</span>
            <span className="text-amber-300 font-medium truncate max-w-xs">{highlights.top_sales_opportunity}</span>
          </div> */}
        </div>

        {/* Bottom row: KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <div className="text-gray-400 text-xs uppercase tracking-wide">Duration</div>
            <div className="text-white text-xl font-semibold mt-1">{formatDuration(meta.duration_sec)}</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <div className="text-gray-400 text-xs uppercase tracking-wide">Overall Score</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-white text-xl font-semibold">{kpis.overall_score}</span>
              <span className="text-lg font-bold text-blue-400">{kpis.overall_grade}</span>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <div className="text-gray-400 text-xs uppercase tracking-wide">Deal Value</div>
            <div className="text-white text-xl font-semibold mt-1">{formatCurrency(meta.deal_value_net)}</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
            <div className="text-gray-400 text-xs uppercase tracking-wide">Close Probability</div>
            <div className="text-white text-xl font-semibold mt-1">{Math.round(meta.close_probability * 100)}%</div>
          </div>
        </div>
      </div>
    </header>
  );
}
