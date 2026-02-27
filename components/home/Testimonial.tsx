"use client";
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "IT companies stay abreast of emerging technologies and industry trends to remain competitive and provide innovative solutions to their clients.",
      author: "David Ade Smith",
      role: "Business Student",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      quote: "The team's professionalism and expertise exceeded our expectations. They delivered exactly what we needed.",
      author: "Sarah Johnson",
      role: "Real Estate Investor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      quote: "Outstanding service and attention to detail. Highly recommend for anyone looking for quality real estate solutions.",
      author: "Michael Chen",
      role: "Property Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop"
              alt="Team Collaboration"
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Right Side - Testimonial */}
          <div>
            <span className="text-red-500 text-sm font-bold tracking-wider uppercase mb-4 block">
              TESTIMONIAL
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Trusted by thousand of people & companies
            </h2>

            {/* Quote Icon */}
            <div className="mb-8">
              <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed">
              {current.quote}
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-gray-900 text-lg">{current.author}</div>
                <div className="text-gray-600">{current.role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-red-500 hover:bg-red-500 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-red-500 hover:bg-red-500 flex items-center justify-center transition-all group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4">
                <div className="text-6xl font-bold text-gray-200">560</div>
                <div className="text-xl font-bold text-red-500">+</div>
                <div className="text-gray-700">
                  Professional and Experienced staff ready to help you
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}