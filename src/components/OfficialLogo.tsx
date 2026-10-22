import React, { useState } from 'react';

interface OfficialLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Size mappings
  const heightClasses = {
    sm: 'h-10 md:h-12',
    md: 'h-16 md:h-20',
    lg: 'h-24 md:h-32',
    xl: 'h-36 md:h-44',
    hero: 'h-48 md:h-64 lg:h-72',
  }[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {!imageError ? (
        <img
          src="/assets/aistudio/logo_ace19eb8.png"
          alt="Titans Society — Official Crest"
          className={`${heightClasses} w-auto object-contain drop-shadow-[0_10px_25px_rgba(198,161,91,0.25)] select-none transition-transform duration-500`}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Resilient fallback respecting zero-broken-image policy */
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-2">
            <div className="w-16 h-16 rounded-full border border-[#C6A15B]/40 flex items-center justify-center bg-[#171717]/80">
              <span className="font-serif text-2xl text-[#E4CB91]">♔</span>
            </div>
          </div>
          <span className="font-serif tracking-[0.25em] text-2xl md:text-3xl text-[#F5F3EE] uppercase font-bold gold-text-gradient">
            TITANS SOCIETY
          </span>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent my-1.5" />
        </div>
      )}

      {showSubtitle && (
        <p className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.3em] text-[#C6A15B]/90 font-medium">
          Conhecimento • Relações • Propósito
        </p>
      )}
    </div>
  );
};
