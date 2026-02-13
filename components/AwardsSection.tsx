import React from 'react';
import { AWARDS } from '../constants';

const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-govt-accent/10 text-govt-accent">
            Recognition & Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-govt-navy mb-6">
            Conference Awards
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
            The following prestigious awards will be presented during the 58th Annual Convention and International Conference (6-8 March 2026) at Indore, M.P.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {AWARDS.map((award, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex items-center gap-6 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md">
                <img src="/trophy-icon.png" alt="Trophy Award" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-govt-navy group-hover:text-govt-blue transition-colors leading-tight">{award.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
