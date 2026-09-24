export type ServiceCategory = "fabrication" | "solution";

export interface SubServiceDetail {
  title: string;
  description: string;
  image: string;
  applications: string[];
  features?: string[];
  finishes?: string[];
  clientsOrProjects?: string[];
  whatsappTemplate?: string;
}

export interface DetailedServiceItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  categoryLabel: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  longDescription: string;
  heroImage: string;
  features: string[];
  materials: string[];
  finishes?: string[];
  applications: string[];
  subServices: SubServiceDetail[];
  galleryImages: string[];
  clientsOrProjects?: string[];
  whatsappTemplate: string;
}

// Aliases for backwards compatibility
export type ServiceItem = DetailedServiceItem;
export type SubService = SubServiceDetail;

export const allServices: DetailedServiceItem[] = [
  // 1. In-House Fabrication: Laser Cutting
  {
    id: "laser-cutting",
    slug: "laser-cutting",
    category: "fabrication",
    categoryLabel: "In-House Fabrication",
    name: "Laser Cutting",
    tagline: "Precision laser cutting for perfect shapes and fine architectural details",
    description: "Our high-precision laser cutting machines deliver clean, polished edges and intricate patterns on acrylic, MDF, and wood. From false-ceiling jaali panels to custom lettering, we cut to your exact design.",
    longDescription: "Using our CNC laser machine at our Bazar Guard workshop, Lucky Signs cuts clean, burr-free edges on acrylic from 2mm to 25mm, MDF, natural wood, and laminates. Send us your vector files (CDR, AI, DXF) or bring a hand sketch with dimensions. We cut to your exact sizes without middleman delays.",
    heroImage: "/images/lucky-signs/laser-cutting-cnc.jpg",
    badge: "In-House CNC",
    features: [
      "Micro-precision cutting for intricate jaali and filigree patterns",
      "Compatible with acrylic, MDF, wood, and architectural laminates",
      "Custom sizing from single-piece prototypes to high-volume production",
      "100% in-house production with zero outsourcing delays"
    ],
    materials: ["Acrylic (2mm to 25mm)", "MDF Board", "Natural Wood", "HDF / Laminates"],
    finishes: ["Flame Polished Acrylic Edge", "Natural Wood Texture", "Primer Coated MDF", "Gold Mirror Inlay"],
    applications: [
      "Decorative grills & false-ceiling jaali panels",
      "Mandir & pooja room backdrops with sacred motifs",
      "3D signage lettering and architectural logo cutouts",
      "Interior wall art, screen dividers & event props"
    ],
    subServices: [
      {
        title: "Acrylic Laser Cutting Grills (Jaali)",
        description: "Intricate Moroccan, floral, and geometric jaali patterns for living rooms, dining spaces, and ceiling inserts.",
        image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
        applications: ["Ceiling Inserts", "Room Partitions", "Balcony Railing Accents"],
        features: ["Burr-free laser cut edges", "Custom scaling to your ceiling grid", "Choice of white, black, or gold mirror"]
      },
      {
        title: "Acrylic Mandir Backgrounds",
        description: "Sacred Om, Ganesh, and temple arch backdrops with optional warm LED backlit layers for home pooja rooms.",
        image: "/images/lucky-signs/03-acrylic-mandir-background/img-000.jpg",
        applications: ["Home Pooja Rooms", "Apartment Mandir Niches", "Temple Centers"],
        features: ["Devotional iconography & Sanskrit shlokas", "Concealed warm halo backlighting", "Multi-layered depth effect"]
      },
      {
        title: "Custom Cut Architectural Designs",
        description: "Bespoke cutouts, 3D brand symbols, decorative wall panels, and bespoke shapes.",
        image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-002.jpg",
        applications: ["Commercial Lobbies", "Reception Feature Walls", "Exhibition Stalls"],
        features: ["Vector-accurate reproduction from CDR/DXF/AI", "Up to 25mm thick solid acrylic", "Sharp internal corner details"]
      }
    ],
    galleryImages: [
      "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
      "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-002.jpg",
      "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-004.jpg",
      "/images/lucky-signs/03-acrylic-mandir-background/img-001.jpg"
    ],
    clientsOrProjects: [
      "Home Mandir Projects in Jubilee Hills & Banjara Hills",
      "Commercial False Ceiling Grills in Gachibowli",
      "Architectural Partition Screens in Madhapur"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a quotation for Laser Cutting / Jaali Grills. Details: "
  },

  // 2. In-House Fabrication: UV Printing
  {
    id: "uv-printing",
    slug: "uv-printing",
    category: "fabrication",
    categoryLabel: "In-House Fabrication",
    name: "UV Printing",
    tagline: "High resolution UV printing for vibrant, weather-resistant, and lasting prints",
    description: "Direct-to-substrate UV flatbed printing that delivers vibrant colors on acrylic, glass, metal, sunboard, and wood. Instantly cured, UV-resistant, and scratch-proof for indoor and outdoor installations.",
    longDescription: "Our industrial UV flatbed printer deposits ultraviolet-curable inks directly onto rigid and semi-rigid surfaces. Because the ink is cured instantly via intense UV light, it forms an unbreakable bond that resists fading, moisture, and temperature fluctuations across Hyderabad's climate.",
    heroImage: "/images/lucky-signs/01-cover-services/img-004.jpg",
    badge: "Direct-to-Material",
    features: [
      "Direct printing on rigid acrylic, glass, metal, and composite boards",
      "Instant ultraviolet curing with scratch, water, and sunlight resistance",
      "Ultra-fine DPI resolution capturing subtle gradients and vivid colors",
      "High-durability ink suitable for interior and exterior architectural displays"
    ],
    materials: ["Clear & White Acrylic", "Toughened Glass", "Sheet Metal / Brass", "Sunboard / Foam Board"],
    finishes: ["Gloss UV Varnish", "Matte Texture Finish", "Embossed Tactile Ink Effect", "Double-Strike Backlit White"],
    applications: [
      "Storefront graphics & corporate branding boards",
      "Office glass door frosting & partition branding",
      "Official government emblems and directory boards",
      "High-durability indoor safety & information displays"
    ],
    subServices: [
      {
        title: "Large Format Vinyl Printing",
        description: "Industrial-grade vinyl printing for corporate office walls, meeting rooms, and commercial retail backdrops.",
        image: "/images/lucky-signs/08-vinyl-printing/img-000.jpg",
        applications: ["Office Murals", "Storefront Fascias", "Government Emblem Displays"],
        features: ["Rich saturated CMYK reproduction", "Scratch-resistant lamination option", "Bubble-free mounting adhesive"]
      },
      {
        title: "Custom Rigid UV Prints",
        description: "Direct photographic printing onto thick acrylic and metal panels for prestigious interior displays.",
        image: "/images/lucky-signs/08-vinyl-printing/img-002.jpg",
        applications: ["Corporate Reception", "Executive Offices", "Exhibition Panels"],
        features: ["Reverse print on clear acrylic for glass depth", "Opaque white ink backing", "Weatherproof outdoor endurance"]
      }
    ],
    galleryImages: [
      "/images/lucky-signs/08-vinyl-printing/img-000.jpg",
      "/images/lucky-signs/08-vinyl-printing/img-002.jpg",
      "/images/lucky-signs/08-vinyl-printing/img-003.jpg"
    ],
    clientsOrProjects: [
      "Government Zonal Office Emblem Displays",
      "Corporate Tech Park Office Murals",
      "Retail Brand Graphics across Hyderabad"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a quotation for UV Flatbed Printing. Material & size: "
  },

  // 3. In-House Fabrication: Plotter Cutting
  {
    id: "plotter-cutting",
    slug: "plotter-cutting",
    category: "fabrication",
    categoryLabel: "In-House Fabrication",
    name: "Plotter Cutting",
    tagline: "Precision plotter cutting for vinyl, stickers, decals, and fleet branding",
    description: "Equipped with high-precision Graphtec cutting plotters, we produce micro-accurate contour cuts on vinyl, self-adhesive stickers, reflective films, and vehicle wrapping materials.",
    longDescription: "From single shopfront opening-hours decals to multi-bus fleet graphics for educational institutions like Delhi Public School and Woxsen University, our plotter cutting department delivers clean weeds, pre-masked transfer tapes, and ready-to-mount vinyls.",
    heroImage: "/images/lucky-signs/01-cover-services/img-005.jpg",
    badge: "Graphtec Precision",
    features: [
      "Precision contour cut lines around logos, lettering, and shapes",
      "Glossy, matte, transparent, frosted, and high-visibility reflective vinyl",
      "Full weed and transfer-mask preparation for effortless application",
      "Cost-effective bulk volume sticker and fleet decal production"
    ],
    materials: ["Cast & Calendered Vinyl", "Reflective Vinyl (3M/Avery)", "Frosted Glass Film", "Die-Cut Sticker Stock"],
    finishes: ["Gloss Finish", "Matte Satin Finish", "Prismatic Reflective", "Etched Glass Effect"],
    applications: [
      "Retail shop windows, entrance doors & store hours decals",
      "School bus, college van & commercial fleet vehicle branding",
      "Product packaging labels and branded promotional stickers",
      "Mandatory transport safety decals and reflective hazard strips"
    ],
    subServices: [
      {
        title: "Vinyl & Sticker Cutting",
        description: "High-precision contour cut decals and custom shaped stickers for packaging and window displays.",
        image: "/images/lucky-signs/10-plotter-cutting/img-000.jpg",
        applications: ["Product Labels", "Window Decals", "Promo Badges"],
        features: ["Micro-cut detail tolerance", "Peel-and-stick application", "Custom die-cut kiss-cuts"]
      },
      {
        title: "School Bus & Fleet Branding",
        description: "Full fleet vinyl graphics, route boards, emergency markers, and reflective lettering for schools and universities.",
        image: "/images/lucky-signs/11-school-bus-branding/img-000.jpg",
        applications: ["DPS Miyapur Buses", "Woxsen University Fleet", "Commercial Delivery Vans"],
        features: ["All-weather outdoor durability", "Compliant transport safety lettering", "Fast turnaround for fleet schedules"]
      }
    ],
    galleryImages: [
      "/images/lucky-signs/10-plotter-cutting/img-000.jpg",
      "/images/lucky-signs/10-plotter-cutting/img-002.jpg",
      "/images/lucky-signs/11-school-bus-branding/img-000.jpg",
      "/images/lucky-signs/11-school-bus-branding/img-002.jpg"
    ],
    clientsOrProjects: [
      "DPS Miyapur School Bus Fleet",
      "Woxsen University Transport Fleet",
      "Commercial Delivery Vans in Hyderabad"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a quotation for Plotter Cutting / Fleet Vinyl Branding. Details: "
  },

  // 4. In-House Fabrication: Acrylic Bending
  {
    id: "acrylic-bending",
    slug: "acrylic-bending",
    category: "fabrication",
    categoryLabel: "In-House Fabrication",
    name: "Acrylic Bending",
    tagline: "Clean heat-bending for display stands, brochure holders, and custom trays",
    description: "Heat-bending shapes cast and extruded acrylic into smooth display stands, brochure racks, serving trays, menu holders, and custom product cases with polished edges.",
    longDescription: "Our specialized heating line and bending jigs bend acrylic sheets cleanly without stress bubbles, clouding, or discoloration. We make custom countertop displays, restaurant table tents, and hotel trays according to your exact product dimensions.",
    heroImage: "/images/lucky-signs/01-cover-services/img-006.jpg",
    badge: "Clean Heat Bending",
    features: [
      "Precise angle thermo-forming with smooth, crystal-clear radius bends",
      "Crystal clear, tinted, colored, and frosted acrylic options",
      "Custom prototyping tailored to your specific merchandise dimensions",
      "Integrated screen printing, UV printing, or laser engraving for branding"
    ],
    materials: ["Clear Cast Acrylic", "Colored Acrylic Sheets", "Frosted Acrylic", "Heavy-Gauge 5mm+ Sheets"],
    finishes: ["Flame Polished Edges", "Diamond Beveled Trim", "Silkscreen Logo Imprint", "Brushed Metal Accents"],
    applications: [
      "Retail display stands & jewelry showcase fixtures",
      "Restaurant table tents, menu stands & QR code pedestals",
      "Magazine holders, file organizers & luxury desk accessories",
      "Branded serving trays with handles & VIP gift packaging boxes"
    ],
    subServices: [
      {
        title: "Display Stands & Brochure Racks",
        description: "Angled stands for tabletop collateral, luxury product stands, and multi-tier brochure holders.",
        image: "/images/lucky-signs/04-acrylic-bending-products/img-000.jpg",
        applications: ["Retail Showrooms", "Trade Expos", "Hotel Receptions"],
        features: ["Stable weighted bases", "Single or multi-tier leaf slots", "Crystal optical clarity"]
      },
      {
        title: "Serving Trays & Custom Acrylic Boxes",
        description: "Bent-edge serving trays with metal/acrylic handles and clear display cases.",
        image: "/images/lucky-signs/04-acrylic-bending-products/img-002.jpg",
        applications: ["Hospitality Suites", "Executive Gifting", "Collector Displays"],
        features: ["Smooth bent radius corners", "Water-tight edge bonding", "Custom handle integration"]
      }
    ],
    galleryImages: [
      "/images/lucky-signs/04-acrylic-bending-products/img-000.jpg",
      "/images/lucky-signs/04-acrylic-bending-products/img-001.jpg",
      "/images/lucky-signs/04-acrylic-bending-products/img-002.jpg",
      "/images/lucky-signs/04-acrylic-bending-products/img-005.jpg"
    ],
    clientsOrProjects: [
      "Upscale Hyderabad Cafes & Dine-in Table Tents",
      "Jewelry Showroom Countertop Risers",
      "Hotel Room Amenity Trays"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a quotation for Acrylic Bending / Display Stands. Details: "
  },

  // 5. In-House Fabrication: Engraving
  {
    id: "engraving",
    slug: "engraving",
    category: "fabrication",
    categoryLabel: "In-House Fabrication",
    name: "Engraving",
    tagline: "Durable metal and acrylic marking for long-lasting prestige and identification",
    description: "Permanent rotary and laser engraving for executive name plates, corporate trophies, athletic mementos, department boards, and industrial serial plates that never fade.",
    longDescription: "Our computer-guided engraving equipment etches sharp typographic lines and intricate emblems deep into brass, aluminum, bi-color plastic laminates, and acrylic blocks. Unlike surface stickers, engraved lettering is permanent, tamper-resistant, and visually authoritative.",
    heroImage: "/images/lucky-signs/01-cover-services/img-007.jpg",
    badge: "Permanent Marking",
    features: [
      "Permanent marking that will never fade, peel, or scratch off",
      "Precision fine text, emblems, calligraphy, and organizational logos",
      "Available on dual-color engraving stock, polished brass, and crystal acrylic",
      "Single bespoke gift pieces to thousands of corporate award plaques"
    ],
    materials: ["High-Clarity Acrylic", "Dual-Layer Rowmark Plastic", "Anodized Aluminum", "Polished Brass"],
    finishes: ["Color-Filled Engraving", "Laser Frost Etch", "High-Gloss Mirror Brass", "Brushed Silver Aluminum"],
    applications: [
      "Executive cabin name plates & department director plaques",
      "Corporate achievement awards, sports trophies & cycling rally mementos",
      "Hospital sanitization table markers & directional tent cards",
      "Industrial compliance tags, panel labels & machine ratings"
    ],
    subServices: [
      {
        title: "Acrylic Mementos & Trophies",
        description: "Custom geometric and organic cut awards with multi-color engraving and wooden or acrylic bases.",
        image: "/images/lucky-signs/05-acrylic-memento/img-000.jpg",
        applications: ["Sports Rallies", "Corporate Honors", "Anniversary Gifts"],
        features: ["3D laser etched details", "Solid hardwood or acrylic pedestal", "Commemorative custom packaging"]
      },
      {
        title: "Engraved Name Plates",
        description: "Crisp two-tone engraved plates for cabins, medical desks, and institutional wayfinding.",
        image: "/images/lucky-signs/07-acrylic-engraving-name-plates/img-000.jpg",
        applications: ["Doctor Cabins", "Floor Directory", "Hotel Desk Tents"],
        features: ["Scratch-proof dual-color Rowmark", "Beveled perimeter edge", "Adhesive or screw mounting"]
      }
    ],
    galleryImages: [
      "/images/lucky-signs/05-acrylic-memento/img-000.jpg",
      "/images/lucky-signs/05-acrylic-memento/img-002.jpg",
      "/images/lucky-signs/07-acrylic-engraving-name-plates/img-000.jpg",
      "/images/lucky-signs/07-acrylic-engraving-name-plates/img-002.jpg"
    ],
    clientsOrProjects: [
      "Hyderabad Cyclists Rally Mementos",
      "Doctor Desk Plates for Multi-Specialty Clinics",
      "Corporate Milestone Awards"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a quotation for Acrylic/Metal Engraving & Name Plates. Details: "
  },

  // 6. Turnkey Solution: Sign Boards (LED, Neon, Auto-Glow, Internal)
  {
    id: "sign-boards",
    slug: "sign-boards",
    category: "solution",
    categoryLabel: "Turnkey Solutions",
    name: "Sign Boards & Commercial Signage",
    tagline: "Custom 3D LED storefronts, flex-neon glow signs, emergency safety boards & internal directories",
    description: "We design, fabricate, and install heavy-duty illuminated LED sign boards, neon displays, photoluminescent safety boards, and internal architectural wayfinding signs across Hyderabad.",
    longDescription: "From high-impact restaurant facades in Banjara Hills to multi-specialty hospital elevations and corporate tech parks, Lucky Signs delivers end-to-end commercial signage solutions. Equipped with our in-house CNC laser, UV flatbed, and bending lines, we fabricate channel letters with weatherproof Samsung LEDs, custom flex-neon scripts, certified auto-glow safety signage, and polished internal directories with turnkey on-site mounting.",
    heroImage: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
    badge: "Commercial Grade",
    features: [
      "3D acrylic fabricated letters with high-lumen weatherproof Samsung/EPISTAR LEDs",
      "Heavy-duty Aluminum Composite Panel (ACP) weather-sealed facade framing",
      "Safe 12V silicone flex-neon signs custom routed on clear acrylic backings",
      "Certified photoluminescent auto-glow safety signs for blackout emergencies",
      "Architectural internal directories and doctor cabin plates with stainless steel standoffs",
      "End-to-end installation across Hyderabad with electrical safety and structural warranty"
    ],
    materials: [
      "Cast Acrylic Sheets (3mm to 10mm)",
      "Aluminum Composite Panels (ACP)",
      "Samsung & EPISTAR Waterproof LED Modules",
      "Silicone 12V Neon Flex Tubing",
      "Photoluminescent Glow Pigment & Film",
      "Stainless Steel Standoff Hardware"
    ],
    finishes: [
      "Gloss Acrylic Letterface",
      "Matte Black Trim Cap",
      "Mirror Gold Titanium",
      "Brushed Stainless Steel",
      "Warm White / Multicolor Neon",
      "Photoluminescent Green Glow"
    ],
    applications: [
      "Restaurant, cafe & dessert parlor storefronts",
      "Hospital & healthcare center facade elevations",
      "Retail showrooms, shopping malls & commercial outlets",
      "Corporate tech park lobbies & executive floor directories",
      "Fire exit routes, industrial warehouses & emergency paths"
    ],
    subServices: [
      {
        title: "LED Sign Boards (Storefront & 3D Letters)",
        description: "Commercial storefront elevations with 3D illuminated channel letters, ACP facades, and Samsung weatherproof LEDs.",
        image: "/images/lucky-signs/14-led-sign-boards/img-001.jpg",
        applications: ["Restaurant Facades", "Hospital Elevations", "Retail Showrooms", "Corporate Buildings"],
        features: ["Front-lit and halo backlit options", "Weather-sealed ACP frame", "Low energy consumption"],
        clientsOrProjects: ["Tatva Modern Dining", "The Broast Factory", "Mythri Hospital", "Crystal Hospital"]
      },
      {
        title: "Neon LED Boards (Custom Glow Signs)",
        description: "Vibrant, shatterproof 12V flex-neon signs custom routed on clear acrylic for cafes, rooms, and photo corners.",
        image: "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
        applications: ["Cafes & Bars", "Interior Statement Walls", "Photo Booths", "Store Checkout Desks"],
        features: ["Safe 12V low-voltage operation", "10+ vibrant colors", "Laser routed backing with hanging mounts"],
        clientsOrProjects: ["LUCKY SIGNS Studio Sign", "Happy Birthday Glow", "Better Together Piece"]
      },
      {
        title: "Auto Glow Sign Boards (Safety & Emergency)",
        description: "Certified photoluminescent emergency signs that glow in complete blackout conditions without electricity.",
        image: "/images/lucky-signs/09-auto-glow-sign-boards/img-000.jpg",
        applications: ["Fire Exit Routes", "Extinguisher Indicators", "Assembly Areas", "Industrial Zones"],
        features: ["Zero electricity required", "Meets building safety codes", "4 to 8 hours green glow in sudden darkness"],
        clientsOrProjects: ["Hyderabad Commercial Complexes", "Multi-Specialty Hospitals", "Industrial Warehouses"]
      },
      {
        title: "Internal Sign Boards & Directional Wayfinding",
        description: "Reception logos, floor directories, doctor cabin plates, and architectural plaques with stainless steel standoffs.",
        image: "/images/lucky-signs/15-internal-sign-boards/img-000.jpg",
        applications: ["Corporate Offices", "Hospital OPD Wards", "Government Zonal Offices", "Dental Clinics"],
        features: ["Laser-cut dimensional lettering", "Sleek standoff mounting", "Interchangeable modular slats"],
        clientsOrProjects: ["GHMC Zonal Commissioner Office", "Hopper Automation", "Phoenix Techzone / Aquila"]
      }
    ],
    galleryImages: [
      "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
      "/images/lucky-signs/14-led-sign-boards/img-001.jpg",
      "/images/lucky-signs/14-led-sign-boards/img-002.jpg",
      "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
      "/images/lucky-signs/12-neon-led-boards/img-001.jpg",
      "/images/lucky-signs/09-auto-glow-sign-boards/img-000.jpg",
      "/images/lucky-signs/15-internal-sign-boards/img-000.jpg"
    ],
    clientsOrProjects: [
      "Tatva Modern Dining (Storefront 3D LED)",
      "The Broast Factory (Illuminated Facade)",
      "Mythri Hospital & Crystal Hospital (Elevation & Internal)",
      "GHMC Zonal Commissioner Office (Wayfinding & Emblems)",
      "Phoenix Techzone / Aquila (Corporate Office Signs)"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a quotation for an LED Sign Board / Commercial Signage. Details: "
  },

  // 7. Turnkey Solution: Event Backdrops & Monograms
  {
    id: "event-backdrops",
    slug: "event-backdrops",
    category: "solution",
    categoryLabel: "Turnkey Solutions",
    name: "Custom Event Backdrops & Wedding Monograms",
    tagline: "Laser-cut wedding monograms, couple initials, floral rings, and stage backdrops in mirror-gold acrylic",
    description: "We craft bespoke laser-cut acrylic monograms (like A♥M), wedding stage lettering, birthday numbers, and floral frame cutouts. Lightweight, sturdy, and ready to mount on balloon rings or flower meshes.",
    longDescription: "Make your special celebrations unforgettable with custom laser-cut acrylic event decor from Lucky Signs. From royal wedding stage monograms in mirror gold to milestone birthday numerals and couple hashtags, we design and precision-cut statement pieces in our Bazar Guard workshop. We work closely with wedding planners, event decorators, and families across Hyderabad for rapid turnaround.",
    heroImage: "/images/lucky-signs/06-events-backdrops/img-000.jpg",
    badge: "Event Decor",
    features: [
      "Precision laser-cut mirror gold, rose gold, and silver chrome acrylic calligraphy",
      "Bespoke couple initials, intertwined monogram rings, and custom hashtags",
      "Lightweight yet sturdy design for easy mounting on balloon rings & floral meshes",
      "Integrated warm LED or neon accent lighting options for evening functions",
      "Rapid turnaround coordination with event decorators and wedding planners in Hyderabad"
    ],
    materials: [
      "Cast Acrylic (3mm to 6mm)",
      "Mirror Gold & Mirror Rose Gold Acrylic",
      "Silver Chrome Acrylic",
      "Matte White & Frosted Acrylic",
      "MDF Base Support for Heavy Mounting"
    ],
    finishes: [
      "Mirror Gold Acrylic",
      "Mirror Rose Gold",
      "Silver Chrome",
      "Matte White / Ivory",
      "Integrated Neon Glow"
    ],
    applications: [
      "Weddings & Sangeet stage focal points",
      "Engagement parties ('We Are Engaged' / couple initials)",
      "Milestone birthdays (1st, 18th, 25th, 50th celebrations)",
      "Anniversary celebrations & reception photo backdrops",
      "Corporate product launch backdrops & brand photo booths"
    ],
    subServices: [
      {
        title: "Wedding Stage Monograms & Initial Rings",
        description: "Intertwined couple initials, royal crests, and circular ring monograms in reflective mirror gold acrylic.",
        image: "/images/lucky-signs/06-events-backdrops/img-000.jpg",
        applications: ["Wedding Stage Center", "Sangeet Photo Wall", "Entry Archway"],
        features: ["Intertwined calligraphic letters", "High-gloss mirror finish", "Invisible back-mounting hooks"]
      },
      {
        title: "Custom Script Stage Lettering",
        description: "Curated script phrases like 'Better Together', 'Always & Forever', or family surnames cut in single-sheet acrylic.",
        image: "/images/lucky-signs/06-events-backdrops/img-001.jpg",
        applications: ["Stage Backdrop", "Cake Table Accent", "Cocktail Bar Wall"],
        features: ["Joined cursive script for structural strength", "Lightweight hangable profile", "Scratch-resistant face"]
      },
      {
        title: "Floral Frame & Balloon Ring Cutouts",
        description: "Bespoke circular and geometric acrylic cutouts designed to fit standard decorator balloon and floral rings.",
        image: "/images/lucky-signs/06-events-backdrops/img-002.jpg",
        applications: ["Baby Showers", "Engagement Circles", "Anniversary Rings"],
        features: ["Pre-drilled tie holes for wire attachment", "Balanced center of gravity", "Reusable for multiple events"]
      },
      {
        title: "Birthday Milestone Numerals & Decor",
        description: "Bold 3D and flat numerals (1st, 18th, 25th, 50th) with glitter, matte, or mirror finishes for milestone parties.",
        image: "/images/lucky-signs/06-events-backdrops/img-003.jpg",
        applications: ["1st Birthday Themes", "Silver/Golden Jubilees", "Farewell Parties"],
        features: ["Free-standing or hanging formats", "Vibrant colors available", "Customized with child/person name"]
      }
    ],
    galleryImages: [
      "/images/lucky-signs/06-events-backdrops/img-000.jpg",
      "/images/lucky-signs/06-events-backdrops/img-001.jpg",
      "/images/lucky-signs/06-events-backdrops/img-002.jpg",
      "/images/lucky-signs/06-events-backdrops/img-003.jpg"
    ],
    clientsOrProjects: [
      "A♥M Royal Monogram (Taj Krishna Wedding)",
      "Let Us Gold Script Feature",
      "Better Together Floral Wall Setup",
      "Celebration Ring Displays for Hyderabad Event Planners"
    ],
    whatsappTemplate: "Hi Lucky Signs! I need a custom Event Backdrop / Wedding Monogram. Event date & details: "
  }
];

// Backwards compatibility export
export const servicesData = allServices;

// Helper lookup functions
export function getAllServices(): DetailedServiceItem[] {
  return allServices;
}

export function getServiceBySlug(slug: string): DetailedServiceItem | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getFabricationServices(): DetailedServiceItem[] {
  return allServices.filter((s) => s.category === "fabrication");
}

export function getSolutionServices(): DetailedServiceItem[] {
  return allServices.filter((s) => s.category === "solution");
}
