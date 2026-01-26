"use client";
import { useState } from 'react';

export default function RecentProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Luxury Apartment',
      category: 'Resedential Project',
      tag: 'Apartment',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Eden Estate',
      category: 'Resedential Project',
      tag: 'Apartment',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Business Center',
      category: 'Resedential Project',
      tag: 'Apartment',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'Office Building',
      category: 'New York, NY',
      tag: 'Apartment',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side - Header */}
          <div className="lg:col-span-4">
            <span className="text-red-500 text-sm font-bold tracking-wider uppercase mb-4 block">
              PROJECTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Examine Our Most Recent Project.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are a modern real estate agency specializing in residential, commercial and invesment properties.
            </p>
            <button className="bg-linear-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all transform hover:scale-105">
              See more
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Side - Projects List */}
          <div className="lg:col-span-8 space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-6 group cursor-pointer"
    >
      {/* Number */}
      <div className="text-gray-200 text-5xl font-bold">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-red-500 text-sm font-semibold">{project.category}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">{project.tag}</span>
          </div>
          <h3 className={`text-2xl font-bold transition-colors ${
            isHovered ? 'text-red-500' : 'text-gray-900'
          }`}>
            {project.title}
          </h3>
        </div>

        {/* Image */}
        <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : ''
            }`}
          />
        </div>
      </div>

      {/* Arrow */}
      <button className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
        isHovered 
          ? 'bg-red-500 border-red-500 rotate-45' 
          : 'border-gray-300 group-hover:border-red-500'
      }`}>
        <svg 
          className={`w-5 h-5 transition-all ${
            isHovered ? 'text-white' : 'text-gray-600'
          }`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}