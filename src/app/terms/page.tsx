import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Venin Client Systems',
  description: 'Terms of Service for Venin Client Systems Pty Ltd - Terms and conditions governing use of our website and services.',
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-500 font-mono text-sm">
            Last updated: November 2024
          </p>
        </div>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you&quot;, &quot;your&quot;, or &quot;User&quot;) and Venin Client Systems Pty Ltd (ABN pending) (&quot;Venin&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company registered in South Australia, Australia.
            </p>
            <p>
              By accessing our website at venin.space or using any of our products and services (collectively, the &quot;Services&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
            </p>
            <p>
              These Terms are governed by the laws of South Australia and the Commonwealth of Australia, including the <em>Australian Consumer Law</em> (ACL) as set out in Schedule 2 of the <em>Competition and Consumer Act 2010</em> (Cth).
            </p>
          </section>

          {/* Definitions */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">2. Definitions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong>&quot;Content&quot;</strong> means any text, images, data, software, or other materials available through our Services.</li>
              <li><strong>&quot;Intellectual Property&quot;</strong> means all patents, trademarks, trade names, copyrights, trade secrets, know-how, and other proprietary rights.</li>
              <li><strong>&quot;User Data&quot;</strong> means any data, information, or content you submit, upload, or transmit through our Services.</li>
              <li><strong>&quot;Subscription&quot;</strong> means a paid plan providing access to specific features of our Services for a defined period.</li>
            </ul>
          </section>

          {/* Eligibility */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">3. Eligibility</h2>
            <p>To use our Services, you must:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using our Services under applicable laws</li>
              <li>Provide accurate, complete, and current registration information</li>
            </ul>
            <p>
              If you are using our Services on behalf of a business or organisation, you represent that you have authority to bind that entity to these Terms.
            </p>
          </section>

          {/* Account Registration */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">4. Account Registration and Security</h2>
            <p>
              Some Services may require you to create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Provide accurate and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorised access to your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or incomplete, or if we reasonably suspect fraudulent or unlawful activity.
            </p>
          </section>

          {/* Services and Subscriptions */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">5. Services and Subscriptions</h2>

            <h3 className="text-lg font-medium text-white">5.1 Service Availability</h3>
            <p>
              We strive to ensure our Services are available 24/7, but we do not guarantee uninterrupted access. We may suspend, withdraw, or restrict availability of all or any part of our Services for business or operational reasons without notice.
            </p>

            <h3 className="text-lg font-medium text-white">5.2 Subscriptions and Billing</h3>
            <p>
              Paid Services are billed in advance on a monthly or annual basis depending on the subscription plan selected. All fees are quoted in Australian Dollars (AUD) unless otherwise specified and are inclusive of GST where applicable.
            </p>
            <p>
              By subscribing to a paid Service, you authorise us to charge your designated payment method for all applicable fees. You are responsible for providing valid payment information and ensuring sufficient funds are available.
            </p>

            <h3 className="text-lg font-medium text-white">5.3 Automatic Renewal</h3>
            <p>
              Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You can cancel your subscription at any time through your account settings or by contacting us.
            </p>

            <h3 className="text-lg font-medium text-white">5.4 Refunds</h3>
            <p>
              Refunds are provided in accordance with the Australian Consumer Law. If our Services have a major failure or cannot be remedied within a reasonable time, you may be entitled to a refund. For minor failures, we will remedy the issue within a reasonable time.
            </p>
            <p>
              Outside of your ACL rights, subscription fees are generally non-refundable. We may, at our sole discretion, offer refunds, credits, or other compensation on a case-by-case basis.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">6. Acceptable Use</h2>
            <p>You agree not to use our Services to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Violate any applicable law, regulation, or third-party rights</li>
              <li>Transmit malware, viruses, or other malicious code</li>
              <li>Attempt to gain unauthorised access to our systems or other users&apos; accounts</li>
              <li>Interfere with or disrupt the integrity or performance of our Services</li>
              <li>Engage in fraudulent, deceptive, or misleading activities</li>
              <li>Harvest or collect user information without consent</li>
              <li>Use automated systems (bots, scrapers) without our express permission</li>
              <li>Reverse engineer, decompile, or disassemble any part of our Services</li>
              <li>Resell, sublicense, or redistribute our Services without authorisation</li>
              <li>Upload content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable</li>
            </ul>
            <p>
              We reserve the right to investigate and take appropriate action against any violation of this section, including removing content, suspending or terminating accounts, and reporting to law enforcement.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">7. Intellectual Property</h2>

            <h3 className="text-lg font-medium text-white">7.1 Our Intellectual Property</h3>
            <p>
              All Intellectual Property in our Services, including software, website design, logos, trademarks, and Content, is owned by or licensed to Venin Client Systems Pty Ltd. Nothing in these Terms grants you any rights to our Intellectual Property except for the limited licence to use our Services as permitted.
            </p>

            <h3 className="text-lg font-medium text-white">7.2 Your Content</h3>
            <p>
              You retain ownership of any User Data you submit through our Services. By submitting User Data, you grant us a non-exclusive, worldwide, royalty-free licence to use, store, process, and display your User Data solely for the purpose of providing and improving our Services.
            </p>

            <h3 className="text-lg font-medium text-white">7.3 Feedback</h3>
            <p>
              Any feedback, suggestions, or ideas you provide regarding our Services may be used by us without any obligation to compensate you or keep such feedback confidential.
            </p>
          </section>

          {/* Privacy */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">8. Privacy</h2>
            <p>
              Your use of our Services is also governed by our <Link href="/privacy" className="text-[var(--cyber-cyan)] hover:underline">Privacy Policy</Link>, which describes how we collect, use, and protect your personal information. By using our Services, you consent to our collection and use of information as described in the Privacy Policy.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">9. Disclaimers</h2>

            <h3 className="text-lg font-medium text-white">9.1 No Professional Advice</h3>
            <p>
              Our Services, including but not limited to ExciseMate, provide tools and information to assist with compliance and record-keeping. They do not constitute professional, legal, tax, or accounting advice. You should consult qualified professionals for advice specific to your circumstances.
            </p>

            <h3 className="text-lg font-medium text-white">9.2 Service &quot;As Is&quot;</h3>
            <p>
              To the maximum extent permitted by law, our Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h3 className="text-lg font-medium text-white">9.3 Australian Consumer Law</h3>
            <p>
              Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law that cannot be excluded, restricted, or modified by agreement. If the ACL applies to you as a consumer, and we supply goods or services to you, our liability for failure to comply with a consumer guarantee is limited (where permitted) to re-supplying the services or paying the cost of re-supply.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Venin Client Systems Pty Ltd, its directors, employees, agents, and affiliates shall not be liable for any:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Cost of substitute goods or services</li>
              <li>Damages arising from your use or inability to use our Services</li>
              <li>Damages arising from unauthorised access to or alteration of your data</li>
            </ul>
            <p>
              Our total liability to you for all claims arising from or related to these Terms or our Services shall not exceed the greater of: (a) the amount you paid us in the 12 months preceding the claim; or (b) $100 AUD.
            </p>
            <p>
              These limitations apply regardless of the theory of liability (contract, tort, negligence, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* Indemnification */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Venin Client Systems Pty Ltd and its officers, directors, employees, agents, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from or related to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your User Data or Content</li>
              <li>Any dispute between you and a third party</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">12. Termination</h2>

            <h3 className="text-lg font-medium text-white">12.1 Termination by You</h3>
            <p>
              You may terminate your account at any time by contacting us or using the account settings in our Services. Upon termination, your right to use the Services will cease immediately.
            </p>

            <h3 className="text-lg font-medium text-white">12.2 Termination by Us</h3>
            <p>
              We may suspend or terminate your access to our Services at any time, with or without cause, with or without notice. Reasons for termination may include breach of these Terms, fraudulent or illegal activity, or extended periods of inactivity.
            </p>

            <h3 className="text-lg font-medium text-white">12.3 Effect of Termination</h3>
            <p>
              Upon termination, all licences and rights granted to you will immediately cease. We may delete your account and User Data, although we may retain certain information as required by law or for legitimate business purposes. Sections 7, 9, 10, 11, 14, and 15 shall survive termination.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">13. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website with a new &quot;Last updated&quot; date. For significant changes, we may also notify you via email or through our Services.
            </p>
            <p>
              Your continued use of our Services after any changes constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using our Services.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">14. Dispute Resolution</h2>

            <h3 className="text-lg font-medium text-white">14.1 Informal Resolution</h3>
            <p>
              Before initiating any legal proceedings, you agree to first contact us and attempt to resolve any dispute informally. Most concerns can be resolved quickly through good faith negotiation.
            </p>

            <h3 className="text-lg font-medium text-white">14.2 Governing Law and Jurisdiction</h3>
            <p>
              These Terms are governed by the laws of South Australia and the Commonwealth of Australia, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts of South Australia for any disputes arising from these Terms or your use of our Services.
            </p>

            <h3 className="text-lg font-medium text-white">14.3 Class Action Waiver</h3>
            <p>
              To the extent permitted by law, you agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
            </p>
          </section>

          {/* General Provisions */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">15. General Provisions</h2>

            <h3 className="text-lg font-medium text-white">15.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and Venin regarding our Services.
            </p>

            <h3 className="text-lg font-medium text-white">15.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>

            <h3 className="text-lg font-medium text-white">15.3 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
            </p>

            <h3 className="text-lg font-medium text-white">15.4 Assignment</h3>
            <p>
              You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations without restriction.
            </p>

            <h3 className="text-lg font-medium text-white">15.5 Force Majeure</h3>
            <p>
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, riots, government actions, or internet outages.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--cyber-cyan)]">16. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[var(--cyber-dark)] border border-gray-800 p-6 rounded font-mono text-sm">
              <p className="text-white">Venin Client Systems Pty Ltd</p>
              <p>Email: <a href="mailto:legal@venin.space" className="text-[var(--cyber-cyan)] hover:underline">legal@venin.space</a></p>
            </div>
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
