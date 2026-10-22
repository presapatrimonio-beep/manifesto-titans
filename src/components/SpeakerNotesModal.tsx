import React from 'react';
import { X, Mic, Compass, Sparkles } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({ isOpen, onClose, slide }) => {
  if (!isOpen) return null;

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#101010] border border-[#C6A15B]/40 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#C6A15B]/20 bg-[#050505]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C6A15B]/20 flex items-center justify-center text-[#E6D3A0]">
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-base text-[#F5F3EE] font-bold">
                Notas do Diretor Criativo
              </h2>
              <p className="text-[11px] font-mono text-[#C6A15B]">
                Página {slide.slideNumberFormatted} — {slide.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-[#C6A15B]/20 text-[#F5F3EE]/60 hover:text-[#E6D3A0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-sm text-[#F5F3EE]/90 overflow-y-auto max-h-[70vh]">
          {/* Objective / Intent */}
          <div className="space-y-1.5 bg-[#050505]/60 border border-[#C6A15B]/15 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
              <Compass className="w-3.5 h-3.5" />
              <span>Intenção Narrativa & Psicológica</span>
            </div>
            <p className="font-light text-xs md:text-sm text-[#F5F3EE]/80 leading-relaxed">
              {slide.editorialNotes.intent}
            </p>
          </div>

          {/* Design Concept */}
          <div className="space-y-1.5 bg-[#050505]/60 border border-[#C6A15B]/15 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E6D3A0]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Conceito Visual & Direção de Arte</span>
            </div>
            <p className="font-light text-xs md:text-sm text-[#F5F3EE]/80 leading-relaxed">
              {slide.editorialNotes.designConcept}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#C6A15B]/20 bg-[#050505] flex justify-end">
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
