export interface ProductItem {
  id: string;
  slug: string;
  category: "signage" | "events";
  categoryLabel: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  images: string[];
  features: string[];
  finishes: string[];
  applications: string[];
  clientsOrProjects?: string[];
  whatsappTemplate: string;
}

export const productsData: ProductItem[] = [
  // Signage Solutions
  {
    id: "led-sign-boards",
    slug: "led-sign-boards",
    category: "signage",
    categoryLabel: "Signage Solutions",
    name: "LED Sign Boards (Storefront & 3D Letters)",
    tagline: "High-impact illuminated 3D channel letters and storefront facade signage",
    description: "From restaurant facades to multi-specialty hospital elevations, we design, fabricate, and install heavy-duty illuminated LED sign boards. Featuring Samsung/EPISTAR LED modules, CNC-cut acrylic letterfaces, and weather-proof ACP backing.",
    heroImage: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
    images: [
      "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
      "/images/lucky-signs/14-led-sign-boards/img-001.jpg",
      "/images/lucky-signs/14-led-sign-boards/img-002.jpg",
      "/images/lucky-signs/14-led-sign-boards/img-003.jpg"
    ],
    features: [
      "3D acrylic fabricated letters with high-lumen weatherproof LEDs",
      "Heavy-duty Aluminum Composite Panel (ACP) frame structures",
      "Front-lit, reverse halo-lit, and edge-lit illumination profiles",
      "End-to-end installation across Hyderabad with electrical safety certification"
    ],
    finishes: ["Gloss Acrylic Face", "Matte Trim Cap", "Mirror Gold Finish", "Brushed Metal Finish"],
    applications: [
      "Restaurant & Café storefronts",
      "Hospital & healthcare center facades",
      "Retail showrooms & shopping mall outlets",
      "Corporate building rooftop and elevation signage"
    ],
    clientsOrProjects: [
      "Tatva Modern Dining",
      "The Broast Factory",
      "Mythri Hospital",
      "Crystal Hospital"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a quotation for an LED Sign Board for my storefront. Size/Details: "
  },
  {
    id: "neon-led-boards",
    slug: "neon-led-boards",
    category: "signage",
    categoryLabel: "Signage Solutions",
    name: "Neon LED Boards (Custom Glow Signs)",
    tagline: "Vibrant, shatterproof flex-neon signs for retail walls, cafes, and party decor",
    description: "Capture the retro charm of neon without the fragility or power consumption. Fabricated with flexible silicone LED tubing mounted onto contour-cut clear acrylic backings. Perfect for photo corners and cafe branding.",
    heroImage: "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
    images: [
      "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
      "/images/lucky-signs/12-neon-led-boards/img-001.jpg",
      "/images/lucky-signs/12-neon-led-boards/img-002.jpg",
      "/images/lucky-signs/12-neon-led-boards/img-003.jpg"
    ],
    features: [
      "Safe 12V low-voltage operation with no fragile glass, gas, or heat buildup",
      "Available in 10+ vibrant colors with optional dimmers & blink modes",
      "Precision laser-routed clear acrylic backing cut to text shape",
      "Pre-drilled mounting holes or hanging chains for quick setup"
    ],
    finishes: ["Warm White", "Electric Blue", "Ruby Red", "Pastel Pink", "Multicolor RGB"],
    applications: [
      "Cafes, dessert parlors, bars & boutique restaurants",
      "Bedroom, studio & home interior statement walls",
      "Birthday, anniversary & engagement photo walls",
      "Commercial store checkout & reception accents"
    ],
    clientsOrProjects: [
      "LUCKY SIGNS Studio Sign",
      "Happy Birthday Custom Glow",
      "Better Together Wedding Piece",
      "Sonya with Crown Feature"
    ],
    whatsappTemplate: "Hi Lucky Signs! I want a custom Neon LED Board with the text/shape: "
  },
  {
    id: "auto-glow-sign-boards",
    slug: "auto-glow-sign-boards",
    category: "signage",
    categoryLabel: "Signage Solutions",
    name: "Auto Glow Sign Boards (Safety & Emergency)",
    tagline: "Certified photoluminescent emergency signs that glow in blackout conditions",
    description: "Crucial for fire safety and industrial compliance. Our auto-glow signage absorbs ambient light and remains brightly visible during total power outages. Manufactured with heavy-duty acrylic/PVC bases.",
    heroImage: "/images/lucky-signs/09-auto-glow-sign-boards/img-000.jpg",
    images: [
      "/images/lucky-signs/09-auto-glow-sign-boards/img-000.jpg",
      "/images/lucky-signs/09-auto-glow-sign-boards/img-001.jpg",
      "/images/lucky-signs/09-auto-glow-sign-boards/img-002.jpg",
      "/images/lucky-signs/09-auto-glow-sign-boards/img-003.jpg"
    ],
    features: [
      "Zero electricity needed, using self-charging photoluminescent crystals",
      "Meets standard national building codes & fire safety compliance",
      "High visibility green glow lasting 4 to 8 hours in sudden darkness",
      "Weatherproof and chemical-resistant face lamination"
    ],
    finishes: ["Rigid Acrylic Backing", "Self-Adhesive Vinyl", "Framed PVC Board"],
    applications: [
      "Fire Exit & Emergency Escape route markers",
      "Fire Extinguisher & Hose Reel location indicators",
      "Fire Alarm Call Point & Assembly Area signs",
      "Industrial hazardous zones, No Smoking, and electrical room markers"
    ],
    clientsOrProjects: [
      "Hyderabad Commercial Complexes",
      "Multi-Specialty Hospitals",
      "Educational Campuses",
      "Industrial Warehouses"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a batch quote for Auto Glow Safety Signs. Requirements: "
  },
  {
    id: "internal-sign-boards",
    slug: "internal-sign-boards",
    category: "signage",
    categoryLabel: "Signage Solutions",
    name: "Internal Sign Boards & Directional Wayfinding",
    tagline: "Reception logos, floor directories, and doctor cabin plates",
    description: "We manufacture reception 3D emblems, directory boards, doctor cabin plates, and wayfinding signage for hospitals, offices, and commercial buildings in Hyderabad. Clean acrylic, brass standoffs, and sharp laser cutouts.",
    heroImage: "/images/lucky-signs/15-internal-sign-boards/img-000.jpg",
    images: [
      "/images/lucky-signs/15-internal-sign-boards/img-000.jpg",
      "/images/lucky-signs/15-internal-sign-boards/img-001.jpg",
      "/images/lucky-signs/15-internal-sign-boards/img-002.jpg",
      "/images/lucky-signs/15-internal-sign-boards/img-003.jpg"
    ],
    features: [
      "Sleek architectural profiles with standoff stainless-steel studs",
      "Laser-cut dimensional lettering in brass, mirror gold, and matte acrylic",
      "Clear interchangeable paper-slot or modular slat options",
      "Turnkey on-site installation with laser leveling"
    ],
    finishes: ["Brushed Stainless Steel", "Mirror Gold Titanium", "Frosted Glass Look", "Matte Charcoal"],
    applications: [
      "Corporate tech parks and multinational head offices",
      "Hospital OPD directories & ward identification strips",
      "Government zonal offices & executive desk plaques",
      "Dental spas, clinics & upscale professional salons"
    ],
    clientsOrProjects: [
      "Hopper Automation",
      "GHMC Zonal Commissioner Office",
      "Phoenix Techzone / Aquila",
      "Alankaran Events & Ahimsa Dental Spa"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need internal directional and office branding signs. Details: "
  },

  // Event Solutions
  {
    id: "events-backdrops",
    slug: "events-backdrops",
    category: "events",
    categoryLabel: "Event Solutions",
    name: "Custom Event Backdrops & Monograms",
    tagline: "Laser-cut wedding monograms, couple initials, and stage backdrops in mirror-gold and acrylic",
    description: "We make laser-cut acrylic monograms (like A♥M), wedding stage lettering, birthday numbers, and floral frame cutouts. Lightweight, sturdy, and ready to mount on balloon rings or flower meshes.",
    heroImage: "/images/lucky-signs/06-events-backdrops/img-000.jpg",
    images: [
      "/images/lucky-signs/06-events-backdrops/img-000.jpg",
      "/images/lucky-signs/06-events-backdrops/img-001.jpg",
      "/images/lucky-signs/06-events-backdrops/img-002.jpg",
      "/images/lucky-signs/06-events-backdrops/img-003.jpg"
    ],
    features: [
      "Laser-cut mirror gold, silver, and rose-gold acrylic calligraphy",
      "Bespoke couple initials, intertwined monogram rings, and hashtag signs",
      "Lightweight yet sturdy design for easy mounting on balloon rings & floral meshes",
      "Rapid turnaround coordination with event decorators and wedding planners"
    ],
    finishes: ["Mirror Gold Acrylic", "Mirror Rose Gold", "Silver Chrome", "Matte White", "Neon Glow Integration"],
    applications: [
      "Weddings & Sangeet stage focal points",
      "Engagement parties ('We Are Engaged' / couple initials)",
      "Milestone birthdays (1st, 18th, 25th, 50th celebrations)",
      "Corporate product launch backdrops & brand photo booths"
    ],
    clientsOrProjects: [
      "A♥M Royal Monogram",
      "Let Us Gold Script Feature",
      "Better Together Floral Wall",
      "Celebration Ring Displays"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a custom Event Backdrop / Monogram. Event details & date: "
  }
];
