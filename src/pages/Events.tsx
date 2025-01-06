import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Events = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const events = [
    {
      title: "Sound Design Workshop",
      date: "March 15, 2024",
      description: "Join us for an immersive workshop exploring the fundamentals of sound design and music production.",
      details: "This hands-on session will cover everything from basic acoustics to advanced sound manipulation techniques. Perfect for both beginners and intermediate producers looking to expand their skills."
    },
    {
      title: "Creative Networking Night",
      date: "March 20, 2024",
      description: "Connect with fellow artists and creators in a relaxed, inspiring environment.",
      details: "An evening dedicated to building meaningful connections within the creative community. Share your projects, find collaborators, and explore new opportunities."
    },
    {
      title: "Visual Arts Showcase",
      date: "March 25, 2024",
      description: "Experience a curated exhibition of emerging visual artists pushing boundaries.",
      details: "Featuring cutting-edge works across various mediums, this showcase highlights the intersection of traditional and digital art forms. Meet the artists and gain insights into their creative processes."
    }
  ];

  return (
    <div className="min-h-screen bg-richBlack relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/09410b2e-cfaf-4ed2-9932-eda7bcf37c42.png')",
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
        <h1 className="text-4xl font-playfair font-bold bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text mb-12 text-center">
          Events
        </h1>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(index)}
              className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-warmBeige/10 cursor-pointer transition-all duration-300 hover:bg-black/50"
            >
              <div className="p-6">
                <h2 className="text-2xl font-playfair font-bold text-warmBeige mb-2">{event.title}</h2>
                <p className="text-warmBeige/60 text-sm mb-4">{event.date}</p>
                <p className="text-warmBeige/80">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={selectedEvent !== null} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="bg-black/95 text-warmBeige border-warmBeige/20">
          {selectedEvent !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-playfair font-bold text-warmBeige">
                  {events[selectedEvent].title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-warmBeige/60">{events[selectedEvent].date}</p>
                <p className="text-warmBeige/90">{events[selectedEvent].details}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;