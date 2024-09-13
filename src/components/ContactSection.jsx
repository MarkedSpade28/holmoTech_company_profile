import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Contact us today to discuss your project and how we can help you achieve your goals.
        </p>
        <a
          href="mailto:info@holmotech.co.za"
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-md shadow-md"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
