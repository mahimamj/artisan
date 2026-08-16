"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, SectionHeader } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Printer,
  Wrench,
  Headphones,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

export default function PrinterRentalPage() {
  const PRINTER_CATEGORIES = [
    {
      title: "A4 Monochrome Multifunction",
      speed: "35 - 55 PPM",
      idealFor: "Medium to Large Corporate Offices",
      features: [
        "High-speed duplex printing & scanning",
        "Low cost-per-page thermal transfer",
        "Network & wireless cloud integration",
        "Includes automated toner replenishment",
      ],
      tag: "POPULAR OFFICE CHOICE",
    },
    {
      title: "A3 & A4 Colour Multifunction",
      speed: "30 - 60 PPM",
      idealFor: "Design Studios, Enterprises & Packaging",
      features: [
        "Vivid 1200x1200 dpi precision color",
        "Heavy paper substrate support (up to 300 GSM)",
        "Advanced security & PIN print release",
        "Complete consumables & maintenance included",
      ],
      tag: "HIGH PRECISION COLOR",
    },
    {
      title: "Heavy-Duty Production Systems",
      speed: "70+ PPM",
      idealFor: "High-Volume Logistics & Industrial",
      features: [
        "24/7 continuous duty cycle rating",
        "Multi-tray large capacity feeders",
        "Dedicated on-site standby technician",
        "Zero downtime hardware replacement guarantee",
      ],
      tag: "INDUSTRIAL GRADE",
    },
  ];

  const RENTAL_ADVANTAGES = [
    {
      icon: Zap,
      title: "Zero Capital Outlay",
      description: "Eliminate expensive upfront hardware purchases. Pay predictable monthly or quarterly rental rates.",
    },
    {
      icon: Wrench,
      title: "100% Maintenance & Repairs",
      description: "Free preventive maintenance, drum replacements, and immediate repair response within 4 hours.",
    },
    {
      icon: Layers,
      title: "Free Toners & Consumables",
      description: "All genuine toner cartridges, developer units, and spare parts supplied free of cost.",
    },
    {
      icon: Headphones,
      title: "Dedicated Helpdesk Support",
      description: "Direct access to certified technical specialists for print driver setup and network management.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-[#f8f8f6] text-[#1c1c1e] min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 px-6 lg:px-12 overflow-hidden border-b border-[#e6e6e6] bg-gradient-to-b from-white via-[#f8f8f6] to-[#f8f8f6]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0284c7]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="mx-auto max-w-7xl relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles size={14} />
                Artisan Printer Rental Solutions
              </div>
              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1c1c1e] max-w-4xl leading-[1.08]">
                Enterprise Printer Rental & Managed Print Services
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[#5f6368] max-w-2xl leading-relaxed">
                A4 and A3 colour and monochrome printer solutions with complete installation, maintenance, toner replenishment, and dedicated service support across India.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#0284c7] text-white hover:bg-[#0284c7]/90">
                  <Link href="#contact-rental">
                    Request Rental Quote
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#e6e6e6] text-[#1c1c1e] hover:bg-black/5">
                  <Link href="#catalog">View Printer Fleet</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Printer Fleet Catalog */}
        <section id="catalog" className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
          <SectionHeader
            label="Hardware Fleet"
            title="A4 & A3 Printer Rental Models"
            description="Tailored rental packages designed for high-volume office workflows, logistics, and enterprise operations."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRINTER_CATEGORIES.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 0.15}>
                <div className="h-full p-8 lg:p-10 rounded-[24px] bg-white border border-[#e6e6e6] card-shadow hover:card-shadow-hover hover:border-[#0284c7]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] bg-[#0284c7]/10 px-3 py-1 rounded-full border border-[#0284c7]/20">
                        {cat.tag}
                      </span>
                      <Printer size={28} className="text-[#5f6368] group-hover:text-[#0284c7] transition-colors" />
                    </div>
                    <h3 className="font-serif-heading text-2xl font-bold text-[#1c1c1e] mb-2">{cat.title}</h3>
                    <p className="text-sm font-semibold text-[#d97706] mb-4">Print Speed: {cat.speed}</p>
                    <p className="text-xs text-[#5f6368] mb-6 uppercase tracking-wider">Ideal for: {cat.idealFor}</p>

                    <ul className="space-y-3 pt-6 border-t border-[#e6e6e6] text-sm text-[#5f6368]">
                      {cat.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#0284c7] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6">
                    <Button asChild variant="outline" className="w-full border-[#e6e6e6] text-[#1c1c1e] hover:bg-[#0284c7] hover:text-white hover:border-[#0284c7] transition-colors">
                      <Link href="#contact-rental">Rent This Model</Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Why Choose Artisan Printer Rental */}
        <section className="py-20 bg-white px-6 lg:px-12 border-y border-[#e6e6e6]">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              label="Why Artisan Rental"
              title="All-Inclusive Managed Print Ecosystem"
              description="We handle hardware, toner, maintenance, and support so your business never stops."
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {RENTAL_ADVANTAGES.map((adv, i) => {
                const Icon = adv.icon;
                return (
                  <FadeIn key={adv.title} delay={i * 0.1}>
                    <div className="p-7 rounded-[20px] bg-[#f8f8f6] border border-[#e6e6e6] hover:border-[#0284c7]/30 transition-all">
                      <div className="h-12 w-12 rounded-[14px] bg-[#0284c7]/10 border border-[#0284c7]/20 flex items-center justify-center text-[#0284c7] mb-5">
                        <Icon size={22} />
                      </div>
                      <h4 className="text-lg font-bold text-[#1c1c1e] mb-2">{adv.title}</h4>
                      <p className="text-sm text-[#5f6368] leading-relaxed">{adv.description}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rental Quote Contact Form */}
        <section id="contact-rental" className="py-20 lg:py-28 px-6 lg:px-12 max-w-4xl mx-auto">
          <SectionHeader
            label="Request Quote"
            title="Get a Customized Printer Rental Quote"
            description="Tell us your monthly printing volume and requirements for an instant customized proposal."
            align="center"
          />

          <FadeIn delay={0.2}>
            <form onSubmit={(e) => e.preventDefault()} className="mt-12 p-8 lg:p-12 rounded-[24px] bg-white border border-[#e6e6e6] card-shadow space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Company Name</label>
                  <Input placeholder="Your Enterprise / Company Name" className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Contact Person</label>
                  <Input placeholder="Full Name" className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Email Address</label>
                  <Input type="email" placeholder="name@company.com" className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Phone Number</label>
                  <Input placeholder="+91 98765 43210" className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Preferred Printer Type & Expected Volume</label>
                <Textarea
                  placeholder="e.g. 2 x A3 Colour Printers, approx. 10,000 pages per month, location: Ahmedabad"
                  className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e]"
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#0284c7] text-white hover:bg-[#0284c7]/90 font-semibold uppercase tracking-wider text-sm h-12">
                Submit Rental Quote Request
              </Button>
            </form>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
