import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ThemesSection from './components/ThemesSection';
import CommitteeSection from './components/CommitteeSection';
import RegistrationSection from './components/RegistrationSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SponsorsSection from './components/SponsorsSection';
import ContactSection from './components/ContactSection';
import TermsOfServicePage from './components/TermsOfServiceSection';
import PrivacyPolicyPage from './components/PrivacyPolicySection';
import { Analytics } from "@vercel/analytics/react"
import { ABOUT_COLLEGE, ABOUT_ORSI } from './constants';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');

  const handleNavigate = (page: 'terms' | 'privacy') => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'terms') {
    return <TermsOfServicePage onClose={handleBackToHome} onPrivacyClick={() => handleNavigate('privacy')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicyPage onClose={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        
        <SponsorsSection />

        <InfoSection 
            id="about-college"
            title="About Govt. Holkar Science College"
            content={ABOUT_COLLEGE}
            imageSrc="/college_image.jpg"
            accentColor="blue"
        />

        <InfoSection 
            id="about-orsi"
            title="About ORSI"
            content={ABOUT_ORSI}
            imageSrc="/college_image.jpg"
            isReversed={true}
            accentColor="orange"
        />

        <ThemesSection />
        
        <RegistrationSection />

        <CommitteeSection />

        <FAQSection />

        {/* Venue Section */}
        <section id="venue" className="py-16 lg:py-24 bg-govt-navy relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800 opacity-20 transform skew-x-12 translate-x-20"></div>
            
            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-xs tracking-wider uppercase">
                    Destinations
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Conference Venue</h2>
                <h3 className="text-xl md:text-2xl font-medium text-slate-300 mb-10 max-w-3xl mx-auto">
                    Govt. Holkar Science College, Indore, Madhya Pradesh
                </h3>
                
                <div className="bg-white p-2 rounded-3xl shadow-2xl inline-block w-full max-w-5xl h-[450px] md:h-[550px] relative overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14722.728418699493!2d75.8761646!3d22.7029648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0a9372138b%3A0x7052945229715124!2sGovernment%20Holkar%20(Model%2C%20Autonomous)%20Science%20College!5e0!3m2!1sen!2sin!4v1734444700000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, borderRadius: '1rem' }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Govt Holkar Science College Map"
                        className="w-full h-full rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </section>

        <ContactSection />
      </main>
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
      <Analytics />
    </div>
  );
}