/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Award, ShieldCheck, HeartHandshake, Zap, Sparkles, Milestone, Eye, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const tabContent = {
    mission: {
      title: 'Our Mission',
      icon: <Milestone className="w-5 h-5 text-red-500" />,
      text: 'To engineer elite vehicle lubricants that reduce global engine friction, prevent mechanical wear, and significantly extend vehicle lifespans. We empower commuters, fleet logistics, and industries to perform at absolute peak fuel-efficiency while protecting the environment and minimizing operating costs.',
      points: [
        'Unmatched microscopic friction control',
        'Strict conformance to international API & JASO standards',
        'Eco-conscious formulation to reduce carbon exhaust'
      ]
    },
    vision: {
      title: 'Our Vision',
      icon: <Eye className="w-5 h-5 text-amber-400" />,
      text: 'To be the globally recognized vanguard of high-performance engine lubrication, driving the next era of mechanical protection. Shobha SR is committed to formulating revolutionary carbon-nanotube heat shields and premium synthetic products that unlock every engine’s maximum torque and efficiency.',
      points: [
        'Pioneering smart chemical additive compounds',
        'Becoming the #1 partner for heavy industrial fleets',
        'Leading localized eco-safe green lubricant supply chains'
      ]
    },
    values: {
      title: 'Our Core Values',
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      text: 'Our operations stand on the bedrock of integrity, scientific accuracy, and absolute focus on client machinery protection. We formulate real power, refusing shortcuts.',
      points: [
        'Scientific Honesty: Accurate chemical reports & API specs',
        'Extreme Durability: Relentless wear testing under heavy thermal load',
        'Distributor Uplift: Lucrative dealer margins and localized territories'
      ]
    }
  };

  const coreStrengths = [
    {
      icon: <Award className="text-red-500 w-6 h-6" />,
      title: 'Premium Quality',
      desc: 'Sourced from elite Group III synthetic base oils and state-of-the-art chemical additives, guaranteeing zero viscosity breakdown.'
    },
    {
      icon: <Zap className="text-amber-400 w-6 h-6" />,
      title: 'Reliable Performance',
      desc: 'Maintains extreme film strength at blistering 250°C cylinders, ensuring cold starts run as smooth as warm highway drives.'
    },
    {
      icon: <ShieldCheck className="text-emerald-400 w-6 h-6" />,
      title: 'Trusted Formulations',
      desc: 'Decades of real-world testing across millions of high-RPM bike clutches and heavy-duty logistics turbo-diesels.'
    },
    {
      icon: <HeartHandshake className="text-blue-400 w-6 h-6" />,
      title: 'Affordable & Fair',
      desc: 'Eliminating bloated middleman fees to offer direct factory-rate pricing with no compromise on raw chemical quality.'
    },
    {
      icon: <Sparkles className="text-purple-400 w-6 h-6" />,
      title: 'Wide Product Range',
      desc: 'From compact 900ml motorcycle canisters to heavy industrial hydraulic tankers, we provide protection for all sizes.'
    },
    {
      icon: <ShieldAlert className="text-rose-400 w-6 h-6" />,
      title: 'Client Satisfaction',
      desc: 'A dedicated consultation desk helping fleet owners analyze spent oil samples to optimize mechanical longevity.'
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Dynamic light effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-black tracking-[0.2em] text-red-500 uppercase">
            ESTABLISHED FORMULATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mt-3">
            The Science Of Frictionless Motion
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-amber-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* TOP BLOCK: STORY & INTERACTIVE TABS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 md:mb-32">
          
          {/* Company Story Text */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">The Shobha SR Legacy</span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineering extreme heat and wear defense for over 15 years.
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              At **Shobha SR Lubricant**, we believe that every mechanical component deserves uncompromised protection. For more than a decade, our expert team has sourced premium base oils and collaborated with leading global additive laboratories.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Whether you are riding a commuter motorcycle in dense, dusty city traffic, driving a luxury supercar on long weekend getaways, or operating a high-tonnage industrial crushing unit, our lubricants form an active molecular shield that keeps components running perfectly.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md max-w-md">
              <span className="text-4xl font-black font-display text-red-500">15+</span>
              <div className="text-xs text-gray-400 leading-snug">
                Years of constant testing in extreme environments, protecting gears from wear, rust, and oxidation.
              </div>
            </div>
          </div>

          {/* Interactive Core Targets: Mission, Vision, Values Tabs */}
          <div className="lg:col-span-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl relative">
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-3 gap-2 bg-black/40 p-1 rounded-xl border border-white/5 mb-6">
                {(['mission', 'vision', 'values'] as const).map((tab) => {
                  const isSelected = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative py-2.5 rounded-lg text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                        isSelected ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="aboutTabPill"
                          className="absolute inset-0 bg-white/[0.05] border border-white/10 rounded-lg"
                        />
                      )}
                      <span>{tab}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                      {tabContent[activeTab].icon}
                    </div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wide">
                      {tabContent[activeTab].title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {tabContent[activeTab].text}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {tabContent[activeTab].points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* BOTTOM BLOCK: WHY CHOOSE US (6 STRENGTH CARDS) */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-black">
              Engineered Supremacy
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Why Mechanics & Fleet Operators Mandate Shobha SR
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreStrengths.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.06] hover:border-white/15 rounded-2xl p-6 transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col justify-between"
                whileHover={{ y: -5 }}
              >
                {/* Accent glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-red-600/10 blur-xl group-hover:bg-red-600/20 transition-all duration-500 pointer-events-none" />
                
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-red-500/30 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
