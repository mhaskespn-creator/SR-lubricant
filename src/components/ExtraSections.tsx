/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS, FAQS, STATS } from '../data';
import { Star, ChevronDown, ChevronUp, Shield, Sparkles, Flame, Droplets, RotateCcw, Award } from 'lucide-react';

export const ExtraSections: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const engineeringMerits = [
    {
      icon: <Flame className="w-5 h-5 text-red-500 animate-pulse" />,
      title: 'Heat Armor Shields',
      desc: 'Formulated to resist thermal shearing even under extreme cylinder pressures exceeding 250°C.',
      stat: '50% Cooler Running'
    },
    {
      icon: <Droplets className="w-5 h-5 text-amber-400" />,
      title: 'Active Friction Reducer',
      desc: 'Liquid gold molecular coating that bonds instantly with steel gears, reducing starter cranking friction.',
      stat: '4.2% Fuel Savings'
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: 'Microscopic Rust Guard',
      desc: 'Advanced alkaline dispersants neutralize acidic combustion water, completely preventing chemical rust.',
      stat: 'Zero Corrosive Wear'
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-blue-400" />,
      title: 'Viscosity Lock Technology',
      desc: 'Highly shear-stable polymer molecules that maintain identical protection indexes across severe drag loads.',
      stat: 'Extended Lifespan'
    }
  ];

  return (
    <div className="bg-[#050505] relative overflow-hidden">
      
      {/* 1. STATISTICS INTERACTIVE BENTO GRID */}
      <section className="py-20 md:py-28 relative border-t border-white/5 bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.id}
                className="relative bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-md"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Micro glow behind each stat */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 blur-xl rounded-full" />
                
                <span className="text-4xl md:text-5xl font-display font-black text-white tracking-tight bg-gradient-to-r from-white via-white to-red-500 bg-clip-text">
                  {stat.value}
                </span>
                
                <div className="mt-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{stat.label}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Industry Certifications Bar */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-around gap-6 opacity-40 hover:opacity-75 transition-opacity duration-300">
            <div className="text-xs font-mono font-black text-gray-500 uppercase tracking-widest">
              COMPLIANT CERTIFICATIONS:
            </div>
            <span className="text-xs font-mono font-bold text-white bg-white/5 px-3 py-1 rounded">
              API SN / SP COMPLIANT
            </span>
            <span className="text-xs font-mono font-bold text-white bg-white/5 px-3 py-1 rounded">
              JASO MA2 CERTIFIED
            </span>
            <span className="text-xs font-mono font-bold text-white bg-white/5 px-3 py-1 rounded">
              ISO 9001 QUALITY ASSURED
            </span>
            <span className="text-xs font-mono font-bold text-white bg-white/5 px-3 py-1 rounded">
              SAE MULTI-GRADE INDEX
            </span>
          </div>

        </div>
      </section>

      {/* 2. TECHNICAL MERITS & HEAT PERFORMANCE SHIELD SECTION */}
      <section className="py-24 md:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Merit Showcase Left */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Spinning tech wheels */}
              <div className="absolute w-[300px] h-[300px] border border-red-500/10 rounded-full animate-spin -z-10" style={{ animationDuration: '40s' }} />
              <div className="absolute w-[240px] h-[240px] bg-red-600/5 blur-[50px] rounded-full pointer-events-none -z-10" />

              {/* High-end visual display */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl relative max-w-sm">
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
                <div className="flex items-center gap-2 text-red-500 mb-4">
                  <Award className="w-5 h-5 text-red-500" />
                  <span className="text-xs font-mono font-black uppercase tracking-widest">Molecular Testing</span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-wide">Extreme Shear Stability Test</h4>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Under laboratory extreme pressure testing (140,000 psi), Shobha SR fully synthetic formulas retained **99.2%** of their initial lubricating film strength. Commuters get continuous starting reliability.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/5">
                  <div>
                    <span className="block text-2xl font-black text-emerald-400 font-display">0.03μ</span>
                    <span className="text-[9px] font-mono tracking-wider text-gray-500 uppercase">Boundary Film</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-amber-400 font-display">-45°C</span>
                    <span className="text-[9px] font-mono tracking-wider text-gray-500 uppercase">Pour Point Limit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core merits text list Right */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono font-black tracking-[0.2em] text-red-500 uppercase">
                  Engineered Advantages
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white mt-2">
                  Double Layer Friction Barrier Protection
                </h2>
                <p className="text-gray-400 text-sm mt-3">
                  Our formulas inject active anti-wear nanoparticles that form a persistent protective pad on cylinder rings and transmission gears, protecting them under severe cold starts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {engineeringMerits.map((item, i) => (
                  <div key={i} className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-5 hover:bg-white/[0.03] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono tracking-wider text-amber-300 font-bold uppercase">
                          {item.stat}
                        </span>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CUSTOMER REVIEWS SLIDER */}
      <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-xs font-mono font-black tracking-[0.2em] text-red-500 uppercase">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white mt-3">
              Endorsed By Fleet Managers & Tuners
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              From commercial truck driver logs to neighborhood motorcycle servicing garages, read what clients say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev, idx) => (
              <motion.div
                key={rev.id}
                className="bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-md relative"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="space-y-4">
                  
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed italic">
                    "{rev.feedback}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                  <img
                    src={rev.avatarUrl}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white">{rev.name}</span>
                    <span className="text-[10px] font-mono text-gray-500">{rev.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 md:py-32 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-mono font-black tracking-[0.2em] text-red-500 uppercase">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white mt-3">
              FAQ & Technical Support
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Clear, transparent answers about vehicle specifications, fluid chemistry, and supply policies.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white/[0.02] border border-white/10 hover:border-white/15 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base cursor-pointer focus:outline-none"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-red-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
