import React from 'react';
import { Language } from '../data/translations';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenGate: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenGate,
}) => {
  return (
    <div className="fixed top-4 right-6 z-40 flex items-center gap-1.5 px-3 py-1.5 bg-[#101010]/75 hover:bg-[#101010]/95 border border-[#C6A15B]/30 hover:border-[#C6A15B]/60 backdrop-blur-md rounded-full shadow-xl transition-all text-xs font-mono">
      <button
        onClick={onOpenGate}
        title="Abrir portal de entrada / Select region"
        className="text-[#C6A15B] hover:text-[#E2CC96] pr-1 transition-colors flex items-center"
      >
        <Globe className="w-3.5 h-3.5" />
      </button>

      <div className="w-[1px] h-3 bg-[#C6A15B]/30 mx-0.5" />

      <button
        onClick={() => onLanguageChange('pt')}
        className={`px-1.5 py-0.5 transition-colors font-medium tracking-wider ${
          currentLanguage === 'pt'
            ? 'text-[#E2CC96] font-bold border-b border-[#C6A15B]'
            : 'text-[#F3F0E9]/50 hover:text-[#F3F0E9]'
        }`}
      >
        PT
      </button>

      <span className="text-[#C6A15B]/30">/</span>

      <button
        onClick={() => onLanguageChange('en')}
        className={`px-1.5 py-0.5 transition-colors font-medium tracking-wider ${
          currentLanguage === 'en'
            ? 'text-[#E2CC96] font-bold border-b border-[#C6A15B]'
            : 'text-[#F3F0E9]/50 hover:text-[#F3F0E9]'
        }`}
      >
        EN
      </button>
    </div>
  );
};
