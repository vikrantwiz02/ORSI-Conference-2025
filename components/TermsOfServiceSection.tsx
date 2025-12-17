import React from 'react';
import { CONFERENCE_DETAILS } from '../constants';

interface TermsOfServicePageProps {
  onClose: () => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onClose }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:40px_40px] opacity-30"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-100 blur-3xl opacity-40"></div>

      {/* Sticky Header */}
      <div className="relative z-50 bg-govt-navy text-white sticky top-0 shadow-2xl border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-3 text-slate-300 hover:text-white transition-all group"
          >
            <div className="p-2 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold hidden sm:inline">Back to Conference Portal</span>
            <span className="font-semibold sm:hidden">Back</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-govt-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-govt-accent"></span>
            </span>
            <span className="text-sm font-bold text-slate-400">ICAORFDI-2026</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 bg-gradient-to-br from-govt-navy via-govt-blue to-govt-navy text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <svg className="w-4 h-4 text-govt-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-bold tracking-widest uppercase">Legal Document</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-serif leading-tight mb-4">
            Terms of Service
          </h1>
          <div className="w-24 h-1 bg-govt-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Effective Date: <span className="font-semibold text-white">December 16, 2025</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-5xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-slate-200 relative">
          {/* Decorative Element */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-govt-blue/10 blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-govt-accent/10 blur-2xl"></div>
          
          <div className="relative prose prose-lg prose-slate max-w-none">
            <h3 className="text-2xl sm:text-3xl font-bold text-govt-navy mt-8 first:mt-0 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-govt-blue/10 text-govt-blue text-sm font-bold">1</span>
              Acceptance of Terms
            </h3>
            <p className="text-slate-600 leading-relaxed">By accessing and using the ICAORFDI-2026 Conference Portal (the "Website"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use this Website.</p>

            <h3 className="text-2xl sm:text-3xl font-bold text-govt-navy mt-10 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-govt-blue/10 text-govt-blue text-sm font-bold">2</span>
              Description of Service
            </h3>
            <p className="text-slate-600 leading-relaxed">The ICAORFDI-2026 Conference Portal provides information about the International Conference on Applications of Operations Research in Finance, Defence, and Industry, organized by the Operational Research Society of India (ORSI) Indore Chapter and Government Holkar Science College, Indore. Services include:</p>
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-3 text-slate-600">
                <svg className="w-5 h-5 text-govt-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Conference information and schedules</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <svg className="w-5 h-5 text-govt-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Abstract and paper submission guidelines</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <svg className="w-5 h-5 text-govt-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Registration information and payment details</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <svg className="w-5 h-5 text-govt-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Committee and speaker information</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <svg className="w-5 h-5 text-govt-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Venue and contact details</span>
              </li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-govt-navy mt-10 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-govt-blue/10 text-govt-blue text-sm font-bold">3</span>
              User Eligibility
            </h3>
            <p className="text-slate-600 leading-relaxed">The Website is intended for use by:</p>
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-3 text-slate-600"><svg className="w-5 h-5 text-govt-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Academic researchers and faculty members</span></li>
              <li className="flex items-start gap-3 text-slate-600"><svg className="w-5 h-5 text-govt-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Students pursuing postgraduate or doctoral studies</span></li>
              <li className="flex items-start gap-3 text-slate-600"><svg className="w-5 h-5 text-govt-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Industry professionals</span></li>
              <li className="flex items-start gap-3 text-slate-600"><svg className="w-5 h-5 text-govt-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Defence personnel</span></li>
              <li className="flex items-start gap-3 text-slate-600"><svg className="w-5 h-5 text-govt-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Members of ORSI and related professional organizations</span></li>
            </ul>
            <p className="text-slate-600 leading-relaxed">Users must be at least 18 years of age or have parental/guardian consent to use this Website.</p>

            <h3 className="text-2xl sm:text-3xl font-bold text-govt-navy mt-10 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-govt-blue/10 text-govt-blue text-sm font-bold">4</span>
              Registration and Submissions
            </h3>
            
            <div className="bg-slate-50 border-l-4 border-govt-blue p-6 rounded-r-xl mt-6">
              <h4 className="text-xl font-bold text-govt-navy mb-4">4.1 Conference Registration</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-slate-600"><span className="text-govt-blue font-bold mt-1">•</span><span>All registration fees are non-refundable unless the conference is canceled by the organizers</span></li>
                <li className="flex items-start gap-3 text-slate-600"><span className="text-govt-blue font-bold mt-1">•</span><span>Registration confirmation is subject to successful payment verification</span></li>
                <li className="flex items-start gap-3 text-slate-600"><span className="text-govt-blue font-bold mt-1">•</span><span>The organizers reserve the right to refuse or cancel registration at their discretion</span></li>
              </ul>
            </div>

            <div className="bg-slate-50 border-l-4 border-govt-accent p-6 rounded-r-xl mt-6">
              <h4 className="text-xl font-bold text-govt-navy mb-4">4.2 Abstract and Paper Submissions</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-slate-600"><span className="text-govt-accent font-bold mt-1">•</span><span>All submitted abstracts and papers must be original work</span></li>
                <li className="flex items-start gap-3 text-slate-600"><span className="text-govt-accent font-bold mt-1">•</span><span>Submissions must not infringe upon any copyright, patent, or other intellectual property rights</span></li>
                <li className="flex items-start gap-3 text-slate-600"><span className="text-govt-accent font-bold mt-1">•</span><span>The organizers reserve the right to reject submissions that do not meet quality standards or conference themes</span></li>
                <li className="flex items-start gap-3 text-slate-600"><span className="text-govt-accent font-bold mt-1">•</span><span>By submitting, authors grant the conference organizers permission to review, edit, and potentially publish their work in conference proceedings or associated journals</span></li>
              </ul>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-govt-navy mt-10 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-govt-blue/10 text-govt-blue text-sm font-bold">5</span>
              Intellectual Property Rights
            </h3>
          
          <h4 className="text-xl font-semibold text-govt-navy mt-6">5.1 Website Content</h4>
          <p>All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of ORSI Indore Chapter, Government Holkar Science College, or their content suppliers and is protected by Indian and international copyright laws.</p>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">5.2 User Submissions</h4>
          <ul>
            <li>Authors retain copyright to their submitted abstracts and papers</li>
            <li>Authors grant the conference organizers a non-exclusive license to publish, reproduce, and distribute their work in conference proceedings and related publications</li>
            <li>Authors are responsible for obtaining necessary permissions for any third-party content included in their submissions</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">6. Payment Terms</h3>
          
          <h4 className="text-xl font-semibold text-govt-navy mt-6">6.1 Registration Fees</h4>
          <ul>
            <li>All fees are listed in Indian Rupees (INR) or US Dollars (USD) as applicable</li>
            <li>Payments must be made via NEFT/RTGS to the designated bank account</li>
            <li>Payment confirmation and registration forms must be submitted to the conference email</li>
          </ul>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">6.2 Refund Policy</h4>
          <ul>
            <li>Early bird registration fees are non-refundable after the early bird deadline</li>
            <li>In case of conference cancellation by organizers, full refunds will be processed within 30 business days</li>
            <li>Refunds due to participant withdrawal are not permitted</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">7. Accommodation and Travel</h3>
          <ul>
            <li>Accommodation arrangements are the responsibility of participants, except where explicitly included in registration packages</li>
            <li>The organizers are not liable for any travel disruptions, accommodation issues, or related expenses</li>
            <li>Participants are responsible for obtaining necessary travel documents and visas</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">8. Code of Conduct</h3>
          <p>Participants agree to:</p>
          <ul>
            <li>Conduct themselves professionally and respectfully</li>
            <li>Respect intellectual property rights and academic integrity</li>
            <li>Not engage in harassment, discrimination, or disruptive behavior</li>
            <li>Comply with all venue rules and local laws</li>
          </ul>
          <p>Violation of the code of conduct may result in removal from the conference without refund.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">9. Limitation of Liability</h3>
          <p>To the maximum extent permitted by law:</p>
          <ul>
            <li>The organizers are not liable for any indirect, incidental, special, or consequential damages</li>
            <li>The organizers are not responsible for technical issues, website downtime, or data loss</li>
            <li>The total liability of the organizers shall not exceed the registration fee paid by the participant</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">10. Privacy and Data Protection</h3>
          <p>Your use of this Website is also governed by our Privacy Policy. Please review our <a href="#privacy-policy" className="text-govt-blue hover:text-govt-accent underline">Privacy Policy</a> to understand our practices.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">11. Third-Party Links</h3>
          <p>This Website may contain links to third-party websites. The organizers are not responsible for the content, accuracy, or practices of these external sites.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">12. Changes to Terms</h3>
          <p>The organizers reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website after changes constitutes acceptance of the modified terms.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">13. Conference Changes or Cancellation</h3>
          <p>The organizers reserve the right to:</p>
          <ul>
            <li>Modify conference dates, venues, or programs</li>
            <li>Cancel the conference due to force majeure, insufficient registrations, or other unforeseen circumstances</li>
            <li>Substitute speakers or change the conference schedule</li>
          </ul>
          <p>In the event of cancellation, participants will be notified via email, and refunds will be processed as per the refund policy.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">14. Governing Law</h3>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh, India.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">15. Contact Information</h3>
          <p>For questions or concerns regarding these Terms of Service, please contact:</p>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-4">
            <p className="font-semibold text-govt-navy">ICAORFDI-2026 Conference Committee</p>
            <p>Government Holkar Science College, Indore</p>
            <p>Email: <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-govt-blue hover:text-govt-accent underline">{CONFERENCE_DETAILS.email}</a></p>
            <p>Website: <a href={`http://${CONFERENCE_DETAILS.website}`} className="text-govt-blue hover:text-govt-accent underline">{CONFERENCE_DETAILS.website}</a></p>
          </div>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">16. Severability</h3>
          <p>If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">17. Entire Agreement</h3>
          <p>These Terms of Service, together with the Privacy Policy, constitute the entire agreement between you and the conference organizers regarding the use of this Website.</p>

          
          <div className="bg-gradient-to-br from-govt-blue/5 to-transparent border border-govt-blue/20 p-8 rounded-2xl mt-8">
            <p className="text-slate-700 leading-relaxed font-semibold text-center text-lg">
              By using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onClose}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-govt-blue to-govt-navy text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Conference Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;