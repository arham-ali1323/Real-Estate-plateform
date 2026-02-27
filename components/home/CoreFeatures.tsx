"use client";
import { useState } from 'react';

export default function CoreFeaturesSection() {
  const features = [
    {
      id: 1,
      icon: '🎯',
      title: 'Data-Driven Strategy',
      description: 'Our goal is semi incididunt text bolt fore frequency rate in industry leading'
    },
    {
      id: 2,
      icon: '🤝',
      title: 'Dedicated Client Support',
      description: 'Our goal is semi incididunt text bolt fore frequency rate in industry leading'
    },
    {
      id: 3,
      icon: '💎',
      title: 'Compliance Expertise',
      description: 'Our goal is semi incididunt text bolt fore frequency rate in industry leading'
    },
    {
      id: 4,
      icon: '🤔',
      title: 'Future-Ready Thinking',
      description: 'Our goal is semi incididunt text bolt fore frequency rate in industry leading'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Modern Building"
                className="w-full h-auto"
              />
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">80+</div>
                  <div className="text-sm text-gray-600">Years of experience</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-3xl font-bold text-gray-900 mb-1">1.5k+</div>
                  <div className="text-sm text-gray-600">Projects completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Client satisfaction</div>
                </div>
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 rounded-full transition-all transform hover:scale-105">
                Learn Now
              </button>
            </div>
          </div>

          {/* Right Side - Features */}
          <div>
            <span className="text-red-500 text-sm font-bold tracking-wider uppercase mb-4 block">
              CORE FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A true collaborator in all facets of growth
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              we are more than just real estate advisors we are long-term partners in your property journey. With decades of combined.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Data driven for strategic and innovative
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Provide full services with accuracy speed
              </li>
            </ul>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className={`text-3xl mb-3 transition-transform duration-300 ${
        isHovered ? 'scale-110' : ''
      }`}>
        {feature.icon}
      </div>
      <h3 className={`font-bold mb-2 transition-colors ${
        isHovered ? 'text-red-500' : 'text-gray-900'
      }`}>
        {feature.title}
      </h3>
      <p className="text-xs text-gray-600 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}