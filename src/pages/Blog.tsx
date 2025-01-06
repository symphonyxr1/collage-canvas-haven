import { useState, useEffect } from "react";

const Blog = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-richBlack relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/da335676-1aeb-4855-acb5-118abf93d972.png')",
          filter: "brightness(0.6)"
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-playfair font-bold bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text">
            High Ground
          </div>
          <div className="flex-1 flex justify-center gap-8">
            <a href="/events" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Events</a>
            <a href="/music" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Music</a>
            <a href="#" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Community</a>
            <a href="/blog" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Blog</a>
          </div>
          <div className="w-[100px]"></div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Sample Blog Post Card */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-warmBeige/10">
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-bold text-warmBeige mb-4">
                Welcome to High Ground
              </h2>
              <p className="text-warmBeige/80 font-inter">
                A space where creativity meets community. Discover stories, insights, and updates from our vibrant artistic ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;