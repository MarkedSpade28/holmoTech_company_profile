import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          {/* Link the logo to the top of the page or homepage */}
          <a href="#home" className="flex items-center">
            <img src="/assets/Holmo_tech_logo.png" alt="HolmoTech Logo" className="h-10" />
          </a>
        </div>
        <div className="text-gray-600 text-center md:text-left">© 2024 HolmoTech. All rights reserved.</div>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li><a href="#services" className="text-gray-600 hover:text-blue-500">Services</a></li>
          <li><a href="#about" className="text-gray-600 hover:text-blue-500">About Us</a></li>
          <li><a href="#faq" className="text-gray-600 hover:text-blue-500">FAQ</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
