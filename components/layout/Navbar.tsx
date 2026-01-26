"use client";
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  name: string;
  hasDropdown: boolean;
  items?: string[];
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { 
      name: 'About', 
      hasDropdown: false,
    },
    { 
      name: 'Services', 
      hasDropdown: true,
      items: ['Services', 'Service Details']
    },
    { 
      name: 'Projects', 
      hasDropdown: true,
      items: ['Projects', 'Project Details']
    },
    { 
      name: 'Pages', 
      hasDropdown: true,
      items: ['Team', 'Team Details', 'Testimonials', 'FAQ',]
    },
    { 
      name: 'Blog', 
      hasDropdown: true,
      items: ['Blog', 'Blog Details']
    },
    { 
      name: 'Contact', 
      hasDropdown: false, 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <nav className="bg-gray-900 rounded-2xl px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <div>
                <Link href="/"><div className="text-xl font-bold text-white">Renvia</div>
                <div className="text-xs text-gray-400 tracking-wide">REAL ESTATE COMPANY</div></Link>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <Link
                  href={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center gap-1 text-sm cursor-pointer hover:scale-105 relative group"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {/* Invisible bridge to prevent gap */}
                {item.hasDropdown && (
                  <div 
                    className="absolute top-full left-0 right-0 h-2 z-40"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  />
                )}
                
                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-500 text-sm transition-all duration-300 cursor-pointer hover:translate-x-1"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-full transition flex items-center gap-2 text-sm">
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-red-500 hover:bg-red-50 transition">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}