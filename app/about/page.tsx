"use client";
import { useState } from 'react';
import { TrendingUp, Users, Calendar, Search, MessageCircle, Phone, Mail } from 'lucide-react';
import Hero from '@/components/ui/Hero';

const About = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: "Apartments", count: 22 },
    { name: "Sell Property", count: 15 },
    { name: "Rent Property", count: 18 },
    { name: "Buy or Sell Houses", count: 25 },
    { name: "Rental Agreements", count: 12 },
    { name: "Land & Plots", count: 30 }
  ];

  const helpOptions = [
    {
      icon: MessageCircle,
      title: "Chat With Us",
      description: "Speak Directly With Our Support Team",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Help Line",
      description: "Get Immediate Support Via Phone",
      action: "Call Now: 00-123-456789"
    },
    {
      icon: Mail,
      title: "Contact Gateway",
      description: "Email Us Your Queries",
      action: "Send Email"
    }
  ];

  const services = [
    {
      icon: "💼",
      title: "Consultancy Design",
      description: "Expert architectural and interior design consultancy for your property needs."
    },
    {
      icon: "🎨",
      title: "Software Design",
      description: "Custom software solutions tailored for real estate management and operations."
    },
    {
      icon: "🛡️",
      title: "24/7 Online Support",
      description: "Round-the-clock customer support to address all your queries and concerns."
    }
  ];

  const howWeHelp = [
    "Understand Your Requirement & Your Unique Needs",
    "Offer The Best Solutions For Your Needs",
    "Share Result Driven Plan & Accountability",
    "Providing And Demonstrate Results"
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Corporate Responsability",
      description: "We believe that success is measured not only by financial returns but by positive impact on society and environment."
    },
    {
      icon: Users,
      title: "Proven Track Record",
      description: "With years of experience in the industry, our track record speaks for itself in delivering exceptional results."
    },
    {
      icon: Calendar,
      title: "Calculate Journey",
      description: "With 30+ yr of exp, we bring unparalleled expertise to each project, and provide you with competitive pricing."
    }
  ];

  const stats = [
    { value: "358+", label: "Project Completed", highlight: true },
    { value: "236+", label: "People Completed", highlight: true },
    { value: "4.3+", label: "Ratings Completed", highlight: true },
    { value: "25Y+", label: "Project Completed", highlight: true }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="About Us"
        breadcrumb="Home > About"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
        height="large"
        overlayOpacity={0.6}
      />
      
      {/* Main Content Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <p className="text-red-500 text-sm font-semibold mb-3 tracking-wider">
                ABOUT US
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                We created historic real estate ventures.
              </h2>

              {/* Building Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                  alt="Building"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2">
                Discover
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Column - Large Image and Description */}
            <div>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  we bring decades of experience in real estate strategy, advisory and management services. Founded on principles of trust, integrity, and innovation, we've grown from a small local firm into a trusted partner for clients nationwide.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  We have built a reputation for excellence by consistently delivering results that exceed expectations. Our comprehensive suite of services spans residential, commercial, and investment properties.
                </p>

                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
                    alt="Modern Building"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {stat.value}
                  </span>
                  {stat.highlight && (
                    <span className="text-red-500 text-2xl">+</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Image and Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&h=600&fit=crop"
                  alt="Real Estate Planning"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* About the Service */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  About the service
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At RealEsta, we're much more than just a property platform—we're your trusted partner in every step of your real estate journey. Founded on principles of transparency, innovation, and exceptional service, we connect buyers, sellers, and renters with properties that match their unique needs and aspirations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With years of experience in the property market, our team of dedicated professionals brings deep local knowledge, cutting-edge technology, and personalized attention to every transaction. Whether you're purchasing your first home, investing in commercial real estate, or seeking the perfect rental, we provide comprehensive support designed to make your experience smooth, successful, and stress-free.
                </p>
              </div>

              {/* Second Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1000&h=500&fit=crop"
                  alt="Real Estate Team"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* How We Can Help */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Can Help
                </h3>
                <ul className="space-y-4">
                  {howWeHelp.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-900 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Offered */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Services Offered
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all"
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Search className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Category</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="w-full flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                        <span className="text-gray-900">{category.name}</span>
                        <span className="text-gray-500 text-sm">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Any Help */}
              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Need Any Help?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Ready to help, Call us now for support
                </p>
                
                <div className="space-y-4">
                  {helpOptions.map((option, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{option.title}</h4>
                        <p className="text-gray-400 text-xs mb-1">{option.description}</p>
                        <p className="text-red-500 text-sm font-semibold">{option.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
