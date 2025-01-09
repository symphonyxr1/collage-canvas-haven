import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/75 py-4 px-6 mt-auto z-10">
      <div className="max-w-7xl mx-auto">
        <a
          href="https://www.instagram.com/highgroundexperience"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-warmBeige transition-colors"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;