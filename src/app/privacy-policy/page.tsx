import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Artisan Ventures Private Limited",
  description:
    "Official Privacy Policy of Artisan Ventures Private Limited. Learn how we handle your business information, quotation requests, and personal data responsibly.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#dededb] pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5f6368] hover:text-[#1c1c1e] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className="bg-white rounded-[24px] border border-[#cccccc] p-8 sm:p-12 shadow-sm mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#81014d]/10 text-[#81014d] border border-[#81014d]/20 mb-4">
              <ShieldCheck size={14} />
              Legal & Privacy Compliance
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c1e] mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#5f6368]">
              Artisan Ventures Private Limited &bull; Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-[24px] border border-[#cccccc] p-8 sm:p-12 shadow-sm space-y-10 text-[#3d4045] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] flex items-center gap-2.5">
                <span className="flex h-7 w-7 rounded-lg bg-[#81014d]/10 text-[#81014d] text-sm font-bold items-center justify-center">
                  1
                </span>
                Overview & Commitment
              </h2>
              <p className="text-sm sm:text-base">
                Artisan Ventures Private Limited (&quot;Artisan Ventures&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your business and personal data. This Privacy Policy outlines how we collect, process, use, store, and safeguard your details when you interact with us via our website, digital campaigns, Instant Forms, WhatsApp, email, or telephone inquiries.
              </p>
              <p className="text-sm sm:text-base">
                We handle all collected information strictly in compliance with applicable Indian privacy laws and digital data protection standards.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] flex items-center gap-2.5">
                <span className="flex h-7 w-7 rounded-lg bg-[#81014d]/10 text-[#81014d] text-sm font-bold items-center justify-center">
                  2
                </span>
                Information We Collect
              </h2>
              <p className="text-sm sm:text-base">
                When you submit an inquiry, request a quotation, or fill out our instant contact form, we may collect the following details:
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                {[
                  "Full name and designation",
                  "Company / business name and official website",
                  "Work email address and corporate contact details",
                  "Mobile phone / WhatsApp contact numbers",
                  "Label specifications, required quantities, material preferences, and delivery timelines",
                  "Sample requests, artwork attachments, or technical printing notes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#81014d] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] flex items-center gap-2.5">
                <span className="flex h-7 w-7 rounded-lg bg-[#81014d]/10 text-[#81014d] text-sm font-bold items-center justify-center">
                  3
                </span>
                How We Use Your Information
              </h2>
              <p className="text-sm sm:text-base">
                We use the collected information for legitimate commercial and customer-support purposes:
              </p>
              <div className="bg-[#f8f8f6] border border-[#e6e6e6] p-5 rounded-2xl text-sm space-y-2">
                <p className="font-semibold text-[#1c1c1e]">Form Notice & Scope of Usage:</p>
                <p className="italic text-[#5f6368]">
                  &ldquo;We will use your information to contact you regarding your label manufacturing requirements, discuss specifications and order quantities, and provide a quotation. Your information will be handled according to our privacy policy.&rdquo;
                </p>
              </div>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#81014d] shrink-0 mt-1" />
                  <span>Evaluating technical printing requirements and preparing custom volume quotations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#81014d] shrink-0 mt-1" />
                  <span>Contacting you via WhatsApp, email, or telephone regarding your order inquiries and timeline.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#81014d] shrink-0 mt-1" />
                  <span>Dispatching sample kits or physical test labels upon your request.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#81014d] shrink-0 mt-1" />
                  <span>Maintaining customer records and complying with statutory tax and accounting standards.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] flex items-center gap-2.5">
                <span className="flex h-7 w-7 rounded-lg bg-[#81014d]/10 text-[#81014d] text-sm font-bold items-center justify-center">
                  4
                </span>
                Data Protection & Non-Disclosure
              </h2>
              <p className="text-sm sm:text-base">
                <strong>We do not sell, rent, lease, or trade your personal or business data to third-party brokers or advertisers.</strong>
              </p>
              <p className="text-sm sm:text-base">
                Information is disclosed only to authorized personnel within Artisan Ventures and vetted logistics / courier partners responsible for delivering your product samples or label shipments.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] flex items-center gap-2.5">
                <span className="flex h-7 w-7 rounded-lg bg-[#81014d]/10 text-[#81014d] text-sm font-bold items-center justify-center">
                  5
                </span>
                Your Rights & Data Retention
              </h2>
              <p className="text-sm sm:text-base">
                You may request access to, correction of, or deletion of your business contact information from our active communication channels at any time by sending an email to{" "}
                <a href="mailto:Kunal@artisanven.com" className="font-semibold text-[#81014d] underline">
                  Kunal@artisanven.com
                </a>{" "}
                or{" "}
                <a href="mailto:Sales@artisanven.com" className="font-semibold text-[#81014d] underline">
                  Sales@artisanven.com
                </a>
                .
              </p>
            </section>

            {/* Section 6 - Contact details */}
            <section className="pt-6 border-t border-[#e6e6e6] space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] flex items-center gap-2.5">
                <span className="flex h-7 w-7 rounded-lg bg-[#81014d]/10 text-[#81014d] text-sm font-bold items-center justify-center">
                  6
                </span>
                Contact & Corporate Office
              </h2>
              <p className="text-sm sm:text-base">
                If you have questions about this Privacy Policy or how your information is handled, please contact our team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-5 rounded-2xl bg-[#f8f8f6] border border-[#e6e6e6] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#1c1c1e]">
                    <MapPin size={15} className="text-[#81014d]" />
                    Corporate Office
                  </div>
                  <p className="text-xs sm:text-sm text-[#5f6368] leading-relaxed">
                    Artisan Ventures Private Limited<br />
                    44, Somnath Rd, Shanti Nagar, Usmanpura,<br />
                    Ahmedabad, Gujarat - 380013, India
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f8f8f6] border border-[#e6e6e6] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#1c1c1e]">
                    <MapPin size={15} className="text-[#81014d]" />
                    Manufacturing Plant
                  </div>
                  <p className="text-xs sm:text-sm text-[#5f6368] leading-relaxed">
                    Plot no 828, Santej, Opp. Neelkanth Hotel,<br />
                    behind Bhavi Tubes, Rakanpur, Taluka Kalol,<br />
                    Gujarat - 382721, India
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm">
                <a
                  href="mailto:Kunal@artisanven.com"
                  className="flex items-center gap-2 text-[#81014d] hover:underline font-semibold"
                >
                  <Mail size={15} />
                  Kunal@artisanven.com
                </a>
                <a
                  href="tel:+919825744787"
                  className="flex items-center gap-2 text-[#81014d] hover:underline font-semibold"
                >
                  <Phone size={15} />
                  +91 98257 44787 (Kunal Patel)
                </a>
                <a
                  href="tel:+919377144222"
                  className="flex items-center gap-2 text-[#81014d] hover:underline font-semibold"
                >
                  <Phone size={15} />
                  +91 93771 44222 (Dhruv Patel)
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
