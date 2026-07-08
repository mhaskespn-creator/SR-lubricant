/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, User, HelpCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    inquiryType: 'retail' // retail, wholesale, dealer, bulk
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API call persistence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save query locally to simulate server persistence
      const savedQueries = JSON.parse(localStorage.getItem('sr_lubricants_inquiries') || '[]');
      savedQueries.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      });
      localStorage.setItem('sr_lubricants_inquiries', JSON.stringify(savedQueries));

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        inquiryType: 'retail'
      });
    }, 1500);
  };

  const businessInfo = {
    name: 'Shobha SR Lubricant Headquarters',
    address: 'Plot No. 12, Industrial Estate Sector-B, Near Mercedes-Benz Junction, Pune, Maharashtra - 411018, India',
    phone: '+91 99999 99999',
    whatsapp: '+91 99999 99999',
    email: 'info@shobhasrlubricant.com',
    hours: [
      { days: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
      { days: 'Saturday', time: '9:00 AM - 5:00 PM' },
      { days: 'Sunday', time: 'Closed (Support via WhatsApp)' }
    ]
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Background neon dots */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-600/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-mono font-black tracking-[0.2em] text-red-500 uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mt-3">
            Initiate Distributor & Dealer Inquiries
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4">
            Have questions about bulk orders, dealer margins, or oil parameters? Send us a message or contact our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: GLASS CONTACT INFORMATION CARD */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl relative">
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
              
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-black">
                    Registered Brand
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">Shobha SR Lubricant</h3>
                  <p className="text-xs text-gray-400 mt-1">Power Every Engine. Protect Every Journey.</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-red-500 mt-1 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono tracking-wider text-gray-500 uppercase">Corporate Headquarters</h4>
                      <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                        {businessInfo.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-amber-400 mt-1 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono tracking-wider text-gray-500 uppercase">Hotline Support</h4>
                      <p className="text-sm text-gray-200 mt-1 font-mono font-bold">
                        {businessInfo.phone}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-blue-400 mt-1 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono tracking-wider text-gray-500 uppercase">Email Inquiries</h4>
                      <p className="text-sm text-gray-200 mt-1 font-mono">
                        {businessInfo.email}
                      </p>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Priority Button */}
                <div className="pt-4">
                  <a
                    href={`https://wa.me/919999999999?text=Hello%20Shobha%20SR%20Lubricant%2C%20I%20am%20interested%20in%20becoming%20a%20dealer%2Fwholesaler.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-500/25 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>

            {/* BUSINESS HOURS GLASS CARD */}
            <div className="bg-white/[0.01] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gray-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Business Operating Hours</h4>
              </div>
              <div className="space-y-3">
                {businessInfo.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-xs pb-2 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-gray-400">{h.days}</span>
                    <span className="text-white font-mono font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: INTERACTIVE FORM CONTAINER */}
          <div className="lg:col-span-7">
            
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-xl relative">
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">Submit Inquiry Proposal</h3>
                      <p className="text-xs text-gray-500 mt-1">Our dealership relations team will respond within 4 business hours.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Anand Kulkarni"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold">Contact Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. anand@yourdomain.com"
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                      </div>

                      {/* Inquiry Type */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold">Inquiry Type</label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        >
                          <option value="retail" className="bg-[#09090c]">Retail / Commuter Purchase</option>
                          <option value="wholesale" className="bg-[#09090c]">Wholesale / Auto Spare Shop</option>
                          <option value="dealer" className="bg-[#09090c]">Authorized Dealership Inquiry</option>
                          <option value="bulk" className="bg-[#09090c]">Industrial Bulk Barrels (210L)</option>
                        </select>
                      </div>

                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold">Your Proposal / Message</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please write about your fleet size, garage name, or custom chemical requirements..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg shadow-red-600/10 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Verifying Secure Channel...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Proposal Securely</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-white">Proposal Logged Successfully</h3>
                      <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                        Thank you. Your inquiry has been secured in our Local Database Ledger. A Shobha SR relations officer will reach out shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-lg text-xs font-bold bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* FULLY INTEGRATED GOOGLE MAP EMULATION CONTAINER */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.01] p-2 backdrop-blur-md">
          <div className="text-center py-2.5 bg-black/40 border-b border-white/5 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold">
              GPS Navigation Core - Live Headquarters Hub
            </span>
          </div>
          <iframe
            title="Shobha SR Lubricants Headquarters Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360341772!2d73.79222629618174!3d18.524545199622944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.15)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl opacity-85 hover:opacity-100 transition-opacity duration-500"
          ></iframe>
        </div>

      </div>
    </section>
  );
};
