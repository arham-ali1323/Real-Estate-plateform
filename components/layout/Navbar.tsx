"use client";
import Link from 'next/link';
import { useState } from 'react';
import OffcanvasMenu from '@/components/ui/OffcanvasMenu';
import { Check } from 'lucide-react';

interface NavItem {
  name: string;
  hasDropdown: boolean;
  items?: string[];
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const navItems: NavItem[] = [
    { 
      name: 'About', 
      hasDropdown: false,
    },
    { 
      name: 'Services', 
      hasDropdown: false,
    },
    { 
      name: 'Projects', 
      hasDropdown: true,
      items: ['Projects', 'Project Details']
    },
    { 
      name: 'Pages', 
      hasDropdown: true,
      items: ['Team', 'Pricing', 'FAQ',]
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
          <Link href="/" className="text-white font-bold text-xl">
            RealEsta
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    className="text-white hover:text-red-500 transition-colors flex items-center gap-1"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={`/${item.name.toLowerCase()}`}
                    className="text-white hover:text-red-500 transition-colors flex items-center gap-1"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`/${subItem.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOffcanvasOpen(true)}
              className="text-white hover:text-red-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <OffcanvasMenu
        isOpen={isOffcanvasOpen}
        onClose={() => setIsOffcanvasOpen(false)}
      />
    </div>
  );
}
