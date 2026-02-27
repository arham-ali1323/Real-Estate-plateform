"use client";
import { useState } from 'react';

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Building Illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5">
        <svg className="w-96 h-96" viewBox="0 0 200 200" fill="currentColor">
          <rect x="20" y="40" width="60" height="120" className="text-gray-400"/>
          <rect x="90" y="60" width="50" height="100" className="text-gray-400"/>
          <rect x="150" y="30" width="40" height="130" className="text-gray-400"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=600&fit=crop"
                  alt="Modern Apartment Building"
                  className="w-full h-auto rounded-3xl shadow-lg"
                />
              </div>

              {/* Second Image */}
              <div className="relative pt-12">
                <img
                  src="https://images.unsplash.com/photo-1565402170291-8491f14678db?w=500&h=600&fit=crop"
                  alt="Luxury Building"
                  className="w-full h-auto rounded-3xl shadow-lg"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500">25</div>
                  <div className="text-xs text-gray-600 font-semibold">YEARS</div>
                </div>
              </div>
              <div className="absolute inset-0 border-4 border-red-500 rounded-full animate-pulse"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center mb-2">
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="flex gap-1 justify-center my-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex -space-x-2 justify-center mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <p className="text-xs text-gray-600 font-semibold">2k+ satisfied customers</p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="mb-6">
              <span className="text-red-500 text-sm font-bold tracking-wider uppercase">
                ABOUT US
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Reliable Source for Outstanding Real Estate
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe a home is more than just a place it's where life begins. With over a decade of experience in the real estate industry, we specialize in connecting buyers, sellers, and investors with opportunities that match their vision
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Extensive Property Portfolio
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Experienced Real Estate Experts
                  </h3>
                </div>
              </div>
            </div>

            {/* List Items */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Expertise in residential & commercial properties.
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                A growing community of happy families.
              </li>
            </ul>

            <p className="text-gray-700 font-medium mb-8">
              We specialize in delivering strategic guidance, project development support
            </p>

            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all transform hover:scale-105">
              Know More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}