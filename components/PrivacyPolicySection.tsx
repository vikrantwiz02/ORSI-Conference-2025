import React from 'react';
import { CONFERENCE_DETAILS } from '../constants';

const PrivacyPolicySection: React.FC = () => {
  return (
    <section id="privacy-policy" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-200 border border-slate-300 text-slate-700 font-semibold text-xs tracking-wider uppercase">
            Legal
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-govt-navy mb-4">
            Privacy Policy
          </h2>
          <p className="text-slate-600 text-lg">
            Effective Date: December 17, 2025
          </p>
        </div>

        <div className="prose prose-slate max-w-none bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <h3 className="text-2xl font-bold text-govt-navy mt-8 first:mt-0">1. Introduction</h3>
          <p>This Privacy Policy describes how the ICAORFDI-2026 Conference Portal ("we," "us," or "our") collects, uses, and protects information from users ("you" or "your") of our website. This policy applies to the conference website operated by the Operational Research Society of India (ORSI) Indore Chapter and Government Holkar Science College, Indore.</p>
          <p>We are committed to protecting your privacy and ensuring the security of your personal information in accordance with applicable Indian data protection laws.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">2. Information We Collect</h3>
          
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

          <div className="bg-govt-blue/5 border-l-4 border-govt-blue p-6 rounded-r-lg mt-8">
            <p className="font-semibold text-govt-navy">Consent Statement</p>
            <p className="mt-2">By using this website and registering for the conference, you acknowledge that you have read, understood, and agree to this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
