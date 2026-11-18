"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterStatus("loading");
    setNewsletterMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setNewsletterStatus("success");
        setNewsletterMessage("Thank you for subscribing! You're now on our update list.");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
        setNewsletterMessage(data.error || "Failed to subscribe. Please try again.");
      }
    } catch {
      setNewsletterStatus("error");
      setNewsletterMessage("Connection error. Please try again later.");
    }
  };

  return (
    <footer className="bg-white text-[#1c1c1e] border-t border-[#e6e6e6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/artisan-logo.png" 
                alt="Artisan Ventures Private Limited" 
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-[#5f6368] text-[15px] leading-relaxed max-w-sm mb-4">
              Premium label manufacturing & industrial printing solutions engineered for global enterprise clients.
            </p>
            <div className="text-xs text-[#5f6368] space-y-2 mb-8 border-l-2 border-[#a20160]/40 pl-3">
              <div>
                <strong className="text-[#1c1c1e] block uppercase tracking-wider text-[10px] mb-1">Group Company (Digital Printing):</strong>
                <a
                  href="https://kalpadigiworld.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#f8f8f6] hover:bg-white border border-[#e6e6e6] hover:border-[#a20160]/40 transition-all duration-300 shadow-2xs"
                  title="Visit Kalpa Digi World Website"
                >
                  <img
                    src="/kalpa-digi-world-logo.png"
                    alt="Kalpa Digi World Logo"
                    className="h-5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="text-[11px] font-bold text-[#a20160] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </div>
              <div>
                <strong className="text-[#1c1c1e] block uppercase tracking-wider text-[10px]">Email & Contact:</strong>
                <span>Kunal@artisanven.com (Kunal Patel: +91 98257 44787)</span><br />
                <span>Sales@artisanven.com (Dhruv Patel: +91 93771 44222)</span>
              </div>
              <div>
                <strong className="text-[#1c1c1e] block uppercase tracking-wider text-[10px]">
                  Factory Address:{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Artisan+Ventures+Private+Limited,+3FXH%2BX3+Santej,+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a20160] hover:underline normal-case font-semibold"
                  >
                    (Google Maps ↗)
                  </a>
                </strong>
                <span>Plot no 828, Santej, Opp. Neelkanth Hotel, Rakanpur, Taluka Kalol, Gujarat - 382721 (3FXH+X3 Santej)</span>
              </div>
              <div>
                <strong className="text-[#1c1c1e] block uppercase tracking-wider text-[10px]">Registered Office:</strong>
                <span>44, Panchshil Bunglow, Opp Metro Pillar - 288, Usmanpura, Ahmedabad - 380013</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#e6e6e6] bg-[#f8f8f6] hover:bg-[#0077b5] text-[#5f6368] hover:text-white transition-all duration-300 text-xs font-semibold cursor-pointer shadow-2xs group"
                aria-label="Artisan Ventures on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#e6e6e6] bg-[#f8f8f6] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#5f6368] hover:text-white transition-all duration-300 text-xs font-semibold cursor-pointer shadow-2xs group"
                aria-label="Artisan Ventures on Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5f6368] mb-5">
              Products
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.products.map((item) => (
                <li key={item}>
                  <Link
                    href="/labels"
                    className="text-[15px] text-[#5f6368] hover:text-[#1c1c1e] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5f6368] mb-5">
              Printer Fleet
            </h3>
            <ul className="space-y-3">
              {["Sharp BP-50M45", "Brother DCP-L5660DN", "Canon iR C3326", "HP Color LaserJet", "Konica Bizhub"].map((item) => (
                <li key={item}>
                  <Link
                    href="/printer-rental"
                    className="text-[15px] text-[#5f6368] hover:text-[#1c1c1e] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5f6368] mb-5">
              Newsletter
            </h3>
            <p className="text-[15px] text-[#5f6368] mb-4 leading-relaxed">
              Industry insights and manufacturing updates.
            </p>
            {newsletterStatus === "success" ? (
              <div className="p-4 rounded-[16px] bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs font-medium space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#047857]">
                  <CheckCircle size={16} />
                  <span>Subscribed Successfully!</span>
                </div>
                <p>{newsletterMessage}</p>
                <button
                  type="button"
                  onClick={() => {
                    setNewsletterStatus("idle");
                    setNewsletterMessage("");
                  }}
                  className="text-[11px] font-bold text-[#047857] underline hover:no-underline cursor-pointer pt-1 block"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form className="space-y-2" onSubmit={handleNewsletterSubmit}>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    aria-label="Email address for newsletter"
                    disabled={newsletterStatus === "loading"}
                    className="flex-1 h-11 rounded-[14px] bg-[#f8f8f6] border border-[#e6e6e6] px-4 text-sm text-[#1c1c1e] placeholder:text-[#5f6368]/50 focus:outline-none focus:ring-2 focus:ring-[#a20160]/30 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    className="h-11 px-5 rounded-[14px] bg-[#a20160] text-white text-sm font-medium hover:bg-[#a20160]/90 transition-colors cursor-pointer disabled:opacity-60 flex items-center justify-center min-w-[70px]"
                  >
                    {newsletterStatus === "loading" ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Join"
                    )}
                  </button>
                </div>
                {newsletterStatus === "error" && (
                  <p className="text-xs font-semibold text-rose-600 pl-1">{newsletterMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e6e6e6] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5f6368]">
            &copy; {new Date().getFullYear()} Artisan Ventures Private Limited. Created by Mahima Joshi | Team Social Tusk. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-[#5f6368] hover:text-[#1c1c1e] transition-colors"
            >
              Privacy Policy
            </Link>
            {["Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="/privacy-policy"
                className="text-sm text-[#5f6368] hover:text-[#1c1c1e] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
