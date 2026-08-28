"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FEATURED_RENTAL_PRINTERS, PRINTER_SERVICES } from "@/lib/constants";
import {
  Wrench,
  Headphones,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Check,
  MessageSquare,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function PrinterRentalPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Artisan Ventures,\n\nI would like a Printer Rental Quote.\nCompany: ${formData.company || "N/A"}\nName: ${formData.contactPerson || "N/A"}\nEmail: ${formData.email || "N/A"}\nPhone: ${formData.phone || "N/A"}\nRequirements: ${formData.requirements || "N/A"}`
  );

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24 bg-[#f8f8f6] text-[#1c1c1e] min-h-screen">
        {/* Hero Section */}
        <section className="relative py-14 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-12 overflow-hidden border-b border-[#e6e6e6] bg-gradient-to-b from-white via-[#f8f8f6] to-[#f8f8f6]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0284c7]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="mx-auto max-w-7xl relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                <Sparkles size={14} />
                Artisan Printer Rental Solutions
              </div>
              <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1c1c1e] max-w-4xl leading-[1.08]">
                Enterprise Printer Rental & Managed Print Services
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#5f6368] max-w-3xl leading-relaxed">
                Rent high-performance A3 and A4 printers from leading brands including <strong className="text-[#1c1c1e]">HP, Konica Minolta, Kyocera, Sharp, and Brother</strong> with zero upfront capital outlay, free toner replenishment, and 100% maintenance support.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-[#0284c7] text-white hover:bg-[#0284c7]/90 font-bold text-xs uppercase tracking-wider">
                  <Link href="#contact-rental">
                    Request Rental Proposal
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#e6e6e6] text-[#1c1c1e] hover:bg-black/5 text-xs uppercase tracking-wider">
                  <Link href="#catalog">View 9 Rental Models</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Complete Hardware Fleet Catalog Grid */}
        <section id="catalog" className="py-14 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <SectionHeader
            label="Hardware Fleet"
            title="Available Printer Rental Models"
            description="Explore our high-performance A3 and A4 printer rental fleet with exact technical specifications."
            align="center"
          />

          <StaggerContainer className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FEATURED_RENTAL_PRINTERS.map((printer) => (
              <StaggerItem key={printer.id}>
                <div className={`h-full p-6 sm:p-8 rounded-[24px] bg-white border transition-all duration-300 flex flex-col justify-between group card-shadow hover:card-shadow-hover ${
                  printer.popular ? "border-2 border-[#0284c7] shadow-xl shadow-[#0284c7]/10" : "border-[#e6e6e6] hover:border-[#0284c7]/40"
                }`}>
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] bg-[#0284c7]/10 px-3 py-1 rounded-full border border-[#0284c7]/20">
                        {printer.brand}
                      </span>
                      <span className="text-xs font-bold text-[#d97706] bg-[#d97706]/10 px-2.5 py-0.5 rounded border border-[#d97706]/20">
                        {printer.speed}
                      </span>
                    </div>

                    {/* Printer Product Image (Unclipped) */}
                    <div className="relative w-full h-48 sm:h-56 md:h-60 rounded-2xl bg-[#f8f8f6] border border-[#e6e6e6] mb-5 p-3 flex items-center justify-center overflow-hidden group-hover:border-[#0284c7]/30 transition-colors">
                      <Image
                        src={printer.image}
                        alt={printer.model}
                        fill
                        className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                      {printer.popular && (
                        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-[#0284c7] text-white px-2.5 py-0.5 rounded-full shadow-sm">
                          POPULAR FLEET
                        </span>
                      )}
                    </div>

                    {/* Title & Core Specs */}
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#1c1c1e] mb-3">
                      {printer.model}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="text-[11px] font-semibold text-[#0284c7] bg-[#0284c7]/10 px-2.5 py-0.5 rounded-md">
                        {printer.output}
                      </span>
                      <span className="text-[11px] font-semibold text-[#1c1c1e] bg-[#f8f8f6] border border-[#e6e6e6] px-2.5 py-0.5 rounded-md">
                        {printer.tray}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                        ADF + Duplex + Network
                      </span>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-[#e6e6e6] text-xs text-[#5f6368]">
                      {printer.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-[#0284c7] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#e6e6e6]">
                    <Button asChild className="w-full bg-[#0284c7] text-white hover:bg-[#0284c7]/90 font-semibold uppercase tracking-wider text-xs h-11">
                      <Link href="#contact-rental">Rent {printer.model}</Link>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Why Choose Artisan Printer Rental */}
        <section className="py-14 sm:py-20 bg-white px-5 sm:px-6 lg:px-12 border-y border-[#e6e6e6]">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              label="Why Artisan Rental"
              title="All-Inclusive Managed Print Ecosystem"
              description="We handle hardware, toner, maintenance, and support so your business operations run uninterrupted."
              align="center"
            />

            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                { title: "Zero Capital Outlay", desc: "No large upfront equipment investment. Predictable monthly rental plans.", icon: Zap },
                { title: "100% Maintenance & Service", desc: "Free preventive maintenance, drum changes, and 4-hour on-site response.", icon: Wrench },
                { title: "Free Toners & Consumables", desc: "All genuine toner cartridges, developer units, and spares supplied free.", icon: Layers },
                { title: "Dedicated Support Helpdesk", desc: "Direct access to certified network & hardware technicians for fast resolution.", icon: Headphones },
              ].map((adv, i) => {
                const Icon = adv.icon;
                return (
                  <FadeIn key={adv.title} delay={i * 0.1}>
                    <div className="p-6 sm:p-8 rounded-[20px] bg-[#f8f8f6] border border-[#e6e6e6] hover:border-[#0284c7]/40 transition-all h-full">
                      <div className="h-12 w-12 rounded-[14px] bg-[#0284c7]/10 border border-[#0284c7]/20 flex items-center justify-center text-[#0284c7] mb-4 sm:mb-5">
                        <Icon size={22} />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#1c1c1e] mb-2">{adv.title}</h4>
                      <p className="text-xs sm:text-sm text-[#5f6368] leading-relaxed">{adv.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rental Quote Contact Form */}
        <section id="contact-rental" className="py-14 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-12 max-w-4xl mx-auto">
          <SectionHeader
            label="Request Proposal"
            title="Get a Customized Printer Rental Quote"
            description="Select your preferred printer model and tell us your monthly printing volume for an instant proposal."
            align="center"
          />

          <FadeIn delay={0.2}>
            <div className="mt-8 sm:mt-12 p-6 sm:p-8 lg:p-12 rounded-[24px] bg-white border border-[#e6e6e6] card-shadow">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 text-emerald-600">
                    <CheckCircle2 size={44} />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1c1e]">
                    Proposal Request Received!
                  </h3>

                  <p className="mt-3 text-sm text-[#5f6368] max-w-md leading-relaxed">
                    Thank you{formData.contactPerson ? `, ${formData.contactPerson}` : ""}! Our hardware fleet engineers will analyze your printing volume requirements and respond within 24 hours.
                  </p>

                  {/* WhatsApp Direct Action Button */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
                    <a
                      href={`https://wa.me/919825744787?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25"
                    >
                      <MessageSquare size={16} />
                      <span>Send Specs Via WhatsApp</span>
                    </a>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider h-11 rounded-xl"
                    >
                      Submit Another Quote
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="rental-company" className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Company Name *</label>
                      <Input
                        id="rental-company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Enterprise / Organization Name"
                        className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="rental-contact" className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Contact Person *</label>
                      <Input
                        id="rental-contact"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Full Name"
                        className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="rental-email" className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Email Address *</label>
                      <Input
                        id="rental-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="rental-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Phone / WhatsApp Number *</label>
                      <Input
                        id="rental-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="rental-requirements" className="block text-xs font-semibold uppercase tracking-wider text-[#5f6368] mb-2">Selected Printer Model(s) & Expected Monthly Volume *</label>
                    <Textarea
                      id="rental-requirements"
                      required
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="e.g. 1 x Sharp BP-50M45 (45 PPM A3) + 1 x Brother DCP-L5660DN (48 PPM A4), approx. 15,000 pages/month"
                      className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] rounded-xl text-xs sm:text-sm p-3.5"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#0284c7] text-white hover:bg-[#0369a1] font-bold uppercase tracking-wider text-xs sm:text-sm h-12 rounded-xl shadow-md shadow-[#0284c7]/20 flex items-center justify-center gap-2">
                    <Send size={16} />
                    <span>Submit Rental Quote Request</span>
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
