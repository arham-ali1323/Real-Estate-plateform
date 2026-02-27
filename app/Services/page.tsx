"use client";
import React from 'react'
import { useState } from 'react';
import Hero from '@/components/ui/Hero';

export default function ServicesPage() {
     const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Real Estate Development',
      description: 'We are a modern real estate agency specializing in residential, commercial invesment properties.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Project Management',
      description: 'We are a modern real estate agency specializing in residential, commercial invesment properties.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Construction Management',
      description: 'We are a modern real estate agency specializing in residential, commercial invesment properties.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Architecture & Design',
      description: 'We are a modern real estate agency specializing in residential, commercial invesment properties.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Commercial Properties',
      description: 'We are a modern real estate agency specializing in residential, commercial invesment properties.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Real Estate Investment',
      description: 'We are a modern real estate agency specializing in residential, commercial invesment properties.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop'
    }
  ];
  return (
    <div>
      <Hero 
        title="Our Services"
        breadcrumb="Renvia > Our Services"
        backgroundImage="https://images.unsplash.com/photo-1544929283-74b397750174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="large"
        overlayOpacity={0.5}
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group bg-gray-50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                {/* Header */}
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 flex-1 pr-4">
                    {service.title}
                  </h3>
                  <button className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    hoveredCard === service.id 
                      ? 'bg-red-500 border-red-500 rotate-45 scale-110' 
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

                {/* Image */}
                <div className="px-6 pb-6">
                  <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredCard === service.id ? 'scale-110' : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Schedule Section */}
      <section className="relative py-20 bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=600&fit=crop')"
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Let's Request a Schedule For Free<br />Consultation
              </h2>
              <p className="text-white/80 text-lg">
                We give you both service training, building, renovation and design an opportunity
              </p>
            </div>
            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 whitespace-nowrap">
              Consultation Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Book Consultation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div>
              <span className="text-red-500 text-sm font-bold tracking-wider uppercase mb-4 block">
                CONTACT INFORMATION
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Book A Free IT Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                We are a modern real estate agency specializing in residential.
              </p>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Location</div>
                    <div className="text-sm text-gray-600">4517 Washington Ave, Manchester, Kentucky</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-sm text-gray-600">(629) 555-0129<br />(684) 555-0102</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-sm text-gray-600">michelle.rivera@example.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Social</div>
                    <div className="flex gap-2">
                      <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-red-500 rounded-full flex items-center justify-center transition group">
                        <span className="text-gray-600 group-hover:text-white">f</span>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-red-500 rounded-full flex items-center justify-center transition group">
                        <span className="text-gray-600 group-hover:text-white">in</span>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gray-100 hover:bg-red-500 rounded-full flex items-center justify-center transition group">
                        <span className="text-gray-600 group-hover:text-white">t</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Form Inputs */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition"
                />
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition"
                />
                
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition"
                />
                
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition resize-none"
                ></textarea>
                
                <button
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-4 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Request
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}