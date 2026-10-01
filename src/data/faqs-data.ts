export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "What file formats do you accept for custom cutting and printing?",
    answer: "We accept vector formats including CorelDRAW (.CDR), Adobe Illustrator (.AI), AutoCAD / CNC (.DXF), and vector .PDFs. If you don't have a digital vector file, share a high-resolution photo, architectural drawing, or a rough hand sketch with dimensions. Our design team will prepare the cutting files for you."
  },
  {
    id: "faq-2",
    question: "Is all fabrication done 100% in-house at your Hyderabad workshop?",
    answer: "Yes, 100%. Our UV flatbed printer, CNC laser cutter, Graphtec cutting plotter, thermo-bending machine, and computerized engraving equipment are all operated at our Bazar Guard studio. Because we never outsource, we control quality, turnaround time, and price."
  },
  {
    id: "faq-3",
    question: "Do you offer delivery and on-site installation across Hyderabad?",
    answer: "Yes, we handle installation throughout Hyderabad and Secunderabad. Our skilled technicians handle ACP elevation framing, electrical connections for LED and neon signs, structural wall mounting for jaali grills, and on-site vinyl application for vehicle fleets."
  },
  {
    id: "faq-4",
    question: "How many days does fabrication take?",
    answer: "Standard vinyl cutting, stickers, and simple laser cuts take 24 to 48 hours. Custom LED sign boards, backlit mandir panels, and architectural jaali grills take 3 to 5 business days depending on design complexity and size."
  },
  {
    id: "faq-5",
    question: "Do you accommodate bulk orders for schools, hospitals, and builders?",
    answer: "Absolutely. We routinely handle bulk requirements including school bus fleet wrapping (such as Delhi Public School Miyapur), multi-floor hospital safety and direction signage, residential apartment name plate packages for builders, and corporate event trophies."
  },
  {
    id: "faq-6",
    question: "How do I request a quotation or consultation?",
    answer: "Simply tap the green WhatsApp button or message us directly at +91 92468 73092 with your required dimensions, product type, and any reference photos. Mohammed Rafeeq and our team will provide an estimate and design guidance within a few hours."
  }
];

