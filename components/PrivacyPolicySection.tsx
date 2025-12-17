import React, { useEffect } from 'react';
import { CONFERENCE_DETAILS } from '../constants';
import { AcademicCapIcon } from './Icons';

interface PrivacyPolicyPageProps {
  onClose: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper for Section Cards
  const SectionCard = ({ number, title, children, className = "" }: { number: string, title: string, children: React.ReactNode, className?: string }) => (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8 transition-all hover:shadow-md ${className}`}>
      <div className="bg-slate-50/80 border-b border-slate-100 px-6 py-5 flex items-center gap-4">
        <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-govt-blue text-white flex items-center justify-center font-bold text-lg font-serif shadow-sm">
          {number}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-govt-navy m-0 font-serif">
          {title}
        </h2>
      </div>
      <div className="p-6 md:p-8 text-slate-600 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );

  // Helper for Sub-headings
  const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-bold text-govt-navy mt-6 mb-3 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-govt-accent"></span>
      {children}
    </h3>
  );

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-600 selection:bg-govt-blue selection:text-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-t-4 border-govt-blue">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
             <div className="flex items-center gap-3">
                 <div className="bg-govt-navy p-2 rounded-lg text-white shadow-md">
                    <AcademicCapIcon className="w-6 h-6" />
                 </div>
                 <div className="flex flex-col">
                     <h1 className="text-xs sm:text-sm font-bold text-govt-navy uppercase tracking-wide leading-tight">
                        {CONFERENCE_DETAILS.host}
                     </h1>
                     <span className="text-[10px] sm:text-xs text-govt-accent font-bold uppercase tracking-wider">
                        {CONFERENCE_DETAILS.acronym}
                     </span>
                 </div>
             </div>
             <button 
                onClick={onClose}
                className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-govt-blue transition-colors bg-slate-50 hover:bg-blue-50 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-100"
             >
                <span className="hidden sm:inline">Back to Portal</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
             </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Title Block */}
        <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase rounded-full bg-white text-govt-blue border border-blue-100 shadow-sm">
                Legal Document
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-govt-navy mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Effective Date: <span className="font-semibold text-govt-navy bg-blue-50 px-2 py-1 rounded">December 18, 2025</span>
            </p>
        </div>

        {/* Section 1: Introduction */}
        <SectionCard number="1" title="Introduction">
            <p className="text-lg">
                This Privacy Policy describes how the <strong>{CONFERENCE_DETAILS.acronym} Conference Portal</strong> ("we," "us," or "our") collects, uses, and protects information from users ("you" or "your") of our website. This policy applies to the conference website operated by the <strong>{CONFERENCE_DETAILS.organizer}</strong> and <strong>{CONFERENCE_DETAILS.host}</strong>.
            </p>
            <p>
                We are committed to protecting your privacy and ensuring the security of your personal information in accordance with applicable Indian data protection laws.
            </p>
        </SectionCard>

        {/* Section 2: Info Collected */}
        <SectionCard number="2" title="Information We Collect">
            <SubHeading>2.1 Information You Provide Directly</SubHeading>
            <p>We collect information that you voluntarily provide when you:</p>
            <ul className="grid gap-3 mt-2">
                <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <strong className="text-govt-navy block mb-1">Register for the conference</strong>
                    Full name, email address, phone number, institutional affiliation, professional designation, category (faculty, student, industry, etc.), and accommodation preferences.
                </li>
                <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <strong className="text-govt-navy block mb-1">Submit abstracts or papers</strong>
                    Author names and contact details, co-author information, research content and materials, academic credentials.
                </li>
                <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <strong className="text-govt-navy block mb-1">Make payments</strong>
                    Bank transaction details (transaction ID, date, amount) and payment receipts.
                </li>
            </ul>

            <SubHeading>2.2 Information Collected Automatically</SubHeading>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-5 space-y-1 marker:text-govt-blue">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
            </ul>
        </SectionCard>

        {/* Section 3: Usage */}
        <SectionCard number="3" title="How We Use Your Information">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <SubHeading>3.1 Conference Operations</SubHeading>
                    <ul className="list-disc pl-5 space-y-2 marker:text-govt-blue">
                        <li>Process and confirm conference registrations</li>
                        <li>Manage abstract and paper submissions</li>
                        <li>Communicate conference updates and schedules</li>
                        <li>Arrange accommodation (when applicable)</li>
                        <li>Issue certificates of participation</li>
                    </ul>
                </div>
                <div>
                     <SubHeading>3.2 Academic Publication</SubHeading>
                    <ul className="list-disc pl-5 space-y-2 marker:text-govt-blue">
                        <li>Review submitted abstracts and papers</li>
                        <li>Prepare conference proceedings</li>
                        <li>Submit selected papers to journals for publication</li>
                        <li>Share author information with co-publishers (e.g., Springer Nature for OPSEARCH)</li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <SubHeading>3.3 Communication</SubHeading>
                    <ul className="list-disc pl-5 space-y-2 marker:text-govt-blue">
                        <li>Send registration confirmations</li>
                        <li>Provide conference updates and important announcements</li>
                        <li>Respond to inquiries and support requests</li>
                        <li>Share post-conference materials</li>
                    </ul>
                </div>
            </div>
        </SectionCard>

        {/* Section 4: Legal Basis */}
        <SectionCard number="4" title="Legal Basis for Processing">
            <p className="mb-4">We process your personal information based on:</p>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { title: "Consent", desc: "You have given explicit consent for specific purposes" },
                    { title: "Contractual Necessity", desc: "Processing is necessary to fulfill our agreement with you" },
                    { title: "Legitimate Interests", desc: "Interest in organizing the conference and conducting academic activities" },
                    { title: "Legal Obligations", desc: "Compliance with applicable laws and regulations" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                        <strong className="text-govt-navy block">{item.title}</strong>
                        <span className="text-sm">{item.desc}</span>
                    </div>
                ))}
            </div>
        </SectionCard>

        {/* Section 5: Sharing */}
        <SectionCard number="5" title="How We Share Your Information">
            <SubHeading>5.1 Within the Conference Organization</SubHeading>
            <ul className="list-disc pl-5 space-y-2 marker:text-govt-blue mb-6">
                <li>Conference organizing committee members</li>
                <li>Peer reviewers for abstract and paper evaluation</li>
                <li>Technical support staff</li>
            </ul>

            <SubHeading>5.2 With Third Parties</SubHeading>
            <p className="mb-2">We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-govt-blue mb-6">
                <li><strong>Academic publishers:</strong> Selected papers may be shared with Springer Nature (OPSEARCH) and other SCOPUS-indexed journals</li>
                <li><strong>Payment processors:</strong> Bank details for payment verification</li>
                <li><strong>Accommodation providers:</strong> For participants who opt for accommodation packages</li>
                <li><strong>Email service providers:</strong> For sending conference communications</li>
                <li><strong>Website hosting and technical service providers</strong></li>
            </ul>

            <SubHeading>5.3 Public Information</SubHeading>
            <p className="mb-2">The following may be made public:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-govt-blue">
                <li>Author names and affiliations in conference programs</li>
                <li>Abstracts in conference materials</li>
                <li>Published papers in proceedings and journals</li>
                <li>Conference photographs and videos (with consent)</li>
            </ul>
        </SectionCard>

        {/* Section 6: Contact & Return */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-govt-navy mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-govt-blue text-white flex items-center justify-center font-bold text-lg font-serif">6</span>
                Contact Information
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Data Protection Officer</p>
                    <p className="font-bold text-govt-navy text-lg">Dr. Chitaranjan Sharma</p>
                    <p className="text-sm text-slate-600 mb-3">Conference Chair</p>
                    <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-sm text-govt-blue hover:underline block truncate">{CONFERENCE_DETAILS.email}</a>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Conference Committee</p>
                    <p className="font-bold text-govt-navy text-lg">Govt. Holkar Science College</p>
                    <p className="text-sm text-slate-600 mb-3">Indore, Madhya Pradesh</p>
                    <a href={`http://${CONFERENCE_DETAILS.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-govt-blue hover:underline block truncate">{CONFERENCE_DETAILS.website}</a>
                </div>
            </div>
        </div>

        {/* Footer Action */}
        <div className="text-center pb-8">
             <button 
                onClick={onClose}
                className="bg-govt-blue hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
             >
                Return to Conference Portal
             </button>
        </div>

      </main>
    </div>
  );
};

export default PrivacyPolicyPage;