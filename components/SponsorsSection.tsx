import React from 'react';
import { BuildingLibraryIcon, AcademicCapIcon } from './Icons';

const PARTNERS = [
  {
    name: "Govt. Holkar Science College",
    role: "Host Institution",
    type: "Academic",
    icon: <BuildingLibraryIcon className="w-10 h-10 text-govt-blue" />
  },
  {
    name: "ORSI Indore Chapter",
    role: "Organizer",
    type: "Society",
    icon: <AcademicCapIcon className="w-10 h-10 text-govt-accent" />
  },
  {
    name: "Springer Nature",
    role: "Publication Partner",
    type: "Journal",
    icon: (
      <svg className="w-10 h-10 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 4c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3s3-1.3 3-3V7c0-1.7-1.3-3-3-3zm-9 0c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3s3-1.3 3-3V7c0-1.7-1.3-3-3-3z"/>
      </svg>
    )
  },
  {
    name: "Scopus",
    role: "Indexing Partner",
    type: "Database",
    icon: (
      <svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  }
];

const SponsorsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-[0.2em]">
            In Association With
          </h3>
          <div className="w-12 h-1 bg-slate-100 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PARTNERS.map((partner, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-govt-blue/20 hover:-translate-y-2 relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-6 p-5 bg-slate-50 rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                {partner.icon}
              </div>
              <h4 className="text-lg font-bold text-govt-navy mb-1.5 group-hover:text-govt-blue transition-colors">
                {partner.name}
              </h4>
              <p className="text-xs font-bold text-govt-accent uppercase tracking-wide mb-3">
                {partner.role}
              </p>
              <span className="text-[10px] text-slate-400 font-medium px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;