import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Venin Client Systems',
  description: 'Privacy Policy for Venin Client Systems Pty Ltd - How we collect, use, and protect your personal information under Australian law.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--cyber-black)] text-gray-300 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800/50 bg-[var(--cyber-dark)]/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-[var(--cyber-cyan)] font-mono text-sm hover:glow-cyan-subtle transition-all">
            ← Back to Home
          </Link>
          <span className="text-gray-600 font-mono text-xs">LEGAL</span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-3xl px-6 py-16 text-center">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-mono text-sm">
            Last updated: November 2024
          </p>
        </div>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">1. Introduction</h2>
            <p>
              Venin Client Systems Pty Ltd (ABN pending) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Venin&quot;) is committed to protecting your privacy and complying with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
            </p>
            <p>
              This Privacy Policy explains how we collect, hold, use, and disclose your personal information when you visit our website (venin.space) or use our software products and services.
            </p>
            <p>
              By accessing our website or using our services, you consent to the collection and use of your personal information as described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">2. Information We Collect</h2>

            <h3 className="text-lg font-medium text-white">2.1 Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Name and contact details (email address, phone number, postal address)</li>
              <li>Business name and ABN (for business customers)</li>
              <li>Account credentials and authentication information</li>
              <li>Payment and billing information (processed securely via third-party payment processors)</li>
              <li>Communications and correspondence with us</li>
              <li>Information you provide when using our products and services</li>
            </ul>

            <h3 className="text-lg font-medium text-white">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
              <li>Cookies and similar tracking technologies (see Section 7)</li>
            </ul>

            <h3 className="text-lg font-medium text-white">2.3 Sensitive Information</h3>
            <p>
              We do not intentionally collect sensitive information (such as health information, racial or ethnic origin, political opinions, religious beliefs, or sexual orientation) unless required for a specific service and with your explicit consent.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>To provide, maintain, and improve our products and services</li>
              <li>To process transactions and send related information (invoices, receipts, confirmations)</li>
              <li>To communicate with you about your account, updates, and support requests</li>
              <li>To send marketing communications (with your consent, which you may withdraw at any time)</li>
              <li>To comply with legal obligations, including Australian taxation and business laws</li>
              <li>To detect, prevent, and address fraud, security issues, and technical problems</li>
              <li>To analyse usage patterns and improve user experience</li>
              <li>To enforce our Terms of Service and protect our legal rights</li>
            </ul>
          </section>

          {/* Disclosure of Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">4. Disclosure of Your Information</h2>
            <p>We may disclose your personal information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong>Service providers:</strong> Third parties who assist us in operating our business (hosting providers, payment processors, analytics services)</li>
              <li><strong>Professional advisors:</strong> Lawyers, accountants, and auditors where necessary</li>
              <li><strong>Regulatory authorities:</strong> Government agencies, law enforcement, or other authorities when required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets (your information may be transferred as part of that transaction)</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </section>

          {/* Overseas Disclosure */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">5. Overseas Disclosure</h2>
            <p>
              Some of our service providers may be located outside Australia. Before disclosing your personal information overseas, we take reasonable steps to ensure the recipient complies with the APPs or is subject to a law or binding scheme substantially similar to the APPs.
            </p>
            <p>
              Countries where your data may be processed include the United States (for cloud infrastructure services). By using our services, you consent to this transfer.
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">6. Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. Our security measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>Secure authentication mechanisms including multi-factor authentication</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls limiting who can view personal information</li>
              <li>Employee training on privacy and security obligations</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyse website traffic, and understand user behaviour. Types of cookies we use include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.
            </p>
          </section>

          {/* Your Rights */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">8. Your Rights</h2>
            <p>Under the Privacy Act 1988, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate, incomplete, or outdated information</li>
              <li><strong>Complaints:</strong> Lodge a complaint if you believe we have breached the APPs</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details in Section 11. We will respond to your request within a reasonable timeframe (generally within 30 days).
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">9. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. When your information is no longer needed, we will securely destroy or de-identify it.
            </p>
            <p>
              Certain information may be retained for longer periods to comply with legal obligations (e.g., Australian taxation records must be kept for at least 5 years).
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last updated&quot; date.
            </p>
            <p>
              Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, wish to exercise your rights, or have a complaint about how we handle your personal information, please contact us:
            </p>
            <div className="bg-[var(--cyber-dark)] border border-gray-800 p-6 rounded font-mono text-sm">
              <p className="text-white">Venin Client Systems Pty Ltd</p>
              <p>Privacy Officer</p>
              <p>Email: <a href="mailto:privacy@venin.space" className="text-[var(--cyber-cyan)] hover:underline">privacy@venin.space</a></p>
            </div>
            <p>
              If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[var(--cyber-cyan)] hover:underline">www.oaic.gov.au</a>.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">12. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of South Australia and the Commonwealth of Australia. You agree to submit to the exclusive jurisdiction of the courts of South Australia for any disputes arising from this policy.
            </p>
          </section>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <p className="text-gray-600 text-sm font-mono">
              © {new Date().getFullYear()} Venin Client Systems Pty Ltd. All rights reserved.
            </p>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
