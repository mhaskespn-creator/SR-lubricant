/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface LubricantBottleProps {
  colorTheme?: 'red' | 'gold' | 'silver';
  viscosity?: string;
  name?: string;
  volumeText?: string;
  className?: string;
  hoverAnimated?: boolean;
}

export const LubricantBottle: React.FC<LubricantBottleProps> = ({
  colorTheme = 'red',
  viscosity = '10W-40',
  name = 'SR LUBRICANT',
  volumeText = '1 Liter',
  className = '',
  hoverAnimated = true,
}) => {
  // Theme color maps
  const glowColorMap = {
    red: 'rgba(229, 57, 53, 0.4)',
    gold: 'rgba(255, 213, 79, 0.4)',
    silver: 'rgba(226, 232, 240, 0.3)',
  };

  const gradientMap = {
    red: 'from-red-600 to-red-900',
    gold: 'from-amber-400 to-amber-700',
    silver: 'from-slate-300 to-slate-500',
  };

  const accentBorderMap = {
    red: 'border-red-500/50',
    gold: 'border-amber-500/50',
    silver: 'border-slate-400/50',
  };

  const highlightColor = {
    red: '#E53935',
    gold: '#FFD54F',
    silver: '#cbd5e1',
  };

  return (
    <motion.div
      className={`relative select-none flex flex-col items-center justify-center ${className}`}
      whileHover={hoverAnimated ? {
        scale: 1.05,
        rotateY: 10,
        rotateX: -5,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : {}}
      style={{ perspective: 1000 }}
    >
      {/* Glow aura behind the bottle */}
      <div
        className="absolute w-44 h-80 rounded-full blur-[45px] transition-all duration-700 opacity-60 mix-blend-screen"
        style={{
          background: `radial-gradient(circle, ${glowColorMap[colorTheme]} 0%, rgba(0,0,0,0) 70%)`,
          top: '10%',
        }}
      />

      {/* SVG Interactive Bottle Structure */}
      <svg
        width="220"
        height="380"
        viewBox="0 0 220 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_25px_30px_rgba(0,0,0,0.85)] z-10"
      >
        <defs>
          {/* Glass Gradient */}
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.95" />
            <stop offset="20%" stopColor="#334155" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0F172A" stopOpacity="0.98" />
            <stop offset="85%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>

          {/* Liquid Gradient */}
          <linearGradient id="oilLiquidGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#B45309" stopOpacity="0.95" /> {/* Deep honey amber */}
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.85" /> {/* Liquid gold */}
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.7" /> {/* Shimmering gold */}
          </linearGradient>

          {/* Chrome Metal Highlights */}
          <linearGradient id="metalChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="30%" stopColor="#F1F5F9" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="75%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Label Gradient */}
          <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#090d16" />
            <stop offset="50%" stopColor="#111827" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Theme Gradient for Accents */}
          <linearGradient id="themeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            {colorTheme === 'red' && (
              <>
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="50%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#991B1B" />
              </>
            )}
            {colorTheme === 'gold' && (
              <>
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </>
            )}
            {colorTheme === 'silver' && (
              <>
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </>
            )}
          </linearGradient>

          {/* Glass Reflection Highlight */}
          <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.03" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.15" />
          </linearGradient>

          {/* Liquid Wave Animation Clip Path */}
          <clipPath id="bottleBodyClip">
            {/* The internal cavity of the bottle */}
            <path d="M40,110 L180,110 L195,140 L195,310 C195,335 180,350 155,350 L65,350 C40,350 25,335 25,310 L25,140 L40,110 Z" />
          </clipPath>
        </defs>

        {/* 1. BOTTLE SHADOW AND BOTTOM GLOW */}
        <ellipse cx="110" cy="365" rx="75" ry="10" fill="#000000" fillOpacity="0.8" filter="blur(4px)" />

        {/* 2. LIQUID OIL INSIDE (CLIPPED) */}
        <g clipPath="url(#bottleBodyClip)">
          {/* Constant oil mass */}
          <rect x="15" y="150" width="190" height="210" fill="url(#oilLiquidGradient)" />
          
          {/* Interactive animated wave surface */}
          <motion.path
            d="M 15 150 Q 62.5 140, 110 150 T 205 150 L 205 170 L 15 170 Z"
            fill="url(#oilLiquidGradient)"
            animate={{
              d: [
                'M 15 152 Q 62.5 137, 110 152 T 205 152 L 205 175 L 15 175 Z',
                'M 15 148 Q 62.5 160, 110 148 T 205 148 L 205 175 L 15 175 Z',
                'M 15 152 Q 62.5 137, 110 152 T 205 152 L 205 175 L 15 175 Z'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Volumetric measurement indicator labels on the left inside the bottle */}
          <g opacity="0.4" stroke="#FFFFFF" strokeWidth="1">
            <line x1="32" y1="170" x2="42" y2="170" />
            <line x1="32" y1="210" x2="47" y2="210" />
            <line x1="32" y1="250" x2="42" y2="250" />
            <line x1="32" y1="290" x2="47" y2="290" />
            <line x1="32" y1="330" x2="42" y2="330" />
          </g>
          <g opacity="0.35" fill="#FFFFFF" fontSize="8" fontFamily="monospace">
            <text x="52" y="213">800ml</text>
            <text x="52" y="253">500ml</text>
            <text x="52" y="293">200ml</text>
          </g>
        </g>

        {/* 3. BOTTLE MAIN OUTER GLASS SHELL */}
        {/* Cap Connector / Bottle Mouth */}
        <rect x="85" y="30" width="50" height="15" fill="url(#glassGradient)" rx="2" stroke="#475569" strokeWidth="0.5" />
        {/* Cap Collar */}
        <rect x="80" y="42" width="60" height="8" fill="url(#metalChrome)" rx="1" />
        
        {/* Bottle Neck */}
        <path d="M85,50 L75,110 L145,110 L135,50 Z" fill="url(#glassGradient)" stroke="#334155" strokeWidth="1" />
        
        {/* Bottle Main Body Outer Path */}
        <path
          d="M40,110 L180,110 L195,140 L195,310 C195,335 180,350 155,350 L65,350 C40,350 25,335 25,310 L25,140 L40,110 Z"
          fill="url(#glassGradient)"
          fillOpacity="0.45"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* 4. SCREW CAP (High-tech Ridged Design) */}
        <g id="cap">
          <rect x="78" y="10" width="64" height="22" fill="url(#themeGrad)" rx="3" stroke="#1E293B" strokeWidth="1" />
          {/* Ridges on the cap */}
          <line x1="84" y1="12" x2="84" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="90" y1="12" x2="90" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="96" y1="12" x2="96" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="102" y1="12" x2="102" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="108" y1="12" x2="108" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="114" y1="12" x2="114" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="120" y1="12" x2="120" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="126" y1="12" x2="126" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="132" y1="12" x2="132" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          <line x1="138" y1="12" x2="138" y2="30" stroke="#000000" strokeWidth="1.5" opacity="0.6" />
          
          {/* Cap metallic highlight */}
          <rect x="80" y="11" width="60" height="4" fill="#FFFFFF" fillOpacity="0.25" rx="1" />
        </g>

        {/* 5. SIDE COMFORT GRIPS (Futuristic ridges on sides of the bottle) */}
        <g fill="#1E293B" opacity="0.7">
          {/* Left ridges */}
          <path d="M25,160 L20,165 L20,175 L25,180 Z" />
          <path d="M25,190 L20,195 L20,205 L25,210 Z" />
          <path d="M25,220 L20,225 L20,235 L25,240 Z" />
          <path d="M25,250 L20,255 L20,265 L25,270 Z" />
          {/* Right ridges */}
          <path d="M195,160 L200,165 L200,175 L195,180 Z" />
          <path d="M195,190 L201,195 L201,205 L195,210 Z" />
          <path d="M195,220 L201,225 L201,235 L195,240 Z" />
          <path d="M195,250 L201,255 L201,265 L195,270 Z" />
        </g>

        {/* 6. FRONT BRANDING LABEL CARD */}
        <g id="brand-label">
          {/* Label Background */}
          <rect x="42" y="145" width="136" height="175" fill="url(#labelGrad)" rx="6" stroke="#475569" strokeWidth="1" />
          {/* Subtle Label Border highlight */}
          <rect x="44" y="147" width="132" height="171" fill="none" stroke="url(#themeGrad)" strokeWidth="1.5" strokeOpacity="0.8" rx="5" />
          
          {/* Top Label Graphic */}
          <path d="M44,147 L176,147 L176,170 L44,195 Z" fill="url(#themeGrad)" opacity="0.9" />
          
          {/* "SYNTHETIC" or "PREMIUM" Tag */}
          <text x="110" y="161" fill="#000000" fontSize="8" fontWeight="bold" fontFamily="'Inter', sans-serif" letterSpacing="1" textAnchor="middle">
            {viscosity.includes('SP') || viscosity.includes('5W') || colorTheme === 'gold' ? 'FULLY SYNTHETIC' : 'PREMIUM FORMULA'}
          </text>

          {/* Shobha SR Brand Crest */}
          <g transform="translate(110, 203)">
            {/* Crest Hexagon background */}
            <polygon points="0,-18 16,-8 16,10 0,20 -16,10 -16,-8" fill="#0B0F19" stroke="url(#themeGrad)" strokeWidth="1.5" />
            
            {/* Giant "SR" Branding Text inside crest */}
            <text x="0" y="5" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="'Poppins', sans-serif" letterSpacing="0.5" textAnchor="middle">
              SR
            </text>
            
            {/* Small crown/crest star */}
            <polygon points="0,-12 3,-6 9,-6 4,-2 6,4 0,1 -6,4 -4,-2 -9,-6 -3,-6" fill={highlightColor[colorTheme]} transform="scale(0.5) translate(0, -22)" />
          </g>

          {/* Shobha brand text */}
          <text x="110" y="240" fill="#E2E8F0" fontSize="9" fontWeight="700" fontFamily="'Poppins', sans-serif" letterSpacing="2" textAnchor="middle">
            SHOBHA
          </text>
          
          {/* Lubricants/Engine Oil label */}
          <text x="110" y="250" fill="#94A3B8" fontSize="6.5" fontWeight="500" fontFamily="'Inter', sans-serif" letterSpacing="1" textAnchor="middle">
            LUBRICANTS & OILS
          </text>

          {/* Colored dynamic divider */}
          <rect x="65" y="256" width="90" height="2" fill="url(#themeGrad)" rx="1" />

          {/* Large dynamic Viscosity display e.g., 10W-30 */}
          <text x="110" y="278" fill="#FFFFFF" fontSize="17" fontWeight="800" fontFamily="'Poppins', sans-serif" letterSpacing="1.5" textAnchor="middle" style={{ textShadow: `0 0 10px ${glowColorMap[colorTheme]}` }}>
            {viscosity}
          </text>

          {/* API grade or specifications e.g. API SN / JASO */}
          <text x="110" y="291" fill={highlightColor[colorTheme]} fontSize="7" fontWeight="600" fontFamily="monospace" letterSpacing="0.2" textAnchor="middle">
            {viscosity.includes('VG') ? 'ISO VG' : 'API SP / SN PLUS'}
          </text>

          {/* Volume tag */}
          <rect x="75" y="299" width="70" height="12" fill="#1E293B" rx="3" stroke="#334155" strokeWidth="0.5" />
          <text x="110" y="308" fill="#CBD5E1" fontSize="7" fontWeight="bold" fontFamily="'Inter', sans-serif" letterSpacing="0.5" textAnchor="middle">
            {volumeText}
          </text>
        </g>

        {/* 7. GLASS SHEEN / GLOSS OVERLAYS (For realistic Liquid Glass look) */}
        {/* Right side longitudinal reflection */}
        <path d="M185,140 L185,310 C185,325 178,335 165,340 C178,333 182,320 182,310 L182,140 L172,118 Z" fill="#FFFFFF" fillOpacity="0.08" />
        {/* Left side longitudinal highlight */}
        <path d="M35,140 L35,310 C35,325 42,335 55,340 C42,333 38,320 38,310 L38,140 L48,118 Z" fill="#FFFFFF" fillOpacity="0.15" />
        
        {/* Front curved glare highlight */}
        <path d="M 50 115 Q 110 120, 170 115 Q 110 112, 50 115 Z" fill="#FFFFFF" fillOpacity="0.25" />

        {/* Dynamic bottom liquid glass refraction glow */}
        <path d="M 60 345 Q 110 348, 160 345 Q 110 342, 60 345 Z" fill={highlightColor[colorTheme]} fillOpacity="0.3" filter="blur(2px)" />
      </svg>

      {/* Floating interactive details label overlay below bottle (pure CSS/HTML) */}
      <div className="mt-3 flex flex-col items-center">
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Premium Grade</span>
        <h4 className="text-sm font-semibold text-white tracking-wide">{name.replace('SR Lubricant ', '')}</h4>
      </div>
    </motion.div>
  );
};
