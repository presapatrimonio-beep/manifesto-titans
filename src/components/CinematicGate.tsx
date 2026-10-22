import React, { useState } from 'react';
import { OfficialLogo } from './OfficialLogo';
import { Language } from '../data/translations';

interface CinematicGateProps {
  onSelectLanguage: (lang: Language) => void;
}

export const CinematicGate: React.FC<CinematicGateProps> = ({ onSelectLanguage }) => {
  const [selectedGroup, setSelectedGroup] = useState<'pt' | 'en' | null>(null);

  const handleChoose = (lang: Language) => {
    setSelectedGroup(lang);
    setTimeout(() => {
      onSelectLanguage(lang);
    }, 280);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] text-[#F3F0E9] flex flex-col justify-between items-center p-6 md:p-12 overflow-y-auto selection:bg-[#C6A15B]/30 select-none">
      {/* Cinematic Atmospheric Light Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 luxury-noise opacity-40" />
        
        {/* Volumetric central ambient gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] md:h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.22)_0%,_rgba(226,204,150,0.05)_45%,_transparent_75%)] blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />

        {/* Elegant architectural vertical guide lines */}
        <div className="absolute inset-0 flex justify-between px-8 md:px-24 opacity-15">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#E2CC96]/40 to-transparent hidden md:block" />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
        </div>

        {/* Gold corner registration marks */}
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#C6A15B]/40" />
        <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-[#C6A15B]/40" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-[#C6A15B]/40" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[#C6A15B]/40" />
      </div>

      {/* Top discreet institutional mark */}
      <div className="relative z-10 pt-2 opacity-70">
        <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] uppercase text-[#C6A15B]">
          TITANS SOCIETY · GLOBAL ACCESS
        </span>
      </div>

      {/* Main Center Stage */}
      <div className="relative z-10 w-full max-w-4xl mx-auto my-auto py-8 flex flex-col items-center text-center space-y-10 md:space-y-12">
        {/* Official Crest with subtle floating glow */}
        <div className="transform transition-all duration-700 hover:scale-[1.02]">
          <OfficialLogo size="hero" className="mx-auto" />
        </div>

        {/* Institutional Signature & Concept */}
        <div className="space-y-3 max-w-xl mx-auto">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto" />
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C6A15B] font-medium font-serif">
            Conhecimento • Relações • Propósito
          </p>
          <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#F3F0E9]/50 font-sans">
            The Art of Connection
          </p>
        </div>

        {/* The Two Regional Selection Columns */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
          
          {/* GROUP 1: PORTUGUÊS (Brasil & Portugal) */}
          <div
            onClick={() => handleChoose('pt')}
            className={`group relative flex flex-col justify-between items-center p-7 md:p-8 bg-[#101010]/80 border transition-all duration-500 cursor-pointer backdrop-blur-md ${
              selectedGroup === 'pt'
                ? 'border-[#C6A15B] ring-1 ring-[#C6A15B] shadow-[0_0_35px_rgba(198,161,91,0.35)] scale-[1.02]'
                : 'border-[#C6A15B]/25 hover:border-[#C6A15B]/70 hover:shadow-[0_0_30px_rgba(198,161,91,0.2)]'
            }`}
          >
            {/* Fine corner accent */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#C6A15B]/40 group-hover:border-[#C6A15B] transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#C6A15B]/40 group-hover:border-[#C6A15B] transition-colors" />

            <div className="space-y-4 w-full flex flex-col items-center">
              {/* Flags: Brasil & Portugal */}
              <div className="flex items-center justify-center gap-5 pt-1">
                {/* Brasil Flag */}
                <div className="flex flex-col items-center gap-1.5 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-8 rounded-sm overflow-hidden border border-[#C6A15B]/30 shadow-md relative bg-[#009b3a] flex items-center justify-center">
                    {/* SVG Brasil Flag */}
                    <svg viewBox="0 0 720 500" className="w-full h-full object-cover">
                      <rect width="720" height="500" fill="#009c3b" />
                      <polygon points="360,60 660,250 360,440 60,250" fill="#ffdf00" />
                      <circle cx="360" cy="250" r="120" fill="#002776" />
                      <path d="M 245 250 A 120 120 0 0 0 475 250 A 130 130 0 0 1 245 250" fill="#ffffff" />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#F3F0E9]/75 font-mono">
                    Brasil
                  </span>
                </div>

                <div className="w-[1px] h-6 bg-[#C6A15B]/25" />

                {/* Portugal Flag */}
                <div className="flex flex-col items-center gap-1.5 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-8 rounded-sm overflow-hidden border border-[#C6A15B]/30 shadow-md relative flex">
                    {/* SVG Portugal Flag */}
                    <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
                      <rect width="240" height="400" fill="#046A38" />
                      <rect x="240" width="360" height="400" fill="#DA291C" />
                      <circle cx="240" cy="200" r="60" fill="#FFCD00" />
                      <circle cx="240" cy="200" r="50" fill="#FFFFFF" stroke="#000" strokeWidth="1" />
                      <rect x="225" y="180" width="30" height="40" fill="#002B7F" />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#F3F0E9]/75 font-mono">
                    Portugal
                  </span>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#C6A15B] font-semibold block">
                  PORTUGUÊS
                </span>
                <p className="text-[10px] tracking-wider uppercase text-[#F3F0E9]/50 font-sans">
                  Acesso em Língua Portuguesa
                </p>
              </div>
            </div>

            {/* ENTRAR Button */}
            <div className="w-full pt-6">
              <button
                type="button"
                className="w-full py-2.5 px-6 text-xs font-semibold tracking-[0.25em] uppercase text-[#050505] bg-gradient-to-r from-[#E2CC96] via-[#C6A15B] to-[#E2CC96] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(198,161,91,0.25)]"
              >
                ENTRAR
              </button>
            </div>
          </div>

          {/* GROUP 2: ENGLISH (United States & United Kingdom) */}
          <div
            onClick={() => handleChoose('en')}
            className={`group relative flex flex-col justify-between items-center p-7 md:p-8 bg-[#101010]/80 border transition-all duration-500 cursor-pointer backdrop-blur-md ${
              selectedGroup === 'en'
                ? 'border-[#C6A15B] ring-1 ring-[#C6A15B] shadow-[0_0_35px_rgba(198,161,91,0.35)] scale-[1.02]'
                : 'border-[#C6A15B]/25 hover:border-[#C6A15B]/70 hover:shadow-[0_0_30px_rgba(198,161,91,0.2)]'
            }`}
          >
            {/* Fine corner accent */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#C6A15B]/40 group-hover:border-[#C6A15B] transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#C6A15B]/40 group-hover:border-[#C6A15B] transition-colors" />

            <div className="space-y-4 w-full flex flex-col items-center">
              {/* Flags: United States & United Kingdom */}
              <div className="flex items-center justify-center gap-5 pt-1">
                {/* United States Flag */}
                <div className="flex flex-col items-center gap-1.5 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-8 rounded-sm overflow-hidden border border-[#C6A15B]/30 shadow-md relative">
                    <svg viewBox="0 0 7410 3900" className="w-full h-full object-cover">
                      <rect width="7410" height="3900" fill="#b22234" />
                      <path d="M0,450H7410M0,1050H7410M0,1650H7410M0,2250H7410M0,2850H7410M0,3450H7410" stroke="#fff" strokeWidth="300" />
                      <rect width="2964" height="2100" fill="#3c3b6e" />
                      <circle cx="1482" cy="1050" r="400" fill="#ffffff" opacity="0.8" />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#F3F0E9]/75 font-mono">
                    United States
                  </span>
                </div>

                <div className="w-[1px] h-6 bg-[#C6A15B]/25" />

                {/* United Kingdom Flag */}
                <div className="flex flex-col items-center gap-1.5 group-hover:scale-105 transition-transform">
                  <div className="w-12 h-8 rounded-sm overflow-hidden border border-[#C6A15B]/30 shadow-md relative">
                    <svg viewBox="0 0 60 30" className="w-full h-full object-cover">
                      <clipPath id="s">
                        <path d="M0,0 v30 h60 v-30 z" />
                      </clipPath>
                      <clipPath id="t">
                        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                      </clipPath>
                      <g clipPath="url(#s)">
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                      </g>
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#F3F0E9]/75 font-mono">
                    United Kingdom
                  </span>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#C6A15B] font-semibold block">
                  ENGLISH
                </span>
                <p className="text-[10px] tracking-wider uppercase text-[#F3F0E9]/50 font-sans">
                  International English Edition
                </p>
              </div>
            </div>

            {/* ENTER Button */}
            <div className="w-full pt-6">
              <button
                type="button"
                className="w-full py-2.5 px-6 text-xs font-semibold tracking-[0.25em] uppercase text-[#050505] bg-gradient-to-r from-[#E2CC96] via-[#C6A15B] to-[#E2CC96] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(198,161,91,0.25)]"
              >
                ENTER
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Discreet Disclaimer */}
      <div className="relative z-10 pb-2 text-center opacity-40">
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#F3F0E9] font-mono">
          CONFIDENTIAL & EXCLUSIVE • TITANS SOCIETY ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};
