<<<<<<< HEAD
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>FAQ</h1>
    </div>
  )
}

export default page 
=======
"use client";   
import { SetStateAction, useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import Hero from '@/components/ui/Hero';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What industries can benefit from your AI solutions?",
      answer: "Our AI solutions are designed to benefit a wide range of industries including healthcare, finance, retail, manufacturing, and more. We customize our solutions to meet the specific needs of each industry."
    },
    {
      question: "Do I need technical knowledge to use your AI products?",
      answer: "No, our AI products are designed to be user-friendly and accessible to users without technical backgrounds. We provide comprehensive training and support to ensure smooth adoption."
    },
    {
      question: "How does your AI solutions improve ROI system?",
      answer: "Our AI solutions improve ROI by automating processes, reducing operational costs, enhancing decision-making through data analytics, and improving customer satisfaction."
    },
    {
      question: "How long does it take to implement your AI solution?",
      answer: "Implementation time varies depending on the complexity of the solution and your specific requirements. Typically, basic implementations can be completed within 2-4 weeks, while more complex solutions may take 2-3 months."
    },
    {
      question: "Do you acknowledge tracking data requirements?",
      answer: "Yes, we fully acknowledge and comply with all data tracking requirements and regulations including GDPR, CCPA, and other relevant data protection laws. We ensure complete transparency in how data is collected and used."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="FAQ"
        breadcrumb="Home > FAQ"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=600&fit=crop"
        height="large"
        overlayOpacity={0.6}
      />
      
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Header and CTA */}
            <div className="lg:sticky lg:top-24">
              <p className="text-red-500 text-sm font-semibold mb-3 tracking-wider">
                FAQ
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Key Questions Answered About Our Real Estate
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Find answers to common questions about our real estate services, property management, and investment opportunities. We're here to help you make informed decisions.
              </p>

              {/* Still Have Questions Card */}
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Still Have Questions?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Can't find the answer you're looking for? Our support team is here to help.
                    </p>
                  </div>
                </div>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Column - FAQ List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all hover:border-gray-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 shrink-0 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
>>>>>>> c791df9d9537052942c1fd9b615bec9708130936
