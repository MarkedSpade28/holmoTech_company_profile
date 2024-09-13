import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" className="flex items-center">
          <img src="/assets/Holmo_tech_logo.png" alt="HolmoTech Logo" className="h-10" />
        </a>
        <button onClick={toggleMenu} className="mobile-menu-toggle md:hidden text-2xl">☰</button>
        <ul className={`md:flex space-x-8 ${isOpen ? '' : 'hidden'}`}>
          <li><a href="#about" className="text-gray-800 hover:text-blue-500">About Us</a></li>
          <li><a href="#services" className="text-gray-800 hover:text-blue-500">Our Services</a></li>
          <li><a href="#faq" className="text-gray-800 hover:text-blue-500">FAQ</a></li>
          <li><a href="#packages" className="text-gray-800 hover:text-blue-500">Packages</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
