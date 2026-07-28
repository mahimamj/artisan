import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { LabelsDivision } from "@/components/sections/labels-division";
import { IndustriesServed } from "@/components/sections/industries-served";
import { ManufacturingProcess } from "@/components/sections/manufacturing-process";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyChoose } from "@/components/sections/why-choose";
import { PrinterSolutions } from "@/components/sections/printer-solutions";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

import { TrustedClients } from "@/components/sections/trusted-clients";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedClients />
        <LabelsDivision />
        <IndustriesServed />
        <ManufacturingProcess />
        <FeaturedWork />
        <WhyChoose />
        <PrinterSolutions />
        <Statistics />
        <Testimonials />
        <Gallery />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
