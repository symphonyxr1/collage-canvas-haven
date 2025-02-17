import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WaveAnimation from "@/components/WaveAnimation";

const Music = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-richBlack relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ 
          backgroundImage: "url('/lovable-uploads/27b5e62e-29ff-4963-909b-67e69f6f7db1.png')",
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-playfair font-bold bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text">
            High Ground
          </Link>
          <div className="flex-1 flex justify-center gap-8">
            <Link to="/events" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Events</Link>
            <Link to="/music" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Music</Link>
            <Link to="/blog" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Blog</Link>
          </div>
          <div className="w-[100px]"></div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 pt-24 px-6 md:px-12 max-w-7xl mx-auto">
        <WaveAnimation />
        <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-12 bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text text-center">
          Radio
        </h1>
        
        {/* YouTube Playlist Embed */}
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/videoseries?list=PLCBAwATROgx-3FuokaKvPN1eAt7X_czht"
            title="High Ground Music Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Music;