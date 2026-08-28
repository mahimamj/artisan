import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { LabelsDivision } from "@/components/sections/labels-division";
import { FlexoDigitalIntro } from "@/components/sections/flexo-digital-intro";
import { MaterialIndustriesShowcase } from "@/components/sections/material-industries-showcase";
import { ManufacturingProcess } from "@/components/sections/manufacturing-process";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyChoose } from "@/components/sections/why-choose";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { TrustedClients } from "@/components/sections/trusted-clients";

export const metadata = {
  title: "Label Manufacturing Division | Artisan Ventures Private Limited",
  description:
    "Premium self-adhesive labels engineered for FMCG, cosmetics, pharma, food and industrial brands. High-precision manufacturing with ISO compliance.",
};

export default function LabelsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedClients />
        <LabelsDivision />
        <FlexoDigitalIntro />
        <MaterialIndustriesShowcase />
        <ManufacturingProcess />
        <FeaturedWork />
        <WhyChoose />
        <Statistics />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
