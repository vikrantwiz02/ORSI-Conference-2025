import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-slate-200 text-slate-600">
            Have Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-govt-navy mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-govt-blue mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <button
                className={`w-full text-left p-5 flex justify-between items-center transition-colors duration-300 ${
                  openIndex === index 
                    ? 'bg-slate-50' 
                    : 'hover:bg-slate-50'
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-govt-navy' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-govt-accent' : 'text-slate-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-2 text-slate-600 border-t border-slate-100 leading-relaxed bg-white">
                  {index === 2 ? (
                    <div>
                      The last date for extended abstract submission is <span className="font-semibold text-govt-navy">3rd March 2026</span> <span className="text-red-500 line-through text-sm">(25th February 2026)</span>. Acceptance notifications will be sent by <span className="font-semibold text-govt-navy">4th March 2026</span> <span className="text-red-500 line-through text-sm">(26th February 2026)</span>.
                    </div>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;