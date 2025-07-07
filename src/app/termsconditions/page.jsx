'use client';
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Terms = () => {
  return (
    <main className="text-gray-800 min-h-screen px-4 sm:px-10 py-12 mt-14 bg-gray-50">
      <section className="w-full max-w-7xl mx-auto  p-10 sm:p-16 ">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Terms & Conditions</h1>

        <p className="mb-4">
          These Terms and Conditions ("Terms") govern your use of the services, products, and website (the “Services”) operated by Appit Software Solutions (“we,” “us,” or “our”). By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not accept all the Terms, you may not access or use the Services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">1. Use of Services</h2>
        <p className="mb-4">
          Our Services are provided solely for lawful purposes. You agree not to use the Services in any way that violates applicable local, state, national, or international laws or regulations. You also agree not to engage in any activity that could damage, disable, overburden, or impair the functionality or security of our Services.
        </p>
        <p className="mb-4">
          You are solely responsible for your use of the Services and any data or content you provide. Unauthorized use of the Services may result in suspension or termination of your account and legal action where applicable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, features, and functionality on our website—including but not limited to text, images, logos, icons, software, and code—are the exclusive property of Appit Software Solutions and are protected by international copyright, trademark, and intellectual property laws.
        </p>
        <p className="mb-4">
          You may not reproduce, distribute, modify, transmit, reuse, or otherwise use our intellectual property for commercial or public purposes without our express written permission. Any unauthorized use may result in legal action and penalties.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">3. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall Appit Software Solutions or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access or use of the Services. This includes, but is not limited to, loss of data, loss of profits, or business interruption.
        </p>
        <p className="mb-4">
          Our liability is limited to the maximum extent permitted by law. The Services are provided “as is” and “as available” without warranties of any kind, either express or implied.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">4. Privacy</h2>
        <p className="mb-4">
          We value your privacy. Please refer to our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our Services, you agree to the collection and use of information in accordance with the Privacy Policy.
        </p>
        <p className="mb-4">
          We implement appropriate security measures to safeguard your data, but we cannot guarantee absolute security of information transmitted online. You acknowledge and accept this risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">5. Modifications</h2>
        <p className="mb-4">
          We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting on our website. Your continued use of the Services after the posting of changes constitutes your acceptance of those changes.
        </p>
        <p className="mb-4">
          We encourage you to periodically review this page to stay informed about our current terms and policies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">6. User Responsibilities</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your login credentials and account information. Any activity that occurs under your account is your sole responsibility. You agree to notify us immediately of any unauthorized access or use of your account.
        </p>
        <p className="mb-4">
          Misuse or violation of the Services, including distribution of harmful or offensive content, spamming, or unauthorized data collection, will result in immediate suspension and potential legal action.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">7. Account Registration</h2>
        <p className="mb-4">
          To use certain features of the Services, you may need to register and create an account. You agree to provide accurate and complete information and to update it as necessary. Failure to do so may result in suspension or termination of your account.
        </p>
        <p className="mb-4">
          You may not create an account using false identity or information, or on behalf of someone else without authorization.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">8. Third-Party Services</h2>
        <p className="mb-4">
          Our Services may contain links or integrations with third-party platforms. We are not responsible for the content, policies, or practices of any third-party sites or services.
        </p>
        <p className="mb-4">
          Any use of third-party services is governed by their respective terms and conditions. We recommend reviewing those policies before engaging with third-party tools.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">9. Payment Terms</h2>
        <p className="mb-4">
          If you subscribe to any paid services, you agree to pay all fees specified. Prices are subject to change with reasonable notice. Payments are typically non-refundable unless otherwise stated in a separate agreement.
        </p>
        <p className="mb-4">
          Failure to make timely payments may result in suspension or cancellation of your access to the Services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">10. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate your access to the Services at any time, with or without notice, for conduct that violates these Terms or is otherwise harmful to other users or our business interests.
        </p>
        <p className="mb-4">
          Upon termination, your right to access and use the Services will immediately cease. All provisions of the Terms that by their nature should survive termination shall survive, including ownership, warranty disclaimers, and limitations of liability.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">11. Governing Law</h2>
        <p className="mb-4">
          These Terms and any disputes arising from or relating to the Services shall be governed by the laws of India. You agree to submit to the exclusive jurisdiction of the courts located in India for the resolution of any legal matter.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">12. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms & Conditions, please contact us at:
          <br />
          <a href="mailto:info@appitsoft.com" className="text-blue-600 hover:underline">info@appitsoft.com</a>
        </p>
      </section>

      {/* Social Footer */}
      <footer className="mt-12 text-center">
        <p className="text-lg font-semibold text-gray-600 mb-4">Follow Us</p>
        <div className="flex justify-center space-x-6 text-blue-700 text-xl">
          <a href="https://www.facebook.com/Appitsoftwaresolutionspvtltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://x.com/Appitsoft" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter />
          </a>
          <a href="https://www.youtube.com/@appitsoftwaresolutions346" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/appitsoftware/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/appitsoftware/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">© Appit Software Solutions. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Terms;
