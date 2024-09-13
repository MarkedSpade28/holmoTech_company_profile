import React, { useState } from 'react';

const FAQSection = () => {
  // State to track which FAQ is open
  const [openFaqs, setOpenFaqs] = useState([]);

  // Toggle function to show/hide FAQ
  const toggleFaq = (index) => {
    setOpenFaqs((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  return (
    <section id="faq" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <div
            className="faq-item bg-white p-6 rounded shadow cursor-pointer"
            onClick={() => toggleFaq(1)}
          >
            <h3 className="text-xl font-bold flex justify-between items-center">
              How can I get started with HolmoTech?
              <span className="ml-4">{openFaqs.includes(1) ? '-' : '+'}</span>
            </h3>
            {openFaqs.includes(1) && (
              <p className="mt-4">
                To start, contact us via phone or email to discuss your needs. We'll provide a
                detailed proposal and get started on your project.
              </p>
            )}
          </div>

          <div
            className="faq-item bg-white p-6 rounded shadow cursor-pointer"
            onClick={() => toggleFaq(2)}
          >
            <h3 className="text-xl font-bold flex justify-between items-center">
              What is your typical project turnaround time?
              <span className="ml-4">{openFaqs.includes(2) ? '-' : '+'}</span>
            </h3>
            {openFaqs.includes(2) && (
              <p className="mt-4">
                Turnaround times vary based on the complexity of the project. We provide estimated
                timelines during the initial consultation.
              </p>
            )}
          </div>

          <div
            className="faq-item bg-white p-6 rounded shadow cursor-pointer"
            onClick={() => toggleFaq(3)}
          >
            <h3 className="text-xl font-bold flex justify-between items-center">
              What's the typical process for a design project?
              <span className="ml-4">{openFaqs.includes(3) ? '-' : '+'}</span>
            </h3>
            {openFaqs.includes(3) && (
              <p className="mt-4">
                Our design process typically involves discovery, planning, design creation, feedback
                iterations, and finalization. We work closely with you at every step to ensure your
                vision is realized.
              </p>
            )}
          </div>

          <div
            className="faq-item bg-white p-6 rounded shadow cursor-pointer"
            onClick={() => toggleFaq(4)}
          >
            <h3 className="text-xl font-bold flex justify-between items-center">
              Do you offer ongoing support?
              <span className="ml-4">{openFaqs.includes(4) ? '-' : '+'}</span>
            </h3>
            {openFaqs.includes(4) && (
              <p className="mt-4">
                Yes, we offer ongoing support for most of our services. Details can be included in
                your service package.
              </p>
            )}
          </div>

          <div
            className="faq-item bg-white p-6 rounded shadow cursor-pointer"
            onClick={() => toggleFaq(5)}
          >
            <h3 className="text-xl font-bold flex justify-between items-center">
              How do you handle data security?
              <span className="ml-4">{openFaqs.includes(5) ? '-' : '+'}</span>
            </h3>
            {openFaqs.includes(5) && (
              <p className="mt-4">
                We prioritize data security and use industry-standard practices to protect your
                information.
              </p>
            )}
          </div>

          <div
            className="faq-item bg-white p-6 rounded shadow cursor-pointer"
            onClick={() => toggleFaq(6)}
          >
            <h3 className="text-xl font-bold flex justify-between items-center">
              Can I customize a service package?
              <span className="ml-4">{openFaqs.includes(6) ? '-' : '+'}</span>
            </h3>
            {openFaqs.includes(6) && (
              <p className="mt-4">
                Absolutely! We offer customizable packages to fit your specific needs and budget.
              </p>
            )}
          </div>

          <div
            className="faq-item bg-white p-6 rounded shadow cursor-pointer"
            onClick={() => toggleFaq(7)}
          >
            <h3 className="text-xl font-bold flex justify-between items-center">
              Do you offer emergency services?
              <span className="ml-4">{openFaqs.includes(7) ? '-' : '+'}</span>
            </h3>
            {openFaqs.includes(7) && (
              <p className="mt-4">
                Yes, we offer emergency services. Please call us immediately if you encounter an
                urgent issue.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
