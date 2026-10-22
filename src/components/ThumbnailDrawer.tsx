import React from 'react';
import { X, Check } from 'lucide-react';
import { PARTS_INFO, SLIDES_DATA } from '../data/slidesData';

interface ThumbnailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const ThumbnailDrawer: React.FC<ThumbnailDrawerProps> = ({
  isOpen,
  onClose,
  currentSlideIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#050505]/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#101010] border border-[#C6A15B]/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#C6A15B]/20">
          <div>
            <h2 className="font-serif text-lg md:text-xl text-[#F5F3EE] font-bold tracking-wide">
              Índice da Apresentação — Titans Society
            </h2>
            <p className="text-xs text-[#C6A15B] font-light mt-0.5">
              24 páginas editoriais completas (Manifesto Titans + Guia de Vantagens integral)
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#C6A15B]/20 text-[#F5F3EE]/70 hover:text-[#E6D3A0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content categorized by Parts */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {PARTS_INFO.map((part) => {
            const partSlides = SLIDES_DATA.filter((s) => s.part === part.id);
            return (
              <div key={part.id} className="space-y-3">
                <div className="flex items-baseline justify-between border-b border-[#C6A15B]/15 pb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono font-bold text-[#C6A15B] uppercase tracking-widest">
                      {part.number}
                    </span>
                    <h3 className="font-serif text-sm md:text-base text-[#F5F3EE] font-semibold">
                      {part.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#F5F3EE]/50 font-light hidden sm:inline">
                    {part.subtitle}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {partSlides.map((slide) => {
                    const slideIndex = slide.id - 1;
                    const isActive = slideIndex === currentSlideIndex;
                    const isIvory = slide.theme === 'ivory-editorial';

                    return (
                      <button
                        key={slide.id}
                        onClick={() => {
                          onSelectSlide(slideIndex);
                          onClose();
                        }}
                        className={`group relative text-left border p-3 flex flex-col justify-between aspect-video transition-all ${
                          isIvory
                            ? 'bg-[#F2EFE8] text-[#101010]'
                            : 'bg-[#050505] text-[#F5F3EE]'
                        } ${
                          isActive
                            ? 'border-[#C6A15B] ring-2 ring-[#C6A15B] shadow-[0_0_15px_rgba(198,161,91,0.4)]'
                            : 'border-[#C6A15B]/20 hover:border-[#C6A15B]/60'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span
                            className={`font-mono text-[10px] font-semibold ${
                              isIvory ? 'text-[#8E6F33]' : 'text-[#C6A15B]'
                            }`}
                          >
                            {slide.slideNumberFormatted}
                          </span>
                          {isActive && (
                            <Check
                              className={`w-3 h-3 ${
                                isIvory ? 'text-[#8E6F33]' : 'text-[#E6D3A0]'
                              }`}
                            />
                          )}
                        </div>

                        <div className="my-auto py-1">
                          <p className="font-serif text-[11px] font-medium line-clamp-2 leading-tight">
                            {slide.title}
                          </p>
                        </div>

                        <span
                          className={`text-[9px] uppercase tracking-wider truncate ${
                            isIvory ? 'text-[#666666]' : 'text-[#F5F3EE]/40'
                          }`}
                        >
                          {slide.theme === 'ivory-editorial'
                            ? 'Marfim Editorial'
                            : slide.theme === 'hero-black'
                            ? 'Preto Monumental'
                            : 'Obsidiana'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#C6A15B]/20 bg-[#050505] flex items-center justify-between text-xs text-[#F5F3EE]/60">
          <span>Navegue com as setas do teclado (← / →) ou Barra de Espaço.</span>
          <button
            onClick={onClose}
            className="px-4 py-1 text-xs text-[#050505] bg-[#C6A15B] hover:bg-[#E6D3A0] font-semibold transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
