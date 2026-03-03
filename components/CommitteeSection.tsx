import React, { useState } from 'react';
import { PATRONS, CHAIRS, ADVISORY_COMMITTEE, ORGANIZING_COMMITTEE, ORSI_COUNCIL_MEMBERS, SPEAKERS } from '../constants';

const INITIAL_VISIBLE = 6;

interface ViewAllButtonProps {
  total: number;
  showAll: boolean;
  onToggle: () => void;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ total, showAll, onToggle }) => {
  if (total <= INITIAL_VISIBLE) return null;
  return (
    <div className="text-center mt-8">
      <button
        onClick={onToggle}
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-slate-300 text-govt-navy font-semibold hover:bg-slate-50 hover:border-govt-blue transition-all shadow-sm"
      >
        {showAll ? 'Show Less' : `View All ${total} Members`}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

const CommitteeSection: React.FC = () => {
  const [showAllSpeakers, setShowAllSpeakers] = useState(false);
  const [showAllAdvisory, setShowAllAdvisory] = useState(false);
  const [showAllOrsi, setShowAllOrsi] = useState(false);

  const displayedSpeakers = showAllSpeakers ? SPEAKERS : SPEAKERS.slice(0, INITIAL_VISIBLE);
  const displayedAdvisory = showAllAdvisory ? ADVISORY_COMMITTEE : ADVISORY_COMMITTEE.slice(0, INITIAL_VISIBLE);
  const displayedOrsi = showAllOrsi ? ORSI_COUNCIL_MEMBERS : ORSI_COUNCIL_MEMBERS.slice(0, INITIAL_VISIBLE);

  // Helper function to get photo filename from name
  const getPhotoUrl = (name: string) => {
    const titles = ['dr.', 'prof.', 'mr.', 'ms.', 'mrs.'];
    const parts = name.toLowerCase().split(' ');
    const firstName = titles.includes(parts[0]) ? parts[1] : parts[0];
    return `/${firstName}.jpg`;
  };

  // Check if image exists and show it, otherwise show initial
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});
  
  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }));
  };

  return (
    <section id="committee" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-govt-navy mb-4">
            Organizing Committee
          </h2>
          <div className="w-24 h-1 bg-govt-accent mx-auto rounded-full"></div>
        </div> */}

        {/* Patrons & Chairs */}
        <div className="mb-20">
            {/* Patrons Section */}
            <h3 className="text-2xl font-bold text-govt-navy mb-8 text-center bg-slate-50 py-4 rounded-xl mx-auto max-w-3xl border border-slate-200">
                Patrons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                {PATRONS.map((person, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border-b-4 border-govt-blue hover:shadow-lg transition-shadow">
                        <div className="w-24 h-24 bg-white shadow-sm rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-serif font-bold text-govt-blue border border-slate-100 overflow-hidden">
                            {!imageErrors[person.name] ? (
                                <img 
                                    src={getPhotoUrl(person.name)} 
                                    alt={person.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                    onError={() => handleImageError(person.name)}
                                />
                            ) : (
                                person.name.charAt(0)
                            )}
                        </div>
                        <p className="text-xs font-bold text-govt-accent uppercase tracking-wider mb-2">Patron</p>
                        <h3 className="text-lg font-bold text-govt-navy mb-2">{person.name}</h3>
                        <p className="text-sm text-slate-600 leading-snug">{person.role}</p>
                        <p className="text-xs text-slate-500 mt-2">{person.affiliation}</p>
                    </div>
                ))}
            </div>

            {/* Conference Chairs Section */}
            <h3 className="text-2xl font-bold text-govt-navy mb-8 text-center bg-slate-50 py-4 rounded-xl mx-auto max-w-3xl border border-slate-200">
                Conference Chairs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                {CHAIRS.map((person, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border-b-4 border-govt-accent hover:shadow-lg transition-shadow">
                        <div className="w-24 h-24 bg-white shadow-sm rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-serif font-bold text-govt-accent border border-slate-100 overflow-hidden">
                            {!imageErrors[person.name] ? (
                                <img 
                                    src={getPhotoUrl(person.name)} 
                                    alt={person.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                    onError={() => handleImageError(person.name)}
                                />
                            ) : (
                                person.name.charAt(0)
                            )}
                        </div>
                        <p className="text-xs font-bold text-govt-blue uppercase tracking-wider mb-2">Chair</p>
                        <h3 className="text-lg font-bold text-govt-navy mb-2">{person.name}</h3>
                        <p className="text-sm text-slate-600 leading-snug">{person.affiliation}</p>
                        {/* <a href={`mailto:${person.email}`} className="text-xs text-govt-blue mt-2 block hover:underline">{person.email}</a> */}
                    </div>
                ))}
            </div>

            {/* Organizing Committee Section */}
            <h3 className="text-2xl font-bold text-govt-navy mb-8 text-center bg-slate-50 py-4 rounded-xl mx-auto max-w-3xl border border-slate-200">
                Organizing Committee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {ORGANIZING_COMMITTEE.map((person, idx) => {
                    const parts = person.split(', ');
                    const name = parts[0];
                    const affiliation = parts.slice(1).join(', ');
                    return (
                        <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border-b-4 border-govt-accent hover:shadow-lg transition-shadow">
                            <div className="w-24 h-24 bg-white shadow-sm rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-serif font-bold text-govt-accent border border-slate-100 overflow-hidden">
                                {!imageErrors[name] ? (
                                    <img 
                                        src={getPhotoUrl(name)} 
                                        alt={name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover"
                                        onError={() => handleImageError(name)}
                                    />
                                ) : (
                                    name.charAt(0)
                                )}
                            </div>
                            <h3 className="text-lg font-bold text-govt-navy mb-2">{name}</h3>
                            <p className="text-sm text-slate-600 leading-snug">{affiliation}</p>
                        </div>
                    );
                })}
            </div>

            {/* Speakers Section */}
            <h3 className="text-2xl font-bold text-govt-navy mb-8 text-center bg-slate-50 py-4 rounded-xl mx-auto max-w-3xl border border-slate-200">
                Speakers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
                {displayedSpeakers.map((speaker, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border-b-4 border-govt-blue hover:shadow-lg transition-shadow">
                        {/* <div className="w-16 h-16 bg-govt-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-serif font-bold text-govt-blue">
                            {speaker.name.split(' ').find(p => !['Prof.', 'Mr.', 'Ms.', 'Dr.'].includes(p))?.charAt(0) ?? speaker.name.charAt(0)}
                        </div> */}
                        <h3 className="text-base font-bold text-govt-navy mb-1">{speaker.name}</h3>
                        {speaker.post && <p className="text-sm text-slate-600 leading-snug mb-1">{speaker.post}</p>}
                        <p className="text-sm text-slate-700 font-medium leading-snug mb-1">{speaker.institution}</p>
                        <p className="text-xs text-govt-accent font-medium">{speaker.location}</p>
                    </div>
                ))}
            </div>
            <ViewAllButton total={SPEAKERS.length} showAll={showAllSpeakers} onToggle={() => setShowAllSpeakers(v => !v)} />
            <div className="mb-16" />
        </div>

        {/* Advisory Committee - Expandable List */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-govt-navy mb-8 text-center bg-slate-50 py-4 rounded-xl mx-auto max-w-3xl border border-slate-200">
                Advisory Committee
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedAdvisory.map((member, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border-b-4 border-govt-blue hover:shadow-lg transition-shadow">
                        <h3 className="text-base font-bold text-govt-navy mb-1">{member.name}</h3>
                        {member.post && <p className="text-sm text-slate-600 leading-snug mb-1">{member.post}</p>}
                        <p className="text-sm text-slate-700 font-medium leading-snug mb-1">{member.institution}</p>
                        {member.location && <p className="text-xs text-govt-accent font-medium">{member.location}</p>}
                    </div>
                ))}
            </div>

            <ViewAllButton total={ADVISORY_COMMITTEE.length} showAll={showAllAdvisory} onToggle={() => setShowAllAdvisory(v => !v)} />
        </div>

        {/* ORSI Council Members */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-govt-navy mb-8 text-center bg-slate-50 py-4 rounded-xl mx-auto max-w-3xl border border-slate-200">
                ORSI Council Members
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedOrsi.map((member, idx) => (
                    member ? (
                        <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center border-b-4 border-govt-accent hover:shadow-lg transition-shadow">
                            <h3 className="text-lg font-bold text-govt-navy mb-2">{member}</h3>
                        </div>
                    ) : (
                        <div key={idx} className="invisible"></div>
                    )
                ))}
            </div>

            <ViewAllButton total={ORSI_COUNCIL_MEMBERS.filter(Boolean).length} showAll={showAllOrsi} onToggle={() => setShowAllOrsi(v => !v)} />
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;