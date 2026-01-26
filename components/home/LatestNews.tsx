import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestNews = () => {
  const articles = [
    {
      category: "Apartments",
      title: "How to Evaluate a Commercial Real Estate Investment",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      category: "Interior Design",
      title: "The Role of ESG in Modern Property Development",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      category: "Real Estate",
      title: "Risk Factors to Consider Property Development",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-semibold mb-3 tracking-wider">
            OUR LATEST BLOG
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Latest News Update<br />& Articles
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 h-72">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-red-500 text-sm font-semibold">
                  {article.category}
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-red-500 transition-colors">
                  {article.title}
                </h3>

                <button className="flex items-center gap-2 text-gray-900 font-semibold group-hover:text-red-500 transition-colors">
                  <span>Read Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;