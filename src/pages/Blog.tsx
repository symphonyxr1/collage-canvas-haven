import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/lovable-uploads/0293a007-89a9-40ea-89c1-190fa6a7d2b4.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="absolute top-0 w-full z-50 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-playfair font-bold bg-gradient-to-r from-[#e6b980] to-[#eacda3] text-transparent bg-clip-text">
              <Link to="/">High Ground</Link>
            </div>
            <div className="flex-1 flex justify-center gap-8">
              <Link to="/events" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Events</Link>
              <Link to="/music" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Music</Link>
              <Link to="/community" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Community</Link>
              <Link to="/blog" className="text-warmBeige/80 hover:text-warmBeige transition-colors">Blog</Link>
            </div>
            <div className="w-[100px]"></div>
          </div>
        </nav>

        {/* Blog content */}
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-playfair font-bold text-warmBeige mb-12 text-center">
            Blog
          </h1>
          <div className="max-w-3xl mx-auto">
            <Card 
              className={`bg-black/40 backdrop-blur-sm text-warmBeige cursor-pointer transition-all duration-500 ${
                isExpanded ? 'fixed inset-4 z-50 overflow-auto' : 'hover:scale-[1.02]'
              }`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">High Ground: A Space for Visionaries to Create, Connect, and Elevate</CardTitle>
                {!isExpanded && (
                  <CardDescription className="text-warmBeige/80">
                    High Ground is a community built for creators who seek to transform their ideas into impactful projects. By offering unique spaces for collaboration and skill-building, we provide artists and innovators the resources they need to grow.
                  </CardDescription>
                )}
              </CardHeader>
              {isExpanded && (
                <CardContent className="prose prose-invert max-w-none">
                  <p className="text-warmBeige/90 mb-6">
                    High Ground is a community built for creators who seek to transform their ideas into impactful projects. By offering unique spaces for collaboration and skill-building, we provide artists and innovators the resources they need to grow. Here, creativity flourishes in an environment designed to inspire and connect.
                  </p>

                  <h2 className="text-xl font-playfair text-warmBeige mt-8 mb-4">What Sets High Ground Apart</h2>
                  <p className="text-warmBeige/90 mb-6">
                    High Ground prioritizes meaningful engagement and practical support for its members. Instead of overwhelming participants with trends or jargon, we focus on creating opportunities for genuine growth. Through workshops, residencies, and events, we foster a culture of collaboration and purposeful creation.
                  </p>

                  <h2 className="text-xl font-playfair text-warmBeige mt-8 mb-4">Our Offerings</h2>
                  
                  <h3 className="text-lg font-playfair text-warmBeige mt-6 mb-3">Creative Residencies</h3>
                  <p className="text-warmBeige/90 mb-6">
                    Our residencies offer extended time for creators to dive into their work, surrounded by supportive peers. Artists and innovators use this time to refine their craft, collaborate, and develop projects that resonate beyond the walls of High Ground.
                  </p>

                  <h3 className="text-lg font-playfair text-warmBeige mt-6 mb-3">Skill-Building Workshops</h3>
                  <p className="text-warmBeige/90 mb-6">
                    From music production to storytelling, our workshops provide practical, hands-on guidance led by experts. These sessions are designed for creators to leave with actionable skills and tangible progress on their goals.
                  </p>

                  <h3 className="text-lg font-playfair text-warmBeige mt-6 mb-3">Collaborative Projects</h3>
                  <p className="text-warmBeige/90 mb-6">
                    High Ground thrives on collaboration. Community projects like group art installations and shared music playlists bring members together to create something greater than themselves.
                  </p>

                  <h2 className="text-xl font-playfair text-warmBeige mt-8 mb-4">Looking Ahead</h2>
                  <p className="text-warmBeige/90 mb-6">
                    High Ground is committed to innovation and sustainability. Future plans include:
                  </p>
                  <ul className="list-disc list-inside text-warmBeige/90 mb-6 space-y-2">
                    <li>High Ground Quest: A hybrid scavenger hunt combining real-world exploration and digital storytelling.</li>
                    <li>Exclusive Merchandise: Products like the Enigma Journal, designed to inspire creativity, and the Sound Capsule, offering immersive audio experiences.</li>
                    <li>Augmented Reality Experiences: Bridging the physical and digital worlds to deepen engagement and connection.</li>
                  </ul>

                  <h2 className="text-xl font-playfair text-warmBeige mt-8 mb-4">How to Join</h2>
                  <p className="text-warmBeige/90 mb-6">
                    High Ground welcomes creators who are eager to grow and contribute. By joining, you'll gain access to a community that values authenticity and shared purpose. Together, we'll build projects and legacies that inspire.
                  </p>
                  <p className="text-warmBeige/90">
                    Visit our website to explore membership options, upcoming events, and ways to participate.
                  </p>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;