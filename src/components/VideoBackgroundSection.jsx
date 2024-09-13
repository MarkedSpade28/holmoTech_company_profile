import React from 'react';

const VideoBackgroundSection = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" poster="/assets/fallback_image.jpg">
        <source src="/assets/7593783-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-lg mb-2">Your Vision, Our Technology!</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Streamline your digital solutions.</h2>
        <a href="#about" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-md shadow-md">Get Started</a>
      </div>
    </section>
  );
};

export default VideoBackgroundSection;
