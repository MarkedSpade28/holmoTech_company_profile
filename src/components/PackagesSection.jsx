import React from 'react';

const PackagesSection = () => {
  return (
    <section id="packages" className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-gray-800">
          Most Preferred Packages
        </h2>

        <div className="flex flex-wrap justify-center">
          {/* Basic Package Card */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 p-6 h-full">
              <img
                src="/assets/brand_identity.jpg"
                alt="Basic Package"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h4 className="text-xl font-bold mb-4 text-gray-800">Basic Package</h4>
              <p className="text-gray-600 mb-2">Designing Invitation Cards</p>
              <p className="text-gray-600 mb-2">Social Media Management</p>
              <p className="text-gray-600 mb-2">Content Writing and Editing</p>
              <p className="text-gray-600 mb-2">Data Backup and Recovery</p>
              <p className="mt-4 font-bold text-gray-800">Pricing: Reach out for further details.</p>
            </div>
          </div>

          {/* Standard Package Card */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 p-6 h-full">
              <img
                src="/assets/advanced_data.jpg"
                alt="Standard Package"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h4 className="text-xl font-bold mb-4 text-gray-800">Standard Package</h4>
              <p className="text-gray-600 mb-2">Building and Maintaining Websites</p>
              <p className="text-gray-600 mb-2">Graphic Design (Logos, Banners, etc.)</p>
              <p className="text-gray-600 mb-2">Search Engine Optimization (SEO)</p>
              <p className="text-gray-600 mb-2">Email Marketing Campaigns</p>
              <p className="mt-4 font-bold text-gray-800">Pricing: Reach out for further details.</p>
            </div>
          </div>

          {/* Premium Package Card */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 p-6 h-full">
              <img
                src="/assets/business_plan.jpg"
                alt="Premium Package"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h4 className="text-xl font-bold mb-4 text-gray-800">Premium Package</h4>
              <p className="text-gray-600 mb-2">Custom Application Development</p>
              <p className="text-gray-600 mb-2">Online Course Creation</p>
              <p className="text-gray-600 mb-2">Video Editing</p>
              <p className="text-gray-600 mb-2">IT Consulting</p>
              <p className="mt-4 font-bold text-gray-800">Pricing: Reach out for further details.</p>
            </div>
          </div>

          {/* A la Carte Package Card */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 p-6 h-full">
              <img
                src="/assets/goal.jpg"
                alt="A la Carte Services"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h4 className="text-xl font-bold mb-4 text-gray-800">A la Carte Services</h4>
              <p className="text-gray-600 mb-2">Virus and Malware Removal</p>
              <p className="text-gray-600 mb-2">Creating and Managing Online Ads</p>
              <p className="text-gray-600 mb-2">System Upgrades and Installations</p>
              <p className="mt-4 font-bold text-gray-800">Pricing: Reach out for further details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
