import React from 'react';
import Header from './components/Header';
import VideoBackgroundSection from './components/VideoBackgroundSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PackagesSection from './components/PackagesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <VideoBackgroundSection />
        <AboutSection />
        <ServicesSection />
        <PackagesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
