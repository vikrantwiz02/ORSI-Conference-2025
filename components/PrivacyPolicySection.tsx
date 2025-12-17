import React from 'react';
import { CONFERENCE_DETAILS } from '../constants';

interface PrivacyPolicyPageProps {
  onClose: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onClose }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:40px_40px] opacity-30"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs font-bold tracking-widest uppercase">Legal Document</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-serif leading-tight mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-govt-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Effective Date: <span className="font-semibold text-white">December 17, 2025</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-5xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-slate-200 relative">
          {/* Decorative Element */}
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-govt-accent/10 blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-govt-blue/10 blur-2xl"></div>
          
          <div className="relative prose prose-lg prose-slate max-w-none">
            <h3 className="text-2xl sm:text-3xl font-bold text-govt-navy mt-8 first:mt-0 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-govt-accent/10 text-govt-accent text-sm font-bold">1</span>
              Introduction
            </h3>
            <p className="text-slate-600 leading-relaxed">This Privacy Policy describes how the ICAORFDI-2026 Conference Portal ("we," "us," or "our") collects, uses, and protects information from users ("you" or "your") of our website. This policy applies to the conference website operated by the Operational Research Society of India (ORSI) Indore Chapter and Government Holkar Science College, Indore.</p>
            <p className="text-slate-600 leading-relaxed">We are committed to protecting your privacy and ensuring the security of your personal information in accordance with applicable Indian data protection laws.</p>

            <h3 className="text-2xl sm:text-3xl font-bold text-govt-navy mt-10 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-govt-accent/10 text-govt-accent text-sm font-bold">2</span>
              Information We Collect
            </h3>
          
          <h4 className="text-xl font-semibold text-govt-navy mt-6">2.1 Information You Provide Directly</h4>
          <p>We collect information that you voluntarily provide when you:</p>
          
          <p className="font-semibold mt-4">Register for the conference:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Institutional affiliation</li>
            <li>Professional designation</li>
            <li>Category (faculty, student, industry, etc.)</li>
            <li>Accommodation preferences (if applicable)</li>
          </ul>

          <p className="font-semibold mt-4">Submit abstracts or papers:</p>
          <ul>
            <li>Author names and contact details</li>
            <li>Co-author information</li>
            <li>Research content and materials</li>
            <li>Academic credentials</li>
          </ul>

          <p className="font-semibold mt-4">Make payments:</p>
          <ul>
            <li>Bank transaction details (transaction ID, date, amount)</li>
            <li>Payment receipts</li>
          </ul>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">2.2 Information Collected Automatically</h4>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Device information</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">3. How We Use Your Information</h3>
          
          <h4 className="text-xl font-semibold text-govt-navy mt-6">3.1 Conference Operations</h4>
          <ul>
            <li>Process and confirm conference registrations</li>
            <li>Manage abstract and paper submissions</li>
            <li>Communicate conference updates and schedules</li>
            <li>Arrange accommodation (when applicable)</li>
            <li>Issue certificates of participation</li>
          </ul>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">3.2 Academic Publication</h4>
          <ul>
            <li>Review submitted abstracts and papers</li>
            <li>Prepare conference proceedings</li>
            <li>Submit selected papers to journals for publication</li>
            <li>Share author information with co-publishers (e.g., Springer Nature for OPSEARCH)</li>
          </ul>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">3.3 Communication</h4>
          <ul>
            <li>Send registration confirmations</li>
            <li>Provide conference updates and important announcements</li>
            <li>Respond to inquiries and support requests</li>
            <li>Share post-conference materials</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">4. Legal Basis for Processing</h3>
          <p>We process your personal information based on:</p>
          <ul>
            <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
            <li><strong>Contractual necessity:</strong> Processing is necessary to fulfill our agreement with you (conference registration)</li>
            <li><strong>Legitimate interests:</strong> We have a legitimate interest in organizing the conference and conducting academic activities</li>
            <li><strong>Legal obligations:</strong> We must comply with applicable laws and regulations</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">5. How We Share Your Information</h3>
          
          <h4 className="text-xl font-semibold text-govt-navy mt-6">5.1 Within the Conference Organization</h4>
          <ul>
            <li>Conference organizing committee members</li>
            <li>Peer reviewers for abstract and paper evaluation</li>
            <li>Technical support staff</li>
          </ul>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">5.2 With Third Parties</h4>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Academic publishers:</strong> Selected papers may be shared with Springer Nature (OPSEARCH) and other SCOPUS-indexed journals</li>
            <li><strong>Payment processors:</strong> Bank details for payment verification</li>
            <li><strong>Accommodation providers:</strong> For participants who opt for accommodation packages</li>
            <li><strong>Email service providers:</strong> For sending conference communications</li>
            <li><strong>Website hosting and technical service providers</strong></li>
          </ul>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">5.3 Public Information</h4>
          <p>The following may be made public:</p>
          <ul>
            <li>Author names and affiliations in conference programs</li>
            <li>Abstracts in conference materials</li>
            <li>Published papers in proceedings and journals</li>
            <li>Conference photographs and videos (with consent)</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">6. Data Retention</h3>
          <p>We retain your personal information for the following periods:</p>
          <ul>
            <li><strong>Registration data:</strong> 5 years after the conference for record-keeping and potential follow-up events</li>
            <li><strong>Submitted abstracts and papers:</strong> Indefinitely for academic archives</li>
            <li><strong>Payment records:</strong> 7 years for accounting and tax compliance</li>
            <li><strong>Website analytics:</strong> 2 years</li>
            <li><strong>Email correspondence:</strong> 3 years</li>
          </ul>
          <p>You may request earlier deletion of your data, subject to legal and legitimate business requirements.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">7. Your Rights</h3>
          <p>Under Indian data protection principles, you have the following rights:</p>
          <ul>
            <li><strong>Access:</strong> Request copies of your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
            <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
            <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
            <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time (may affect conference participation)</li>
          </ul>
          <p>To exercise these rights, please contact us at: <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-govt-blue hover:text-govt-accent underline">{CONFERENCE_DETAILS.email}</a></p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">8. Cookies and Tracking Technologies</h3>
          
          <h4 className="text-xl font-semibold text-govt-navy mt-6">8.1 Types of Cookies We Use</h4>
          <ul>
            <li><strong>Essential cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
            <li><strong>Functional cookies:</strong> Remember your preferences</li>
          </ul>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">8.2 Managing Cookies</h4>
          <p>You can control cookies through your browser settings. However, disabling cookies may affect website functionality.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">9. Security Measures</h3>
          <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
          <ul>
            <li>Secure data transmission (HTTPS)</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Staff training on data protection</li>
            <li>Secure storage of physical documents</li>
          </ul>
          <p className="font-semibold">However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">10. Third-Party Links</h3>
          <p>Our website may contain links to third-party websites (e.g., Google Maps, external sponsors). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">11. Children's Privacy</h3>
          <p>Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information promptly.</p>
          <p>Students under 18 must have parental or guardian consent to register for the conference.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">12. Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Significant changes will be communicated via email to registered participants.</p>
          <p>Your continued use of the website after changes indicates acceptance of the updated policy.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">13. Data Protection Officer</h3>
          <p>For data protection inquiries, please contact:</p>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-4">
            <p className="font-semibold text-govt-navy">ICAORFDI-2026 Data Protection Contact</p>
            <p>Dr. Chitaranjan Sharma (Conference Chair)</p>
            <p>Government Holkar Science College, Indore</p>
            <p>Email: <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-govt-blue hover:text-govt-accent underline">{CONFERENCE_DETAILS.email}</a></p>
          </div>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">14. Complaints</h3>
          <p>If you have concerns about how we handle your personal information, you may file a complaint with us at <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-govt-blue hover:text-govt-accent underline">{CONFERENCE_DETAILS.email}</a>.</p>
          <p>If you are not satisfied with our response, you may escalate your complaint to the appropriate data protection authority in India.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">15. Contact Information</h3>
          <p>For any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:</p>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-4">
            <p className="font-semibold text-govt-navy">ICAORFDI-2026 Conference Committee</p>
            <p>Government Holkar Science College, Indore, Madhya Pradesh</p>
            <p>Email: <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-govt-blue hover:text-govt-accent underline">{CONFERENCE_DETAILS.email}</a></p>
            <p>Website: <a href={`http://${CONFERENCE_DETAILS.website}`} className="text-govt-blue hover:text-govt-accent underline">{CONFERENCE_DETAILS.website}</a></p>
          </div>

          
          <div className="bg-gradient-to-br from-govt-accent/5 to-transparent border border-govt-accent/20 p-8 rounded-2xl mt-8">
            <p className="text-slate-700 font-semibold text-center text-lg mb-2">Consent Statement</p>
            <p className="text-slate-600 leading-relaxed text-center">By using this website and registering for the conference, you acknowledge that you have read, understood, and agree to this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.</p>
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

export default PrivacyPolicyPage;