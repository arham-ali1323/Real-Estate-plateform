"use client";
import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import { MapPin, Calendar, Users, Building2, Check, ChevronRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const ProjectDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const projectImages = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop"
  ];

  const projectSpecs = [
    { label: "Project Type", value: "Luxury Residential" },
    { label: "Total Units", value: "48 Apartments" },
    { label: "Area Range", value: "1,200 - 3,500 sq ft" },
    { label: "Completion Date", value: "December 2024" },
    { label: "Architect", value: "Modern Design Studio" },
    { label: "Location", value: "Downtown District" }
  ];

  const amenities = [
    "Swimming Pool & Spa",
    "Fitness Center & Yoga Studio",
    "Rooftop Terrace & Lounge",
    "24/7 Concierge Service",
    "Underground Parking",
    "Smart Home Technology",
    "Private Balconies",
    "Pet-Friendly Facilities"
  ];

  const floorPlans = [
    { name: "Studio Apartment", size: "650 sq ft", beds: 1, baths: 1, price: "$2,500/month" },
    { name: "1 Bedroom Deluxe", size: "950 sq ft", beds: 1, baths: 1, price: "$3,200/month" },
    { name: "2 Bedroom Premium", size: "1,400 sq ft", beds: 2, baths: 2, price: "$4,500/month" },
    { name: "3 Bedroom Penthouse", size: "2,800 sq ft", beds: 3, baths: 3, price: "$8,500/month" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero 
        title="Luxury Sky Residence"
        breadcrumb="Home > Projects > Project Details"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
        height="large"
        overlayOpacity={0.7}
      />

      {/* Project Gallery */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={projectImages[activeImage]}
                  alt="Project Main View"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Project
                  </span>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {projectImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative overflow-hidden rounded-xl ${activeImage === index ? 'ring-2 ring-red-500' : ''}`}
                >
                  <img 
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-24 lg:h-32 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Tabs */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-8 border-b border-gray-200 mb-8">
                {['overview', 'specifications', 'floor-plans', 'location'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 font-semibold capitalize transition-colors relative ${
                      activeTab === tab ? 'text-red-500' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.replace('-', ' ')}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Project Overview</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Experience luxury living at its finest with our flagship residential development. 
                      The Luxury Sky Residence represents the pinnacle of modern urban living, combining 
                      cutting-edge architecture with unparalleled amenities and a prime downtown location.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This 25-story tower features 48 meticulously designed residences, each offering 
                      breathtaking city views, premium finishes, and smart home technology. The building 
                      has been designed with sustainability in mind, featuring energy-efficient systems 
                      and eco-friendly materials throughout.
                    </p>
                  </div>

                  {/* Amenities Grid */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Premium Amenities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Specifications</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {projectSpecs.map((spec, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <p className="text-gray-500 text-sm mb-1">{spec.label}</p>
                        <p className="text-gray-900 text-xl font-semibold">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'floor-plans' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Available Floor Plans</h2>
                  <div className="space-y-4">
                    {floorPlans.map((plan, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                          <div className="flex gap-4 text-gray-500 text-sm">
                            <span>{plan.size}</span>
                            <span>{plan.beds} Beds</span>
                            <span>{plan.baths} Baths</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-red-500">{plan.price}</span>
                          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                            Inquire
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'location' && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Prime Location</h2>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-red-500" />
                      <span className="text-lg text-gray-900">123 Downtown Avenue, Business District</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Situated in the heart of the city, this development offers unparalleled access to 
                      business centers, shopping districts, fine dining, and entertainment venues.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-2xl font-bold text-red-500">5 min</p>
                        <p className="text-gray-500 text-sm">to Metro Station</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-2xl font-bold text-red-500">10 min</p>
                        <p className="text-gray-500 text-sm">to Airport</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-2xl font-bold text-red-500">2 min</p>
                        <p className="text-gray-500 text-sm">to Shopping Center</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Status Card */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Project Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-500">Completion</p>
                      <p className="font-semibold text-gray-900">Dec 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-500">Total Units</p>
                      <p className="font-semibold text-gray-900">48 Apartments</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-500">Units Sold</p>
                      <p className="font-semibold text-gray-900">32 / 48</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500">67% Sold</p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-red-500 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Interested?</h3>
                <p className="text-red-100 mb-6">
                  Schedule a private tour or request more information about this project.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-white text-red-500 hover:bg-gray-100 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Schedule Tour
                  </button>
                  <button className="w-full border-2 border-white text-white hover:bg-white hover:text-red-500 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Request Info
                  </button>
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Similar Projects</h3>
                <div className="space-y-4">
                  {[
                    { name: "Marina Bay Residences", location: "Waterfront District" },
                    { name: "Parkview Heights", location: "Green Valley" },
                    { name: "Urban Loft Collection", location: "Arts District" }
                  ].map((project, index) => (
                    <Link 
                      key={index}
                      href="/project-details"
                      className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors group shadow-sm"
                    >
                      <div>
                        <p className="font-semibold text-gray-900 group-hover:text-red-500 transition-colors">{project.name}</p>
                        <p className="text-sm text-gray-500">{project.location}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                    </Link>
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

export default ProjectDetails;
