"use client";
import { useState } from 'react';
import Hero from "@/components/ui/Hero";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title="Contact Us" 
        breadcrumb="Home > Contact"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop"
        height="large"
        overlayOpacity={0.6}
      />

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-500 text-sm font-semibold mb-3 tracking-wider uppercase">Get In Touch</p>
            <h2 className="text-4xl font-bold text-gray-900">Our Contact Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                <MapPin className="w-8 h-8 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Our Address</h3>
              <p className="text-gray-600">4517 Washington Ave<br />Manchester, Kentucky 39495</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                <Phone className="w-8 h-8 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone Number</h3>
              <p className="text-gray-600">(629) 555-0129<br />(684) 555-0102</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                <Mail className="w-8 h-8 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Email Address</h3>
              <p className="text-gray-600">info@realestate.com<br />support@realestate.com</p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                <Clock className="w-8 h-8 text-red-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Working Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9am - 8pm<br />Sunday: Closed</p>
            </div>
          </div>


          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6} 
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                    <p className="text-sm text-gray-500">* Required fields</p>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-red-500 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">Need Immediate Help?</h4>
                <p className="text-red-100 mb-6">Our team is available 24/7 for urgent inquiries.</p>
                <div className="space-y-3">
                  <a href="tel:+16295550129" className="flex items-center gap-3 bg-white text-red-500 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                  <a href="mailto:urgent@realestate.com" className="flex items-center gap-3 border-2 border-white text-white px-4 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-500 transition-colors">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-sky-500 hover:text-white transition-colors shadow-sm">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-colors shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors shadow-sm">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Have Questions?</h4>
                <p className="text-gray-600 text-sm mb-4">Check our FAQ section for quick answers.</p>
                <a href="/faq" className="text-red-500 font-semibold hover:text-red-600 transition-colors flex items-center gap-1">
                  Visit FAQ
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>


          {/* Map Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us on the Map</h3>
              <p className="text-gray-600">Visit our office for a personal consultation</p>
            </div>
            <div className="rounded-3xl overflow-hidden h-96 bg-gray-200 shadow-lg">
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
        </div>
      </section>
    </div>
  );
}
