"use client";
import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, MessageCircle, ThumbsUp, Bookmark, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';

const BlogDetails = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(124);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setHasLiked(!hasLiked);
  };

  const relatedPosts = [
    {
      title: "10 Tips for First-Time Home Buyers",
      excerpt: "Essential advice for navigating the real estate market as a first-time buyer.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      date: "Jan 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Understanding Property Investment Strategies",
      excerpt: "Learn about different approaches to real estate investment and wealth building.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      date: "Jan 10, 2024",
      readTime: "8 min read"
    },
    {
      title: "The Future of Smart Homes",
      excerpt: "Explore how technology is transforming modern residential properties.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      date: "Jan 5, 2024",
      readTime: "6 min read"
    }
  ];

  const tags = ["Real Estate", "Investment", "Market Trends", "Property", "2024"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero 
        title="2024 Real Estate Market Trends: What to Expect"
        breadcrumb="Home > Blog > Market Trends"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=600&fit=crop"
        height="large"
        overlayOpacity={0.7}
      />

      {/* Blog Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  {tags.map((tag, index) => (
                    <span key={index} className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  2024 Real Estate Market Trends: What to Expect in the Coming Year
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>By Sarah Mitchell</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>January 20, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>12 min read</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
                  alt="Real Estate Market Trends 2024"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6 text-xl">
                  As we step into 2024, the real estate landscape continues to evolve at an unprecedented pace. 
                  From shifting buyer preferences to technological innovations, understanding these trends is 
                  crucial for anyone looking to make informed decisions in the property market.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">The Rise of Sustainable Living</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Environmental consciousness is no longer just a buzzword—it's becoming a fundamental requirement 
                  in modern real estate. Buyers are increasingly prioritizing energy-efficient homes, sustainable 
                  materials, and properties with minimal carbon footprints. This shift is driving developers to 
                  incorporate green technologies and eco-friendly designs into their projects.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Solar panels, smart home systems, and sustainable building materials are no longer premium 
                  add-ons but expected features. Properties with green certifications are seeing higher demand 
                  and commanding premium prices in the market.
                </p>

                <div className="bg-gray-50 rounded-xl p-8 my-8 border-l-4 border-red-500">
                  <p className="text-xl text-gray-900 italic">
                    "The future of real estate is green. Properties that don't adapt to sustainable practices 
                    will find themselves at a significant disadvantage in the coming years."
                  </p>
                  <p className="text-red-400 mt-2 font-semibold">— Sarah Mitchell, Senior Market Analyst</p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Technology Integration in Property Management</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Smart home technology has moved beyond simple automation. Today's buyers expect fully integrated 
                  systems that control everything from security to energy management through a single interface. 
                  Properties equipped with advanced IoT devices and AI-powered management systems are becoming 
                  the new standard.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Technological Trends:</h3>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>AI-powered property management systems that predict maintenance needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Virtual and augmented reality for remote property tours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Blockchain-based property transactions and smart contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>IoT sensors for real-time building performance monitoring</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Market Predictions for 2024</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Based on current data and expert analysis, several key trends are expected to shape the 
                  real estate market throughout 2024:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-red-500 mb-3">Urban Revival</h4>
                    <p className="text-gray-600">
                      City centers are experiencing renewed interest as remote work policies evolve and 
                      people seek the convenience of urban living.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-red-500 mb-3">Suburban Growth</h4>
                    <p className="text-gray-600">
                      Secondary cities and suburban areas continue to attract families seeking more space 
                      and better value for money.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Investment Opportunities</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For investors, 2024 presents unique opportunities in several sectors. Commercial real 
                  estate is adapting to new work patterns, with flexible office spaces and mixed-use 
                  developments showing strong potential. Residential properties in emerging neighborhoods 
                  offer significant upside potential for early investors.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The key to successful investment this year lies in understanding local market dynamics 
                  and identifying properties that align with evolving consumer preferences. Location remains 
                  crucial, but the definition of "prime location" is expanding to include connectivity, 
                  sustainability, and lifestyle amenities.
                </p>
              </div>

              {/* Article Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                      hasLiked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{likes} Likes</span>
                  </button>
                  <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                      isBookmarked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">Share:</span>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                    alt="Sarah Mitchell"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sarah Mitchell</h3>
                    <p className="text-red-400 text-sm mb-3">Senior Real Estate Analyst & Market Strategist</p>
                    <p className="text-gray-600 mb-4">
                      Sarah has over 15 years of experience in real estate market analysis and has been 
                      featured in major publications including Forbes, Wall Street Journal, and Real Estate 
                      Weekly. She specializes in market trend forecasting and investment strategy.
                    </p>
                    <div className="flex gap-3">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                        Follow Author
                      </button>
                      <button className="border border-gray-300 hover:border-red-500 text-gray-600 hover:text-red-500 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                        View All Posts
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                  <MessageCircle className="w-6 h-6" />
                  Comments (8)
                </h3>
                
                {/* Comment Form */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Leave a Comment</h4>
                  <textarea 
                    placeholder="Share your thoughts on this article..."
                    className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                    rows={4}
                  />
                  <div className="flex justify-end mt-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>

                {/* Sample Comments */}
                <div className="space-y-6">
                  {[
                    {
                      name: "Michael Chen",
                      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                      date: "2 days ago",
                      content: "Great insights on sustainable living trends! I've been looking for eco-friendly properties and this confirms my decision to prioritize green features."
                    },
                    {
                      name: "Jennifer Adams",
                      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                      date: "3 days ago",
                      content: "The section on technology integration is spot on. As a property manager, I've seen firsthand how smart home features are becoming deal-breakers for many buyers."
                    }
                  ].map((comment, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <img 
                          src={comment.avatar}
                          alt={comment.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h5 className="font-semibold text-gray-900">{comment.name}</h5>
                            <span className="text-gray-500 text-sm">{comment.date}</span>
                          </div>
                          <p className="text-gray-600">{comment.content}</p>
                          <button className="text-red-500 text-sm mt-3 hover:text-red-600 transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              {/* Author Card */}
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                  alt="Sarah Mitchell"
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold mb-1 text-gray-900">Sarah Mitchell</h3>
                <p className="text-red-500 text-sm mb-3">Real Estate Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  15+ years of market analysis experience
                </p>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-full font-semibold transition-colors text-sm">
                  Follow
                </button>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Categories</h3>
                <div className="space-y-2">
                  {[
                    { name: "Market Trends", count: 24 },
                    { name: "Investment Tips", count: 18 },
                    { name: "Property Guides", count: 15 },
                    { name: "Industry News", count: 12 },
                    { name: "Sustainability", count: 8 }
                  ].map((category, index) => (
                    <Link 
                      key={index}
                      href="/blog"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white transition-colors group"
                    >
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{category.name}</span>
                      <span className="bg-gray-200 group-hover:bg-red-500 text-gray-600 group-hover:text-white px-2 py-1 rounded-full text-xs transition-colors">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Real Estate", "Investment", "Market Analysis", "Property", "2024 Trends", "Smart Homes", "Sustainability", "Urban Living"].map((tag, index) => (
                    <span key={index} className="bg-gray-200 hover:bg-red-500 text-gray-700 hover:text-white px-3 py-1 rounded-full text-sm cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-red-500 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Newsletter</h3>
                <p className="text-red-100 text-sm mb-4">
                  Get the latest real estate insights delivered to your inbox.
                </p>
                <input 
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 mb-3 focus:outline-none"
                />
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <Link 
                  key={index}
                  href="/blog-details"
                  className="group bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 shadow-sm"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-red-500 font-semibold text-sm group-hover:text-red-600 transition-colors">

                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
