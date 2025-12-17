import React, { useState } from 'react';
import { PATRONS, CHAIRS, ADVISORY_COMMITTEE, ORGANIZING_COMMITTEE } from '../constants';

const CommitteeSection: React.FC = () => {
  const [showAllAdvisory, setShowAllAdvisory] = useState(false);
  
  // Show first 9 members by default to keep the UI clean
  const displayedAdvisory = showAllAdvisory ? ADVISORY_COMMITTEE : ADVISORY_COMMITTEE.slice(0, 9);

  return (
    <section id="committee" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-govt-navy mb-4">
            Organizing Committee
          </h2>
          <div className="w-24 h-1 bg-govt-accent mx-auto rounded-full"></div>
        </div>

        {/* Patrons & Chairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {PATRONS.map((person, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border-b-4 border-govt-blue hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 bg-white shadow-sm rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-serif font-bold text-govt-blue border border-slate-100">
                        {person.name.charAt(0)}
                    </div>
                    <p className="text-xs font-bold text-govt-accent uppercase tracking-wider mb-2">Patron</p>
                    <h3 className="text-lg font-bold text-govt-navy mb-2">{person.name}</h3>
                    <p className="text-sm text-slate-600 leading-snug">{person.role}</p>
                    <p className="text-xs text-slate-500 mt-2">{person.affiliation}</p>
                </div>
            ))}
             {CHAIRS.map((person, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border-b-4 border-govt-accent hover:shadow-lg transition-shadow">
                     <div className="w-24 h-24 bg-white shadow-sm rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-serif font-bold text-govt-accent border border-slate-100">
                        {person.name.charAt(0)}
                    </div>
                    <p className="text-xs font-bold text-govt-blue uppercase tracking-wider mb-2">Chair</p>
                    <h3 className="text-lg font-bold text-govt-navy mb-2">{person.name}</h3>
                    <p className="text-sm text-slate-600 leading-snug">{person.affiliation}</p>
                    <a href={`mailto:${person.email}`} className="text-xs text-govt-blue mt-2 block hover:underline">{person.email}</a>
                </div>
            ))}
        </div>

        {/* Advisory Committee - Expandable List */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-govt-navy mb-8 text-center bg-slate-50 py-4 rounded-xl mx-auto max-w-3xl border border-slate-200">
                Advisory Committee
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mb-8">
                {displayedAdvisory.map((member, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl hover:bg-blue-50 transition-colors border border-slate-100 hover:border-blue-100 shadow-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-govt-blue flex-shrink-0"></div>
                        <p className="text-sm text-slate-700 font-medium">{member}</p>
                    </div>
                ))}
            </div>
            
            {/* Show More Button */}
            {ADVISORY_COMMITTEE.length > 9 && (
                <div className="text-center">
                    <button 
                        onClick={() => setShowAllAdvisory(!showAllAdvisory)}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-slate-300 text-govt-navy font-semibold hover:bg-slate-50 hover:border-govt-blue transition-all shadow-sm"
                    >
                        {showAllAdvisory ? 'Show Less' : `View All ${ADVISORY_COMMITTEE.length} Members`}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-4 w-4 transition-transform duration-300 ${showAllAdvisory ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            )}
        </div>

        {/* Organizing Committee */}
        <div>
            <h3 className="text-2xl font-bold text-govt-navy mb-8 text-center bg-slate-50 py-4 rounded-xl mx-auto max-w-3xl border border-slate-200">
                Organizing Committee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {ORGANIZING_COMMITTEE.map((member, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl hover:bg-orange-50 transition-colors border border-slate-100 hover:border-orange-100 shadow-sm">
                         <div className="mt-1.5 w-2 h-2 rounded-full bg-govt-accent flex-shrink-0"></div>
                         <p className="text-sm text-slate-700 font-medium">{member}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;