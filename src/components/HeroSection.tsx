/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LubricantBottle } from './LubricantBottle';
import { ArrowRight, ChevronRight, Compass, Shield, Zap, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onContactUs,
}) => {
  const [activeVehicle, setActiveVehicle] = useState<'bike' | 'car' | 'truck'>('bike');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse coordinates for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 35;
      const y = (e.clientY - top - height / 2) / 35;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const vehicles = [
    {
      id: 'bike' as const,
      name: 'Superbike Series',
      title: 'SR Lubricant Motomax 4T',
      viscosity: '10W-30',
      theme: 'red' as const,
      volume: '900 ml',
      badge: '95% Clutch Grip',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop',
      desc: 'Formulated with active friction modifiers to deliver ultra-smooth gear shifts, full power under redline RPMs, and unmatched wet clutch grip.',
    },
    {
      id: 'car' as const,
      name: 'Hypercar Series',
      title: 'SR Lubricant SynthEdge Pro',
      viscosity: '5W-30',
      theme: 'gold' as const,
      volume: '1 Liter',
      badge: 'Fully Synthetic SP',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
      desc: 'Our flagship API SP formula built for high-boost turbo engines. Defeats Low-Speed Pre-Ignition (LSPI) and maintains clean intake valves.',
    },
    {
      id: 'truck' as const,
      name: 'Heavy Duty Truck',
      title: 'SR Lubricant TurboForce HD',
      viscosity: '15W-40',
      theme: 'silver' as const,
      volume: '5 Liter',
      badge: 'Extended 35k Drain',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
      desc: 'Engineered with carbon-clean dispersants to withstand massive compression pressures and high-torque thermal strain over long-hauls.',
    }
  ];

  const currentVehicleData = vehicles.find((v) => v.id === activeVehicle) || vehicles[0];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[105vh] flex items-center justify-center overflow-hidden bg-[#030303] pt-24 md:pt-16 pb-12"
    >
      {/* 1. DYNAMIC BACKGROUND ATMOSPHERE */}
      {/* Absolute dark canvas background */}
      <div className="absolute inset-0 bg-[#050505] -z-20" />

      {/* Grid line matrix with mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

      {/* Atmospheric glowing backdrop spotlights matching selected vehicle color */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] mix-blend-screen opacity-20 pointer-events-none -z-10 transition-all duration-1000"
        style={{
          background:
            currentVehicleData.theme === 'red'
              ? 'radial-gradient(circle, #E53935 0%, rgba(0,0,0,0) 70%)'
              : currentVehicleData.theme === 'gold'
              ? 'radial-gradient(circle, #FFD54F 0%, rgba(0,0,0,0) 70%)'
              : 'radial-gradient(circle, #E2E8F0 0%, rgba(0,0,0,0) 70%)',
          left: '30%',
          top: '20%',
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
        }}
      />

      {/* 2. FLOATING MECHANICAL PARTICLES & GLASS CUBES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Floating Ring 1 */}
        <motion.div
          className="absolute border border-white/5 rounded-full w-96 h-96"
          style={{ top: '15%', left: '5%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        {/* Floating Ring 2 */}
        <motion.div
          className="absolute border border-red-500/10 rounded-full w-[500px] h-[500px]"
          style={{ bottom: '10%', right: '5%' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* 3D Glass Molecules / Particles */}
        <div className="absolute top-[20%] right-[15%] w-4 h-4 bg-red-500/30 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-[25%] left-[20%] w-6 h-6 bg-amber-400/20 rounded-full blur-sm" />
        <div className="absolute top-[45%] left-[8%] w-3 h-3 bg-slate-300/30 rounded-full blur-xs" />
        
        {/* Glass Cards or floating squares */}
        <motion.div
          className="absolute w-20 h-20 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10"
          style={{ top: '25%', left: '15%' }}
          animate={{
            y: [0, -15, 0],
            rotate: [15, 30, 15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-14 h-14 bg-white/[0.03] backdrop-blur-xs rounded-xl border border-white/5"
          style={{ bottom: '30%', right: '12%' }}
          animate={{
            y: [0, 12, 0],
            rotate: [-10, 5, -10],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* 3. HERO CONTENT CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: BRAND TITLE & LUXURY DESCRIPTION */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Tagline / Mini-Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs font-mono text-gray-300 tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="uppercase">Shobha SR Lubricant</span>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          </motion.div>

          {/* Epic Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-[1.05]"
          >
            Power Every <span className="bg-gradient-to-r from-red-500 via-amber-400 to-red-600 bg-clip-text text-transparent">Engine</span>.
            <br />
            Protect Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">Journey</span>.
          </motion.h1>

          {/* Premium Core Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl font-sans leading-relaxed"
          >
            High-performance engine oils and lubricants engineered to deliver ultimate wear defense, lower operating temperatures, and maximum fuel conservation for cars, superbikes, and massive fleets.
          </motion.p>

          {/* 4. CHOOSE YOUR VEHICLE ENGINE CONTROLLER (Apple/Tesla-like slider) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-md bg-black/40 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md grid grid-cols-3 gap-2"
          >
            {vehicles.map((v) => {
              const isSelected = activeVehicle === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveVehicle(v.id)}
                  className={`relative py-3 rounded-xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeVehiclePill"
                      className="absolute inset-0 bg-white/[0.05] border border-white/10 rounded-xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  {/* Glowing active indicator line at the bottom */}
                  {isSelected && (
                    <motion.div
                      className="absolute bottom-1 w-6 h-[2.5px] rounded-full"
                      style={{
                        backgroundColor:
                          v.theme === 'red'
                            ? '#E53935'
                            : v.theme === 'gold'
                            ? '#FFD54F'
                            : '#94A3B8',
                      }}
                      layoutId="activeIndicatorLine"
                    />
                  )}
                  <span className="text-[10px] font-mono tracking-widest uppercase leading-none font-black">
                    {v.id}
                  </span>
                  <span className="text-xs font-semibold mt-1">
                    {v.id === 'bike' ? 'Two Wheeler' : v.id === 'car' ? 'Passenger Car' : 'Heavy Haul'}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Buttons Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* Explore Products Button with Liquid Glow effect */}
            <button
              onClick={onExploreProducts}
              className="px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 hover:scale-[1.02] shadow-[0_15px_30px_rgba(229,57,53,0.3)] hover:shadow-[0_15px_35px_rgba(229,57,53,0.5)] transition-all duration-300 cursor-pointer flex items-center gap-2 border border-red-400/20"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Contact Us Glass Card Button */}
            <button
              onClick={onContactUs}
              className="px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-gray-300 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 backdrop-blur-md transition-all duration-300 hover:text-white cursor-pointer"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Micro Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 w-full max-w-md text-left"
          >
            <div>
              <span className="block text-xl font-bold font-display text-white">5000+</span>
              <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">Trusted Drivers</span>
            </div>
            <div>
              <span className="block text-xl font-bold font-display text-white">100+</span>
              <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">Dealer Points</span>
            </div>
            <div>
              <span className="block text-xl font-bold font-display text-white">15+ Yrs</span>
              <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">Elite Formulations</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE 3D BOTTLE SHOWCASE & CAR PARALLAX */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Absolute rotating mechanical ring stage */}
          <div className="absolute w-[280px] h-[280px] border border-dashed border-white/10 rounded-full animate-spin -z-10" style={{ animationDuration: '30s' }} />
          <div className="absolute w-[360px] h-[360px] border border-double border-white/5 rounded-full -z-10" />

          {/* Selected Vehicle Showcase Backdrop (Unsplash Image framed nicely in Liquid Glass) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVehicle}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-12 -right-8 w-48 h-32 md:w-56 md:h-36 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-0 pointer-events-none"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
              }}
            >
              {/* Overlay Glass Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/10 to-transparent z-10" />
              <img
                src={currentVehicleData.image}
                alt={currentVehicleData.name}
                className="w-full h-full object-cover scale-110 object-center transition-all duration-[8000ms] ease-out"
                style={{
                  transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) scale(1.15)`,
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-3 z-20">
                <span className="text-[8px] font-mono tracking-widest text-red-500 uppercase font-black">
                  Recommended For
                </span>
                <p className="text-xs font-bold text-white uppercase">{currentVehicleData.name}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Lubricant Bottle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVehicle}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative z-10 cursor-grab active:cursor-grabbing"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Bottle with specific themes matching current active vehicle */}
              <LubricantBottle
                colorTheme={currentVehicleData.theme}
                viscosity={currentVehicleData.viscosity}
                name={currentVehicleData.title}
                volumeText={currentVehicleData.volume}
              />

              {/* Dynamic Float Highlight Tag next to bottle */}
              <motion.div
                className="absolute -right-12 top-1/2 -translate-y-1/2 p-3 bg-black/60 border border-white/10 backdrop-blur-xl rounded-2xl max-w-[150px] shadow-2xl"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-black uppercase tracking-widest">Active Shield</span>
                </div>
                <h5 className="text-[11px] font-bold text-white uppercase">{currentVehicleData.badge}</h5>
                <p className="text-[9px] text-gray-400 mt-1 leading-tight line-clamp-3">{currentVehicleData.desc}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 5. SCROLL DECREASE INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer" onClick={onExploreProducts}>
        <span className="text-[9px] font-mono uppercase tracking-widest">Scroll To Explore</span>
        <motion.div
          className="w-[18px] h-[30px] border-2 border-gray-600 rounded-full p-1 flex justify-center"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-red-500"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
