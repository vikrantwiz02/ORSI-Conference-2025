import React from 'react';
import { IMPORTANT_DATES, REGISTRATION_FEES, BANK_DETAILS, GUIDELINES, CONFERENCE_DETAILS } from '../constants';

const RegistrationSection: React.FC = () => {
  return (
    <section id="register" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-govt-accent font-bold tracking-widest uppercase text-xs mb-2 block">Join the Conference</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-govt-navy mb-4">
                Registration & Timeline
            </h2>
            <p className="text-slate-600 text-lg">
                Secure your spot by reviewing the dates and details below.
            </p>
        </div>

        {/* 1. Important Dates - Compact Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {IMPORTANT_DATES.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 border-t-4 border-t-govt-blue hover:shadow-md transition-all">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Step {idx + 1}</div>
                    <div className="text-lg font-mono font-bold text-govt-navy mb-1">{item.date}</div>
                    <div className="text-xs text-slate-600 font-medium leading-tight">{item.label}</div>
                </div>
            ))}
        </div>

        {/* Registration Guidelines */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-10">
            <h3 className="text-xl font-bold text-govt-navy mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-govt-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Registration Guidelines
            </h3>
            <div className="space-y-3">
                <div className="flex gap-3 text-sm text-slate-700 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-govt-blue text-white flex items-center justify-center text-xs font-bold">1</span>
                    <p className="leading-relaxed pt-0.5">Complete the transaction according to the <strong className="text-govt-navy">fee mentioned for your specific category</strong>.</p>
                </div>
                <div className="flex gap-3 text-sm text-slate-700 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-govt-blue text-white flex items-center justify-center text-xs font-bold">2</span>
                    <p className="leading-relaxed pt-0.5">
                        After payment of the registration fee, <strong className="text-govt-navy">download and send the duly filled</strong> {' '}
                        <a 
                            href="/Conference_Registration_Form.pdf"
                            download
                            className="text-govt-blue hover:text-govt-accent font-bold underline transition-colors"
                        >
                            registration form
                        </a>
                        , to <strong className="text-govt-navy">Email</strong> {' '}
                        <a 
                            href={`mailto:${CONFERENCE_DETAILS.email}`}
                            className="text-govt-blue hover:text-govt-accent font-bold underline transition-colors"
                        >
                            {CONFERENCE_DETAILS.email}
                        </a>
                    </p>
                </div>
                <div className="flex gap-3 text-sm text-slate-700 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-govt-blue text-white flex items-center justify-center text-xs font-bold">3</span>
                    <p className="leading-relaxed pt-0.5">The registration fee includes <strong className="text-govt-navy">conference materials, breakfast, lunch, and snacks for all three days</strong> of the conference and is <strong className="text-red-600">non-refundable under any circumstances</strong>.</p>
                </div>
                <div className="flex gap-3 text-sm text-slate-700 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-govt-blue text-white flex items-center justify-center text-xs font-bold">4</span>
                    <p className="leading-relaxed pt-0.5"><strong className="text-govt-navy">Limited shared accommodation</strong> in nearby hostels/guest houses is available for domestic and international participants on a <strong className="text-govt-navy">first-come, first-served basis</strong> at a nominal fee.</p>
                </div>
                <div className="flex gap-3 text-sm text-slate-700 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-govt-blue text-white flex items-center justify-center text-xs font-bold">5</span>
                    <p className="leading-relaxed pt-0.5">
                        For any <strong className="text-govt-navy">further conference-related queries</strong>, participants may contact the organizing committee at{' '}
                        <a 
                            href={`mailto:${CONFERENCE_DETAILS.email}`}
                            className="text-govt-blue hover:text-govt-accent font-bold underline transition-colors"
                        >
                            {CONFERENCE_DETAILS.email}
                        </a>
                    </p>
                </div>
            </div>
        </div>

        {/* 2. Main Content - Fees & Bank Details Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            {/* Left: Fees Table (Span 7) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex-grow">
                    <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h3 className="text-lg font-bold text-govt-navy">Fee Structure</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-govt-blue px-2 py-1 rounded-md">Non-Refundable</span>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                                    <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Indian (₹)</th>
                                    <th className="px-4 py-3 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Overseas ($)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {REGISTRATION_FEES.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                        <td className="px-4 py-3 text-sm font-semibold text-slate-700">{row.category}</td>
                                        <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">{row.indian}</td>
                                        <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">{row.overseas}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Right: Bank Details (Span 5) */}
            <div className="lg:col-span-5 xl:col-span-4 h-full">
                <div className="bg-govt-navy text-white rounded-2xl p-6 shadow-xl h-full relative overflow-hidden flex flex-col justify-between group">
                     {/* Background Glow */}
                     <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                     
                     <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4 text-govt-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <span className="text-sm font-bold uppercase tracking-widest">Bank Details</span>
                        </div>
                        <div className="space-y-1 mb-4">
                            <p className="text-[10px] text-slate-400 uppercase">Beneficiary</p>
                            <p className="text-sm font-medium leading-tight">{BANK_DETAILS.beneficiary}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <p className="text-[10px] text-slate-400 uppercase">Bank</p>
                                <p className="text-sm font-bold">{BANK_DETAILS.bank}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase">IFSC</p>
                                <p className="text-sm font-mono text-govt-accent">{BANK_DETAILS.ifsc}</p>
                            </div>
                        </div>
                     </div>

                     <div className="bg-white/10 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Account Number</p>
                        <p className="font-mono text-xl tracking-wider text-white">{BANK_DETAILS.accountNo}</p>
                     </div>
                </div>
            </div>
        </div>

        {/* 3. Bottom Row - Guidelines & Action - Full Width Horizontal */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:px-8 md:py-6">
             <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                
                <div className="flex-1 w-full">
                    <h3 className="text-lg font-bold text-govt-navy mb-3 flex items-center gap-2">
                        Submission Guidelines
                        <div className="h-px bg-slate-100 flex-grow ml-4"></div>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                         {GUIDELINES.map((line, idx) => (
                             <div key={idx} className="flex gap-3 text-sm text-slate-600 items-start">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-govt-blue flex-shrink-0"></span>
                                <span className="leading-snug">
                                    {idx === 0 ? (
                                        <>
                                            {line}{' '}
                                            <a 
                                                href={`mailto:${CONFERENCE_DETAILS.email}`}
                                                className="text-govt-blue hover:text-govt-accent font-semibold underline transition-colors"
                                            >
                                                {CONFERENCE_DETAILS.email}
                                            </a>
                                        </>
                                    ) : (
                                        line
                                    )}
                                </span>
                             </div>
                        ))}
                         <div className="flex gap-3 text-sm text-slate-600 items-start md:col-span-2">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-govt-blue flex-shrink-0"></span>
                                <span className="leading-snug"><strong className="text-govt-navy">Best Paper Awards</strong> will be presented across broad thematic areas of the conference, including multiple award categories, based on the recommendations of the review committee.</span>
                         </div>
                    </div>
                </div>

                <div className="w-full lg:w-auto flex-shrink-0 flex flex-col gap-3">
                    <a 
                        href={`mailto:${CONFERENCE_DETAILS.email}`}
                        className="flex items-center justify-center gap-2 bg-govt-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 whitespace-nowrap"
                    >
                        Submit Abstract
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>

             </div>
        </div>

      </div>
    </section>
  );
};

export default RegistrationSection;