import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, CONFERENCE_DETAILS } from '../constants';

interface NavbarProps {
  onNavigateHome?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // If we're on a legal page, navigate home first
    if (onNavigateHome) {
      onNavigateHome();
      // Add a small delay to allow page transition before scrolling
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Offset for the sticky header (approx 100px to be safe and visually pleasing)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Govt Bar */}
      <div className="bg-govt-navy text-white py-2 px-4 text-[10px] md:text-xs font-medium tracking-widest text-center uppercase z-50 relative">
        Government of Madhya Pradesh | Higher Education Department
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-lg py-2' : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <div className="flex items-center space-x-3 sm:space-x-4 max-w-[85%] lg:max-w-none">
               <div className="flex-shrink-0">
                  <img 
                    src="/logo.jpg" 
                    alt="Govt. Holkar Science College Logo" 
                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain transform transition-transform hover:scale-105"
                  />
               </div>
               <div className="flex flex-col">
                 <h1 className="text-[10px] sm:text-xs lg:text-sm font-bold text-govt-navy leading-tight uppercase tracking-wide">
                   {CONFERENCE_DETAILS.host}
                 </h1>
                 <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-govt-accent shrink-0"></span>
                    <p className="text-[8px] sm:text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                        NAAC A++ Accredited
                    </p>
                 </div>
               </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-600 hover:text-govt-blue hover:bg-slate-50 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
              <div className="pl-4 ml-2 border-l border-slate-200">
                  <a 
                    href="#register" 
                    onClick={(e) => handleNavClick(e, '#register')}
                    className="bg-gradient-to-r from-govt-accent to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer whitespace-nowrap"
                  >
                      Register Now
                  </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-govt-navy hover:text-govt-blue focus:outline-none p-2 bg-slate-50 rounded-lg"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div className={`lg:hidden absolute w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-slate-700 hover:text-govt-blue hover:bg-slate-50 px-4 py-3 rounded-xl text-base font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
             <a
                href="#register"
                onClick={(e) => handleNavClick(e, '#register')}
                className="block text-center bg-govt-accent text-white px-4 py-3 rounded-xl text-base font-bold mt-4 shadow-md mx-4 cursor-pointer"
              >
                Register Now
              </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;