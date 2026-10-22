import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Play, Pause, LayoutGrid, FileText } from 'lucide-react';

interface PresentationControlsProps {
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onToggleThumbnails: () => void;
  onToggleNotes: () => void;
  isAutoplay: boolean;
  onToggleAutoplay: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
  onToggleFullscreen,
  isFullscreen,
  onToggleThumbnails,
  onToggleNotes,
  isAutoplay,
  onToggleAutoplay,
}) => {
  const currentFormatted = String(currentSlideIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalSlides).padStart(2, '0');
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="no-print fixed bottom-6 inset-x-0 mx-auto w-fit z-40 px-4">
      {/* Outer Executive Control Pill */}
      <div className="flex items-center gap-4 px-5 py-2.5 bg-[#171717]/90 backdrop-blur-xl border border-[#C6A15B]/30 shadow-2xl rounded-full text-[#F5F3EE]">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          aria-label="Slide anterior"
          className="p-1.5 rounded-full hover:bg-[#C6A15B]/20 text-[#C6A15B] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter & Progress */}
        <div className="flex flex-col items-center min-w-[90px]">
          <div className="flex items-center gap-1 font-mono text-xs tracking-wider">
            <span className="text-[#E4CB91] font-semibold">{currentFormatted}</span>
            <span className="text-[#F5F3EE]/40">/</span>
            <span className="text-[#F5F3EE]/60">{totalFormatted}</span>
          </div>
          <div className="w-20 h-[2px] bg-[#080808] rounded-full overflow-hidden mt-1 border border-[#C6A15B]/20">
            <div
              className="h-full bg-gradient-to-r from-[#C6A15B] to-[#E4CB91] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          aria-label="Próximo slide"
          className="p-1.5 rounded-full hover:bg-[#C6A15B]/20 text-[#C6A15B] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="w-[1px] h-5 bg-[#C6A15B]/25 mx-1" />

        {/* Autoplay Toggle */}
        <button
          onClick={onToggleAutoplay}
          title={isAutoplay ? 'Pausar apresentação automática' : 'Iniciar apresentação contínua'}
          className={`p-1.5 rounded-full transition-colors ${
            isAutoplay ? 'bg-[#C6A15B] text-[#080808]' : 'hover:bg-[#C6A15B]/20 text-[#F5F3EE]/80 hover:text-[#E4CB91]'
          }`}
        >
          {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        {/* Grid Thumbnails Toggle */}
        <button
          onClick={onToggleThumbnails}
          title="Visão geral de todos os slides"
          className="p-1.5 rounded-full hover:bg-[#C6A15B]/20 text-[#F5F3EE]/80 hover:text-[#E4CB91] transition-colors"
        >
          <LayoutGrid className="w-4 h-4" />
        </button>

        {/* Director Notes Toggle */}
        <button
          onClick={onToggleNotes}
          title="Notas editoriais de direção executiva"
          className="p-1.5 rounded-full hover:bg-[#C6A15B]/20 text-[#F5F3EE]/80 hover:text-[#E4CB91] transition-colors"
        >
          <FileText className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Sair da tela cheia' : 'Modo tela cheia cinematográfica'}
          className="p-1.5 rounded-full hover:bg-[#C6A15B]/20 text-[#F5F3EE]/80 hover:text-[#E4CB91] transition-colors"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
