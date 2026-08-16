export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Labels", href: "/labels" },
  { label: "Printer Solutions", href: "/printer-rental" },
  { label: "Industries", href: "/labels#industries" },
  { label: "About", href: "/labels#about" },
  { label: "Contact", href: "/labels#contact" },
] as const;

export const LABEL_CATEGORIES = [
  {
    title: "Pharma Labels",
    description: "Precision-engineered tamper-evident and compliance labels for pharmaceutical packaging.",
    image: "/categories/pharma/Gemini_Generated_Image_9owg3w9owg3w9owg.png",
  },
  {
    title: "Perfume Labels",
    description: "Elegant, high-finish tactile labels designed for luxury perfume and fragrance bottles.",
    image: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_16_PM.png",
  },
  {
    title: "FMCG Packaging Labels",
    description: "High-volume vibrant product labels built for consumer goods and retail packaging.",
    image: "/categories/fmcg/Gemini_Generated_Image_hisj06hisj06hisj.png",
  },
  {
    title: "Cosmetic Labels",
    description: "Premium foil-stamped, water-resistant labels tailored for cosmetics and beauty products.",
    image: "/categories/cosmetic/Gemini_Generated_Image_hghmnnhghmnnhghm.png",
  },
  {
    title: "Pharmaceutical Compliance",
    description: "Regulated medical dosage and security labels meeting international FDA/EU standards.",
    image: "/categories/pharma/03.png",
  },
  {
    title: "Luxury Fragrance Box Labels",
    description: "Embossed metallic foil labeling solutions for premium fragrance gift sets and boxes.",
    image: "/categories/perfume/Gemini_Generated_Image_wsoo7ywsoo7ywsoo.png",
  },
  {
    title: "Food & Beverage Labels",
    description: "Food-safe, moisture-durable custom labels engineered for high shelf appeal.",
    image: "/categories/fmcg/Gemini_Generated_Image_uwnx7luwnx7luwnx.png",
  },
  {
    title: "Skincare & Beauty Labels",
    description: "Sleek matte and glossy finishes resistant to oils, water, and daily handling.",
    image: "/categories/cosmetic/Gemini_Generated_Image_fu5cscfu5cscfu5c.png",
  },
  {
    title: "Industrial Barcode & Logistics",
    description: "High-contrast thermal transfer and barcode labels for inventory tracking and shipping.",
    image: "/categories/fmcg/Gemini_Generated_Image_8pacx8pacx8pacx8.png",
  },
] as const;

export const INDUSTRIES = [
  "Pharma",
  "Perfume",
  "FMCG",
  "Cosmetics",
  "Healthcare",
  "Retail",
  "Logistics",
  "Food & Beverage",
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
    title: "Pharmaceutical Compliance Rollout",
    industry: "Pharma",
    description:
      "Engineered tamper-evident and serialised medicine labels meeting international regulatory standards for leading pharmaceutical brands.",
    image: "/categories/pharma/Gemini_Generated_Image_44bd9z44bd9z44bd.png",
  },
  {
    title: "Global FMCG Packaging Campaign",
    industry: "FMCG",
    description:
      "Delivered high-volume product labels across 50+ SKUs with zero defect tolerance for top consumer goods manufacturers.",
    image: "/categories/fmcg/Gemini_Generated_Image_mv6u1zmv6u1zmv6u.png",
  },
  {
    title: "Luxury Perfume & Fragrance Line",
    industry: "Perfume",
    description:
      "Custom foil-stamped, water-resistant tactile labels for high-end global perfume launches.",
    image: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_22_PM.png",
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
    src: "/categories/pharma/Gemini_Generated_Image_9owg3w9owg3w9owg.png",
    alt: "Pharmaceutical Packaging Label",
    category: "Pharma",
  },
  {
    src: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_16_PM.png",
    alt: "Luxury Perfume Label",
    category: "Perfume",
  },
  {
    src: "/categories/fmcg/Gemini_Generated_Image_hisj06hisj06hisj.png",
    alt: "FMCG Consumer Label",
    category: "FMCG",
  },
  {
    src: "/categories/cosmetic/Gemini_Generated_Image_hghmnnhghmnnhghm.png",
    alt: "Cosmetic Bottle Label",
    category: "Cosmetic",
  },
  {
    src: "/categories/pharma/Gemini_Generated_Image_uxwv12uxwv12uxwv.png",
    alt: "Medication Container Labeling",
    category: "Pharma",
  },
  {
    src: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_06_PM.png",
    alt: "Fragrance Bottle Packaging",
    category: "Perfume",
  },
  {
    src: "/categories/fmcg/Gemini_Generated_Image_4go4934go4934go4.png",
    alt: "Product Container Labeling",
    category: "FMCG",
  },
  {
    src: "/categories/cosmetic/Gemini_Generated_Image_6ryiwy6ryiwy6ryi.png",
    alt: "Skincare Product Labeling",
    category: "Cosmetic",
  },
  {
    src: "/categories/pharma/Gemini_Generated_Image_44bd9z44bd9z44bd.png",
    alt: "Pharma Compliance Roll",
    category: "Pharma",
  },
  {
    src: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_33_59_PM.png",
    alt: "Fine Fragrance Labeling",
    category: "Perfume",
  },
  {
    src: "/categories/fmcg/Gemini_Generated_Image_owj0f1owj0f1owj0.png",
    alt: "Consumer Goods Packaging",
    category: "FMCG",
  },
  {
    src: "/categories/cosmetic/Gemini_Generated_Image_eofln9eofln9eofl.png",
    alt: "Luxury Cosmetics Label",
    category: "Cosmetic",
  },
  {
    src: "/categories/pharma/03.png",
    alt: "Medical Dosage Label",
    category: "Pharma",
  },
  {
    src: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_11_PM.png",
    alt: "Perfume Box Label",
    category: "Perfume",
  },
  {
    src: "/categories/fmcg/Gemini_Generated_Image_ihubc6ihubc6ihub.png",
    alt: "Food & Beverage Labeling",
    category: "FMCG",
  },
  {
    src: "/categories/cosmetic/Gemini_Generated_Image_u69322u69322u693.png",
    alt: "Beauty Product Packaging",
    category: "Cosmetic",
  },
] as const;

export const CERTIFICATIONS = [
  { title: "ISO 9001:2015", description: "Quality Management System" },
  { title: "ISO 14001", description: "Environmental Management" },
  { title: "FSSC 22000", description: "Food Safety Certification" },
  { title: "GMP Compliant", description: "Good Manufacturing Practice" },
] as const;

export const FOOTER_LINKS = {
  products: ["Pharma Labels", "Perfume Labels", "FMCG Labels", "Cosmetic Labels", "Industrial Printers"],
  industries: ["Pharma", "Perfume", "FMCG", "Cosmetics", "Healthcare"],
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

export const COMPANY_CONTACT = {
  phone: "+91 88660 09344",
  email: "kunalartisan@gmail.com",
} as const;
