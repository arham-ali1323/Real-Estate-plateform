"use client";
import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import AnimatedSection from '@/components/ui/AnimatedSection';

const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Leslie Alexander",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
    },
    {
      name: "Michael Bennett",
      role: "Property Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
    },
    {
      name: "Darlene Carter",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop"
    },
    {
      name: "Jenny Wilson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
    },
    {
      name: "Albert Flores",
      role: "Sales Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
    },
    {
      name: "Bessie Cooper",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop"
    }
  ];

  const partners = [
    { name: "VIRTURE", logo: "V" },
    { name: "BESNIK.", logo: "B" },
    { name: "CORLEC", logo: "C" },
    { name: "CONSTRUCTION", logo: "CO" },
    { name: "REALESTATE", logo: "RE" },
    { name: "PROPERTY", logo: "P" },
    { name: "INVESTMENT", logo: "I" },
    { name: "DEVELOPMENT", logo: "D" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="Our Team"
        breadcrumb="Home > Team"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-798c554e17a0?w=1920&h=600&fit=crop"
        height="large"
        overlayOpacity={0.6}
      />
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold mb-3 tracking-wider">
              OUR TEAM
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Meet the leadership team
            </h2>
          </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <Link 
              key={index}
              href={`/team/TeamDetails/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group cursor-pointer block"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-200 mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name Card */}
              <div className="bg-white border-2 border-gray-900 rounded-xl p-4 -mt-10 mx-4 relative z-10 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Partners Section - Auto-scrolling Brand Slider */}
        <div className="border-t border-gray-200 pt-12 overflow-hidden">
          <p className="text-center text-gray-600 mb-8">
            We have great and amazing working partner Clients
          </p>
          
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div 
                  key={`first-${index}`}
                  className="shrink-0 w-48 flex items-center justify-center mx-4"
                >
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-300 transition-colors">
                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                      <span className="text-white font-bold text-xl">{partner.logo}</span>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm text-center block">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {partners.map((partner, index) => (
                <div 
                  key={`second-${index}`}
                  className="shrink-0 w-48 flex items-center justify-center mx-4"
                >
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-300 transition-colors">
                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                      <span className="text-white font-bold text-xl">{partner.logo}</span>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm text-center block">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `
      }} />
      </div>
    </div>
  );
};

export default LeadershipTeam;
