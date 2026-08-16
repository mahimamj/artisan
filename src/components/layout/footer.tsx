"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/artisan-logo-transparent.png" 
                alt="Artisan Ventures Private Limited" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-sm mb-4">
              Premium label manufacturing & industrial printing solutions engineered for global enterprise clients.
            </p>
            <div className="text-xs text-white/60 space-y-2 mb-8 border-l-2 border-magenta/40 pl-3">
              <div>
                <strong className="text-white/80 block uppercase tracking-wider text-[10px]">Factory Address:</strong>
                <span>Plot no 828, Santej, Opp. Neelkanth Hotel, Rakanpur, Taluka Kalol, Gujarat - 382721</span>
              </div>
              <div>
                <strong className="text-white/80 block uppercase tracking-wider text-[10px]">Registered Office:</strong>
                <span>44, Panchshil Bunglow, Opp Metro Pillar - 288, Usmanpura, Ahmedabad - 380013</span>
              </div>
            </div>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-medium uppercase tracking-wider text-white/40 hover:text-magenta transition-colors"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Products
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.products.map((item) => (
                <li key={item}>
                  <Link
                    href="#labels"
                    className="text-[15px] text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Industries
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.industries.map((item) => (
                <li key={item}>
                  <Link
                    href="#industries"
                    className="text-[15px] text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Newsletter
            </h3>
            <p className="text-[15px] text-white/50 mb-4 leading-relaxed">
              Industry insights and manufacturing updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address for newsletter"
                className="flex-1 h-11 rounded-[14px] bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-magenta/30"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-[14px] bg-magenta text-white text-sm font-medium hover:bg-magenta/90 transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Artisan Ventures Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-white/30 hover:text-white/60 transition-colors"
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
