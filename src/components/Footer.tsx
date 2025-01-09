import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/50 py-4 px-6 mt-12">
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