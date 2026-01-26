"use client";
import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const team = [
  { name: "Leslie Alexander", role: "President of Sales", image: "/team1.jpg" },
  { name: "Michael Bennett", role: "President of Sales", image: "/team2.jpg" },
  { name: "Daniel Carter", role: "President of Sales", image: "/team3.jpg" },
  { name: "Leslie Alexander", role: "President of Sales", image: "/team4.jpg" },
];

export default function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-rose-500" />
            <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">
              Our Experts
            </span>
            <div className="w-8 h-[1px] bg-rose-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1D24]">
            Worldwide executive leadership
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group flex flex-col items-center">
              {/* Image Container with Rounded Corners */}
              <div className="relative w-full aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="text-center space-y-1 mb-6">
                <h3 className="text-xl font-bold text-[#1A1D24] group-hover:text-rose-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <button 
                    key={i} 
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-rose-600 hover:border-rose-600 hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}