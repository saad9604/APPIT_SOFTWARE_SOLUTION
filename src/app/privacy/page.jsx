'use client';
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const PrivacyPolicy = () => {
  return (
    <main style={{marginBottom:'-50px'}} className="text-gray-800 min-h-screen px-4 sm:px-10 py-12 mt-14 bg-gray-50">
      <section className="w-full max-w-7xl mx-auto  p-10 sm:p-16 ">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Privacy Policy</h1>

        <p className="mb-6">
          At Appit Software Solutions, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website, products, or services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">1. Information We Collect</h2>
        <p className="mb-4">
          We collect personal and non-personal information in various ways, including when you:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Register or create an account on our platform</li>
          <li>Use our services, tools, or contact forms</li>
          <li>Subscribe to newsletters or respond to surveys</li>
          <li>Interact with us on social media or customer support</li>
        </ul>
        <p className="mb-4">
          This data may include your name, email address, phone number, job title, company name, IP address, browser type, and usage behavior.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">2. How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used to:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Provide and personalize our services</li>
          <li>Respond to inquiries and offer customer support</li>
          <li>Send updates, offers, or service notifications</li>
          <li>Improve website performance and security</li>
          <li>Conduct internal analytics and market research</li>
        </ul>
        <p className="mb-4">
          We do not sell or share your personal data with third parties for marketing purposes without your explicit consent.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">3. Data Retention</h2>
        <p className="mb-4">
          We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>
        <p className="mb-4">
          After this period, your data is securely deleted or anonymized to ensure it can no longer identify you.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">4. Data Protection & Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your personal data from unauthorized access, misuse, disclosure, or alteration. This includes encryption, secure servers, and access control protocols.
        </p>
        <p className="mb-4">
          While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">5. Cookies & Tracking Technologies</h2>
        <p className="mb-4">
          Our website uses cookies and similar technologies to enhance user experience, analyze site traffic, and understand user behavior. By continuing to use our site, you consent to our use of cookies.
        </p>
        <p className="mb-4">
          You can disable cookies through your browser settings, but this may affect the functionality of some parts of our site.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">6. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services such as analytics tools (like Google Analytics) or payment gateways. These services have their own privacy policies and terms, which we encourage you to read before using those services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">7. User Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information at any time. You may also request to:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Withdraw your consent to data processing</li>
          <li>Request a copy of the data we hold about you</li>
          <li>Restrict or object to how your data is used</li>
        </ul>
        <p className="mb-4">
          To exercise any of these rights, please contact us at <a href="mailto:info@appitsoftware.com" className="text-blue-600 underline">info@appitsoftware.com</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">8. Children's Privacy</h2>
        <p className="mb-4">
          Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently received personal information from a child, we will take steps to delete such information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">9. Changes to This Policy</h2>
        <p className="mb-4">
          We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated “Last updated” date. Your continued use of our services after any changes constitutes acceptance of the revised policy.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-700">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our data practices, you may contact us at:
          <br />
          <a href="mailto:info@appitsoftware.com" className="text-blue-600 underline">info@appitsoftware.com</a>
        </p>
      </section>

    </main>
  );
};

export default PrivacyPolicy;
