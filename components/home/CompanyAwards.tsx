"use client";
import { Award, Lightbulb, TrendingUp, Home } from 'lucide-react';

const CompanyAwards = () => {
  const awards = [
    {
      title: "Real Estate Super brand",
      description: "We stand for more than just property; we represent Real est transparency, innovation, and a client first approach",
      year: "2022",
      icon: Award
    },
    {
      title: "Innovative Design Studio",
      description: "We stand for more than just property; we represent Real est transparency, innovation, and a client first approach",
      year: "2023",
      icon: Lightbulb
    },
    {
      title: "Best Real Estate Consultant",
      description: "We stand for more than just property; we represent Real est transparency, innovation, and a client first approach",
      year: "2024",
      icon: TrendingUp
    },
    {
      title: "Residential Adviser of the Year",
      description: "We stand for more than just property; we represent Real est transparency, innovation, and a client first approach",
      year: "2025",
      icon: Home
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="mb-8 lg:mb-0">
            <p className="text-red-500 text-sm font-semibold mb-3 tracking-wider">ACHIEVEMENTS</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Company Awards<br />Achievements
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 leading-relaxed">
              We stand for more than just property; we represents Real est transparency, innovation, and a client first approach that puts your success at the center.
            </p>
          </div>
        </div>

        {/* Awards List */}
        <div className="space-y-1">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-12 gap-6 items-center p-8">
                {/* Award Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-500 transition-colors">
                    {award.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-gray-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                    <award.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Year */}
                <div className="lg:col-span-1 flex justify-end">
                  <span className="text-3xl font-bold text-gray-900">
                    {award.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyAwards;