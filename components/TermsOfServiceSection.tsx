import React from 'react';
import { CONFERENCE_DETAILS } from '../constants';

const TermsOfServiceSection: React.FC = () => {
  return (
    <section id="terms-of-service" className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-200 border border-slate-300 text-slate-700 font-semibold text-xs tracking-wider uppercase">
            Legal
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-govt-navy mb-4">
            Terms of Service
          </h2>
          <p className="text-slate-600 text-lg">
            Effective Date: December 16, 2025
          </p>
        </div>

        <div className="prose prose-slate max-w-none bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <h3 className="text-2xl font-bold text-govt-navy mt-8 first:mt-0">1. Acceptance of Terms</h3>
          <p>By accessing and using the ICAORFDI-2026 Conference Portal (the "Website"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use this Website.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">2. Description of Service</h3>
          <p>The ICAORFDI-2026 Conference Portal provides information about the International Conference on Applications of Operations Research in Finance, Defence, and Industry, organized by the Operational Research Society of India (ORSI) Indore Chapter and Government Holkar Science College, Indore. Services include:</p>
          <ul>
            <li>Conference information and schedules</li>
            <li>Abstract and paper submission guidelines</li>
            <li>Registration information and payment details</li>
            <li>Committee and speaker information</li>
            <li>Venue and contact details</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">3. User Eligibility</h3>
          <p>The Website is intended for use by:</p>
          <ul>
            <li>Academic researchers and faculty members</li>
            <li>Students pursuing postgraduate or doctoral studies</li>
            <li>Industry professionals</li>
            <li>Defence personnel</li>
            <li>Members of ORSI and related professional organizations</li>
          </ul>
          <p>Users must be at least 18 years of age or have parental/guardian consent to use this Website.</p>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">4. Registration and Submissions</h3>
          
          <h4 className="text-xl font-semibold text-govt-navy mt-6">4.1 Conference Registration</h4>
          <ul>
            <li>All registration fees are non-refundable unless the conference is canceled by the organizers</li>
            <li>Registration confirmation is subject to successful payment verification</li>
            <li>The organizers reserve the right to refuse or cancel registration at their discretion</li>
          </ul>

          <h4 className="text-xl font-semibold text-govt-navy mt-6">4.2 Abstract and Paper Submissions</h4>
          <ul>
            <li>All submitted abstracts and papers must be original work</li>
            <li>Submissions must not infringe upon any copyright, patent, or other intellectual property rights</li>
            <li>The organizers reserve the right to reject submissions that do not meet quality standards or conference themes</li>
            <li>By submitting, authors grant the conference organizers permission to review, edit, and potentially publish their work in conference proceedings or associated journals</li>
          </ul>

          <h3 className="text-2xl font-bold text-govt-navy mt-8">5. Intellectual Property Rights</h3>
          
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

          <div className="bg-govt-blue/5 border-l-4 border-govt-blue p-6 rounded-r-lg mt-8">
            <p className="font-semibold text-govt-navy">By using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceSection;
