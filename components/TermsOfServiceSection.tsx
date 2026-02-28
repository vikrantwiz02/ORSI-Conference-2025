import React, { useEffect } from 'react';
import { CONFERENCE_DETAILS } from '../constants';
import Navbar from './Navbar';

interface TermsOfServicePageProps {
  onClose: () => void;
  onPrivacyClick: () => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onClose, onPrivacyClick }) => {
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
      <Navbar onNavigateHome={onClose} />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Title Block */}
        <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase rounded-full bg-white text-govt-blue border border-blue-100 shadow-sm">
                Legal Document
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-govt-navy mb-6 tracking-tight">Terms of Service</h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Effective Date: <span className="font-semibold text-govt-navy bg-blue-50 px-2 py-1 rounded">December 18, 2025</span>
            </p>
        </div>

        {/* Section 1: Acceptance */}
        <SectionCard number="1" title="Acceptance of Terms">
            <p className="text-lg">
                By accessing and using the <strong>{CONFERENCE_DETAILS.acronym} Conference Portal</strong> (the "Website"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use this Website.
            </p>
        </SectionCard>

        {/* Section 2: Description */}
        <SectionCard number="2" title="Description of Service">
            <p>The {CONFERENCE_DETAILS.acronym} Conference Portal provides information about the International Conference on Applications of Operations Research in Finance, Defence, and Industry. Services include:</p>
            <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                {[
                    "Conference information and schedules",
                    "Abstract and paper submission guidelines",
                    "Registration information and payment details",
                    "Committee and speaker information",
                    "Venue and contact details"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm">
                        <svg className="w-5 h-5 text-govt-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        {item}
                    </li>
                ))}
            </ul>
        </SectionCard>

        {/* Section 3: Eligibility */}
        <SectionCard number="3" title="User Eligibility">
            <p>The Website is intended for use by:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-govt-accent mb-4">
                <li>Academic researchers and faculty members</li>
                <li>Students pursuing postgraduate or doctoral studies</li>
                <li>Industry professionals</li>
                <li>Defence personnel</li>
                <li>Members of ORSI and related professional organizations</li>
            </ul>
            <p className="text-sm italic border-l-4 border-slate-300 pl-4 py-1">
                Users must be at least 18 years of age or have parental/guardian consent to use this Website.
            </p>
        </SectionCard>

        {/* Section 4: Registration */}
        <SectionCard number="4" title="Registration and Submissions">
            <SubHeading>4.1 Conference Registration</SubHeading>
            <ul className="space-y-2 mb-6">
                <li className="flex gap-3"><span className="text-govt-blue font-bold">•</span> All registration fees are non-refundable unless the conference is canceled by the organizers.</li>
                <li className="flex gap-3"><span className="text-govt-blue font-bold">•</span> Registration confirmation is subject to successful payment verification.</li>
                <li className="flex gap-3"><span className="text-govt-blue font-bold">•</span> The organizers reserve the right to refuse or cancel registration at their discretion.</li>
            </ul>

            <SubHeading>4.2 Abstract and Paper Submissions</SubHeading>
            <ul className="space-y-2">
                <li className="flex gap-3"><span className="text-govt-accent font-bold">•</span> All submitted abstracts and papers must be original work.</li>
                <li className="flex gap-3"><span className="text-govt-accent font-bold">•</span> Submissions must not infringe upon any copyright, patent, or other intellectual property rights.</li>
                <li className="flex gap-3"><span className="text-govt-accent font-bold">•</span> The organizers reserve the right to reject submissions that do not meet quality standards.</li>
                <li className="flex gap-3"><span className="text-govt-accent font-bold">•</span> Authors grant permission to review, edit, and publish their work in proceedings.</li>
            </ul>
        </SectionCard>

        {/* Section 5: IP Rights */}
        <SectionCard number="5" title="Intellectual Property Rights">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-govt-navy mb-2">5.1 Website Content</h4>
                    <p className="text-sm">All content (text, graphics, logos, software) is the property of ORSI Indore Chapter, Government Holkar Science College, or content suppliers and is protected by copyright laws.</p>
                </div>
                <div>
                    <h4 className="font-bold text-govt-navy mb-2">5.2 User Submissions</h4>
                    <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Authors retain copyright to their submissions.</li>
                        <li>Authors grant a non-exclusive license for publication.</li>
                        <li>Authors are responsible for third-party permissions.</li>
                    </ul>
                </div>
            </div>
        </SectionCard>

        {/* Section 6: Payment */}
        <SectionCard number="6" title="Payment Terms">
            <SubHeading>6.1 Registration Fees</SubHeading>
            <ul className="list-disc pl-5 space-y-1 mb-4 marker:text-govt-blue">
                <li>Listed in Indian Rupees (INR) or US Dollars (USD).</li>
                <li>Payments via NEFT/RTGS to the designated bank account.</li>
                <li>Proof of payment required for confirmation.</li>
            </ul>
        </SectionCard>

        {/* Section 7, 8, 9: Policies Group */}
        <SectionCard number="7-9" title="Policies & Liability">
            <div className="space-y-6 divide-y divide-slate-100">
                <div>
                    <h3 className="font-bold text-govt-navy mb-2 text-lg">7. Accommodation and Travel</h3>
                    <p className="text-sm">Participants are responsible for their own travel and accommodation unless explicitly included. Organizers are not liable for disruptions.</p>
                </div>
                <div className="pt-6">
                    <h3 className="font-bold text-govt-navy mb-2 text-lg">8. Code of Conduct</h3>
                    <p className="text-sm mb-2">Participants agree to conduct themselves professionally. Harassment or discrimination will not be tolerated.</p>
                    <p className="text-xs text-red-600 font-bold">Violation may result in removal without refund.</p>
                </div>
                <div className="pt-6">
                    <h3 className="font-bold text-govt-navy mb-2 text-lg">9. Limitation of Liability</h3>
                    <p className="text-sm">Organizers are not liable for indirect damages, technical issues, or data loss. Liability is limited to the registration fee paid.</p>
                </div>
            </div>
        </SectionCard>

        {/* Section 10 & 11: Privacy & External Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-govt-navy mb-3 flex items-center gap-2">
                    <span className="bg-govt-blue text-white w-6 h-6 rounded flex items-center justify-center text-xs">10</span>
                    Privacy
                </h3>
                <p className="text-sm mb-4">Your use of this Website is also governed by our Privacy Policy.</p>
                <button onClick={onPrivacyClick} className="text-govt-blue font-bold hover:underline text-sm flex items-center gap-1">
                    Read Privacy Policy &rarr;
                </button>
            </div>
            <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-100">
                 <h3 className="font-bold text-govt-navy mb-3 flex items-center gap-2">
                    <span className="bg-slate-500 text-white w-6 h-6 rounded flex items-center justify-center text-xs">11</span>
                    Third-Party Links
                </h3>
                <p className="text-sm">We are not responsible for content or practices of external websites linked from this portal.</p>
            </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-12 text-center">
            <h2 className="text-xl font-bold text-govt-navy mb-4 font-serif">Contact Information</h2>
            <p className="text-slate-600 mb-6">For questions regarding these Terms of Service, please contact:</p>
            <div className="inline-block bg-slate-50 p-6 rounded-xl border border-slate-100 text-left">
                <p className="font-bold text-govt-navy">ICAORFDI-2026 Conference Committee</p>
                <p className="text-sm text-slate-600 mt-1">Government Holkar Science College, Indore</p>
                <div className="mt-3 space-y-1">
                    <p className="text-sm"><span className="font-semibold">Email:</span> <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-govt-blue hover:underline">{CONFERENCE_DETAILS.email}</a></p>
                    <p className="text-sm"><span className="font-semibold">Website:</span> <a href={`http://${CONFERENCE_DETAILS.website}`} target="_blank" className="text-govt-blue hover:underline">{CONFERENCE_DETAILS.website}</a></p>
                </div>
            </div>
        </div>

        {/* Acknowledgement */}
        <div className="max-w-3xl mx-auto text-center mb-12 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl border border-blue-100">
             <p className="text-govt-navy font-medium">By using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
        </div>

      </main>
    </div>
  );
};

export default TermsOfServicePage;