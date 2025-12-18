import React from 'react';
import { CONFERENCE_DETAILS } from '../constants';
import { MapPinIcon } from './Icons';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-surface relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-serif font-black text-govt-navy mb-4 tracking-tight text-center">
                    Contact Us
                </h2>
        <div className="max-w-2xl mx-auto">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
             <div className="bg-govt-blue p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-govt-accent opacity-20 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-bold mb-6 relative z-10">Contact Information</h3>
                
                <div className="space-y-6 relative z-10">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/20 p-2.5 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Email Us</p>
                            <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-lg font-medium hover:text-blue-200 transition-colors break-all">
                                {CONFERENCE_DETAILS.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-white/20 p-2.5 rounded-lg">
                             <MapPinIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Visit Us</p>
                            <p className="text-base leading-relaxed">
                                {CONFERENCE_DETAILS.venue}
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-10 pt-8 border-t border-white/20">
                    <p className="text-sm text-blue-100 mb-4">Need immediate assistance?</p>
                    <a href="tel:+911234567890" className="inline-flex items-center gap-2 bg-white text-govt-blue px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 12345 67890
                    </a>
                </div> */}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;