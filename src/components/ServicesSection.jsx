import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center">
          {/* Web & IT Services Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-6">
              <img
                src="/assets/software_services.jpg"
                alt="Web & IT Services"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h4 className="text-xl font-bold mb-4 text-gray-800">Web & IT Services</h4>
              <p className="text-gray-600 mb-2">Building and Maintaining Websites</p>
              <p className="text-gray-600 mb-2">Technical Support</p>
              <p className="text-gray-600 mb-2">IT Consulting</p>
            </div>
          </div>

          {/* Graphic Design Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-6">
              <img
                src="/assets/3D_graphic_design.jpg"
                alt="Graphic Design"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h4 className="text-xl font-bold mb-4 text-gray-800">Graphic Design</h4>
              <p className="text-gray-600 mb-4">
                <strong>Branding and Identity:</strong> Logos, Business Cards, Visual Identity
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Print Media:</strong> Brochures, Flyers, Posters
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Digital Media:</strong> Web Layouts, UI Design, Infographics
              </p>
            </div>
          </div>

          {/* Additional Services Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-6">
              <img
                src="/assets/image_2.jpg"
                alt="Additional Services"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h4 className="text-xl font-bold mb-4 text-gray-800">Additional Services</h4>
              <p className="text-gray-600 mb-2">Electrical Wiring & System Troubleshooting</p>
              <p className="text-gray-600 mb-2">Legal Services</p>
              <p className="text-gray-600 mb-2">Accountancy Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
