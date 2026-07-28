export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Labels", href: "#labels" },
  { label: "Printer Solutions", href: "#printers" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const LABEL_CATEGORIES = [
  {
    title: "Barcode Labels",
    description: "High-resolution barcode labels for inventory and retail systems.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "Thermal Labels",
    description: "Direct and transfer thermal labels for logistics and warehousing.",
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80",
  },
  {
    title: "Food Labels",
    description: "Food-safe labels compliant with international packaging standards.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
  },
  {
    title: "Pharmaceutical Labels",
    description: "Precision labels for regulated pharmaceutical packaging.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cf660b6830b3?w=800&q=80",
  },
  {
    title: "Cosmetic Labels",
    description: "Premium finishes for luxury cosmetic and beauty brands.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    title: "Industrial Labels",
    description: "Durable labels engineered for harsh industrial environments.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    title: "Security Labels",
    description: "Tamper-evident and anti-counterfeit security labeling solutions.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    title: "Packaging Labels",
    description: "Brand-forward packaging labels for premium product presentation.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
  {
    title: "Custom Labels",
    description: "Fully bespoke label solutions tailored to your specifications.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
  },
] as const;

export const INDUSTRIES = [
  "FMCG",
  "Retail",
  "Healthcare",
  "Pharmaceuticals",
  "Manufacturing",
  "Logistics",
  "Automotive",
  "Food & Beverage",
  "E-commerce",
] as const;

export const MANUFACTURING_STEPS = [
  { title: "Material Selection", description: "Premium substrates sourced to exact specifications." },
  { title: "Design & Prepress", description: "Precision artwork preparation and color calibration." },
  { title: "Precision Printing", description: "State-of-the-art flexographic and digital printing." },
  { title: "Finishing", description: "Die-cutting, lamination, and specialty finishing." },
  { title: "Quality Inspection", description: "Multi-stage QC with 99% accuracy standards." },
  { title: "Packaging", description: "Secure packaging for global distribution." },
  { title: "Delivery", description: "Reliable logistics to enterprise clients worldwide." },
] as const;

export const FEATURED_WORK = [
  {
    title: "Global FMCG Brand Rollout",
    industry: "FMCG",
    description:
      "Delivered 12 million custom product labels across 40 SKUs with zero defect tolerance for a leading consumer goods manufacturer.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912a086e968?w=1200&q=80",
  },
  {
    title: "Pharmaceutical Compliance Labels",
    industry: "Pharmaceuticals",
    description:
      "Engineered tamper-evident labels meeting FDA and EU regulatory standards for a multinational pharma company.",
    image:
      "https://images.unsplash.com/photo-1576671087657-831a0865a5c0?w=1200&q=80",
  },
  {
    title: "Luxury Cosmetic Packaging",
    industry: "Cosmetics",
    description:
      "Premium foil-stamped and embossed labels for a high-end beauty brand's global product launch.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "High Precision Manufacturing",
    description: "Micron-level accuracy across every production run.",
    icon: "crosshair" as const,
  },
  {
    title: "Custom Label Solutions",
    description: "Fully bespoke designs engineered to your exact requirements.",
    icon: "layers" as const,
  },
  {
    title: "International Quality Standards",
    description: "ISO-certified processes meeting global compliance requirements.",
    icon: "shield" as const,
  },
  {
    title: "Sustainable Materials",
    description: "Eco-conscious substrates without compromising performance.",
    icon: "leaf" as const,
  },
  {
    title: "Fast Production",
    description: "Optimized workflows delivering rapid turnaround times.",
    icon: "zap" as const,
  },
  {
    title: "Reliable Delivery",
    description: "Consistent on-time delivery to enterprise clients worldwide.",
    icon: "truck" as const,
  },
] as const;

export const PRINTER_PRODUCTS = [
  "Barcode Printers",
  "Thermal Printers",
  "Label Printers",
  "Industrial Printing Systems",
] as const;

export const PRINTER_SERVICES = [
  "Installation",
  "Maintenance",
  "Technical Support",
  "Consumables",
  "Accessories",
] as const;

export const STATISTICS = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Business Clients" },
  { value: 50, suffix: "M+", label: "Labels Produced" },
  { value: 99, suffix: "%", label: "Quality Accuracy" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Artisan Ventures transformed our labeling operations. Their precision and reliability have been instrumental in our global product launches.",
    author: "Rajesh Mehta",
    role: "Supply Chain Director",
    company: "Global FMCG Corp",
  },
  {
    quote:
      "The quality of their pharmaceutical labels exceeds industry standards. A trusted partner for our most critical compliance requirements.",
    author: "Dr. Sarah Chen",
    role: "Quality Assurance Head",
    company: "PharmaTech International",
  },
  {
    quote:
      "From custom design to delivery, Artisan delivers premium results consistently. Their industrial printer solutions complement their label expertise perfectly.",
    author: "Michael Torres",
    role: "Operations Manager",
    company: "AutoParts Global",
  },
] as const;

export const CLIENT_LOGOS = [
  "Unilever",
  "Nestlé",
  "Pfizer",
  "Toyota",
  "Amazon",
  "DHL",
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    alt: "Factory floor",
    category: "Factory",
  },
  {
    src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    alt: "Label printing machinery",
    category: "Machinery",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    alt: "Production line",
    category: "Production",
  },
  {
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    alt: "Label rolls",
    category: "Label Rolls",
  },
  {
    src: "https://images.unsplash.com/photo-1604719312566-8912a086e968?w=800&q=80",
    alt: "Packaging area",
    category: "Packaging",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Industrial printers",
    category: "Industrial Printers",
  },
  {
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    alt: "Warehouse",
    category: "Warehouse",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    alt: "Quality inspection",
    category: "Production",
  },
] as const;

export const CERTIFICATIONS = [
  { title: "ISO 9001:2015", description: "Quality Management System" },
  { title: "ISO 14001", description: "Environmental Management" },
  { title: "FSSC 22000", description: "Food Safety Certification" },
  { title: "GMP Compliant", description: "Good Manufacturing Practice" },
] as const;

export const FOOTER_LINKS = {
  products: ["Barcode Labels", "Thermal Labels", "Food Labels", "Custom Labels", "Industrial Printers"],
  industries: ["FMCG", "Healthcare", "Pharmaceuticals", "Automotive", "E-commerce"],
  company: ["About Us", "Careers", "Certifications", "Contact"],
} as const;

export const COMPANY_ADDRESSES = {
  factory: {
    title: "Factory Address",
    address: "Plot no 828, Santej, Opposite Neelkanth Hotel, behind Bhavi Tubes, Rakanpur, Taluka Kalol, Gujarat - 382721"
  },
  office: {
    title: "Registered / Office Address",
    address: "44, Panchshil Bunglow, Opp Metro Pillar - 288, Near Naranpura Railway Crossing, Usmanpura, Ahmedabad, Gujarat - 380013"
  }
} as const;

