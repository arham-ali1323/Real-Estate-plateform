"use client";
import { useState } from 'react';
import { Building2, ChevronRight } from 'lucide-react';
import Hero from '@/components/ui/Hero';

const ProjectsPortfolio = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const projects = [
    {
      title: "Luxury Apartment",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      tag: "Apartment"
    },
    {
      title: "Eden Estate",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      tag: "Commercial"
    },
    {
      title: "Office Building",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      tag: "Commercial"
    },
    {
      title: "Business Center",
      category: "Mixed-Use",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      tag: "Commercial"
    },
    {
      title: "Vista at Council Square",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      tag: "Residential"
    },
    {
      title: "Eden Estate",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
      tag: "Commercial"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <Hero 
        title="Our Projects"
        breadcrumb="Home > Projects"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
        height="large"
        overlayOpacity={0.7}
      />

      {/* Tabs Section */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('recent')}
              className={`py-4 px-2 font-semibold whitespace-nowrap transition-colors relative ${
                activeTab === 'recent'
                  ? 'text-red-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Recent
              {activeTab === 'recent' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 px-2 font-semibold whitespace-nowrap transition-colors relative ${
                activeTab === 'all'
                  ? 'text-red-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Projects
              {activeTab === 'all' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`py-4 px-2 font-semibold whitespace-nowrap transition-colors relative ${
                activeTab === 'residential'
                  ? 'text-red-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Residential
              {activeTab === 'residential' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`py-4 px-2 font-semibold whitespace-nowrap transition-colors relative ${
                activeTab === 'commercial'
                  ? 'text-red-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Commercial
              {activeTab === 'commercial' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800">
                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-semibold">
                      {project.tag}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.category}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-red-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2">
              Load More Projects
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Building2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">150+</p>
              <p className="text-gray-400">Completed Projects</p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">45</p>
              <p className="text-gray-400">Ongoing Projects</p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">25+</p>
              <p className="text-gray-400">Awards Won</p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">1000+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;