import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Event {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Summer Music Festival",
    shortDescription: "A celebration of indie artists and local talent",
    fullDescription: "Join us for an unforgettable weekend of music, art, and community. This three-day festival features over 20 independent artists, interactive art installations, and local food vendors. Experience the vibrant atmosphere as emerging talents showcase their unique sounds across multiple stages. From acoustic sets to electronic performances, there's something for every music lover.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Artist Workshop Series",
    shortDescription: "Learn from industry professionals",
    fullDescription: "Dive deep into the creative process with our comprehensive workshop series. Led by experienced industry professionals, these sessions cover everything from music production and songwriting to marketing and brand development. Network with fellow artists, gain valuable insights, and take your craft to the next level. Limited spots available to ensure personalized attention.",
    image: "/placeholder.svg"
  }
];

const Events = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-richBlack relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/aee09444-0a2c-441b-9bc2-c8cdce4fad05.png')] bg-cover bg-center opacity-40"
        style={{ backgroundSize: '400px' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-richBlack/60 via-richBlack/40 to-richBlack/60" />

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-playfair font-bold mb-12 text-center bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text">
            Upcoming Events
          </h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`transform transition-all duration-300 ${
                  index % 2 === 0 ? "md:translate-y-12" : ""
                }`}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    expandedId === event.id
                      ? "fixed inset-4 z-50 overflow-hidden"
                      : "bg-warmBeige/10 hover:bg-warmBeige/20 backdrop-blur-sm"
                  }`}
                  onClick={() => toggleExpand(event.id)}
                >
                  {expandedId === event.id ? (
                    <ScrollArea className="h-full">
                      <div className="bg-black/90 text-warmBeige h-full p-6">
                        <CardHeader>
                          <CardTitle className="text-3xl font-playfair">
                            {event.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-inter leading-relaxed">
                            {event.fullDescription}
                          </p>
                        </CardContent>
                      </div>
                    </ScrollArea>
                  ) : (
                    <>
                      <CardHeader>
                        <CardTitle className="text-2xl font-playfair text-warmBeige">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-inter text-warmBeige/80">
                          {event.shortDescription}
                        </p>
                      </CardContent>
                    </>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;