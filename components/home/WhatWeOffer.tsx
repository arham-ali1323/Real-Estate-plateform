"use client";
import { useState } from 'react';

export default function WhatWeOfferSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Real Estate Development',
      description: 'we are more than just real estate advisors we are long-term partners in your property',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Construction Management',
      description: 'we are more than just real estate advisors we are long-term partners in your property',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Commercial Properties',
      description: 'we are more than just real estate advisors we are long-term partners in your property',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Real Estate Investment',
      description: 'we are more than just real estate advisors we are long-term partners in your property',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm font-bold tracking-wider uppercase mb-4 block">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We Develop Excellent Real Estate And<br />
            Infrastructural Projects.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Title & Arrow */}
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 flex-1">
                  {service.title}
                </h3>
                <button className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  hoveredCard === service.id 
                    ? 'bg-red-500 border-red-500 rotate-45' 
                    : 'border-gray-300 group-hover:border-red-500'
                }`}>
                  <svg 
                    className={`w-5 h-5 transition-all ${
                      hoveredCard === service.id ? 'text-white' : 'text-gray-600'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Description */}
              <div className="px-6 pb-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredCard === service.id ? 'scale-110' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}