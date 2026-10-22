import React from 'react';
import { SlideData } from '../types/presentation';
import { OfficialLogo } from './OfficialLogo';
import { SlideBackground } from './SlideBackground';

interface SlideRendererProps {
  slide: SlideData;
  isPrintMode?: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, isPrintMode = false }) => {
  const isIvory = slide.theme === 'ivory-editorial';
  const isHero = slide.theme === 'hero-black';

  // Theme-dependent text and border colors
  const textColorPrimary = isIvory ? 'text-[#101010]' : 'text-[#F5F3EE]';
  const textColorSecondary = isIvory ? 'text-[#333333]' : 'text-[#F5F3EE]/80';
  const textColorMuted = isIvory ? 'text-[#555555]' : 'text-[#F5F3EE]/60';
  const borderColor = isIvory ? 'border-[#C6A15B]/30' : 'border-[#C6A15B]/20';
  const accentGold = isIvory ? 'text-[#8E6F33]' : 'text-[#C6A15B]';
  const dividerLineColor = isIvory
    ? 'bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent'
    : 'bg-gradient-to-r from-transparent via-[#C6A15B]/30 to-transparent';

  return (
    <div
      id={`slide-node-${slide.id}`}
      className={`relative w-full aspect-video overflow-hidden select-none flex flex-col justify-between p-10 md:p-14 lg:p-16 border ${borderColor} shadow-2xl transition-all ${
        isIvory ? 'bg-[#F2EFE8]' : 'bg-[#050505]'
      } ${isPrintMode ? 'slide-container-print' : 'rounded-none'}`}
      style={{
        boxShadow: isIvory
          ? '0 20px 50px -15px rgba(0, 0, 0, 0.25), inset 0 0 60px rgba(0, 0, 0, 0.03)'
          : '0 25px 60px -15px rgba(0, 0, 0, 0.95), inset 0 0 100px rgba(0, 0, 0, 0.8)',
      }}
    >
      {/* Background with Chiaroscuro / Paper Texture */}
      <SlideBackground theme={slide.theme} slideId={slide.id} />

      {/* ─────────────────────────────────────────────────────────────
          TOP EDITORIAL HEADER (Slides 2 to 23)
          ───────────────────────────────────────────────────────────── */}
      {!isHero ? (
        <header className={`relative z-10 flex items-center justify-between border-b ${borderColor} pb-3.5`}>
          <div className="flex items-center gap-3 md:gap-4">
            <span className={`text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase ${accentGold}`}>
              {slide.partLabel}
            </span>
            <span className="opacity-30">|</span>
            <span className={`text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium ${textColorMuted}`}>
              {slide.eyebrow}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-[10px] md:text-xs font-serif tracking-[0.25em] font-medium ${accentGold}`}>
              TITANS SOCIETY
            </span>
            <span className="opacity-30">·</span>
            <span className={`text-[10px] md:text-xs font-mono tracking-widest ${textColorMuted}`}>
              {slide.slideNumberFormatted}
            </span>
          </div>
        </header>
      ) : (
        <div className="relative z-10 flex justify-between items-center opacity-40 text-[10px] tracking-[0.3em] uppercase text-[#C6A15B]">
          <span>TITANS SOCIETY</span>
          <span>{slide.slideNumberFormatted}</span>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MAIN SLIDE CONTENT
          ───────────────────────────────────────────────────────────── */}
      <main className="relative z-10 my-auto flex-1 flex flex-col justify-center py-4">
        {/* SLIDE 1: MONUMENTAL OPENING COVER */}
        {slide.id === 1 && (
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-7">
            <OfficialLogo size="hero" className="mb-1" />

            <div className="space-y-4 max-w-3xl">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
              <p className="font-editorial text-2xl md:text-3xl lg:text-4xl text-[#F5F3EE] font-light leading-relaxed tracking-wide">
                “{slide.quote}”
              </p>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
            </div>

            <div className="pt-2">
              <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C6A15B] font-medium">
                {slide.footerTag}
              </p>
              <p className="mt-2 text-[10px] tracking-[0.25em] uppercase text-[#F5F3EE]/40">
                Apresentação Institucional • Documento Oficial
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 24: MONUMENTAL GRAND FINALE */}
        {slide.id === 24 && (
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6">
            <OfficialLogo size="xl" className="mb-1" />

            <div className="space-y-4 max-w-3xl">
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
              {slide.statements?.map((stmt, idx) => (
                <p
                  key={idx}
                  className="font-editorial text-xl md:text-2xl lg:text-3xl text-[#F5F3EE] font-light leading-relaxed tracking-wide"
                >
                  “{stmt}”
                </p>
              ))}
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
            </div>

            <div className="pt-2">
              <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C6A15B] font-medium">
                {slide.footerTag}
              </p>
              <p className="mt-1.5 text-[10px] tracking-[0.25em] uppercase text-[#F5F3EE]/40">
                Titans Society — The Art of Connection
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 3: MONUMENTAL TYPOGRAPHIC STATEMENTS (CONEXÃO NÃO É RELACIONAMENTO) */}
        {slide.id === 3 && (
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C6A15B] font-medium">
                A DISTINÇÃO ESSENCIAL
              </span>
              <div className="space-y-5 pt-2">
                {slide.statements?.map((stmt, idx) => (
                  <p
                    key={idx}
                    className={`font-editorial ${
                      idx === 0
                        ? 'text-2xl md:text-3xl text-[#F5F3EE]/80'
                        : idx === 1
                        ? 'text-2xl md:text-3xl lg:text-4xl text-[#E6D3A0]'
                        : 'text-2xl md:text-3xl text-[#F5F3EE]/90'
                    } font-light tracking-wide`}
                  >
                    {stmt}
                  </p>
                ))}
              </div>
            </div>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
          </div>
        )}

        {/* SLIDE 6: STATEMENT DECLARATIONS (NOSSA VISÃO DE PERTENCIMENTO I) */}
        {slide.id === 6 && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2 border-b border-[#C6A15B]/20 pb-4">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C6A15B] font-medium">
                NOSSA VISÃO DE PERTENCIMENTO
              </span>
              <h2 className="font-editorial text-2xl md:text-3xl lg:text-4xl text-[#F5F3EE] font-medium">
                Ser um Titan não é carregar um título. É assumir uma postura.
              </h2>
            </div>

            <div className="space-y-3.5 max-w-3xl mx-auto pt-2">
              {slide.statements?.slice(2).map((stmt, idx) => (
                <div key={idx} className="flex items-baseline gap-4">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#C6A15B] shrink-0 translate-y-[-2px]" />
                  <p className="font-editorial text-xl md:text-2xl text-[#F5F3EE]/90 font-light leading-snug">
                    {stmt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 23: DEFINIÇÃO DE GRANDEZA */}
        {slide.id === 23 && (
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
            <span className="text-xs tracking-[0.35em] uppercase text-[#C6A15B] font-medium">
              MANIFESTO TITANS
            </span>
            <p className="font-editorial text-2xl md:text-3xl lg:text-4xl text-[#F5F3EE] font-light leading-relaxed max-w-3xl mx-auto">
              “{slide.quote}”
            </p>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
          </div>
        )}

        {/* SLIDE 9: GUIA OPENING & NOTA IMPORTANTE */}
        {slide.id === 9 && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="space-y-2 border-b border-[#C6A15B]/25 pb-4">
              <span className="text-xs font-mono tracking-widest text-[#C6A15B] uppercase">
                DOCUMENTO OFICIAL
              </span>
              <h1 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-[#F5F3EE] font-medium">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-xs md:text-sm text-[#C6A15B] tracking-wider uppercase font-medium">
                  {slide.subtitle}
                </p>
              )}
            </div>

            <div className="space-y-4">
              {slide.bodyParagraphs?.map((p, idx) => (
                <p
                  key={idx}
                  className="font-editorial text-lg md:text-xl text-[#F5F3EE]/85 font-light leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            {slide.noteImportant && (
              <div className="border border-[#C6A15B]/40 bg-[#101010]/90 p-5 mt-4 space-y-1">
                <span className="text-xs font-mono tracking-wider uppercase text-[#E6D3A0] font-semibold block">
                  Aviso Institucional
                </span>
                <p className="text-xs md:text-sm text-[#F5F3EE]/75 font-light leading-relaxed">
                  {slide.noteImportant}
                </p>
              </div>
            )}
          </div>
        )}

        {/* GENERAL EDITORIAL SPREAD WITH PARAGRAPHS (Slides 2, 4, 5, 7, 8, 21, 22) */}
        {!isHero &&
          slide.id !== 3 &&
          slide.id !== 6 &&
          slide.id !== 9 &&
          slide.id !== 23 &&
          slide.bodyParagraphs && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className={`space-y-2 border-b ${borderColor} pb-3.5`}>
                <h1 className={`font-editorial text-3xl md:text-4xl lg:text-5xl font-medium ${textColorPrimary} leading-tight`}>
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className={`text-sm md:text-base font-light ${textColorMuted}`}>
                    {slide.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-5 pt-1">
                {slide.bodyParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`font-editorial text-lg md:text-xl lg:text-[22px] leading-relaxed font-light ${textColorSecondary}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

        {/* GENERAL SECTION SPREAD WITH BULLETS (Slides 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20) */}
        {!isHero && slide.bulletPoints && (
          <div className="max-w-5xl mx-auto space-y-5">
            <div className={`space-y-1.5 border-b ${borderColor} pb-3`}>
              <h1 className={`font-editorial text-2xl md:text-3xl lg:text-4xl font-medium ${textColorPrimary} leading-tight`}>
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className={`text-xs md:text-sm font-light ${textColorMuted}`}>
                  {slide.subtitle}
                </p>
              )}
            </div>

            {/* Bullets layout: 2 columns for 6 or 8 items, 1 column for 4 or 5 items for supreme reading cadence */}
            <div
              className={`pt-2 ${
                slide.bulletPoints.length > 5
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
                  : 'space-y-3.5 max-w-4xl'
              }`}
            >
              {slide.bulletPoints.map((bullet, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 p-3.5 border ${
                    isIvory
                      ? 'border-[#C6A15B]/20 bg-white/40'
                      : 'border-[#C6A15B]/15 bg-[#101010]/60'
                  }`}
                >
                  <span className={`font-mono text-xs font-semibold ${accentGold} shrink-0 mt-0.5`}>
                    0{idx + 1}.
                  </span>
                  <p className={`font-sans text-xs md:text-sm font-normal leading-relaxed ${textColorSecondary}`}>
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM EDITORIAL FOOTER (Slides 2 to 23)
          ───────────────────────────────────────────────────────────── */}
      {!isHero && (
        <footer className={`relative z-10 flex items-center justify-between border-t ${borderColor} pt-3 text-[10px] uppercase tracking-[0.2em] ${textColorMuted}`}>
          <span>Conhecimento • Relações • Propósito</span>
          <span>{slide.footerTag || 'Titans Society — Publicação Oficial'}</span>
        </footer>
      )}
    </div>
  );
};
