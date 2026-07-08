/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Facebook, Instagram, Youtube, MessageSquare, Disc3, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home Base' },
    { id: 'about', label: 'About Science' },
    { id: 'products', label: 'Formulations' },
    { id: 'services', label: 'Smart Advisor' },
    { id: 'contact', label: 'Support Desk' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: <Facebook className="w-4 h-4" /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: <Instagram className="w-4 h-4" /> },
    { name: 'YouTube', href: 'https://youtube.com', icon: <Youtube className="w-4 h-4" /> },
    { name: 'WhatsApp', href: 'https://wa.me/919999999999', icon: <MessageSquare className="w-4 h-4 fill-current" /> }
  ];

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Glow lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/25 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        
        {/* Logo and Brand tagline description column */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer group w-fit"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center overflow-hidden shadow-lg shadow-red-500/10">
              <Disc3 className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tight text-white leading-none">
                SHOBHA <span className="text-red-500 text-sm font-black align-super">SR</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase leading-none mt-1">
                LUBRICANT
              </span>
            </div>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm">
            High-performance engine lubricants and greases, formulating absolute boundary layers that defeat heat, wear, and corrosion across cars, motorbikes, and heavy transport machinery.
          </p>

          <div className="flex items-center gap-2 text-red-500 font-mono text-[10px] font-black uppercase tracking-widest pt-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Power Every Engine. Protect Every Journey.</span>
          </div>

          {/* Social Icons List */}
          <div className="flex items-center gap-3 pt-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-all duration-300 cursor-pointer"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Quick Site Links Column */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="text-xs font-mono font-black text-white uppercase tracking-widest border-b border-white/5 pb-2">
            Quick Site Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="text-xs text-gray-400 hover:text-red-400 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sales & Contact Column */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <h4 className="text-xs font-mono font-black text-white uppercase tracking-widest border-b border-white/5 pb-2">
            Authorized Sales Desk
          </h4>
          <ul className="space-y-3.5 text-xs text-gray-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span>Plot No. 12, Industrial Estate Sector-B, Pune, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-mono">{'+91 99999 99999'}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-mono">{'info@shobhasrlubricant.com'}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright block */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-gray-500">
        <div>
          <span>© {currentYear} Shobha SR Lubricant Private Limited. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-white transition-colors">Boundary Protection Laws</a>
          <a href="#contact" className="hover:text-white transition-colors">Distributor Policies</a>
          <a href="#products" className="hover:text-white transition-colors">ISO SDS Sheets</a>
        </div>
      </div>

    </footer>
  );
};
