import type { ToolingDisclosure as ToolingDisclosureType } from '../types';

interface ToolingDisclosureProps {
  disclosure: ToolingDisclosureType;
}

export function ToolingDisclosure({ disclosure }: ToolingDisclosureProps) {
  return (
    <footer className="border-t border-gray-700 bg-gray-900 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Transcription:</span>
              <span className="text-gray-400">{disclosure.transcription_tool}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Analysis:</span>
              <span className="text-gray-400">{disclosure.analysis_tooling.join(', ')}</span>
            </div>
          </div>
          <div className="text-gray-600 italic">{disclosure.notes}</div>
        </div>
      </div>
    </footer>
  );
}
