import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-richBlack relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-playfair font-bold bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text">
            High Ground
          </Link>
          <div className="flex-1 flex justify-center gap-8">
            <Link to="/events" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Events</Link>
            <Link to="/music" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Music</Link>
            <Link to="/community" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Community</Link>
            <Link to="/blog" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Blog</Link>
          </div>
          <div className="w-[100px]"></div>
        </div>
      </nav>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/592cd87c-dad8-4c10-8d2e-b41d9d0edd53.png')"
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/60 via-richBlack/40 to-richBlack/60"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-7xl md:text-8xl font-playfair font-bold mb-8 tracking-wider bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text">
          Blog
        </h1>
        <p className="text-warmBeige/90 max-w-3xl mx-auto text-lg md:text-xl font-inter leading-relaxed mb-12 text-center">
          Coming soon: Explore our latest thoughts, stories, and insights about music, art, and culture.
        </p>
      </div>
    </div>
  );
};

export default Blog;