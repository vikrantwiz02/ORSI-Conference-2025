import React from 'react';
import { CONFERENCE_DETAILS } from '../constants';
import { MapPinIcon, ExternalLinkIcon } from './Icons';

interface FooterProps {
  onNavigate?: (page: 'terms' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-govt-navy text-slate-300 relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-govt-blue via-govt-accent to-govt-blue"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold font-serif text-white mb-6 tracking-wide">ICAORFDI-2026</h3>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                Empowering the future through Applications of Operations Research in Finance, Defence, and Industry. Join us for the 58th Annual Convention of ORSI.
            </p>
            <a 
              href="https://maps.app.goo.gl/aRZZMvii9XykNMK48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-4 text-slate-400 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 max-w-md hover:border-govt-accent hover:text-white transition-all group"
            >
                <div className="bg-slate-700 p-2 rounded-full text-govt-accent group-hover:bg-govt-accent group-hover:text-white shrink-0 transition-colors">
                    <MapPinIcon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium pt-1">
                    {CONFERENCE_DETAILS.venue}
                </span>
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-govt-accent"></span>
            </h4>
            <ul className="space-y-3">
                {[
                    { label: 'Home', href: '#home' },
                    { label: 'About College', href: '#about-college' },
                    { label: 'About ORSI', href: '#about-orsi' },
                    { label: 'Registration', href: '#register' }
                ].map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className="group flex items-center gap-2 hover:text-white transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-govt-blue transition-colors"></span>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Contact/External */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
                Resources
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-govt-accent"></span>
            </h4>
            <ul className="space-y-4">
                <li>
                    <a href={`https://orsihq.org/`} target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:text-white transition-colors bg-slate-800/30 p-3 rounded-lg border border-transparent hover:border-slate-700">
                        <ExternalLinkIcon className="w-5 h-5 text-govt-blue group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium">ORSI Official Website</span>
                    </a>
                </li>
                <li>
                    <a href="https://collegeholkar.org/" target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:text-white transition-colors bg-slate-800/30 p-3 rounded-lg border border-transparent hover:border-slate-700">
                        <ExternalLinkIcon className="w-5 h-5 text-govt-blue group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium">Holkar Science College</span>
                    </a>
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Govt. Holkar Science College. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 items-center">
                <button 
                  onClick={() => onNavigate?.('privacy')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => onNavigate?.('terms')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
                <span className="hidden md:inline text-slate-600">•</span>
                <a 
                  href="https://vikrant-portfolio-kappa.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 hover:text-govt-accent transition-colors"
                >
                  <span className="text-slate-500">Crafted by</span>
                  <span className="font-semibold text-white group-hover:text-govt-accent">Vikrant</span>
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;