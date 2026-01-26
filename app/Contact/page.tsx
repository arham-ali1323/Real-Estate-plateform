"use client";
import Hero from "../../components/ui/Hero";  

export default function ContactSection() {

  return (
    <div>
      <Hero title="Contact Us" backgroundImage="/images/contact.jpg" />
      {/* Get In Touch Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Our Address</h3>
                <p className="text-gray-600 text-sm">4517 Washington Ave<br />Manchester, Kentucky 39495</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Number</h3>
                <p className="text-gray-600 text-sm">(629) 555-0129<br />(684) 555-0102</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Opening Hour</h3>
                <p className="text-gray-600 text-sm">Mon - Sat: 9am - 8pm<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <input type="text" placeholder="Your Name*" className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
              <input type="email" placeholder="Email Address*" className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
              <input type="text" placeholder="Phone Number*" className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
              <input type="text" placeholder="Subject" className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500" />
            </div>
            <textarea placeholder="Message" rows={6} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 mb-6"></textarea>
            <div className="text-center">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-full transition-all transform hover:scale-105">
                Send Request
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-3xl overflow-hidden h-96 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}