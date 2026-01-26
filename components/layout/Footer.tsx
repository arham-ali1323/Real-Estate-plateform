"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Send, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1D24] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. NEW CTA SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 pb-12 border-b border-white/10 gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Join our AI-driven Creative Community!
            </h2>
            <p className="text-gray-400 text-lg">
              Let's talk to us, share your dream project and we will transform it into reality
            </p>
          </div>
          <Link 
            href="/contact" 
            className="bg-[#D91F44] hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all active:scale-95 whitespace-nowrap"
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* --- 2. MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="text-[#D91F44]">
                 <LogoIcon />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-none">LOGO</h2>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Real Estate Company</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Renviais a trusted real estate group specializing residential, commercial, investment properties commitment.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="bg-white/5 hover:bg-[#D91F44] p-3 rounded-md transition-all group">
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex gap-1 mb-6">
              <div className="w-8 h-[2px] bg-[#D91F44]" />
              <div className="w-2 h-[2px] bg-[#D91F44]" />
            </div>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Home', 'About', 'Our Services', 'Our Projects', 'Contact Us'].map((link) => (
                <li key={link}><Link href="#" className="hover:text-[#D91F44] transition">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <div className="flex gap-1 mb-6">
              <div className="w-8 h-[2px] bg-[#D91F44]" />
              <div className="w-2 h-[2px] bg-[#D91F44]" />
            </div>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Investment & Capital', 'Market Insights', 'Architecture & Design', 'Real Estate Development', 'Project Management'].map((service) => (
                <li key={service}><Link href="#" className="hover:text-[#D91F44] transition">{service}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <div className="flex gap-1 mb-6">
              <div className="w-8 h-[2px] bg-[#D91F44]" />
              <div className="w-2 h-[2px] bg-[#D91F44]" />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Subscribe to Our Newsletter. Regular inspection and feedback mechanisms
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border border-white/20 rounded-full py-4 px-6 focus:outline-none focus:border-[#D91F44] transition text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D91F44] p-3 rounded-full hover:bg-rose-700 transition">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* --- 3. BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>Copyright © 2026 US. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Custom Logo SVG to match the Renvia house icon
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V8l7-5 7 5v13" />
    <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
  </svg>
);

export default Footer;