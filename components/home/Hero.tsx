"use client";
export default function Hero() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop')",
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="text-white/90 text-lg mb-4 tracking-wider font-medium animate-fade-in">
              REHOMES HOUSING DEVELOPMENT
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.2s'}}>
              Using greatness to shape the future
            </h1>
            <p className="text-white/90 text-xl mb-12 leading-relaxed max-w-2xl animate-slide-up" style={{animationDelay: '0.4s'}}>
              We are a top 25 builder and developer fully invested in our customers' success and improving the communities we serve.
            </p>

            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 animate-scale-in hover-lift" style={{animationDelay: '0.6s'}}>
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Trustpilot Badge */}
          <div className="absolute bottom-20 right-20 animate-slide-right floating" style={{animationDelay: '1s'}}>
            <div className="bg-white rounded-2xl p-6 shadow-xl hover-lift">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold text-gray-900">Trustpilot</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900">450+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}