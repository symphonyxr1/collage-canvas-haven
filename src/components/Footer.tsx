import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="https://www.instagram.com/highgroundexperience" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-warmBeige hover:text-warmBeige/80 transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;