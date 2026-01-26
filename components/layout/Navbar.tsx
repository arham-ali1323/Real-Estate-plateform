"use client";
import { useState } from 'react';

interface NavItem {
  name: string;
  hasDropdown: boolean;
  items?: string[];
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { 
      name: 'Home', 
      hasDropdown: true,
      items: ['Home V1', 'Home V2', 'Home V3']
    },
    { 
      name: 'About', 
      hasDropdown: false 
    },
    { 
      name: 'Services', 
      hasDropdown: true,
      items: ['Real Estate Development', 'Construction Management', 'Commercial Properties', 'Investment']
    },
    { 
      name: 'Projects', 
      hasDropdown: true,
      items: ['All Projects', 'Residential', 'Commercial', 'Industrial']
    },
    { 
      name: 'Pages', 
      hasDropdown: true,
      items: ['Team', 'Testimonials', 'FAQ', 'Gallery']
    },
    { 
      name: 'Blog', 
      hasDropdown: true,
      items: ['Blog Grid', 'Blog List', 'Blog Details']
    },
    { 
      name: 'Contact', 
      hasDropdown: false 
    }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-12 h-12 text-red-500" viewBox="0 0 48 48" fill="currentColor">
                <path d="M24 4L8 16v20h10V26h12v10h10V16L24 4z"/>
                <circle cx="24" cy="18" r="2" fill="white"/>
                <rect x="20" y="30" width="8" height="6" fill="white"/>
              </svg>
              <div>
                <div className="text-2xl font-bold text-gray-900">Renvia</div>
                <div className="text-xs text-gray-600 tracking-wide">REAL ESTATE COMPANY</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`font-medium transition flex items-center gap-1 ${
                  item.name === 'Home' ? 'text-gray-900' : 'text-gray-700 hover:text-red-500'
                }`}>
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                    {item.items?.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 transition"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105">
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="hidden lg:flex w-12 h-12 border border-gray-300 rounded-full items-center justify-center hover:border-red-500 hover:bg-red-50 transition">
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 font-medium rounded-lg transition flex items-center justify-between">
                    {item.name}
                    {item.hasDropdown && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full">
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}