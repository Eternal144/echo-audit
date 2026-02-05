import type { SalesInsights as SalesInsightsType } from '../types';

interface SalesInsightsProps {
  insights: SalesInsightsType;
  onSignalClick: (uttId: string) => void;
}

export function SalesInsights({ insights, onSignalClick }: SalesInsightsProps) {
  return (
    <section className="mt-8 pb-8">
      <h2 className="text-xl font-semibold text-white mb-4 px-4">Sales Insights & Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {/* What Went Well */}
        <div className="bg-gray-800 rounded-lg border border-green-800/50 overflow-hidden">
          <div className="bg-green-900/30 px-4 py-3 border-b border-green-800/50">
            <h3 className="text-base font-semibold text-green-400 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What Went Well
            </h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {insights.what_went_well.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What Was Missed */}
        <div className="bg-gray-800 rounded-lg border border-red-800/50 overflow-hidden">
          <div className="bg-red-900/30 px-4 py-3 border-b border-red-800/50">
            <h3 className="text-base font-semibold text-red-400 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What Was Missed
            </h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {insights.what_was_missed.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buying Signals */}
        <div className="bg-gray-800 rounded-lg border border-amber-800/50 overflow-hidden">
          <div className="bg-amber-900/30 px-4 py-3 border-b border-amber-800/50">
            <h3 className="text-base font-semibold text-amber-400 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Buying Signals
            </h3>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {insights.buying_signals.map((signal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">●</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">{signal.signal}</p>
                    <div className="flex items-center gap-3 mt-1">
                      {signal.utt_id && (
                        <button
                          onClick={() => onSignalClick(signal.utt_id!)}
                          className="text-xs text-blue-400 hover:text-blue-300 underline"
                        >
                          View in transcript
                        </button>
                      )}
                      <span className="text-xs text-gray-500">
                        Confidence: {Math.round(signal.confidence * 100)}%
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow-Up Strategy */}
        <div className="bg-gray-800 rounded-lg border border-blue-800/50 overflow-hidden">
          <div className="bg-blue-900/30 px-4 py-3 border-b border-blue-800/50">
            <h3 className="text-base font-semibold text-blue-400 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Follow-Up Strategy
            </h3>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {insights.follow_up_strategy.map((action, idx) => (
                <li key={idx} className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-200">{action.action}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {action.owner}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Due in {action.due_in_hours}h
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
