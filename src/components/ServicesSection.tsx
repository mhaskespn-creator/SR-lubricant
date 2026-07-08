/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, VEHICLE_BRANDS, RECOMMENDER_DATABASE, PRODUCTS } from '../data';
import { Product } from '../types';
import { LubricantBottle } from './LubricantBottle';
import {
  Sparkles,
  Award,
  ChevronRight,
  RefreshCw,
  Sliders,
  MessageSquare,
  Shield,
  Clock,
  ThumbsUp,
  Settings,
  Cpu,
  BookOpen,
  Wrench,
  Truck,
  Building2,
  ShoppingBag,
  Container
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  // Wizard State
  const [vehicleType, setVehicleType] = useState<'bike' | 'car' | 'truck' | 'industrial'>('bike');
  const [brand, setBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [mileageCondition, setMileageCondition] = useState('standard'); // standard, high, brand-new
  const [recommendationResult, setRecommendationResult] = useState<{
    product: Product;
    matchPercentage: number;
    explanation: string;
  } | null>(null);

  // Icon map for general services list
  const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-red-500" />,
    Building2: <Building2 className="w-6 h-6 text-amber-400" />,
    Container: <Container className="w-6 h-6 text-blue-400" />,
    Truck: <Truck className="w-6 h-6 text-emerald-400" />,
    Wrench: <Wrench className="w-6 h-6 text-purple-400" />,
    Cpu: <Cpu className="w-6 h-6 text-pink-400" />,
  };

  // Brand Options for chosen vehicle
  const brandOptions = VEHICLE_BRANDS[vehicleType] || [];

  // Handle vehicle category click - reset other dropdowns
  const handleVehicleTypeChange = (type: 'bike' | 'car' | 'truck' | 'industrial') => {
    setVehicleType(type);
    setBrand('');
    setSelectedModel('');
    setCustomModel('');
    setRecommendationResult(null);
  };

  // Filter models database for selected brand
  const matchedDbOptions = RECOMMENDER_DATABASE[vehicleType].filter(
    (item) => item.brand === brand
  );

  // Handle recommendation generation
  const handleGenerateRecommendation = (e: React.FormEvent) => {
    e.preventDefault();

    // Look for exact matches in our database
    const modelToMatch = selectedModel || customModel;
    const dbMatch = RECOMMENDER_DATABASE[vehicleType].find(
      (item) =>
        item.brand === brand &&
        (item.model.toLowerCase().includes(modelToMatch.toLowerCase()) ||
          modelToMatch.toLowerCase().includes(item.model.split(' / ')[0].toLowerCase()))
    );

    let recommendedProduct: Product;
    let matchPercentage = 100;
    let explanation = '';

    if (dbMatch) {
      recommendedProduct = PRODUCTS.find((p) => p.id === dbMatch.product) || PRODUCTS[0];
      matchPercentage = dbMatch.match;
      explanation = dbMatch.explanation;
    } else {
      // Fallback smart matching logic if user enters a custom brand/model
      if (vehicleType === 'bike') {
        recommendedProduct = PRODUCTS.find((p) => p.id === 'power-rider-4t') || PRODUCTS[0];
        explanation = `Based on your vehicle profile, we recommend high-performance PowerRider 4T. Fully synthetic esters form an unbreakable fluid shield suited for heavy clutch friction and thermal compression.`;
      } else if (vehicleType === 'car') {
        recommendedProduct = PRODUCTS.find((p) => p.id === 'synthedge-pro') || PRODUCTS[1];
        explanation = `Recommended formulation. Our SynthEdge Pro API SP provides top-tier defense against Low Speed Pre-Ignition (LSPI) and maintains clean timing chains.`;
      } else if (vehicleType === 'truck') {
        recommendedProduct = PRODUCTS.find((p) => p.id === 'turboforce-diesel') || PRODUCTS[4];
        explanation = `Heavy-Duty recommendation. Formulated specifically to withstand massive mechanical compression and soot thickening over multi-terrain transport runs.`;
      } else {
        recommendedProduct = PRODUCTS.find((p) => p.id === 'hydroglide-aw68') || PRODUCTS[6];
        explanation = `Industrial AW-grade selection. High-pressure pump film strength reduces spool wear and guarantees precise hydraulic speed control.`;
      }
      matchPercentage = 95;
    }

    // Tweak parameters based on engine mileage condition
    if (mileageCondition === 'high') {
      // For older/high mileage vehicles, suggest thicker oil if applicable
      if (recommendedProduct.id === 'synthedge-pro') {
        recommendedProduct = PRODUCTS.find((p) => p.id === 'multishield-car') || recommendedProduct;
        explanation = `High mileage adaptation: Swapped to MultiShield 15W-40. Older valves require a slightly thicker viscosity film to seal piston clearance and prevent carbon smoke.`;
      }
      matchPercentage = 98;
    } else if (mileageCondition === 'brand-new') {
      matchPercentage = 100;
    }

    setRecommendationResult({
      product: recommendedProduct,
      matchPercentage,
      explanation,
    });
  };

  const handleResetAdvisor = () => {
    setBrand('');
    setSelectedModel('');
    setCustomModel('');
    setMileageCondition('standard');
    setRecommendationResult(null);
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Light highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-black tracking-[0.2em] text-red-500 uppercase">
            Services & Support
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mt-3">
            Premium Support & Intelligent Recommendations
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4">
            From bulk industrial lubrication audits to a personal vehicle fluid finder, we offer elite support channels.
          </p>
        </div>

        {/* INTERACTIVE COMPONENT: "SMART OIL ADVISOR" WIZARD */}
        <div className="mb-24 md:mb-32">
          
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 uppercase font-black tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              Interactive Smart Oil Advisor
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Match Your Engine with Elite Chemical Formulations
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Select your vehicle parameters below. Our algorithm matches your mechanical blueprint with the exact certified API/viscosity index required.
            </p>
          </div>

          {/* GLASS WIZARD CANVAS CARD */}
          <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl relative">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10">
              
              {/* LEFT SIDE: INPUT PARAMETERS PANEL */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                
                <form onSubmit={handleGenerateRecommendation} className="space-y-6">
                  
                  {/* STEP 1: SELECT VEHICLE CATEGORY BUTTONS */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono font-black text-gray-400 uppercase tracking-wider block">
                      1. Vehicle / Machinery Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['bike', 'car', 'truck', 'industrial'] as const).map((type) => {
                        const isSel = vehicleType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => handleVehicleTypeChange(type)}
                            className={`py-3.5 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-300 ${
                              isSel
                                ? 'bg-red-600/10 border-red-500 text-white shadow-lg shadow-red-600/5'
                                : 'bg-black/30 border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                            }`}
                          >
                            <span className="text-xs font-bold capitalize">{type}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 2: SELECT BRAND DROPDOWN */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono font-black text-gray-400 uppercase tracking-wider block">
                      2. Manufacturer / Brand
                    </label>
                    <select
                      value={brand}
                      onChange={(e) => {
                        setBrand(e.target.value);
                        setSelectedModel('');
                        setCustomModel('');
                        setRecommendationResult(null);
                      }}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    >
                      <option value="" className="bg-[#09090c] text-gray-500">-- Choose Brand --</option>
                      {brandOptions.map((b) => (
                        <option key={b} value={b} className="bg-[#09090c] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* STEP 3: MODEL SELECT / ENTRY */}
                  {brand && (
                    <div className="space-y-2.5">
                      <label className="text-xs font-mono font-black text-gray-400 uppercase tracking-wider block">
                        3. Specific Model
                      </label>
                      {matchedDbOptions.length > 0 ? (
                        <select
                          value={selectedModel}
                          onChange={(e) => {
                            setSelectedModel(e.target.value);
                            setRecommendationResult(null);
                          }}
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 animate-fadeIn"
                        >
                          <option value="" className="bg-[#09090c] text-gray-500">-- Choose Model --</option>
                          {matchedDbOptions.map((opt) => (
                            <option key={opt.model} value={opt.model} className="bg-[#09090c] text-white">
                              {opt.model}
                            </option>
                          ))}
                          <option value="custom" className="bg-[#09090c] text-amber-400">Other (Manual Entry)</option>
                        </select>
                      ) : (
                        <input
                          type="text"
                          placeholder="e.g. Pulsar 220, Fortuner, Signa"
                          value={customModel}
                          onChange={(e) => {
                            setCustomModel(e.target.value);
                            setRecommendationResult(null);
                          }}
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                      )}

                      {selectedModel === 'custom' && (
                        <input
                          type="text"
                          placeholder="Enter model name here..."
                          value={customModel}
                          onChange={(e) => {
                            setCustomModel(e.target.value);
                            setRecommendationResult(null);
                          }}
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 mt-2 animate-fadeIn"
                        />
                      )}
                    </div>
                  )}

                  {/* STEP 4: SEVERE MILEAGE CONDITION FILTER */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-mono font-black text-gray-400 uppercase tracking-wider block">
                      4. Engine Condition & Milage
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'brand-new', label: '< 20,000 km', sub: 'Like New' },
                        { id: 'standard', label: '20k - 80k km', sub: 'Optimal' },
                        { id: 'high', label: '> 80,000 km', sub: 'High Milage' },
                      ].map((cond) => {
                        const isCondSel = mileageCondition === cond.id;
                        return (
                          <button
                            type="button"
                            key={cond.id}
                            onClick={() => {
                              setMileageCondition(cond.id);
                              setRecommendationResult(null);
                            }}
                            className={`py-2 rounded-xl border flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                              isCondSel
                                ? 'bg-white/5 border-white/20 text-white'
                                : 'bg-transparent border-white/5 text-gray-500 hover:border-white/10 hover:text-gray-400'
                            }`}
                          >
                            <span className="text-[10px] font-bold leading-none">{cond.label}</span>
                            <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase mt-1">
                              {cond.sub}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* SUBMIT RECOMMANDATION FORM BUTTON */}
                  <button
                    type="submit"
                    disabled={!brand || (!selectedModel && !customModel)}
                    className="w-full py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 hover:scale-[1.01] transition-all duration-300 disabled:opacity-40 disabled:hover:scale-100 disabled:from-red-800 disabled:to-red-950 cursor-pointer shadow-lg shadow-red-600/10"
                  >
                    Generate Recommendation
                  </button>

                </form>

              </div>

              {/* RIGHT SIDE: RECOMMENDED SOLUTION PREVIEW */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center bg-black/40 border border-white/5 rounded-2xl p-6 relative min-h-[350px]">
                
                <AnimatePresence mode="wait">
                  {recommendationResult ? (
                    <motion.div
                      key="result"
                      className="w-full space-y-6 flex flex-col items-center text-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Match percentage meter */}
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono uppercase font-black">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        {recommendationResult.matchPercentage}% Dynamic Formulation Match
                      </div>

                      {/* Bottle Visual with specific theme */}
                      <div className="h-44 flex items-center justify-center scale-90 mb-2">
                        <LubricantBottle
                          colorTheme={recommendationResult.product.colorTheme}
                          viscosity={recommendationResult.product.viscosity}
                          name={recommendationResult.product.name}
                          volumeText={recommendationResult.product.sizes[0]}
                          hoverAnimated={false}
                        />
                      </div>

                      {/* Product Name */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-black">
                          {recommendationResult.product.category}
                        </span>
                        <h4 className="text-lg font-black text-white">
                          {recommendationResult.product.name}
                        </h4>
                        <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                          Viscosity: {recommendationResult.product.viscosity} | {recommendationResult.product.apiGrade}
                        </p>
                      </div>

                      {/* Recommendation Chemistry Explanation */}
                      <p className="text-xs text-gray-400 leading-relaxed max-w-sm border-t border-white/5 pt-4">
                        {recommendationResult.explanation}
                      </p>

                      {/* Instant Action buttons */}
                      <div className="grid grid-cols-2 gap-3 w-full pt-2">
                        <button
                          onClick={handleResetAdvisor}
                          className="py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-xs text-gray-400 hover:text-white font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer"
                        >
                          Reset Finder
                        </button>

                        <a
                          href={`https://wa.me/919999999999?text=${encodeURIComponent(
                            `Hello Shobha SR Lubricant! The Smart Oil Advisor recommended *${recommendationResult.product.name}* (${recommendationResult.product.viscosity}) for my ${brand} ${selectedModel || customModel} (${mileageCondition} engine).\n\nPlease provide me with retail/wholesale pricing.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-emerald-500/10"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-white" />
                          <span>Order Oil</span>
                        </a>
                      </div>

                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      className="flex flex-col items-center text-center space-y-4 max-w-xs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray-600 animate-pulse">
                        <Sliders className="w-6 h-6 text-gray-500" />
                      </div>
                      <h4 className="text-base font-bold text-white tracking-wide">
                        Awaiting Vehicle Parameters
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Fill out the specification form on the left, and our advisor will compile a chemical report recommending the optimal fluid viscosity index.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>

          </div>

        </div>

        {/* GENERAL SERVICES LIST GRID */}
        <div>
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-black">
              Supply Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Serving Retail, Wholesale, Fleets & Industrial Units
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="group bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.06] hover:border-white/15 rounded-2xl p-6 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-red-500/30">
                    {iconMap[s.iconName] || <Settings className="w-6 h-6 text-red-500" />}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {s.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6 space-y-2">
                  {s.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-red-500" />
                      <span className="text-[11px] text-gray-400 font-mono">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