export const serviceFaqsMap: Record<string, FaqItem[]> = {
  "laser-cutting": [
    {
      id: "lc-faq-1",
      question: "What thickness of acrylic, MDF, and wood can your CNC laser machines cut?",
      answer: "Our industrial CNC laser cutters deliver clean, burr-free cuts on cast acrylic from 2mm up to 25mm thickness, MDF boards from 3mm to 18mm, and natural wood or architectural laminates up to 12mm with ±0.1mm tolerance."
    },
    {
      id: "lc-faq-2",
      question: "What file formats are required for intricate jaali designs and custom cutouts?",
      answer: "We accept vector formats including CorelDRAW (.CDR), AutoCAD / CNC (.DXF), Adobe Illustrator (.AI), and vector .PDFs. If you only have a photograph, Pinterest reference, or hand drawing with measurements, our in-house design team can vectorize it for you."
    },
    {
      id: "lc-faq-3",
      question: "Are laser-cut acrylic edges smooth or do they require manual flame-polishing?",
      answer: "Our computerized laser machines produce clean, optical-grade flame-polished edges during the cutting pass itself. For extra-thick 15mm–25mm luxury display acrylic, we also offer secondary diamond hand-buffing."
    },
    {
      id: "lc-faq-4",
      question: "Can you fabricate custom mandir backdrops with concealed LED halo backlighting?",
      answer: "Yes, we specialize in multi-layered acrylic mandir backdrops featuring sacred symbols (Om, Ganesh, Gayatri Mantra, lotus arches) with concealed warm white LED backlighting, custom-sized to fit your apartment or villa pooja room niche."
    },
    {
      id: "lc-faq-5",
      question: "How quickly can custom laser cutting orders be delivered in Hyderabad?",
      answer: "Standard jaali panels, lettering cutouts, and prototypes are fabricated within 24 to 48 hours. Large architectural wall partition grids or commercial orders take 2 to 4 business days with prompt delivery or installation across Hyderabad."
    }
  ],
  "uv-printing": [
    {
      id: "uv-faq-1",
      question: "What materials and substrates can you print directly on with your UV flatbed?",
      answer: "Our industrial UV flatbed printer prints directly onto virtually any rigid or flexible substrate up to 50mm thick, including cast acrylic, toughened glass, sheet metal, brass, aluminum composite panels (ACP), sunboard, and natural wood."
    },
    {
      id: "uv-faq-2",
      question: "Will UV flatbed prints fade or scratch when exposed to outdoor Hyderabad weather?",
      answer: "No. UV-curable inks are instantly cross-linked using intense ultraviolet lamps during the print pass, creating an unbreakable scratch-resistant bond that is completely waterproof, sun-resistant, and non-fading for years."
    },
    {
      id: "uv-faq-3",
      question: "Do you support opaque white ink underlay and textured 3D varnish finishes?",
      answer: "Yes. Our printer features dedicated high-density white ink channels for reverse printing on transparent acrylic and glass, as well as clear spot-UV varnish coats that add tactile 3D embossed textures."
    },
    {
      id: "uv-faq-4",
      question: "What resolution and file quality should I supply for photographic printing?",
      answer: "For the sharpest 1440 DPI photographic results, please share high-resolution artwork in TIFF, PDF, AI, or high-res JPEG/PNG formatted at a minimum of 150 to 300 DPI at actual physical reproduction size."
    },
    {
      id: "uv-faq-5",
      question: "Can you handle urgent same-day or 24-hour UV printing jobs?",
      answer: "Yes. Because our UV flatbed printer operates in-house at our Bazar Guard workshop with instant UV curing (zero drying wait time), rush printing jobs can frequently be completed within 24 hours."
    }
  ],
  "plotter-cutting": [
    {
      id: "pc-faq-1",
      question: "What brands and grades of vinyl do you use for plotter cutting?",
      answer: "We stock high-performance cast and calendered vinyls from trusted brands including 3M, Avery Dennison, and premium polymeric films, available in gloss, matte, frosted glass etch, and high-intensity reflective finishes."
    },
    {
      id: "pc-faq-2",
      question: "Do you handle complete fleet branding for school buses, vans, and commercial vehicles?",
      answer: "Yes. We are the trusted fleet branding provider for major institutions across Hyderabad, including Delhi Public School Miyapur and Woxsen University. We produce compliant route boards, emergency markers, and reflective lettering that withstands pressure washing."
    },
    {
      id: "pc-faq-3",
      question: "Are decals supplied pre-weeded with application transfer tape?",
      answer: "Yes. Every vinyl cut order is meticulously hand-weeded and laminated with professional-grade transparent or paper transfer tape, making self-application quick, aligned, and bubble-free."
    },
    {
      id: "pc-faq-4",
      question: "Do you provide on-site vinyl installation for storefront glass and offices?",
      answer: "Yes, our installation crew visits retail stores, corporate tech parks, and commercial sites across Hyderabad and Secunderabad for bubble-free dry or wet application on partitions, doors, and facades."
    }
  ],
  "acrylic-bending": [
    {
      id: "ab-faq-1",
      question: "How does thermal heat bending work and does it cause clouding or bubbles?",
      answer: "We use specialized localized line-heating equipment and precision aluminum bending jigs. The acrylic is heated gradually to its exact glass-transition temperature, yielding crystal-clear, stress-free radial bends with zero whitening, bubbling, or structural weakness."
    },
    {
      id: "ab-faq-2",
      question: "Can you manufacture custom-sized countertop display stands and brochure racks?",
      answer: "Yes. We make single-tier and multi-tier brochure holders, angled menu stands, luxury jewelry display risers, and restaurant QR code stands fabricated to your exact merchandise measurements."
    },
    {
      id: "ab-faq-3",
      question: "Can bent acrylic products be personalized with our brand logo?",
      answer: "Absolutely. We can screen print, direct UV print, or laser engrave your company emblem, menu headings, or social media handles directly onto the acrylic before heat forming."
    },
    {
      id: "ab-faq-4",
      question: "What thickness of acrylic is typically used for bent trays and risers?",
      answer: "Countertop menu stands typically use 2mm to 3mm cast acrylic, while heavy-duty hospitality serving trays, luxury jewelry fixtures, and collector display cases use 4mm to 8mm+ heavy-gauge sheets."
    }
  ],
  "engraving": [
    {
      id: "eng-faq-1",
      question: "What is the difference between laser engraving and surface vinyl stickers?",
      answer: "While vinyl stickers can peel, scratch, or fade over time, computer-guided engraving permanently cuts physical grooves deep into metal, Rowmark laminate, or acrylic. The engraved recesses are then filled with baked industrial enamel for a lifelong prestigious finish."
    },
    {
      id: "eng-faq-2",
      question: "Which metals and finishes are available for executive door and cabin plates?",
      answer: "We offer solid mirror-polished brass, satin brushed brass, anodized architectural aluminum, 304-grade stainless steel, and dual-color micro-surfaced Rowmark engraving plastics in gold/black, silver/black, and woodgrain finishes."
    },
    {
      id: "eng-faq-3",
      question: "Can you engrave intricate logos, Urdu / Sanskrit calligraphy, and medical crests?",
      answer: "Yes. Our computerized engraving software achieves micro-fine resolution, allowing exact reproduction of institutional crests, multilingual calligraphy, Caduceus medical symbols, and legal seals."
    },
    {
      id: "eng-faq-4",
      question: "Do you supply mounting hardware like stainless steel standoffs?",
      answer: "Yes. All engraved name plates can be ordered with matching brass or stainless steel standoff screws, beveled borders, pre-drilled countersunk holes, or industrial high-tack 3M double-sided foam adhesive for screwless glass door mounting."
    }
  ],
  "sign-boards": [
    {
      id: "sb-faq-1",
      question: "What types of illuminated 3D LED sign boards do you manufacture?",
      answer: "We fabricate front-lit acrylic channel letters, halo backlit 3D letters, full-face illuminated box signs, push-through acrylic letters on ACP trays, safe 12V silicone flex-neon signs, and photoluminescent auto-glow emergency evacuation signs."
    },
    {
      id: "sb-faq-2",
      question: "What LED modules and power supplies do you install for outdoor weatherproofing?",
      answer: "We exclusively install IP67/IP68 waterproof injection-molded Samsung and EPISTAR LED modules powered by industrial Mean Well or certified rain-shielded transformers, ensuring 50,000+ hours of reliable operation in Hyderabad's extreme summer heat and heavy monsoons."
    },
    {
      id: "sb-faq-3",
      question: "Do you provide structural ACP cladding and on-site scaffolding installation?",
      answer: "Yes. We provide complete turnkey service across Hyderabad and Secunderabad, including mild-steel structural sub-framing, weather-sealed Aluminum Composite Panel (ACP) facade cladding, electrical safety connections, and certified crane/scaffolding installation."
    },
    {
      id: "sb-faq-4",
      question: "What warranty do you offer on LED sign boards?",
      answer: "We back our commercial LED sign boards with comprehensive manufacturer warranties: 2 to 3 years on Samsung LED modules and power supplies, and up to 5+ years on virgin cast acrylic against yellowing or UV cracking."
    },
    {
      id: "sb-faq-5",
      question: "Can you design 3D mockups of our shopfront sign before fabrication begins?",
      answer: "Yes. Once you share your storefront photo and wall dimensions on WhatsApp, our design studio prepares a scaled 2D/3D day and night illuminated mockup so you can visualize the exact finish before production starts."
    }
  ],
  "event-backdrops": [
    {
      id: "eb-faq-1",
      question: "How large can you laser cut wedding stage monograms and couple initials?",
      answer: "Our large-bed laser cutting machines can produce continuous single-piece monograms up to 4 feet by 8 feet, and even larger multi-panel stage backdrops that assemble seamlessly with concealed interlocking tabs."
    },
    {
      id: "eb-faq-2",
      question: "What finishes are most popular for wedding receptions and engagement photo booths?",
      answer: "Luxury mirror gold acrylic, mirror rose gold, and silver chrome are our most popular finishes. We also craft multi-layered designs pairing mirror script on frosted acrylic or matte white backgrounds with optional warm LED perimeter glow."
    },
    {
      id: "eb-faq-3",
      question: "How do event decorators mount your laser-cut acrylic monograms onto balloon rings or flower walls?",
      answer: "We cut lightweight yet sturdy virgin cast acrylic with pre-engineered discreet hanging eyelets or reinforce the back with lightweight clear acrylic struts, making them easy to tie securely to metal balloon circles, wooden arches, or floral mesh frames."
    },
    {
      id: "eb-faq-4",
      question: "Can you accommodate urgent 24-hour turnaround for upcoming wedding functions?",
      answer: "Yes. Because design, laser cutting, and packaging are completed 100% under our own roof in Bazar Guard, we frequently deliver rush wedding monograms within 24 hours across Hyderabad and Secunderabad."
    }
  ]
};

export function getFaqsByService(slug?: string): FaqItem[] {
  if (slug && serviceFaqsMap[slug]) {
    return serviceFaqsMap[slug];
  }
  return faqsData;
}

