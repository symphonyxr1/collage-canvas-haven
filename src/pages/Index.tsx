import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-warmBeige relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-richBlack text-xl font-playfair">High Ground</div>
          <div className="flex gap-8">
            <a href="#" className="text-richBlack hover:text-burgundy transition-colors">Events</a>
            <a href="#" className="text-richBlack hover:text-burgundy transition-colors">Music</a>
            <a href="#" className="text-richBlack hover:text-burgundy transition-colors">Community</a>
            <a href="#" className="text-richBlack hover:text-burgundy transition-colors">Blog</a>
          </div>
        </div>
      </nav>

      {/* Image Collage Background */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4 opacity-40">
        <div className="space-y-4">
          <div className="h-[50vh] bg-[url('/lovable-uploads/bff65142-fc46-4211-85bb-9b2ca5643cdc.png')] bg-cover bg-center rounded-lg transition-transform duration-[15s] ease-in-out hover:scale-110 hover:rotate-1"></div>
          <div className="h-[50vh] bg-[url('/lovable-uploads/992d573b-fb7d-49f5-b1a5-9f73f4a64958.png')] bg-cover bg-center rounded-lg transition-transform duration-[15s] ease-in-out hover:scale-110 hover:-rotate-1"></div>
        </div>
        <div className="space-y-4 pt-16">
          <div className="h-[50vh] bg-[url('/lovable-uploads/9decd922-0f0b-4f3c-b43d-e6d9631b5838.png')] bg-cover bg-center rounded-lg transition-transform duration-[15s] ease-in-out hover:scale-110 hover:rotate-1"></div>
          <div className="h-[50vh] bg-[url('/lovable-uploads/8f31b95e-c2e9-4cdc-8806-44247c224597.png')] bg-cover bg-center rounded-lg transition-transform duration-[15s] ease-in-out hover:scale-110 hover:-rotate-1"></div>
        </div>
        <div className="space-y-4 pt-8">
          <div className="h-[50vh] bg-[url('/lovable-uploads/883b23bb-c2f0-45dd-a233-c13bc8353572.png')] bg-cover bg-center rounded-lg transition-transform duration-[15s] ease-in-out hover:scale-110 hover:rotate-1"></div>
          <div className="h-[50vh] bg-[url('/lovable-uploads/61875e52-49f5-49cf-b9d5-4e9c9a18c8f4.png')] bg-cover bg-center rounded-lg transition-transform duration-[15s] ease-in-out hover:scale-110 hover:-rotate-1"></div>
        </div>
      </div>

      {/* Overlay with 90% opacity */}
      <div className="absolute inset-0 bg-[#FDE1D3]/90"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-7xl md:text-8xl font-playfair text-richBlack mb-8 tracking-wider">
          Timeless Aura
        </h1>
        <p className="text-richBlack/90 max-w-3xl mx-auto text-lg md:text-xl font-inter leading-relaxed mb-12">
          We build spaces for artists to thrive. From studio sessions to live shows, High Ground is a place where raw talent lives and grows. Connect with fellow creators, share your sound, and push your art further than you thought possible.
        </p>
        <div className="flex gap-6">
          <Button
            className="bg-burgundy hover:bg-burgundy-light text-warmBeige px-8 py-6 text-lg rounded-full transition-colors"
          >
            Explore Events
          </Button>
          <Button
            variant="outline"
            className="border-burgundy text-burgundy hover:bg-burgundy/10 px-8 py-6 text-lg rounded-full transition-colors"
          >
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;