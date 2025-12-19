import React from 'react';

const PARTNERS = [
  {
    name: "Govt. Holkar Science College",
    role: "Host Institution",
    type: "Academic",
    logo: "/holkar_logo.png"
  },
  {
    name: "ORSI Indore Chapter",
    role: "Organizer",
    type: "Society",
    logo: "/orsi_logo.png"
  },
  {
    name: "OPSEARCH",
    nameSecondary: "(Springer Nature)",
    role: "Publication Partner",
    type: "Journal",
    logo: "/opsearch_logo.png"
  },
  {
    name: "Scopus",
    role: "Indexing Partner",
    type: "Database",
    logo: "/Scopus_logo.png"
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
              
              <div className="mb-6 h-24 w-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
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