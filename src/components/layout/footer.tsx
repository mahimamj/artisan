"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white text-[#1c1c1e] border-t border-[#e6e6e6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/artisan-logo-transparent.png" 
                alt="Artisan Ventures Private Limited" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-[#5f6368] text-[15px] leading-relaxed max-w-sm mb-4">
              Premium label manufacturing & industrial printing solutions engineered for global enterprise clients.
            </p>
            <div className="text-xs text-[#5f6368] space-y-2 mb-8 border-l-2 border-[#a20160]/40 pl-3">
              <div>
                <strong className="text-[#1c1c1e] block uppercase tracking-wider text-[10px]">Phone & Email:</strong>
                <span>+91 88660 09344 | kunalartisan@gmail.com</span>
              </div>
              <div>
                <strong className="text-[#1c1c1e] block uppercase tracking-wider text-[10px]">Factory Address:</strong>
                <span>Plot no 828, Santej, Opp. Neelkanth Hotel, Rakanpur, Taluka Kalol, Gujarat - 382721</span>
              </div>
              <div>
                <strong className="text-[#1c1c1e] block uppercase tracking-wider text-[10px]">Registered Office:</strong>
                <span>44, Panchshil Bunglow, Opp Metro Pillar - 288, Usmanpura, Ahmedabad - 380013</span>
              </div>
            </div>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-semibold uppercase tracking-wider text-[#5f6368] hover:text-[#a20160] transition-colors"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
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
              Industries
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.industries.map((item) => (
                <li key={item}>
                  <Link
                    href="/labels#industries"
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
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address for newsletter"
                className="flex-1 h-11 rounded-[14px] bg-[#f8f8f6] border border-[#e6e6e6] px-4 text-sm text-[#1c1c1e] placeholder:text-[#5f6368]/50 focus:outline-none focus:ring-2 focus:ring-[#a20160]/30"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-[14px] bg-[#a20160] text-white text-sm font-medium hover:bg-[#a20160]/90 transition-colors cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e6e6e6] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5f6368]">
            &copy; {new Date().getFullYear()} Artisan Ventures Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
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
