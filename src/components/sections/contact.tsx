"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Check, MessageSquare, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn, SectionHeader } from "@/components/motion/fade-in";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-[#f8fafc] via-white to-[#f8f8f6] border-t border-border relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-10 -translate-y-1/2 w-96 h-96 bg-magenta/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Get In Touch"
          title="Start Your Project With Artisan"
          description="Tell us about your custom label manufacturing or industrial printer fleet requirements. Our engineering specialists respond within 24 hours."
          align="center"
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side — Location & Details */}
          <FadeIn>
            <div className="h-full p-8 lg:p-10 rounded-[28px] bg-white border border-border/80 card-shadow flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-magenta/5 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Contact & Facility Details</h3>
                  <a
                    href="https://wa.me/919825744787?text=Hello%20Artisan%20Ventures,%20I%20would%20like%20to%20request%20a%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-1.5 shadow-xs"
                  >
                    <MessageSquare size={14} />
                    WhatsApp Quote
                  </a>
                </div>

                <p className="text-foreground-secondary text-xs sm:text-sm leading-relaxed">
                  Visit our state-of-the-art manufacturing facility in Kalol / Ahmedabad or contact us directly to discuss specifications, samples, and volume pricing.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      icon: MapPin,
                      label: "Factory & Manufacturing Plant",
                      value: "Plot no 828, Santej, Opposite Neelkanth Hotel,\nbehind Bhavi Tubes, Rakanpur, Taluka Kalol,\nGujarat - 382721",
                    },
                    {
                      icon: MapPin,
                      label: "Registered Corporate Office (Google Maps)",
                      value: "44, Somnath Rd, Shanti Nagar, Usmanpura,\nAhmedabad, Gujarat - 380013",
                      link: "https://maps.app.goo.gl/orDcQ8RjCBukQ4gX8?g_st=aw",
                    },
                    {
                      icon: Mail,
                      label: "Direct Email Contacts",
                      value: "Kunal@artisanven.com\nSales@artisanven.com",
                    },
                    {
                      icon: Phone,
                      label: "Hotline & Inquiries",
                      value: "+91 98257 44787 (Kunal Patel)\n+91 93771 44222 (Dhruv Patel)",
                    },
                    {
                      icon: Clock,
                      label: "Business Hours",
                      value: "Mon – Sat: 9:00 AM – 6:30 PM IST",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 group">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[14px] bg-magenta/10 border border-magenta/20 group-hover:scale-105 transition-transform duration-300">
                        <item.icon size={20} strokeWidth={1.75} className="text-magenta" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-foreground-secondary/70">
                            {item.label}
                          </span>
                          {"link" in item && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-bold text-magenta hover:underline uppercase tracking-wider"
                            >
                              Open Map ↗
                            </a>
                          )}
                        </div>
                        <div className="mt-0.5 text-xs sm:text-sm text-foreground font-semibold whitespace-pre-line leading-relaxed">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Google Map for Corporate Office */}
              <div className="mt-8 rounded-[18px] overflow-hidden border border-border/80 aspect-[16/9] bg-[#f8f8f6] relative shadow-inner group">
                <iframe
                  title="Artisan Ventures Corporate Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4939762744883!2d72.5644361!3d23.0490954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84888c032fc7%3A0xcb3e074aa52f1280!2s44%2C%20Somnath%20Rd%2C%20Shanti%20Nagar%2C%20Usmanpura%2C%20Ahmedabad%2C%20Gujarat%20380013!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
                <a
                  href="https://maps.app.goo.gl/orDcQ8RjCBukQ4gX8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 text-[#1c1c1e] text-[11px] font-bold uppercase tracking-wider border border-border/80 shadow-md hover:bg-magenta hover:text-white transition-all duration-300"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right Side — Interactive Quote Form */}
          <FadeIn delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="h-full p-8 lg:p-10 rounded-[28px] bg-white border border-border/80 card-shadow flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-magenta to-[#0284c7]" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                    <Check className="text-3xl text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Inquiry Received</h3>
                  <p className="mt-3 text-foreground-secondary text-xs sm:text-sm max-w-sm leading-relaxed">
                    Thank you! Our engineering team will review your specifications and contact you within 24 hours with a custom proposal.
                  </p>
                  <Button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 text-xs font-bold uppercase tracking-wider rounded-full"
                  >
                    Submit Another Requirement
                  </Button>
                </div>
              ) : (
                <>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        Request a Custom Quote
                      </h3>
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-magenta/10 text-magenta border border-magenta/20 flex items-center gap-1">
                        <Sparkles size={11} />
                        24h Response
                      </span>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input id="name" name="name" placeholder="John Doe" required className="h-11 rounded-[12px] text-xs sm:text-sm border-border/80 focus:border-magenta" />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                            Company Name *
                          </label>
                          <Input id="company" name="company" placeholder="Enterprise Ltd." required className="h-11 rounded-[12px] text-xs sm:text-sm border-border/80 focus:border-magenta" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                            Corporate Email *
                          </label>
                          <Input id="email" name="email" type="email" placeholder="you@company.com" required className="h-11 rounded-[12px] text-xs sm:text-sm border-border/80 focus:border-magenta" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                            Phone / WhatsApp
                          </label>
                          <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="h-11 rounded-[12px] text-xs sm:text-sm border-border/80 focus:border-magenta" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="requirements" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Project Requirements & Specifications *
                        </label>
                        <Textarea
                          id="requirements"
                          name="requirements"
                          rows={5}
                          placeholder="Please mention label quantities, substrate type (e.g. White PP, Chromo, Clear), finishing (Foil, Spot UV), or printer rental requirements..."
                          required
                          className="rounded-[14px] text-xs sm:text-sm border-border/80 focus:border-magenta p-3.5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button type="submit" size="lg" className="w-full bg-magenta text-white hover:bg-magenta/90 font-bold uppercase tracking-wider text-xs h-12 rounded-[14px] shadow-lg shadow-magenta/25 flex items-center justify-center gap-2">
                      <Send size={15} />
                      Submit Quotation Inquiry
                    </Button>
                  </div>
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

