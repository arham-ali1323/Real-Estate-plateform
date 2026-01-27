"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

const teamMemberData = {
  "leslie-alexander": {
    name: "Leslie Alexander",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    bio: "Leslie Alexander is the visionary founder and CEO of our real estate company. With over 15 years of experience in the industry, she has built a reputation for excellence and innovation in property development and investment.",
    expertise: ["Strategic Planning", "Property Development", "Investment Management", "Team Leadership"],
    email: "leslie.alexander@realestate.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY"
  },
  "michael-bennett": {
    name: "Michael Bennett",
    role: "Property Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Michael Bennett brings extensive knowledge of property valuation and market analysis to our team. His expertise helps clients make informed decisions about their real estate investments.",
    expertise: ["Property Valuation", "Market Analysis", "Investment Strategy", "Client Relations"],
    email: "michael.bennett@realestate.com",
    phone: "+1 (555) 234-5678",
    location: "Los Angeles, CA"
  },
  "darlene-carter": {
    name: "Darlene Carter",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    bio: "Darlene Carter oversees all operational aspects of our real estate business. Her exceptional organizational skills ensure smooth transactions and exceptional client experiences.",
    expertise: ["Operations Management", "Process Optimization", "Quality Control", "Team Coordination"],
    email: "darlene.carter@realestate.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, IL"
  },
  "jenny-wilson": {
    name: "Jenny Wilson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    bio: "Jenny Wilson leads our marketing efforts with creative strategies that showcase our properties effectively. Her innovative approach has significantly increased our market reach.",
    expertise: ["Digital Marketing", "Brand Strategy", "Content Creation", "Lead Generation"],
    email: "jenny.wilson@realestate.com",
    phone: "+1 (555) 456-7890",
    location: "Miami, FL"
  },
  "albert-flores": {
    name: "Albert Flores",
    role: "Sales Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Albert Flores manages our sales team with a focus on achieving outstanding results. His deep understanding of client needs and market trends drives our success.",
    expertise: ["Sales Strategy", "Negotiation", "Client Management", "Market Research"],
    email: "albert.flores@realestate.com",
    phone: "+1 (555) 567-8901",
    location: "Seattle, WA"
  },
  "bessie-cooper": {
    name: "Bessie Cooper",
    role: "Financial Advisor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    bio: "Bessie Cooper provides expert financial guidance for real estate investments. Her analytical approach helps clients maximize their returns while minimizing risks.",
    expertise: ["Financial Planning", "Investment Analysis", "Risk Management", "Portfolio Strategy"],
    email: "bessie.cooper@realestate.com",
    phone: "+1 (555) 678-9012",
    location: "Boston, MA"
  }
};

const TeamMemberDetails = () => {
  const params = useParams();
  const slug = params.slug as string;
  const member = teamMemberData[slug as keyof typeof teamMemberData];

  if (!member) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
          <p className="text-gray-600 mb-8">The team member you're looking for doesn't exist.</p>
          <Link 
            href="/team"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block"
          >
            Back to Team
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
            href="/team"
            className="absolute top-8 left-4 flex items-center text-white hover:text-red-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Team
          </Link>
          
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{member.name}</h1>
            <p className="text-xl text-red-100">{member.role}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Image and Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Profile Image */}
              <div className="relative mb-8">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-red-500" />
                    <a href={`mailto:${member.email}`} className="hover:text-red-500 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-red-500" />
                    <a href={`tel:${member.phone}`} className="hover:text-red-500 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-red-500" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Bio and Expertise */}
          <div className="lg:col-span-2">
            {/* Biography */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {member.name}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {member.bio}
              </p>
            </div>

            {/* Expertise */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {member.expertise.map((skill, index) => (
                  <div key={index} className="flex items-center bg-red-50 rounded-xl p-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-linear-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-red-100 mb-6">
                Get in touch with {member.name} to discuss your real estate needs and discover how we can help you achieve your goals.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-white text-red-500 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors">
                  Contact Now
                </button>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-500 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Office Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
