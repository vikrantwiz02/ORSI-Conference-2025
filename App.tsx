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
import { MapPinIcon } from './components/Icons';
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

        {/* Professional Venue Section with Precise Native Pinned Map */}
        <section id="venue" className="relative bg-white pt-24 pb-20 overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-4 text-center mb-16 relative z-10">
                <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-govt-blue/10 border border-govt-blue/20 text-govt-blue font-bold text-[10px] tracking-[0.2em] uppercase">
                    Conference Location
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-black text-govt-navy mb-4 tracking-tight">
                    Map & Venue
                </h2>
                <div className="w-24 h-1 bg-govt-accent mx-auto rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden group">
                    <div className="relative h-[450px] md:h-[450px] w-full rounded-[1.8rem] overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8832742182026!2d75.87077339999999!3d22.6953888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0x4ab12f1ee9f26186!2sGovernment%20Holkar%20Science%20College!5e0!3m2!1sen!2sin!4v1766067662084!5m2!1sen!2sin" 
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }}
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl"
                        ></iframe>
                    </div>
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