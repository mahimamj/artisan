import { GatewayBackground } from "@/components/gateway/gateway-background";
import { GatewayNavbar } from "@/components/gateway/gateway-navbar";
import { GatewaySelector } from "@/components/gateway/gateway-selector";
import { TrustedClients } from "@/components/sections/trusted-clients";
import { Statistics } from "@/components/sections/statistics";
import { WhyChoose } from "@/components/sections/why-choose";
import { LabelsDivision } from "@/components/sections/labels-division";
import { FlexoDigitalIntro } from "@/components/sections/flexo-digital-intro";
import { PrinterSolutions } from "@/components/sections/printer-solutions";
import { MaterialGuide } from "@/components/sections/material-guide";
import { MaterialIndustriesShowcase } from "@/components/sections/material-industries-showcase";
import { ManufacturingProcess } from "@/components/sections/manufacturing-process";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Certifications } from "@/components/sections/certifications";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { GatewayFooter } from "@/components/gateway/gateway-footer";

export default function GatewayPage() {
  return (
    <main className="relative min-h-screen bg-[#f8f8f6] text-[#1c1c1e] overflow-x-hidden">
      {/* Abstract Premium Light Background */}
      <GatewayBackground />

      {/* Navigation Bar */}
      <GatewayNavbar />

      {/* Hero & Dual Business Selection Gateway */}
      <GatewaySelector />

      {/* Marquee: Esteemed Brands & Enterprise Clients */}
      <TrustedClients />

      {/* Core Company Statistics & Performance Metrics */}
      <Statistics />

      {/* Core Business Vertical: Self-Adhesive Label Manufacturing */}
      <LabelsDivision />

      {/* Flexo & Digital Printing Technology Introduction */}
      <FlexoDigitalIntro />

      {/* Growth Vertical: Industrial Printer Solutions & Rentals */}
      <PrinterSolutions />

      {/* Substrates, Materials & Finishing Embellishments */}
      <MaterialGuide />

      {/* Material in Square Blocks & Industries in Zig-Zag Formation */}
      <MaterialIndustriesShowcase />

      {/* 7-Step Production Pipeline & Manufacturing Excellence */}
      <ManufacturingProcess />

      {/* Why Choose Artisan Ventures */}
      <WhyChoose />

      {/* Featured Case Studies & Work */}
      <FeaturedWork />

      {/* International Quality Certifications */}
      <Certifications />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Interactive Contact & Quote Form */}
      <Contact />

      {/* Corporate Footer */}
      <GatewayFooter />
    </main>
  );
}
