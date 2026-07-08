/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { ExtraSections } from './components/ExtraSections';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate top padding if needed, or just let scrollIntoView take care of it
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Monitor scroll height to auto-select current viewing section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white antialiased font-sans relative overflow-x-hidden">
      
      {/* Elegant Dark Background Ambient Glows */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-[#E53935]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[30%] left-[-200px] w-[500px] h-[500px] bg-[#FFD54F]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[25%] right-[-200px] w-[600px] h-[600px] bg-[#E53935]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[5%] left-[-150px] w-[500px] h-[500px] bg-[#FFD54F]/3 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* 1. FLOATING BRAND NAVBAR */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigate={handleNavigate}
      />

      {/* 2. EPIC HERO STAGE */}
      <HeroSection
        onExploreProducts={() => handleNavigate('products')}
        onContactUs={() => handleNavigate('contact')}
      />

      {/* 3. CORE ABOUT SCIENCE */}
      <AboutSection />

      {/* 4. PRODUCT PORTFOLIO METALLIC GRID */}
      <ProductsSection />

      {/* 5. SERVICES & INTELLIGENT MATCH FINDER */}
      <ServicesSection />

      {/* 6. EXTRA VALUE: REVIEWS, STATS, FAQ ACCORDION */}
      <ExtraSections />

      {/* 7. HIGH CONVERSION CONTACT CHANNELS */}
      <ContactSection />

      {/* 8. BRAND FOOTER */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
