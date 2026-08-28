export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/labels#about" },
  { label: "Labels", href: "/labels" },
  { label: "Printer Solution", href: "/printer-rental" },
  { label: "Catalog", href: "/labels#catalog" },
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
    title: "Sachet Printing",
    description: "Flexible high-barrier laminated sachet printing for pharmaceuticals, FMCG, samples, and liquids.",
    image: "/categories/fmcg/Gemini_Generated_Image_owj0f1owj0f1owj0.png",
  },
  {
    title: "Food & Beverage Labels",
    description: "Food-safe, moisture-durable custom labels engineered for high shelf appeal.",
    image: "/categories/fmcg/Gemini_Generated_Image_uwnx7luwnx7luwnx.png",
  },
  {
    title: "Liquor and Beverages",
    description: "Premium metallic foil, neck wrap, and moisture-resistant neck & body labels for spirits, wine, and beverages.",
    image: "/categories/perfume/ChatGPT_Image_Aug_7__2026__04_34_06_PM.png",
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
  {
    title: "Substrate Audit",
    description: "Analyzing container shape, moisture levels, and adhesive bonding requirements.",
  },
  {
    title: "Digital Pre-Press",
    description: "Color calibration, proofing, and variable data layout preparation.",
  },
  {
    title: "Flexo & Digital Print",
    description: "High-speed UV flexo and digital printing up to 1200 DPI resolution.",
  },
  {
    title: "Foil & Spot UV",
    description: "Applying metallic foil stamping, drip-off texture, and selective varnish.",
  },
  {
    title: "Precision Die-Cut",
    description: "Rotary die-cutting, micro-perforations, and matrix waste stripping.",
  },
  {
    title: "Optical Quality Scan",
    description: "100% automated camera inspection checking every label for defects.",
  },
  {
    title: "Roll Rewind & Ship",
    description: "Custom core roll winding, vacuum shrink wrapping, and fast dispatch.",
  },
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
  "Sharp BP-50M45",
  "Brother DCP-L5660DN",
  "Canon iR C3326",
  "HP Color LaserJet Managed E78528dn",
  "HP LaserJet Managed E82660dn",
  "HP LaserJet Managed E42540",
  "Konica Bizhub C226i",
  "Kyocera TASKalfa 3200MZ",
  "Sharp BP-30C25Z",
] as const;

