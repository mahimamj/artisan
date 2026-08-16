"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
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
    <section id="contact" className="section-padding bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Start Your Project"
          description="Tell us about your labeling requirements. Our engineering team will respond within 24 hours."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeIn>
            <div className="h-full p-8 lg:p-10 rounded-[16px] bg-dark text-white">
              <h3 className="text-2xl font-bold tracking-tight">Get in Touch</h3>
              <p className="mt-4 text-white/50 text-[15px] leading-relaxed">
                Visit our manufacturing facility or reach out to discuss your
                premium labeling and printing requirements.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Factory Address",
                    value: "Plot no 828, Santej, Opposite Neelkanth Hotel,\nbehind Bhavi Tubes, Rakanpur, Taluka Kalol,\nGujarat - 382721",
                  },
                  {
                    icon: MapPin,
                    label: "Registered / Office Address",
                    value: "44, Panchshil Bunglow, Opp Metro Pillar - 288,\nNear Naranpura Railway Crossing, Usmanpura,\nAhmedabad, Gujarat - 380013",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "kunalartisan@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 88660 09344",
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    value: "Mon – Sat: 9:00 AM – 6:30 PM IST",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-white/5 border border-white/10">
                      <item.icon size={18} strokeWidth={1.5} className="text-magenta" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                        {item.label}
                      </div>
                      <div className="mt-1 text-[15px] text-white/80 whitespace-pre-line leading-relaxed">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[14px] overflow-hidden border border-white/10 aspect-[16/9] bg-white/5 relative">
                <iframe
                  title="Artisan Ventures location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.45%2C23.00%2C72.65%2C23.18&layer=mapnik&marker=23.10%2C72.51"
                  className="w-full h-full border-0 filter opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="h-full p-8 lg:p-10 rounded-[16px] bg-background border border-border card-shadow"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-magenta/10 mb-6">
                    <span className="text-2xl text-magenta">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Thank You</h3>
                  <p className="mt-3 text-foreground-secondary max-w-sm">
                    Your inquiry has been received. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold tracking-tight mb-8">
                    Request a Quote
                  </h3>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input id="company" name="company" placeholder="Company name" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium text-foreground mb-2">
                        Requirements
                      </label>
                      <Textarea
                        id="requirements"
                        name="requirements"
                        placeholder="Describe your labeling or printing requirements..."
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Submit Inquiry
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
