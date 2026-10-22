import React, { useEffect, useState } from 'react';
import { OfficialLogo } from './components/OfficialLogo';
import { CinematicGate } from './components/CinematicGate';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { translations, Language } from './data/translations';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Language & Gate state (memorized via localStorage)
  const [hasEntered, setHasEntered] = useState<boolean>(() => {
    try {
      return localStorage.getItem('titans_entered') === 'true';
    } catch {
      return false;
    }
  });

  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('titans_language');
      return saved === 'en' ? 'en' : 'pt';
    } catch {
      return 'pt';
    }
  });

  const t = translations[language];

  const handleSelectLanguageFromGate = (lang: Language) => {
    setLanguage(lang);
    setHasEntered(true);
    try {
      localStorage.setItem('titans_language', lang);
      localStorage.setItem('titans_entered', 'true');
    } catch (e) {
      console.warn('Storage not available', e);
    }
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('titans_language', lang);
    } catch (e) {
      console.warn('Storage not available', e);
    }
  };

  const handleOpenGate = () => {
    setHasEntered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowScrollTop(currentScroll > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F3F0E9] selection:bg-[#C6A15B]/30 selection:text-[#E2CC96] font-sans antialiased overflow-x-hidden relative">
      
      {/* ─────────────────────────────────────────────────────────────
          CINEMATIC ENTRY GATE (When not yet entered or reopened)
          ───────────────────────────────────────────────────────────── */}
      {!hasEntered && (
        <CinematicGate onSelectLanguage={handleSelectLanguageFromGate} />
      )}

      {/* ─────────────────────────────────────────────────────────────
          DISCREET LANGUAGE SWITCHER (PT / EN in top right corner)
          ───────────────────────────────────────────────────────────── */}
      {hasEntered && (
        <LanguageSwitcher
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
          onOpenGate={handleOpenGate}
        />
      )}

      {/* ─────────────────────────────────────────────────────────────
          ULTRA-DISCREET READING PROGRESS (Quiet Hairline at the Top)
          ───────────────────────────────────────────────────────────── */}
      <div className="fixed top-0 inset-x-0 h-[2px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#C6A15B]/40 via-[#E2CC96] to-[#C6A15B] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CAPÍTULO 1: A ABERTURA MONUMENTAL (O PRIMEIRO IMPACTO)
          100vh · Luz Volumétrica · Arquitetura · Presença
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-between items-center px-6 py-12 md:py-16 text-center overflow-hidden">
        {/* Cinematic Atmospheric Light Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 luxury-noise opacity-40" />
          {/* Volumetric ambient light cone */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] md:w-[1100px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.18)_0%,_rgba(226,204,150,0.04)_45%,_transparent_75%)] blur-3xl" />
          {/* Fine architectural vertical guide lines */}
          <div className="absolute inset-0 flex justify-between px-12 md:px-24 opacity-15">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#E2CC96]/40 to-transparent hidden md:block" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
          </div>
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        {/* Quiet Top Mark */}
        <div className="relative z-10 pt-4">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] uppercase text-[#C6A15B]/80 font-medium">
            {t.publicationBadge}
          </span>
        </div>

        {/* Monumental Centerpiece */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-10 my-auto py-12">
          {/* Official Golden Crest */}
          <div className="transform hover:scale-[1.01] transition-transform duration-700">
            <OfficialLogo size="hero" className="mx-auto" />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
            
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F3F0E9] font-light leading-relaxed md:leading-[1.35] tracking-wide text-balance">
              {t.openingQuote}
            </h1>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
          </div>

          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C6A15B] font-medium pt-2">
            {t.signature}
          </p>
        </div>

        {/* Quiet Scroll Indicator */}
        <div className="relative z-10 pb-4 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#F3F0E9]/60 font-mono">
            {t.scrollIndicator}
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C6A15B] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPÍTULO 2: O MANIFESTO TITANS (FLUIDEZ EDITORIAL CONTÍNUA)
          ───────────────────────────────────────────────────────────── */}
      
      {/* SEÇÃO 2.1: A PREMISSA FUNDAMENTAL */}
      <section className="relative py-28 md:py-36 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-[#C6A15B]/80">
            <span>01</span>
            <div className="w-12 h-[1px] bg-[#C6A15B]/40" />
            <span>{t.manifestoBadge}</span>
          </div>

          <div className="space-y-8 max-w-4xl">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F3F0E9] font-medium leading-[1.2] tracking-tight">
              {t.manifestoPremiseHeading}
            </h2>

            <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96]/90 font-light leading-relaxed pl-4 md:pl-8 border-l border-[#C6A15B]/40">
              {t.manifestoPremiseBody}
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2.2: A DISTINÇÃO ESSENCIAL (IMPACTO TIPOGRÁFICO MONUMENTAL EM OBSIDIANA) */}
      <section className="relative py-32 md:py-44 px-6 md:px-16 bg-[#101010] border-y border-[#C6A15B]/20">
        <div className="absolute inset-0 luxury-noise opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto space-y-14 relative z-10 text-center">
          <span className="text-xs font-mono tracking-[0.35em] uppercase text-[#C6A15B] font-semibold">
            {t.distinctionBadge}
          </span>

          <div className="space-y-8 max-w-4xl mx-auto">
            {t.distinctionLines.map((line, idx) => (
              <p
                key={idx}
                className={`font-editorial ${
                  idx === 1
                    ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F3F0E9] font-normal leading-tight'
                    : idx === 2
                    ? 'text-2xl sm:text-3xl md:text-4xl text-[#E2CC96] font-light'
                    : 'text-2xl sm:text-3xl md:text-4xl text-[#F3F0E9]/70 font-light'
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
        </div>
      </section>

      {/* SEÇÃO 2.3: A GÊNESE (TRANSIÇÃO PARA MARFIM EDITORIAL #F3F0E9) */}
      <section className="relative py-32 md:py-40 px-6 md:px-16 bg-[#F3F0E9] text-[#171717]">
        <div className="absolute inset-0 luxury-noise-ivory opacity-30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-[#8E6F33]">
            <span>02</span>
            <div className="w-12 h-[1px] bg-[#C6A15B]/50" />
            <span>{t.genesisBadge}</span>
          </div>

          <div className="space-y-8">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#171717] font-medium leading-tight">
              {t.genesisHeading}
            </h2>

            <div className="prose prose-lg max-w-none text-[#2d2d2d] font-editorial text-xl sm:text-2xl leading-relaxed space-y-6 font-light">
              <p>{t.genesisBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2.4: NOSSAS CRENÇAS FUNDAMENTAIS (DUAS COLUNAS EDITORIAIS EM GRAFITE) */}
      <section className="relative py-32 md:py-40 px-6 md:px-16 bg-[#171717] text-[#F3F0E9] border-t border-[#C6A15B]/20">
        <div className="absolute inset-0 luxury-noise opacity-30 pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-[#C6A15B]">
            <span>03</span>
            <div className="w-12 h-[1px] bg-[#C6A15B]/40" />
            <span>{t.beliefsBadge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-[#E2CC96]">
                {t.beliefsCol1Label}
              </span>
              <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#F3F0E9] font-light leading-relaxed">
                {t.beliefsCol1Text}
              </p>
            </div>

            <div className="space-y-6 lg:border-l lg:border-[#C6A15B]/25 lg:pl-12">
              <span className="text-xs font-mono tracking-widest uppercase text-[#C6A15B]">
                {t.beliefsCol2Label}
              </span>
              <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96]/95 font-light leading-relaxed">
                {t.beliefsCol2Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2.5: NOSSA VISÃO DE PERTENCIMENTO (COMPOSIÇÃO ESCULTURAL EM OBSIDIANA) */}
      <section className="relative py-36 md:py-48 px-6 md:px-16 bg-[#050505]">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono tracking-[0.35em] uppercase text-[#C6A15B]">
              {t.belongingBadge}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F3F0E9] font-medium leading-tight">
              {t.belongingHeading}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#E2CC96] font-normal">
              {t.belongingLine1}
            </p>
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F3F0E9] font-light">
              {t.belongingLine2}
            </p>
          </div>

          {/* Os 4 Princípios da Postura */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-6">
            {t.belongingPrinciples.map((p) => (
              <div key={p.num} className="border-t border-[#C6A15B]/30 pt-6 space-y-2">
                <span className="text-xs font-mono text-[#C6A15B]">{p.num}</span>
                <p className={`font-editorial text-2xl font-light ${p.num === '04' ? 'text-[#E2CC96]' : 'text-[#F3F0E9]'}`}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          {/* Continuação da Visão de Pertencimento */}
          <div className="pt-12 max-w-4xl mx-auto space-y-8 border-t border-[#C6A15B]/15">
            {t.belongingBody.map((paragraph, idx) => (
              <p
                key={idx}
                className={`font-editorial text-xl sm:text-2xl md:text-3xl font-light leading-relaxed ${
                  idx === t.belongingBody.length - 1 ? 'text-[#E2CC96]' : 'text-[#F3F0E9]/85'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2.6: NOSSO COMPROMISSO (PROVOCAÇÃO DE LEGADO EM MARFIM EDITORIAL) */}
      <section className="relative py-32 md:py-44 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="absolute inset-0 luxury-noise-ivory opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-[#8E6F33]">
            <span>05</span>
            <div className="w-12 h-[1px] bg-[#C6A15B]/50" />
            <span>{t.commitmentBadge}</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#171717] font-medium leading-[1.15]">
            {t.commitmentHeading}
          </h2>

          <div className="space-y-8 font-editorial text-xl sm:text-2xl md:text-[26px] text-[#242424] font-light leading-relaxed">
            {t.commitmentParagraphs.map((p, idx) => (
              <p
                key={idx}
                className={idx === t.commitmentParagraphs.length - 1 ? 'text-[#8E6F33] font-normal pt-4 border-t border-[#C6A15B]/30' : ''}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPÍTULO 3: O GUIA DE VANTAGENS PARA O FILIADO
          Um Ecossistema Editorial Contínuo e Completo
          ───────────────────────────────────────────────────────────── */}
      
      {/* TRANSIÇÃO SUTIL & NOTA IMPORTANTE */}
      <section className="relative py-36 md:py-48 px-6 md:px-16 bg-[#050505] border-t border-[#C6A15B]/20">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-6 text-center">
            <span className="text-xs font-mono tracking-[0.35em] uppercase text-[#C6A15B]">
              {t.guideBadge}
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#F3F0E9] font-medium">
              {t.guideTitle}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#E2CC96] tracking-[0.25em] uppercase font-medium">
              {t.guideSubtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/80 font-light leading-relaxed text-center">
            <p>{t.guideIntro}</p>
          </div>

          {/* Nota Importante Integral */}
          <div className="max-w-3xl mx-auto p-8 border border-[#C6A15B]/35 bg-[#171717]/80 backdrop-blur-sm space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#E2CC96] font-semibold block">
              {t.guideNoteTitle}
            </span>
            <p className="text-xs sm:text-sm text-[#F3F0E9]/75 font-light leading-relaxed">
              {t.guideNoteBody}
            </p>
          </div>
        </div>
      </section>

      {/* AS 12 SEÇÕES INTEGRAIS DO GUIA DE VANTAGENS */}
      {t.sections.map((section, idx) => {
        // Alternating rhythm: Dark Graphite / Ivory / Obsidian
        const isIvory = idx % 2 === 1;
        const bgClass = isIvory
          ? 'bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30'
          : idx % 4 === 0
          ? 'bg-[#171717] text-[#F3F0E9] border-t border-[#C6A15B]/15'
          : 'bg-[#050505] text-[#F3F0E9] border-t border-[#C6A15B]/20';

        const badgeClass = isIvory ? 'text-[#8E6F33]' : 'text-[#C6A15B]';
        const titleClass = isIvory ? 'text-[#171717]' : 'text-[#F3F0E9]';
        const bodyClass = isIvory ? 'text-[#2a2a2a]' : 'text-[#F3F0E9]/85';
        const borderAccent = isIvory ? 'border-[#8E6F33]/40' : 'border-[#C6A15B]/40';

        return (
          <section key={section.numBadge} className={`relative py-28 md:py-36 px-6 md:px-16 ${bgClass}`}>
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="space-y-3">
                <span className={`text-xs font-mono ${badgeClass} tracking-widest uppercase`}>
                  {section.numBadge}
                </span>
                <h3 className={`font-editorial text-3xl sm:text-4xl md:text-5xl ${titleClass} font-medium leading-tight`}>
                  {section.title}
                </h3>
              </div>

              <div className={`space-y-6 pt-4 font-editorial text-xl sm:text-2xl ${bodyClass} font-light leading-relaxed`}>
                {section.bullets.map((bullet, bIdx) => (
                  <p key={bIdx} className={`pl-6 border-l ${borderAccent}`}>
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* SEÇÃO 12: COMO AVALIAR O VALOR DA AFILIAÇÃO */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#171717] border-t border-[#C6A15B]/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C6A15B] tracking-widest uppercase">
              {t.section12Badge}
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F3F0E9] font-medium leading-tight">
              {t.section12Title}
            </h3>
          </div>

          <div className="space-y-6 pt-2 font-editorial text-xl sm:text-2xl text-[#F3F0E9]/85 font-light leading-relaxed">
            {t.section12Paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <p className="text-[#E2CC96] font-normal pt-2 border-t border-[#C6A15B]/25">
              {t.section12Warning}
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSÃO DO GUIA DE VANTAGENS (MARFIM EDITORIAL) */}
      <section className="relative py-28 md:py-36 px-6 md:px-16 bg-[#F3F0E9] text-[#171717] border-t border-[#C6A15B]/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-xs font-mono text-[#8E6F33] tracking-widest uppercase">
            {t.guideConclusionBadge}
          </span>

          <div className="space-y-6 font-editorial text-2xl sm:text-3xl text-[#1f1f1f] font-light leading-relaxed">
            {t.guideConclusionParagraphs.map((p, idx) => (
              <p
                key={idx}
                className={idx === t.guideConclusionParagraphs.length - 1 ? 'text-[#8E6F33] font-normal' : ''}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CAPÍTULO 4: ENCERRAMENTO INSTITUCIONAL
          A Definição de Grandeza · A Tríade · Presença Solene
          ───────────────────────────────────────────────────────────── */}
      <section className="relative py-36 md:py-48 px-6 md:px-16 bg-[#050505] border-t border-[#C6A15B]/20 text-center overflow-hidden">
        {/* Subtle Bottom Light Halo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 luxury-noise opacity-40" />
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.14)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          {/* A Definição de Grandeza */}
          <div className="space-y-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
            
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F3F0E9] font-light leading-relaxed max-w-3xl mx-auto">
              {t.greatnessQuote}
            </p>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
          </div>

          {/* A Tríade de Compromisso */}
          <div className="space-y-5 max-w-2xl mx-auto">
            {t.triadLines.map((line, idx) => (
              <p key={idx} className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#E2CC96] font-light">
                {line}
              </p>
            ))}
          </div>

          {/* Logotipo Oficial & Assinatura */}
          <div className="pt-8 space-y-6">
            <OfficialLogo size="lg" className="mx-auto" />
            
            <div className="space-y-2">
              <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#C6A15B] font-medium">
                {t.signature}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#F3F0E9]/40 font-mono">
                {t.footerRights}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FLOAT RETURN-TO-TOP BUTTON (Ultra-discreet, appears after 800px)
          ───────────────────────────────────────────────────────────── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao início / Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#171717]/80 text-[#C6A15B] border border-[#C6A15B]/30 hover:border-[#C6A15B] hover:text-[#E2CC96] backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
