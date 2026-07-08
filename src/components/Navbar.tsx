/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Award, Disc3, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 rounded-2xl transition-all duration-500 border ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border-white/10 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            : 'bg-white/[0.04] backdrop-blur-md border-white/[0.06] py-4'
        }`}
        initial={{ y: -100, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <div className="px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand Title */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* Spinning Oil Ring Shield Icon */}
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center overflow-hidden shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-300">
              <Disc3 className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-black text-lg md:text-xl tracking-tight text-white leading-none">
                SHOBHA <span className="text-red-500 text-sm font-black align-super">SR</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase leading-none mt-1">
                LUBRICANT
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Tabs */}
          <div className="hidden md:flex items-center gap-1 bg-black/30 p-1 rounded-xl border border-white/5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{ color: isActive ? '#FFFFFF' : '#9CA3AF' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg -z-10 shadow-lg shadow-red-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action Button: WhatsApp Inquiry */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hello%20Shobha%20SR%20Lubricant%2C%20I%20am%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer border border-emerald-400/20"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-black/50 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {navItems.map((item, index) => {
                const isActive = activeTab === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left text-3xl font-black tracking-wide uppercase flex items-center justify-between group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className={isActive ? 'text-red-500' : 'text-gray-400 group-hover:text-white transition-colors'}>
                      {item.label}
                    </span>
                    <motion.span
                      className="w-10 h-[2px] bg-red-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Contact Shortcuts */}
            <motion.div
              className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="https://wa.me/919999999999"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm tracking-wider uppercase"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="flex items-center justify-between text-xs text-gray-500 font-mono mt-2">
                <span>Power Every Engine.</span>
                <span>Protect Every Journey.</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
