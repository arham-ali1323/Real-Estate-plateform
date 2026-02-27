"use client";
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import AnimatedSection from '@/components/ui/AnimatedSection';

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Free Plan",
      price: "$00",
      description: "Completely offering standard minimum",
      features: [
        { text: "Unlimited Links", available: true },
        { text: "Qrcode of product links", available: true },
        { text: "Own analytics platform", available: false },
        { text: "Chat support", available: false },
        { text: "Optimize hashtags", available: false },
        { text: "Unlimited users", available: false },
        { text: "24/7 Phn Concierge Support", available: false }
      ],
      buttonText: "Join for free",
      popular: false
    },
    {
      name: "Business Plan",
      price: "$84",
      description: "Completely offering standard minimum",
      features: [
        { text: "Unlimited Links", available: true },
        { text: "Qrcode of product links", available: true },
        { text: "Own analytics platform", available: true },
        { text: "Chat support", available: true },
        { text: "Optimize hashtags", available: true },
        { text: "Unlimited users", available: false },
        { text: "24/7 Phn Concierge Support", available: false }
      ],
      buttonText: "Join Now",
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: "$95",
      description: "Completely offering standard minimum",
      features: [
        { text: "Unlimited Links", available: true },
        { text: "Qrcode of product links", available: true },
        { text: "Own analytics platform", available: true },
        { text: "Chat support", available: true },
        { text: "Optimize hashtags", available: true },
        { text: "Unlimited users", available: true },
        { text: "24/7 Phn Concierge Support", available: true }
      ],
      buttonText: "Join Now",
      popular: false
    }
  ];

  const partners = [
    { 
      name: "VIRTURE", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&bg=ffffff"
    },
    { 
      name: "BESNIK", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&bg=ffffff"
    },
    { 
      name: "CORLEC", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&bg=ffffff"
    },
    { 
      name: "CONSTRUCTION", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&bg=ffffff"
    },
    { 
      name: "ARCHITECT", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&bg=ffffff"
    },
    { 
      name: "PROPERTIES", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&bg=ffffff"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero 
        title="Pricing Plans"
        breadcrumb="Home > Pricing"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=600&fit=crop"
        height="large"
        overlayOpacity={0.5}
      />
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Suits Package
            </h2>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-red-500 text-white shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 ${
                  plan.popular
                    ? 'border-red-500 shadow-xl'
                    : 'border-gray-200'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {plan.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-full font-semibold mb-8 transition-all ${
                    plan.popular
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3"
                    >
                      {feature.available ? (
                        <Check className="w-5 h-5 text-red-500 shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 shrink-0" />
                      )}
                      <span
                        className={
                          feature.available
                            ? 'text-gray-900'
                            : 'text-gray-400'
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Partners Section - Auto Scrolling Slider */}
          <div className="border-t border-gray-200 pt-12 overflow-hidden">
            <p className="text-center text-gray-600 mb-8">
              We have great and amazing working partner Clients
            </p>
            
            <div className="relative">
              {/* Auto-scrolling slider */}
              <div className="flex animate-scroll-x items-center">
                {/* First set of partners */}
                {partners.map((partner, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex flex-col items-center justify-center px-8 min-w-[200px]"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-16 w-auto object-contain mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-gray-600 font-medium text-sm text-center">
                      {partner.name}
                    </span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partners.map((partner, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex flex-col items-center justify-center px-8 min-w-[200px]"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-16 w-auto object-contain mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-gray-600 font-medium text-sm text-center">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add custom styles for animation */}
          <style jsx>{`
            @keyframes scroll-x {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-x {
              animation: scroll-x 20s linear infinite;
            }
            
            .animate-scroll-x:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
