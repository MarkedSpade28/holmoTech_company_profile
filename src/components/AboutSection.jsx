import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-gray-200 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-gray-800">
          Welcome to HolmoTech
        </h2>
        <p className="mb-8 md:mb-12 text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At HolmoTech, we are committed to delivering cutting-edge solutions that align with your
          business goals. Our team of experts specializes in a diverse range of services designed to
          meet your digital, technical, and administrative needs. From website design and IT support
          to advanced troubleshooting, we have you covered. Additionally, we offer services such as
          electrical wiring, system troubleshooting, legal support, and accountancy services.
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center md:justify-between">
          {/* Mission and Vision Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-6">
              <img
                src="/assets/mission-statement.jpg"
                alt="Our Mission"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To deliver exceptional results with professionalism and expertise. We continuously
                adapt to emerging needs and trends to ensure we provide the best solutions for your
                business.
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted partner for businesses seeking innovative digital solutions
                and transformative growth.
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-6">
              <img
                src="/assets/our_values.jpg"
                alt="Our Values"
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Our Values</h3>
              <ul className="list-none text-gray-600 space-y-4 leading-relaxed">
                <li>
                  <strong>Connectivity & Technology Advancement:</strong> Seamless operations and
                  global reach.
                </li>
                <li>
                  <strong>Interconnected Services & Tech Evolution:</strong> Continuous growth and
                  evolution.
                </li>
                <li>
                  <strong>Precision & Digital Fluency:</strong> Expertise in coding and digital
                  solutions.
                </li>
                <li>
                  <strong>Security & Resilience:</strong> Commitment to protection and resilience in
                  all offerings.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Objectives Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">Our Objectives</h3>
          <ul className="list-none text-gray-600 space-y-4 leading-relaxed text-left">
            <li>
              <strong>Innovative Solutions:</strong> Continually develop cutting-edge technologies to
              meet evolving business needs.
            </li>
            <li>
              <strong>Customer Success:</strong> Prioritize client satisfaction through personalized
              support and services.
            </li>
            <li>
              <strong>Sustainable Growth:</strong> Foster growth that is sustainable and beneficial
              to all stakeholders.
            </li>
            <li>
              <strong>Global Reach:</strong> Expand our services to cater to a global audience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
