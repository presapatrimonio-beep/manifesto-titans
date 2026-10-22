import React from 'react';
import { Download, Eye, BookOpen, Printer } from 'lucide-react';
import { DocumentPart } from '../types/presentation';

interface PresentationToolbarProps {
  currentSlideId: number;
  onJumpToPart: (part: DocumentPart) => void;
  onToggleThumbnails: () => void;
  onToggleNotes: () => void;
  onExportPDF: () => void;
  onPrintNative: () => void;
  isExporting: boolean;
}

export const PresentationToolbar: React.FC<PresentationToolbarProps> = ({
  currentSlideId,
  onJumpToPart,
  onToggleThumbnails,
  onToggleNotes,
  onExportPDF,
  onPrintNative,
  isExporting,
}) => {
  return (
    <header className="no-print w-full flex items-center justify-between gap-8 px-6 py-3.5 bg-[#050505]/95 backdrop-blur-md border-b border-[#C6A15B]/20 sticky top-0 z-50">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
        <span className="font-serif tracking-[0.25em] text-base md:text-lg text-[#F5F3EE] font-bold uppercase gold-text-gradient">
          TITANS SOCIETY
        </span>
        <span className="text-[#C6A15B]/30 hidden sm:inline">|</span>
        <span className="text-[11px] tracking-[0.2em] text-[#C6A15B]/80 font-medium hidden sm:inline uppercase">
          The Art of Connection
        </span>
      </div>

      {/* Zone 2: 4-5 clean single-line navigation links */}
      <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium">
        <button
          onClick={() => onJumpToPart('manifesto')}
          className={`hover:text-[#E6D3A0] transition-colors whitespace-nowrap shrink-0 ${
            currentSlideId <= 8 ? 'text-[#C6A15B] border-b border-[#C6A15B] pb-0.5' : 'text-[#F5F3EE]/70'
          }`}
        >
          Parte I · Manifesto Titans
        </button>
        <button
          onClick={() => onJumpToPart('guia')}
          className={`hover:text-[#E6D3A0] transition-colors whitespace-nowrap shrink-0 ${
            currentSlideId >= 9 && currentSlideId <= 22
              ? 'text-[#C6A15B] border-b border-[#C6A15B] pb-0.5'
              : 'text-[#F5F3EE]/70'
          }`}
        >
          Parte II · Guia de Vantagens
        </button>
        <button
          onClick={() => onJumpToPart('encerramento')}
          className={`hover:text-[#E6D3A0] transition-colors whitespace-nowrap shrink-0 ${
            currentSlideId >= 23 ? 'text-[#C6A15B] border-b border-[#C6A15B] pb-0.5' : 'text-[#F5F3EE]/70'
          }`}
        >
          Parte III · Encerramento
        </button>
        <button
          onClick={onToggleThumbnails}
          className="text-[#F5F3EE]/70 hover:text-[#E6D3A0] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
          Índice (24 Slides)
        </button>
        <button
          onClick={onToggleNotes}
          className="text-[#F5F3EE]/70 hover:text-[#E6D3A0] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
          Visão de Direção
        </button>
      </nav>

      {/* Zone 3: 1 primary action (PDF Export) + Secondary Print */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onPrintNative}
          title="Imprimir ou Salvar em PDF via Navegador"
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-[#F5F3EE]/80 hover:text-[#E6D3A0] border border-[#C6A15B]/30 hover:border-[#C6A15B]/60 transition-colors whitespace-nowrap shrink-0 bg-[#101010]/60"
        >
          <Printer className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>Imprimir</span>
        </button>

        <button
          onClick={onExportPDF}
          disabled={isExporting}
          className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#050505] bg-gradient-to-r from-[#E6D3A0] to-[#C6A15B] hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(198,161,91,0.3)] disabled:opacity-50"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{isExporting ? 'Exportando...' : 'Exportar PDF 16:9'}</span>
        </button>
      </div>
    </header>
  );
};
