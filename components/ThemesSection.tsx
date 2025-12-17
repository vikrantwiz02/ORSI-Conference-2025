import React from 'react';
import { THEMES } from '../constants';

const ThemesSection: React.FC = () => {
  return (
    <section id="themes" className="py-20 lg:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-100 text-govt-blue">
            Call for Papers
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-govt-navy mb-6">
            Theme of the Conference
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
            Paper presentations will be conducted in parallel thematic sessions. Extended abstracts showcasing theoretical contributions or real-world applications are invited in the following areas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {THEMES.map((theme, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col h-full hover:-translate-y-2">
              <div className="w-14 h-14 bg-govt-blue/10 rounded-2xl flex items-center justify-center text-govt-blue mb-6 group-hover:bg-govt-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-govt-navy mb-4 group-hover:text-govt-blue transition-colors">{theme.title}</h3>
              <ul className="space-y-3 flex-grow">
                {theme.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm group-hover:text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-govt-accent flex-shrink-0"></span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;