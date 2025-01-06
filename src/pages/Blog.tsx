import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Blog = () => {
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
          <h1 className="text-4xl font-playfair font-bold text-warmBeige mb-8 text-center">
            Blog
          </h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder blog posts */}
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-lg p-6 text-warmBeige"
              >
                <h2 className="text-2xl font-playfair font-bold mb-4">
                  Coming Soon
                </h2>
                <p className="font-inter">
                  Stay tuned for upcoming blog posts...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;