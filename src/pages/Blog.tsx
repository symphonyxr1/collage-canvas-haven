import { Link } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/lovable-uploads/33764487-707c-4aae-956d-630753c815bb.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation */}
        <div className="p-4">
          <NavigationMenu className="mx-auto max-w-screen-xl">
            <NavigationMenuList className="flex items-center space-x-8">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-playfair font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-warmBeige to-warmBeige/70`}>
                    High Ground
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <div className="flex-1" /> {/* Spacer */}
              <NavigationMenuItem>
                <Link to="/events">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/music">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Music
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/community">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Community
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Blog content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Card 
              className={`bg-black/40 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                isExpanded ? 'fixed inset-4 z-50 overflow-auto' : 'hover:bg-black/50'
              }`}
              onClick={toggleExpanded}
            >
              <CardContent className="p-6">
                <img 
                  src="/lovable-uploads/e08478de-ebd0-4c20-ad6c-8c151643fa89.png"
                  alt="High Ground Abstract Pattern"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h2 className="text-2xl font-playfair font-bold text-warmBeige mb-4">
                  High Ground: A Space for Visionaries to Create, Connect, and Elevate
                </h2>
                <p className="font-inter text-warmBeige/90">
                  {isExpanded ? (
                    <>
                      <p className="mb-6">High Ground is a community built for creators who seek to transform their ideas into impactful projects. By offering unique spaces for collaboration and skill-building, we provide artists and innovators the resources they need to grow. Here, creativity flourishes in an environment designed to inspire and connect.</p>

                      <h3 className="text-xl font-bold mb-4">What Sets High Ground Apart</h3>
                      <p className="mb-6">High Ground prioritizes meaningful engagement and practical support for its members. Instead of overwhelming participants with trends or jargon, we focus on creating opportunities for genuine growth. Through workshops, residencies, and events, we foster a culture of collaboration and purposeful creation.</p>

                      <h3 className="text-xl font-bold mb-4">Our Offerings</h3>
                      
                      <h4 className="text-lg font-bold mb-2">Creative Residencies</h4>
                      <p className="mb-4">Our residencies offer extended time for creators to dive into their work, surrounded by supportive peers. Artists and innovators use this time to refine their craft, collaborate, and develop projects that resonate beyond the walls of High Ground.</p>

                      <h4 className="text-lg font-bold mb-2">Skill-Building Workshops</h4>
                      <p className="mb-4">From music production to storytelling, our workshops provide practical, hands-on guidance led by experts. These sessions are designed for creators to leave with actionable skills and tangible progress on their goals.</p>

                      <h4 className="text-lg font-bold mb-2">Collaborative Projects</h4>
                      <p className="mb-6">High Ground thrives on collaboration. Community projects like group art installations and shared music playlists bring members together to create something greater than themselves.</p>

                      <h3 className="text-xl font-bold mb-4">Looking Ahead</h3>
                      <p className="mb-4">High Ground is committed to innovation and sustainability. Future plans include:</p>
                      <ul className="list-disc list-inside mb-6">
                        <li className="mb-2">High Ground Quest: A hybrid scavenger hunt combining real-world exploration and digital storytelling.</li>
                        <li className="mb-2">Exclusive Merchandise: Products like the Enigma Journal, designed to inspire creativity, and the Sound Capsule, offering immersive audio experiences.</li>
                        <li className="mb-4">Augmented Reality Experiences: Bridging the physical and digital worlds to deepen engagement and connection.</li>
                      </ul>

                      <h3 className="text-xl font-bold mb-4">How to Join</h3>
                      <p className="mb-4">High Ground welcomes creators who are eager to grow and contribute. By joining, you'll gain access to a community that values authenticity and shared purpose. Together, we'll build projects and legacies that inspire.</p>
                      <p>Visit our website to explore membership options, upcoming events, and ways to participate.</p>
                    </>
                  ) : (
                    "High Ground is a community built for creators who seek to transform their ideas into impactful projects. Click to read more..."
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;