export const FEATURED_RENTAL_PRINTERS = [
  {
    id: "sharp-bp-50m45",
    model: "Sharp BP-50M45",
    brand: "Sharp",
    speed: "45 PPM",
    output: "A3 Black & White",
    tray: "Double Tray",
    features: [
      "45 PPM High-Speed Monochrome",
      "ADF (Automatic Document Feeder)",
      "Automatic Duplex (2-Sided) Printing",
      "Advanced Network & Cloud Ready",
      "Double Paper Cassette Trays",
    ],
    image: "/printers/sharp-bp-50m45.png",
    tag: "A3 MONO FAST WORKHORSE",
    popular: true,
  },
  {
    id: "brother-dcp-l5660dn",
    model: "Brother DCP-L5660DN",
    brand: "Brother",
    speed: "48 PPM",
    output: "A4 Black & White",
    tray: "Single Tray",
    features: [
      "48 PPM Ultra Fast Printing",
      "ADF Document Feeder",
      "Automatic Duplex Printing",
      "Gigabit Ethernet Network Ready",
      "Heavy-Duty Single Paper Tray",
    ],
    image: "/printers/brother-dcp-l5660dn.png",
    tag: "A4 MONO HIGH SPEED",
    popular: true,
  },
  {
    id: "canon-ir-c3326",
    model: "Canon imageRUNNER C3326",
    brand: "Canon",
    speed: "26 PPM",
    output: "A3 Color",
    tray: "Double Tray",
    features: [
      "26 PPM Premium Color Output",
      "ADF (Automatic Document Feeder)",
      "Automatic Duplex Printing",
      "Secure Enterprise Network Ready",
      "Double Paper Feed Cassettes",
    ],
    image: "/printers/canon-ir-c3326.png",
    tag: "A3 COLOR ENTERPRISE",
    popular: true,
  },
  {
    id: "hp-e78528dn",
    model: "HP Color LaserJet Managed E78528dn",
    brand: "HP",
    speed: "28 PPM",
    output: "A3 Color",
    tray: "Double Tray",
    features: [
      "28 PPM High-Speed Precision Printing",
      "ADF (Automatic Document Feeder)",
      "Automatic Duplex (2-Sided) Printing",
      "Network & Cloud Integration",
      "Double Cassette Paper Trays",
    ],
    image: "/printers/hp-color-laserjet-e78528dn.png",
    tag: "A3 COLOR MULTIFUNCTION",
    popular: false,
  },
  {
    id: "konica-c226i",
    model: "Konica Bizhub C226i",
    brand: "Konica Minolta",
    speed: "22 PPM",
    output: "A3 Color",
    tray: "Double Tray",
    features: [
      "22 PPM Vibrant Color Printing",
      "ADF (Automatic Document Feeder)",
      "Automatic Duplex Printing",
      "Gigabit Network Ready",
      "Double Paper Feed Trays",
    ],
    image: "/printers/konica-bizhub-c226i.png",
    tag: "A3 COLOR OFFICE SYSTEM",
    popular: false,
  },
  {
    id: "kyocera-3200mz",
    model: "Kyocera TASKalfa 3200MZ",
    brand: "Kyocera",
    speed: "32 PPM",
    output: "A3 Black & White",
    tray: "Double Tray",
    features: [
      "32 PPM Heavy-Duty Monochrome",
      "ADF Document Feeder",
      "Automatic Duplex Printing",
      "Secure Network Printing",
      "Double Cassette Feeders",
    ],
    image: "/printers/kyocera-taskalfa-3200mz.png",
    tag: "A3 MONO HEAVY-DUTY",
    popular: false,
  },
  {
    id: "hp-e82660dn",
    model: "HP LaserJet Managed E82660dn",
    brand: "HP",
    speed: "60 PPM",
    output: "A3 Black & White",
    tray: "Double Tray",
    features: [
      "60 PPM Ultra High-Speed Printing",
      "ADF (Automatic Document Feeder)",
      "Automatic Duplex Printing",
      "Enterprise Network Security",
      "Double High-Capacity Trays",
    ],
    image: "/printers/hp-laserjet-e82660dn.png",
    tag: "HIGH SPEED 60 PPM MONO",
    popular: false,
  },
  {
    id: "sharp-30c25z",
    model: "Sharp BP-30C25Z",
    brand: "Sharp",
    speed: "25 PPM",
    output: "A3 Color",
    tray: "Double Tray",
    features: [
      "25 PPM Sharp Color Quality",
      "ADF Document Feeder",
      "Automatic Duplex Printing",
      "Network Cloud Connect",
      "Double Paper Cassettes",
    ],
    image: "/printers/sharp-bp-30c25z.png",
    tag: "A3 COLOR WORKGROUP",
    popular: false,
  },
  {
    id: "hp-e42540",
    model: "HP LaserJet Managed MFP E42540",
    brand: "HP",
    speed: "40 PPM",
    output: "A4 Black & White",
    tray: "Single Tray",
    features: [
      "40 PPM High-Speed Printing",
      "ADF Document Feeder",
      "Automatic Duplex Printing",
      "Network Ready",
      "Single Paper Tray",
    ],
    image: "/printers/hp-laserjet-e42540.jpg",
    tag: "A4 MONO COMPACT",
    popular: false,
  },
] as const;

export const PRINTER_SERVICES = [
  "Installation",
  "Maintenance",
  "Technical Support",
  "Consumables",
  "Accessories",
] as const;

export const RENTAL_ADVANTAGES = [
  {
    title: "Zero Capital Outlay",
    description: "No large upfront equipment investment. Predictable monthly rental plans.",
  },
  {
    title: "100% Maintenance & Service",
    description: "Free preventive maintenance, drum changes, and 4-hour on-site response.",
  },
  {
    title: "Free Toners & Consumables",
    description: "All genuine toner cartridges, developer units, and spares supplied free.",
  },
  {
    title: "Dedicated Support Helpdesk",
    description: "Direct access to certified network & hardware technicians for fast resolution.",
  },
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

export const GROUP_COMPANY = {
  name: "Kalpa Digi World",
  specialty: "Digital Printing",
  description: "Group company specializing in high-speed digital label printing and commercial print solutions."
} as const;

export const COMPANY_CONTACT = {
  kunal: {
    name: "Kunal Patel",
    email: "Kunal@artisanven.com",
    phone: "+91 98257 44787",
    rawPhone: "9825744787"
  },
  sales: {
    name: "Sales Team",
    email: "Sales@artisanven.com",
    phone: "+91 93771 44222",
    rawPhone: "9377144222"
  },
  phone1: "+91 98257 44787",
  phone2: "+91 93771 44222",
  email1: "Kunal@artisanven.com",
  email2: "Sales@artisanven.com",
} as const;



