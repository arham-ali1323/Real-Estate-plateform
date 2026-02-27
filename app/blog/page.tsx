import React from 'react'
import Hero from '@/components/ui/Hero'
import { Calendar, User, MessageCircle, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for First-Time Home Buyers",
      excerpt: "Navigating the real estate market for the first time can be overwhelming. Here are essential tips to help you make informed decisions.",
      author: "Sarah Johnson",
      date: "January 15, 2024",
      category: "Buying Guide",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
      comments: 24
    },
    {
      id: 2,
      title: "Understanding Property Valuation Methods",
      excerpt: "Learn about different approaches to property valuation and how they impact your real estate investment decisions.",
      author: "Michael Chen",
      date: "January 12, 2024",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      comments: 18
    },
    {
      id: 3,
      title: "The Future of Smart Homes in Real Estate",
      excerpt: "Explore how smart home technology is revolutionizing the real estate industry and what it means for buyers and sellers.",
      author: "Emily Davis",
      date: "January 8, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=400&fit=crop",
      comments: 32
    },
    {
      id: 4,
      title: "Commercial Real Estate Trends 2024",
      excerpt: "Stay ahead of the curve with insights into the latest commercial real estate trends shaping the market this year.",
      author: "Robert Wilson",
      date: "January 5, 2024",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
      comments: 15
    },
    {
      id: 5,
      title: "Sustainable Building Practices",
      excerpt: "Discover how eco-friendly construction methods are becoming standard in modern real estate development.",
      author: "Lisa Anderson",
      date: "January 2, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=400&fit=crop",
      comments: 28
    },
    {
      id: 6,
      title: "Rental Market Analysis: Q1 2024",
      excerpt: "Comprehensive analysis of rental market trends, pricing strategies, and investment opportunities for the first quarter.",
      author: "David Martinez",
      date: "December 28, 2023",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop",
      comments: 21
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Our Blog"
        breadcrumb="Home > Blog"
        backgroundImage="https://images.unsplash.com/photo-1544929283-74b397750174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="large"
        overlayOpacity={0.5}
      />

      {/* Blog Posts Section */}
      <AnimatedSection animation="slide-up" delay={200}>
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Real Estate Insights</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Stay informed with our expert articles on market trends, buying guides, and investment strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-red-500 font-semibold hover:text-red-600 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
        </section>
      </AnimatedSection>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest real estate insights and market trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
