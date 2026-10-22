import React from 'react';
import { PageTheme } from '../types/presentation';

interface SlideBackgroundProps {
  theme: PageTheme;
  slideId: number;
}

export const SlideBackground: React.FC<SlideBackgroundProps> = ({ theme, slideId }) => {
  if (theme === 'ivory-editorial') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#F2EFE8]">
        {/* Subtle Luxury Paper Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#101010 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Soft Vignette and Warm Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2EFE8] via-transparent to-[#E8E4DB]/50" />

        {/* Fine Editorial Corner Markers in Aged Gold */}
        <div className="absolute top-8 left-8 w-3 h-3 border-t border-l border-[#C6A15B]/30" />
        <div className="absolute top-8 right-8 w-3 h-3 border-t border-r border-[#C6A15B]/30" />
        <div className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-[#C6A15B]/30" />
        <div className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-[#C6A15B]/30" />

        {/* Delicate Vertical Guide Line */}
        <div className="absolute inset-y-0 left-20 w-[1px] bg-[#C6A15B]/15" />
      </div>
    );
  }

  if (theme === 'dark-mineral') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#202020]">
        {/* Subtle Mineral Noise */}
        <div className="absolute inset-0 luxury-noise opacity-30" />

        {/* Architectural Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,161,91,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#202020] via-transparent to-[#101010]/80" />

        {/* Hairline Borders and Registration Marks */}
        <div className="absolute top-8 left-8 w-3 h-3 border-t border-l border-[#C6A15B]/25" />
        <div className="absolute top-8 right-8 w-3 h-3 border-t border-r border-[#C6A15B]/25" />
        <div className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-[#C6A15B]/25" />
        <div className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-[#C6A15B]/25" />
      </div>
    );
  }

  if (theme === 'dark-obsidian') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#101010]">
        {/* Deep Obsidian Texture */}
        <div className="absolute inset-0 luxury-noise opacity-35" />

        {/* Subtle Warm Light Cone */}
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.09)_0%,_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C6A15B_1px,transparent_1px),linear-gradient(to_bottom,#C6A15B_1px,transparent_1px)] bg-[size:160px_160px]" />

        {/* Corner Markers */}
        <div className="absolute top-8 left-8 w-3 h-3 border-t border-l border-[#C6A15B]/30" />
        <div className="absolute top-8 right-8 w-3 h-3 border-t border-r border-[#C6A15B]/30" />
        <div className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-[#C6A15B]/30" />
        <div className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-[#C6A15B]/30" />
      </div>
    );
  }

  // Hero Black (#050505)
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Volumetric Central Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.16)_0%,_rgba(230,211,160,0.04)_45%,_transparent_75%)] blur-2xl" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent" />

      {/* Monumental Vertical Pillars of Light */}
      <div className="absolute inset-0 flex justify-between px-28 opacity-15">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#E6D3A0]/50 to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent" />
      </div>

      {/* Gold Registration Markers */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#C6A15B]/40" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-[#C6A15B]/40" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-[#C6A15B]/40" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[#C6A15B]/40" />
    </div>
  );
};
