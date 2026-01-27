"use client";
import { useState } from 'react';
import { X, MapPin, Mail } from 'lucide-react';

interface OffcanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffcanvasMenu = ({ isOpen, onClose }: OffcanvasMenuProps) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Offcanvas */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Renvia</span>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full pb-32">
          {/* Who Renvia Agency Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Who Renvia Agency?</h3>
            <p className="text-gray-600 leading-relaxed">
              We are a modern real estate agency specializing in residential, commercial, and investment properties. With years of experience in the industry, we provide comprehensive services that help clients buy, sell, and manage properties with confidence and ease.
            </p>
          </div>

          {/* Popular Rent Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Rent</h3>
            <div className="space-y-4">
              {/* Apartment Building */}
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex">
                  <img 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=150&h=100&fit=crop"
                    alt="Apartment Building"
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>Downtown District</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Apartment Building</h4>
                    <p className="text-gray-600 text-sm mt-1">Modern apartments with city views</p>
                  </div>
                </div>
              </div>

              {/* Commercial Space */}
              <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=100&fit=crop"
                    alt="Commercial Space"
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>Business Center</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Commercial Space</h4>
                    <p className="text-gray-600 text-sm mt-1">Prime commercial retail spaces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get the latest property updates and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffcanvasMenu;
