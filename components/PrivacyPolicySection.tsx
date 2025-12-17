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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-600 selection:bg-govt-blue selection:text-white">
      {/* Standardized Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-t-4 border-govt-blue">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Page Title Section */}
        <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-100 text-govt-blue border border-blue-200">
                Legal Document
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-govt-navy mb-4">Privacy Policy</h1>
            <p className="text-slate-500 text-lg">Effective Date: <span className="font-semibold text-govt-navy">December 17, 2025</span></p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-govt-navy prose-h3:text-2xl prose-h4:text-lg prose-a:text-govt-blue prose-a:no-underline hover:prose-a:underline prose-li:marker:text-govt-accent">
            
            {/* Introduction */}
            <p className="lead text-lg text-slate-700">
                This Privacy Policy describes how the <strong>{CONFERENCE_DETAILS.acronym} Conference Portal</strong> ("we," "us," or "our") collects, uses, and protects information from users ("you" or "your") of our website. This policy applies to the conference website operated by the <strong>{CONFERENCE_DETAILS.organizer}</strong> and <strong>{CONFERENCE_DETAILS.host}</strong>.
            </p>
            <p>
                We are committed to protecting your privacy and ensuring the security of your personal information in accordance with applicable Indian data protection laws.
            </p>

            <hr className="border-slate-100 my-10" />

            {/* Sections */}
            <h3>1. Information We Collect</h3>
            
            <h4>2.1 Information You Provide Directly</h4>
            <p>We collect information that you voluntarily provide when you:</p>
            <ul>
                <li><strong>Register for the conference:</strong> Full name, email address, phone number, institutional affiliation, professional designation, category (faculty, student, industry, etc.), and accommodation preferences.</li>
                <li><strong>Submit abstracts or papers:</strong> Author names and contact details, co-author information, research content and materials, academic credentials.</li>
                <li><strong>Make payments:</strong> Bank transaction details (transaction ID, date, amount) and payment receipts.</li>
            </ul>

            <h4>2.2 Information Collected Automatically</h4>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <h4>3.1 Conference Operations</h4>
            <ul>
                <li>Process and confirm conference registrations</li>
                <li>Manage abstract and paper submissions</li>
                <li>Communicate conference updates and schedules</li>
                <li>Arrange accommodation (when applicable)</li>
                <li>Issue certificates of participation</li>
            </ul>

            <h4>3.2 Academic Publication</h4>
            <ul>
                <li>Review submitted abstracts and papers</li>
                <li>Prepare conference proceedings</li>
                <li>Submit selected papers to journals for publication</li>
                <li>Share author information with co-publishers (e.g., Springer Nature for OPSEARCH)</li>
            </ul>

            <h4>3.3 Communication</h4>
            <ul>
                <li>Send registration confirmations</li>
                <li>Provide conference updates and important announcements</li>
                <li>Respond to inquiries and support requests</li>
                <li>Share post-conference materials</li>
            </ul>

            <h3>4. Legal Basis for Processing</h3>
            <p>We process your personal information based on:</p>
            <ul>
                <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
                <li><strong>Contractual necessity:</strong> Processing is necessary to fulfill our agreement with you (conference registration)</li>
                <li><strong>Legitimate interests:</strong> We have a legitimate interest in organizing the conference and conducting academic activities</li>
                <li><strong>Legal obligations:</strong> We must comply with applicable laws and regulations</li>
            </ul>

            <h3>5. How We Share Your Information</h3>
            <h4>5.1 Within the Conference Organization</h4>
            <ul>
                <li>Conference organizing committee members</li>
                <li>Peer reviewers for abstract and paper evaluation</li>
                <li>Technical support staff</li>
            </ul>

            <h4>5.2 With Third Parties</h4>
            <p>We may share your information with:</p>
            <ul>
                <li><strong>Academic publishers:</strong> Selected papers may be shared with Springer Nature (OPSEARCH) and other SCOPUS-indexed journals</li>
                <li><strong>Payment processors:</strong> Bank details for payment verification</li>
                <li><strong>Accommodation providers:</strong> For participants who opt for accommodation packages</li>
                <li><strong>Email service providers:</strong> For sending conference communications</li>
                <li><strong>Website hosting and technical service providers</strong></li>
            </ul>

            <h4>5.3 Public Information</h4>
            <p>The following may be made public:</p>
            <ul>
                <li>Author names and affiliations in conference programs</li>
                <li>Abstracts in conference materials</li>
                <li>Published papers in proceedings and journals</li>
                <li>Conference photographs and videos (with consent)</li>
            </ul>

            <h3>6. Data Retention</h3>
            <p>We retain your personal information for the following periods:</p>
            <ul>
                <li><strong>Registration data:</strong> 5 years after the conference for record-keeping and potential follow-up events</li>
                <li><strong>Submitted abstracts and papers:</strong> Indefinitely for academic archives</li>
                <li><strong>Payment records:</strong> 7 years for accounting and tax compliance</li>
                <li><strong>Website analytics:</strong> 2 years</li>
                <li><strong>Email correspondence:</strong> 3 years</li>
            </ul>
            <p>You may request earlier deletion of your data, subject to legal and legitimate business requirements.</p>

            <h3>7. Your Rights</h3>
            <p>Under Indian data protection principles, you have the following rights:</p>
            <ul>
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
                <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time (may affect conference participation)</li>
            </ul>
            <p>To exercise these rights, please contact us at: <a href={`mailto:${CONFERENCE_DETAILS.email}`}>{CONFERENCE_DETAILS.email}</a></p>

            <h3>8. Cookies and Tracking Technologies</h3>
            <h4>8.1 Types of Cookies We Use</h4>
            <ul>
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional cookies:</strong> Remember your preferences</li>
            </ul>
            <h4>8.2 Managing Cookies</h4>
            <p>You can control cookies through your browser settings. However, disabling cookies may affect website functionality.</p>

            <h3>9. Security Measures</h3>
            <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
            <ul>
                <li>Secure data transmission (HTTPS)</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
                <li>Secure storage of physical documents</li>
            </ul>
            <p><em>However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</em></p>

            <h3>10. Third-Party Links</h3>
            <p>Our website may contain links to third-party websites (e.g., Google Maps, external sponsors). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>

            <h3>11. Children's Privacy</h3>
            <p>Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information promptly.</p>
            <p>Students under 18 must have parental or guardian consent to register for the conference.</p>

            <h3>12. Changes to This Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Significant changes will be communicated via email to registered participants.</p>
            <p>Your continued use of the website after changes indicates acceptance of the updated policy.</p>

            <h3>13. Data Protection Officer</h3>
            <p>For data protection inquiries, please contact:</p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 not-prose mb-6">
                <p className="font-bold text-govt-navy text-lg">ICAORFDI-2026 Data Protection Contact</p>
                <p className="font-medium text-slate-700 mt-2">Dr. Chitaranjan Sharma (Conference Chair)</p>
                <p className="text-sm text-slate-600">Government Holkar Science College, Indore</p>
                <p className="text-sm text-slate-600 mt-1">Email: <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-govt-blue hover:underline">{CONFERENCE_DETAILS.email}</a></p>
            </div>

            <h3>14. Complaints</h3>
            <p>If you have concerns about how we handle your personal information, you may file a complaint with us at <a href={`mailto:${CONFERENCE_DETAILS.email}`}>{CONFERENCE_DETAILS.email}</a>.</p>
            <p>If you are not satisfied with our response, you may escalate your complaint to the appropriate data protection authority in India.</p>

            <h3>15. Contact Information</h3>
            <p>For any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:</p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 not-prose">
                <p className="font-bold text-govt-navy text-lg">ICAORFDI-2026 Conference Committee</p>
                <p className="text-sm text-slate-600 mt-2">Government Holkar Science College, Indore, Madhya Pradesh</p>
                <p className="text-sm text-slate-600 mt-1">Email: <a href={`mailto:${CONFERENCE_DETAILS.email}`} className="text-govt-blue hover:underline">{CONFERENCE_DETAILS.email}</a></p>
                <p className="text-sm text-slate-600">Website: <a href={`http://${CONFERENCE_DETAILS.website}`} target="_blank" rel="noreferrer" className="text-govt-blue hover:underline">{CONFERENCE_DETAILS.website}</a></p>
            </div>

            {/* Consent Block */}
            <div className="mt-12 p-6 bg-orange-50 border-l-4 border-govt-accent rounded-r-xl not-prose">
                <p className="text-orange-900 font-bold mb-2">Consent Statement</p>
                <p className="text-orange-800 text-sm leading-relaxed">
                    By using this website and registering for the conference, you acknowledge that you have read, understood, and agree to this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.
                </p>
            </div>

        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center pb-8">
             <button 
                onClick={onClose}
                className="bg-govt-navy hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-2 mx-auto"
             >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return to Conference Portal
             </button>
        </div>

      </main>
    </div>
  );
};

export default PrivacyPolicyPage;