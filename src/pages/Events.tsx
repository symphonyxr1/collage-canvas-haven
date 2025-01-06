import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Events = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      title: "Artist Meet-up at The Turns",
      date: "January 21, 2024",
      location: "Carlsbad, CA",
      image: "/lovable-uploads/8f040586-821b-4b83-a81b-f7101b3c542e.png",
      description: "Join fellow artists for an evening of creativity and connection at The Turns. Share your work, meet like-minded creators, and be inspired by the stunning coastal views. This gathering is perfect for both established artists and those just beginning their creative journey.",
    },
    {
      id: 2,
      title: "Sunset Photography Session",
      date: "January 28, 2024",
      location: "High Ground Studio",
      image: "/lovable-uploads/00bb19d5-2d78-4af3-a40f-4a54b1e7a689.png",
      description: "Capture the magic of golden hour with our community of photographers. Whether you're a professional or enthusiast, this session offers the perfect opportunity to expand your portfolio and learn from fellow photographers.",
    }
  ];

  return (
    <div className="min-h-screen bg-tan relative">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4 bg-burgundy">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-playfair font-bold bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text">
            High Ground
          </Link>
          <div className="flex-1 flex justify-center gap-8">
            <Link to="/events" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Events</Link>
            <a href="#" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Music</a>
            <a href="#" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Community</a>
            <a href="#" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Blog</a>
          </div>
          <div className="w-[100px]"></div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-12 bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text text-center">
          Upcoming Events
        </h1>
        
        <div className="space-y-12 md:space-y-24">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
              } md:w-2/3`}
            >
              <Card
                className={`overflow-hidden transition-all duration-500 cursor-pointer ${
                  expandedEvent === event.id
                    ? "fixed inset-4 z-50 md:inset-20 bg-burgundy"
                    : "bg-burgundy hover:shadow-xl"
                }`}
                onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
              >
                <CardContent className="p-0">
                  {expandedEvent === event.id ? (
                    <div className="h-full flex flex-col">
                      <div 
                        className="h-[40vh] bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                      <div className="p-6 text-warmBeige flex-1 overflow-y-auto bg-burgundy">
                        <h2 className="text-3xl font-playfair font-bold mb-2">{event.title}</h2>
                        <p className="text-warmBeige/80 mb-4">{event.date} | {event.location}</p>
                        <p className="text-lg leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative group">
                      <div 
                        className="h-[300px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/50 to-transparent">
                        <div className="absolute bottom-0 p-6 text-warmBeige">
                          <h2 className="text-2xl font-playfair font-bold mb-2">{event.title}</h2>
                          <p className="text-warmBeige/80">{event.date} | {event.location}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay when event is expanded */}
      {expandedEvent !== null && (
        <div
          className="fixed inset-0 bg-burgundy/50 backdrop-blur-sm z-40"
          onClick={() => setExpandedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;