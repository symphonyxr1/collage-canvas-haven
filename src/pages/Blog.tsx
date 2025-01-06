import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Blog = () => {
  const [mounted, setMounted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
          backgroundImage: "url('/lovable-uploads/d2761c54-f493-4045-b3ca-fd81cec157ae.png')",
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
        {/* Page Title */}
        <h1 className="text-4xl font-playfair font-bold bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text mb-12 text-center">
          Blog
        </h1>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Blog Post Card */}
          <div 
            className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-warmBeige/10 cursor-pointer transition-all duration-300 hover:bg-black/50"
            onClick={() => setIsDialogOpen(true)}
          >
            <img 
              src="/lovable-uploads/ede63e5f-dd66-47da-81c1-e13fdc6c9e9f.png" 
              alt="High Ground" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-bold text-warmBeige mb-4">
                High Ground: A Space for Visionaries to Create, Connect, and Elevate
              </h2>
              <p className="text-warmBeige/80 font-inter">
                High Ground is a community built for creators who seek to transform their ideas into impactful projects. By offering unique spaces for collaboration and skill-building, we provide artists and innovators the resources they need to grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Blog Post Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-black/95 text-warmBeige border-warmBeige/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair font-bold text-warmBeige">
              High Ground: A Space for Visionaries to Create, Connect, and Elevate
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 font-inter text-warmBeige/90">
            <img 
              src="/lovable-uploads/ede63e5f-dd66-47da-81c1-e13fdc6c9e9f.png" 
              alt="High Ground" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p>
              High Ground is a community built for creators who seek to transform their ideas into impactful projects. By offering unique spaces for collaboration and skill-building, we provide artists and innovators the resources they need to grow. Here, creativity flourishes in an environment designed to inspire and connect.
            </p>
            <h3 className="text-xl font-playfair font-bold mt-6">What Sets High Ground Apart</h3>
            <p>
              High Ground prioritizes meaningful engagement and practical support for its members. Instead of overwhelming participants with trends or jargon, we focus on creating opportunities for genuine growth. Through workshops, residencies, and events, we foster a culture of collaboration and purposeful creation.
            </p>
            <h3 className="text-xl font-playfair font-bold mt-6">Our Offerings</h3>
            <h4 className="text-lg font-bold mt-4">Creative Residencies</h4>
            <p>
              Our residencies offer extended time for creators to dive into their work, surrounded by supportive peers. Artists and innovators use this time to refine their craft, collaborate, and develop projects that resonate beyond the walls of High Ground.
            </p>
            <h4 className="text-lg font-bold mt-4">Skill-Building Workshops</h4>
            <p>
              From music production to storytelling, our workshops provide practical, hands-on guidance led by experts. These sessions are designed for creators to leave with actionable skills and tangible progress on their goals.
            </p>
            <h4 className="text-lg font-bold mt-4">Collaborative Projects</h4>
            <p>
              High Ground thrives on collaboration. Community projects like group art installations and shared music playlists bring members together to create something greater than themselves.
            </p>
            <h3 className="text-xl font-playfair font-bold mt-6">Looking Ahead</h3>
            <p>
              High Ground is committed to innovation and sustainability. Future plans include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>High Ground Quest: A hybrid scavenger hunt combining real-world exploration and digital storytelling.</li>
              <li>Exclusive Merchandise: Products like the Enigma Journal, designed to inspire creativity, and the Sound Capsule, offering immersive audio experiences.</li>
              <li>Augmented Reality Experiences: Bridging the physical and digital worlds to deepen engagement and connection.</li>
            </ul>
            <h3 className="text-xl font-playfair font-bold mt-6">How to Join</h3>
            <p>
              High Ground welcomes creators who are eager to grow and contribute. By joining, you'll gain access to a community that values authenticity and shared purpose. Together, we'll build projects and legacies that inspire.
            </p>
            <p className="mt-4">
              Visit our website to explore membership options, upcoming events, and ways to participate.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;