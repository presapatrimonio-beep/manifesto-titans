import React from 'react';
import { Loader2 } from 'lucide-react';

interface ExportProgressModalProps {
  isOpen: boolean;
  current: number;
  total: number;
  statusMessage: string;
}

export const ExportProgressModal: React.FC<ExportProgressModalProps> = ({
  isOpen,
  current,
  total,
  statusMessage,
}) => {
  if (!isOpen) return null;

  const percent = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-md bg-[#171717] border border-[#C6A15B]/40 shadow-2xl p-6 text-center space-y-5">
        <div className="w-12 h-12 rounded-full border border-[#C6A15B]/40 bg-[#080808] flex items-center justify-center mx-auto text-[#E4CB91]">
          <Loader2 className="w-6 h-6 animate-spin text-[#C6A15B]" />
        </div>

        <div className="space-y-1.5">
          <h3 className="font-serif text-lg text-[#F5F3EE] font-bold">
            Gerando Apresentação em PDF 16:9
          </h3>
          <p className="text-xs text-[#C6A15B]/90 font-light font-mono">
            {statusMessage}
          </p>
        </div>

        {/* Gold Progress Bar */}
        <div className="space-y-1.5">
          <div className="w-full h-2 bg-[#080808] border border-[#C6A15B]/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C6A15B] via-[#E4CB91] to-[#C6A15B] transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-[#F5F3EE]/50">
            <span>Alta Resolução (1920 × 1080)</span>
            <span>{percent}%</span>
          </div>
        </div>

        <p className="text-[11px] text-[#F5F3EE]/40 italic">
          Renderizando os 16 slides com tipografia vetorial e acabamento editorial de luxo. Aguarde...
        </p>
      </div>
    </div>
  );
};
