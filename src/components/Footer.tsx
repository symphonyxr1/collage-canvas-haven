import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/75 py-6 mt-12">
      <div className="container mx-auto px-6">
        <a
          href="https://www.instagram.com/highgroundexperience"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warmBeige/80 hover:text-warmBeige transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;