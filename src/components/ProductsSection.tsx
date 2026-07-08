/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { Product, ProductCategory } from '../types';
import { LubricantBottle } from './LubricantBottle';
import { Search, SlidersHorizontal, Info, MessageSquare, Mail, X, Check, PackageOpen } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquirySize, setInquirySize] = useState<string>('');

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Bike Engine Oil',
    'Car Engine Oil',
    'Diesel Engine Oil',
    'Gear Oil',
    'Hydraulic Oil',
    'Brake Fluid',
    'Coolant',
    'Grease',
    'Transmission Oil',
    'Industrial Oil'
  ];

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.viscosity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.apiGrade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.sizes.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const openDetailsModal = (product: Product) => {
    setSelectedProduct(product);
    setInquirySize(product.sizes[0]); // Default to the first available size
  };

  const closeDetailsModal = () => {
    setSelectedProduct(null);
  };

  // Helper to generate dynamic WhatsApp text
  const getWhatsAppInquiryUrl = (product: Product, size: string) => {
    const text = `Hello Shobha SR Lubricant! I am interested in inquiring about the following product:\n\nProduct: *${product.name}*\nViscosity: *${product.viscosity}*\nPack Size Selected: *${size}*\n\nPlease provide me with retail/wholesale pricing and dealer network options for this product.`;
    return `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;
  };

  // Helper to generate dynamic Email text
  const getEmailInquiryUrl = (product: Product, size: string) => {
    const subject = `Product Inquiry: ${product.name} (${size})`;
    const body = `Dear Shobha SR Lubricant Sales Team,\n\nI am writing to request a quotation for the following product:\n\nProduct Name: ${product.name}\nViscosity Grade: ${product.viscosity}\nAPI Compliance: ${product.apiGrade}\nSize Requested: ${size}\n\nPlease share wholesale and container shipping options. My delivery destination is: (Please fill your city name).\n\nBest regards,\n(Your Name)\n(Your Phone Number)`;
    return `mailto:sales@shobhasrlubricant.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="products" className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Absolute background matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5393504_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black tracking-[0.2em] text-red-500 uppercase">
            Product Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mt-3">
            Elite 3D Formulation Showcase
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4">
            Browse our premium oils engineered to withstand extreme high temperature, minimize internal friction, and protect critical moving parts.
          </p>
        </div>

        {/* CONTROLS BAR: SEARCH AND CATEGORIES */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search by product, viscosity (e.g. 10W-40), API grade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-gray-500 transition-all backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results */}
            <div className="text-xs font-mono text-gray-500">
              Showing {filteredProducts.length} premium products
            </div>
          </div>

          {/* Categories Horizontal Scroll Slider */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-red-600 border border-red-500 text-white shadow-lg shadow-red-600/25'
                      : 'bg-white/[0.02] border border-white/5 text-gray-400 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'View All' : cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white/[0.01] border border-white/5 rounded-2xl">
            <PackageOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white">No Lubricants Match Your Search</h4>
            <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
              We offer bespoke formulations. Try searching for "10W-40", "DOT 4", or click "View All" categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                className="group relative bg-white/[0.01] border border-white/[0.06] hover:border-white/15 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 backdrop-blur-md overflow-hidden"
              >
                {/* Visual Ribbon/Badge for Best Seller */}
                {p.isBestSeller && (
                  <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded bg-amber-400 text-black text-[9px] font-black uppercase tracking-wider shadow">
                    Best Seller
                  </div>
                )}

                {/* Top Section: Interactive Product 3D Bottle */}
                <div className="relative aspect-square w-full flex items-center justify-center pt-4 pb-2 bg-gradient-to-b from-white/[0.02] to-transparent rounded-xl border border-white/[0.03] overflow-hidden mb-4">
                  {/* Grid reflection inside showcase card */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,#000000_100%)] pointer-events-none" />
                  
                  {/* Vector Bottle */}
                  <LubricantBottle
                    colorTheme={p.colorTheme}
                    viscosity={p.viscosity}
                    name={p.name}
                    volumeText={p.sizes[0]}
                    className="scale-90"
                  />
                </div>

                {/* Middle Section: Specs and Branding */}
                <div className="space-y-2 mt-2">
                  <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-black">
                    {p.category}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-wide leading-snug line-clamp-1 group-hover:text-red-400 transition-colors">
                    {p.name}
                  </h3>

                  {/* Viscosity Highlight Tag */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-sm font-black font-display text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                      {p.viscosity}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 font-bold truncate">
                      {p.apiGrade}
                    </span>
                  </div>

                  {/* Short descriptive snippet */}
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed pt-1">
                    {p.description}
                  </p>

                  {/* Sizes Badge List (Maximum 4 shown on card) */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.sizes.slice(0, 3).map((size) => (
                      <span
                        key={size}
                        className="text-[9px] font-mono font-bold text-gray-400 bg-black/40 border border-white/5 px-1.5 py-0.5 rounded"
                      >
                        {size}
                      </span>
                    ))}
                    {p.sizes.length > 3 && (
                      <span className="text-[9px] font-mono font-bold text-gray-500 bg-black/40 border border-white/5 px-1.5 py-0.5 rounded">
                        +{p.sizes.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Section: Inquiry / Details Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-white/5">
                  <button
                    onClick={() => openDetailsModal(p)}
                    className="py-2.5 rounded-lg text-[10px] font-bold tracking-wider uppercase bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-gray-300 hover:text-white transition-all duration-200 cursor-pointer text-center"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => openDetailsModal(p)}
                    className="py-2.5 rounded-lg text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-red-800 text-white hover:scale-[1.02] transition-all duration-200 cursor-pointer text-center shadow-lg shadow-red-600/10"
                  >
                    Get Quote
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* EXPANDED DETAILS AND INSTANT INQUIRY PORTAL MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop overlay */}
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetailsModal}
            />

            {/* Modal Container */}
            <motion.div
              className="relative w-full max-w-4xl bg-[#09090c] border border-white/10 rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                onClick={closeDetailsModal}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Panel: 3D Product Presentation */}
              <div className="md:w-5/12 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 relative">
                {/* Showcase Spot glowing aura */}
                <div
                  className="absolute w-44 h-44 rounded-full blur-[40px] pointer-events-none opacity-30"
                  style={{
                    background:
                      selectedProduct.colorTheme === 'red'
                        ? '#E53935'
                        : selectedProduct.colorTheme === 'gold'
                        ? '#FFD54F'
                        : '#cbd5e1',
                  }}
                />
                
                <LubricantBottle
                  colorTheme={selectedProduct.colorTheme}
                  viscosity={selectedProduct.viscosity}
                  name={selectedProduct.name}
                  volumeText={inquirySize || selectedProduct.sizes[0]}
                  className="scale-110"
                  hoverAnimated={false}
                />
                
                <div className="text-center mt-4">
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">
                    Viscosity Grade
                  </span>
                  <p className="text-3xl font-black font-display text-white mt-1">
                    {selectedProduct.viscosity}
                  </p>
                </div>
              </div>

              {/* Right Panel: Technical Specifications & Leads Generation Form */}
              <div className="md:w-7/12 p-6 md:p-10 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-black text-red-500 uppercase tracking-widest">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                      API SPEC: {selectedProduct.apiGrade}
                    </span>
                    {selectedProduct.isBestSeller && (
                      <span className="text-xs font-mono font-bold text-black bg-amber-400 px-2 py-0.5 rounded-md">
                        TOP RATED
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed pt-2">
                    {selectedProduct.description}
                  </p>

                  {/* Core Benefits compliance checklist */}
                  <div className="space-y-2.5 pt-3">
                    <span className="text-xs font-mono font-black text-gray-400 uppercase tracking-wider block">
                      Guaranteed Fluid Shield Benefits:
                    </span>
                    {selectedProduct.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-0.5 rounded bg-red-500/10 text-red-500 mt-1 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <p className="text-xs text-gray-300 leading-snug">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  {/* Choose Pack Size for Quote */}
                  <div className="space-y-2 pt-4">
                    <span className="text-xs font-mono font-black text-gray-400 uppercase tracking-wider block">
                      Select Pack Size for Inquiry:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size) => {
                        const isSelected = inquirySize === size;
                        return (
                          <button
                            key={size}
                            onClick={() => setInquirySize(size)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-red-600 border border-red-500 text-white shadow-lg'
                                : 'bg-white/[0.02] border border-white/5 text-gray-400 hover:bg-white/[0.06] hover:text-white'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Immediate Dynamic Lead Generation Call-To-Action buttons */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="text-center text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                    Instant Wholesale & Retail Quote channels
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={getWhatsAppInquiryUrl(selectedProduct, inquirySize)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Order on WhatsApp</span>
                    </a>

                    <a
                      href={getEmailInquiryUrl(selectedProduct, inquirySize)}
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-gray-200 hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Get Email Quote</span>
                    </a>
                  </div>
                  
                  <p className="text-[10px] text-gray-600 text-center">
                    Authorized distributor contracts are available. We supply wholesale, bulk drums, and garages.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
