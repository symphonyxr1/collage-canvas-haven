import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
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
          <div className="text-warmBeige text-xl font-playfair">High Ground</div>
          <div className="flex gap-8">
            <a href="#" className="text-warmBeige hover:text-white transition-colors">Events</a>
            <a href="#" className="text-warmBeige hover:text-white transition-colors">Music</a>
            <a href="#" className="text-warmBeige hover:text-white transition-colors">Community</a>
            <a href="#" className="text-warmBeige hover:text-white transition-colors">Blog</a>
          </div>
        </div>
      </nav>

      {/* Image Collage Background */}
      <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4 opacity-40">
        <div className="space-y-4">
          <div className="h-[33vh] bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4')] bg-cover bg-center rounded-lg"></div>
          <div className="h-[33vh] bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center rounded-lg"></div>
          <div className="h-[33vh] bg-[url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec')] bg-cover bg-center rounded-lg"></div>
        </div>
        <div className="space-y-4 pt-8">
          <div className="h-[33vh] bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745')] bg-cover bg-center rounded-lg"></div>
          <div className="h-[33vh] bg-[url('https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b')] bg-cover bg-center rounded-lg"></div>
          <div className="h-[33vh] bg-[url('https://images.unsplash.com/photo-1505236858219-8359eb29e329')] bg-cover bg-center rounded-lg"></div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/80 to-richBlack/90"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-7xl md:text-8xl font-playfair text-warmBeige mb-8 tracking-wider">
          Timeless Aura
        </h1>
        <p className="text-warmBeige/90 max-w-3xl mx-auto text-lg md:text-xl font-inter leading-relaxed mb-12">
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
            className="border-warmBeige text-warmBeige hover:bg-warmBeige/10 px-8 py-6 text-lg rounded-full transition-colors"
          >
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;