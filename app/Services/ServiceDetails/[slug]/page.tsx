"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Clock, CheckCircle, Users, Target, Award } from 'lucide-react';

const serviceData = {
  "real-estate-development": {
    title: "Real Estate Development",
    description: "Comprehensive real estate development services from concept to completion, transforming visions into reality.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    fullDescription: "Our real estate development services encompass the entire project lifecycle, from initial site acquisition and feasibility studies to construction management and final delivery. We specialize in creating sustainable, profitable developments that meet market demands while exceeding investor expectations.",
    expertise: ["Site Acquisition", "Feasibility Studies", "Project Planning", "Construction Management", "Market Analysis"],
    features: [
      "End-to-end project management",
      "Sustainable development practices",
      "Market-driven approach",
      "Risk mitigation strategies",
      "Quality assurance protocols"
    ],
    process: [
      "Initial consultation and requirements gathering",
      "Site selection and feasibility analysis",
      "Design and planning phase",
      "Permit acquisition and approvals",
      "Construction and project management",
      "Final delivery and handover"
    ],
    email: "development@realestate.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    duration: "6-24 months",
    teamSize: "15-25 professionals"
  },
  "project-management": {
    title: "Project Management",
    description: "Expert project management services ensuring timely delivery and budget adherence for real estate projects.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    fullDescription: "Our project management services provide comprehensive oversight and coordination of real estate projects, ensuring that every aspect runs smoothly from inception to completion. We employ industry-leading methodologies and cutting-edge technology to deliver projects on time and within budget.",
    expertise: ["Project Planning", "Budget Management", "Timeline Coordination", "Quality Control", "Stakeholder Communication"],
    features: [
      "Certified project managers",
      "Real-time progress tracking",
      "Budget optimization",
      "Risk management",
      "Stakeholder collaboration"
    ],
    process: [
      "Project scope definition",
      "Resource allocation and planning",
      "Timeline development",
      "Execution monitoring",
      "Quality assurance checks",
      "Project delivery and review"
    ],
    email: "pm@realestate.com",
    phone: "+1 (555) 234-5678",
    location: "Los Angeles, CA",
    duration: "Project-based",
    teamSize: "8-15 professionals"
  },
  "construction-management": {
    title: "Construction Management",
    description: "Professional construction management services delivering quality buildings with exceptional attention to detail.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    fullDescription: "Our construction management services provide expert oversight of all construction activities, ensuring that projects are built to the highest standards of quality, safety, and efficiency. We coordinate between architects, engineers, contractors, and suppliers to deliver exceptional results.",
    expertise: ["Construction Oversight", "Quality Control", "Safety Management", "Subcontractor Coordination", "Material Procurement"],
    features: [
      "Licensed construction managers",
      "Safety-first approach",
      "Quality assurance programs",
      "Cost control measures",
      "Sustainable building practices"
    ],
    process: [
      "Pre-construction planning",
      "Contractor selection and management",
      "Construction oversight",
      "Quality inspections",
      "Safety compliance monitoring",
      "Project completion and handover"
    ],
    email: "construction@realestate.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, IL",
    duration: "12-36 months",
    teamSize: "20-40 professionals"
  },
  "architecture-design": {
    title: "Architecture & Design",
    description: "Innovative architectural and design services creating functional, aesthetic, and sustainable spaces.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    fullDescription: "Our architecture and design services combine creativity with functionality to deliver spaces that inspire and serve their purpose. We work closely with clients to understand their vision and translate it into innovative, practical designs that exceed expectations.",
    expertise: ["Architectural Design", "Interior Design", "3D Visualization", "Space Planning", "Sustainable Design"],
    features: [
      "Award-winning architects",
      "Cutting-edge design technology",
      "Sustainable design solutions",
      "Client-centric approach",
      "Innovative space utilization"
    ],
    process: [
      "Client consultation and vision development",
      "Concept design and visualization",
      "Detailed architectural planning",
      "Interior design development",
      "Construction documentation",
      "Design implementation support"
    ],
    email: "design@realestate.com",
    phone: "+1 (555) 456-7890",
    location: "Miami, FL",
    duration: "2-6 months",
    teamSize: "5-12 professionals"
  },
  "commercial-properties": {
    title: "Commercial Properties",
    description: "Specialized services for commercial real estate including office spaces, retail centers, and industrial properties.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    fullDescription: "Our commercial properties services focus on developing and managing high-performance commercial real estate that maximizes value for investors and provides optimal environments for businesses. We understand the unique requirements of commercial spaces and deliver solutions that drive success.",
    expertise: ["Commercial Development", "Leasing Management", "Property Marketing", "Tenant Relations", "Asset Optimization"],
    features: [
      "Market analysis and insights",
      "Tenant acquisition strategies",
      "Property optimization",
      "Lease negotiation expertise",
      "Asset value enhancement"
    ],
    process: [
      "Market research and analysis",
      "Property strategy development",
      "Tenant identification and acquisition",
      "Lease negotiation and management",
      "Property marketing and promotion",
      "Ongoing asset management"
    ],
    email: "commercial@realestate.com",
    phone: "+1 (555) 567-8901",
    location: "Seattle, WA",
    duration: "Ongoing management",
    teamSize: "10-20 professionals"
  },
  "real-estate-investment": {
    title: "Real Estate Investment",
    description: "Strategic investment services identifying and managing high-potential real estate opportunities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    fullDescription: "Our real estate investment services provide comprehensive support for investors looking to capitalize on real estate opportunities. We combine market expertise with financial acumen to identify, evaluate, and manage investments that deliver superior returns.",
    expertise: ["Investment Analysis", "Portfolio Management", "Market Research", "Risk Assessment", "Financial Modeling"],
    features: [
      "Data-driven investment strategies",
      "Comprehensive market analysis",
      "Risk management expertise",
      "Portfolio diversification",
      "Performance tracking and reporting"
    ],
    process: [
      "Investment goal definition",
      "Market opportunity identification",
      "Due diligence and analysis",
      "Investment structuring",
      "Portfolio management",
      "Performance monitoring and optimization"
    ],
    email: "investment@realestate.com",
    phone: "+1 (555) 678-9012",
    location: "Boston, MA",
    duration: "Long-term partnerships",
    teamSize: "8-15 professionals"
  }
};

const ServiceDetails = () => {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link 
            href="/services"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-linear-to-r from-red-500 to-red-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <Link 
            href="/services"
            className="absolute top-8 left-4 flex items-center text-white hover:text-red-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-red-100">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Image and Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Service Image */}
              <div className="relative mb-8">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>

              {/* Quick Info */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Service Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-red-500" />
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{service.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-3 text-red-500" />
                    <span className="font-medium">Team Size:</span>
                    <span className="ml-2">{service.teamSize}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-red-500" />
                    <span className="font-medium">Location:</span>
                    <span className="ml-2">{service.location}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-red-500" />
                    <a href={`mailto:${service.email}`} className="hover:text-red-500 transition-colors">
                      {service.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-red-500" />
                    <a href={`tel:${service.phone}`} className="hover:text-red-500 transition-colors">
                      {service.phone}
                    </a>
                  </div>
                </div>

                <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Content */}
          <div className="lg:col-span-2">
            {/* Full Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-red-50 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {service.expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Step {index + 1}</h4>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-linear-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-red-100 mb-6">
                Transform your real estate vision into reality with our expert {service.title.toLowerCase()} services.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-white text-red-500 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors">
                  Start Project
                </button>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-500 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
