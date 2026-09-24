export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
  client?: string;
  location?: string;
}

export const galleryCategories = [
  { id: "all", label: "All Projects" },
  { id: "sign-boards", label: "LED & Sign Boards" },
  { id: "grills", label: "Jaali Grills & Ceilings" },
  { id: "mandir", label: "Mandir Backdrops" },
  { id: "mementos", label: "Mementos & Awards" },
  { id: "name-plates", label: "Name Plates (LED & Engraved)" },
  { id: "neon-led", label: "Neon LED Signs" },
  { id: "bus-branding", label: "School Bus & Fleet" },
  { id: "events", label: "Events & Monograms" },
];

export const galleryItems: GalleryItem[] = [
  // Sign Boards
  {
    id: "gal-1",
    title: "Tatva Modern Dining Storefront Sign",
    category: "sign-boards",
    categoryLabel: "Sign Boards",
    image: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
    description: "Custom illuminated 3D channel letters with warm ambient backlight on architectural ACP facade.",
    client: "Tatva Modern Dining",
    location: "Hyderabad"
  },
  {
    id: "gal-2",
    title: "The Broast Factory Facade Sign",
    category: "sign-boards",
    categoryLabel: "Sign Boards",
    image: "/images/lucky-signs/14-led-sign-boards/img-001.jpg",
    description: "High-visibility commercial storefront sign board with weatherproof LED illumination.",
    client: "The Broast Factory",
    location: "Hyderabad"
  },
  {
    id: "gal-3",
    title: "Mythri Hospital Main Elevation Sign",
    category: "sign-boards",
    categoryLabel: "Sign Boards",
    image: "/images/lucky-signs/14-led-sign-boards/img-002.jpg",
    description: "Multi-story illuminated medical hospital sign board engineered for long-distance city visibility.",
    client: "Mythri Hospital",
    location: "Hyderabad"
  },
  {
    id: "gal-4",
    title: "Hopper Automation Architectural Sign",
    category: "sign-boards",
    categoryLabel: "Sign Boards",
    image: "/images/lucky-signs/15-internal-sign-boards/img-000.jpg",
    description: "Interior corporate branding with standoff mounting for tech reception.",
    client: "Hopper Automation",
    location: "HITEC City"
  },
  {
    id: "gal-5",
    title: "GHMC Zonal Commissioner Official Plaque",
    category: "sign-boards",
    categoryLabel: "Sign Boards",
    image: "/images/lucky-signs/15-internal-sign-boards/img-002.jpg",
    description: "Prestigious brass and acrylic executive designation plaque.",
    client: "GHMC Hyderabad",
    location: "Zonal Office"
  },

  // Grills & Ceilings
  {
    id: "gal-6",
    title: "Modern False Ceiling Jaali Insert",
    category: "grills",
    categoryLabel: "Jaali Grills & Ceilings",
    image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
    description: "Laser-cut geometric jaali panel inset into POP false ceiling with perimeter cove lighting.",
    location: "Jubilee Hills Residence"
  },
  {
    id: "gal-7",
    title: "Decorative Living Room Screen Divider",
    category: "grills",
    categoryLabel: "Jaali Grills & Ceilings",
    image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-001.jpg",
    description: "Floor-to-ceiling CNC-cut acrylic grill partition separating dining and living zones.",
    location: "Banjara Hills Villa"
  },
  {
    id: "gal-8",
    title: "Moroccan Architectural Wall Panel",
    category: "grills",
    categoryLabel: "Jaali Grills & Ceilings",
    image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-003.jpg",
    description: "Intricate laser-cut filigree grill with mirror gold backing.",
    location: "Gachibowli Apartment"
  },

  // Mandir Backdrops
  {
    id: "gal-9",
    title: "Backlit Sacred Om Jaali Panel",
    category: "mandir",
    categoryLabel: "Mandir Backdrops",
    image: "/images/lucky-signs/03-acrylic-mandir-background/img-000.jpg",
    description: "Precision laser-cut Om symbol surrounded by floral jaali and hanging bell motifs with soft warm LED glow.",
    location: "Madhapur Residence"
  },
  {
    id: "gal-10",
    title: "Lord Venkateswara Illuminated Backdrop",
    category: "mandir",
    categoryLabel: "Mandir Backdrops",
    image: "/images/lucky-signs/03-acrylic-mandir-background/img-001.jpg",
    description: "Multi-layered acrylic mandir backdrop with sacred deity contour lighting.",
    location: "Kukatpally Residence"
  },
  {
    id: "gal-11",
    title: "Ganesha Jaali with Temple Arch",
    category: "mandir",
    categoryLabel: "Mandir Backdrops",
    image: "/images/lucky-signs/03-acrylic-mandir-background/img-003.jpg",
    description: "Mirror-gold finished mandir archway panel for compact apartment pooja room niche.",
    location: "Kondapur"
  },

  // Mementos & Awards
  {
    id: "gal-12",
    title: "Hero Two-Wheeler Rally Mementos",
    category: "mementos",
    categoryLabel: "Mementos & Awards",
    image: "/images/lucky-signs/05-acrylic-memento/img-000.jpg",
    description: "Laser-cut motorbike silhouette mementos with multi-color acrylic engraving.",
    client: "Hero Motocorp Rally",
    location: "Hyderabad"
  },
  {
    id: "gal-13",
    title: "Hyderabad Cycling Club Achievement Trophy",
    category: "mementos",
    categoryLabel: "Mementos & Awards",
    image: "/images/lucky-signs/05-acrylic-memento/img-001.jpg",
    description: "Custom bicycle silhouette trophy with polished beveled base.",
    client: "Cycling Club",
    location: "Hyderabad"
  },
  {
    id: "gal-14",
    title: "Corporate Excellence Award Plaque",
    category: "mementos",
    categoryLabel: "Mementos & Awards",
    image: "/images/lucky-signs/05-acrylic-memento/img-003.jpg",
    description: "Premium optical acrylic award with frosted laser engraving and gold accents.",
    client: "Corporate Honors",
    location: "HITEC City"
  },

  // Name Plates
  {
    id: "gal-15",
    title: "Bhat Villa Designer LED Name Plate",
    category: "name-plates",
    categoryLabel: "Name Plates",
    image: "/images/lucky-signs/13-led-name-plates/img-001.jpg",
    description: "Backlit weatherproof acrylic residential name plate with warm LED perimeter glow.",
    client: "Bhat Villa",
    location: "Hyderabad"
  },
  {
    id: "gal-16",
    title: "Kaushalya Residence Illuminated Plate",
    category: "name-plates",
    categoryLabel: "Name Plates",
    image: "/images/lucky-signs/13-led-name-plates/img-000.jpg",
    description: "Modern house number and family name plate with contrast laser-cut face.",
    client: "Kaushalya Residence",
    location: "Hyderabad"
  },
  {
    id: "gal-17",
    title: "Executive Desk Plate & Sanitized Tent Card",
    category: "name-plates",
    categoryLabel: "Name Plates",
    image: "/images/lucky-signs/07-acrylic-engraving-name-plates/img-000.jpg",
    description: "Dual-color engraved table tents and doctor cabin designation plates.",
    location: "Hyderabad Clinic"
  },

  // Neon LED Signs
  {
    id: "gal-18",
    title: "Lucky Signs Multicolor Studio Neon Sign",
    category: "neon-led",
    categoryLabel: "Neon LED Signs",
    image: "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
    description: "In-house manufactured multicolor flex-neon sign with contour-cut clear acrylic backing.",
    location: "Lucky Signs Studio"
  },
  {
    id: "gal-19",
    title: "Better Together Wedding Neon Sign",
    category: "neon-led",
    categoryLabel: "Neon LED Signs",
    image: "/images/lucky-signs/12-neon-led-boards/img-002.jpg",
    description: "Warm white script neon sign designed for wedding stage and photo booth installations.",
    location: "Hyderabad Wedding"
  },
  {
    id: "gal-20",
    title: "Happy Birthday Celebration Neon Sign",
    category: "neon-led",
    categoryLabel: "Neon LED Signs",
    image: "/images/lucky-signs/12-neon-led-boards/img-001.jpg",
    description: "Portable, lightweight birthday neon display with dimmer switch.",
    location: "Party Decor"
  },

  // School Bus & Fleet
  {
    id: "gal-21",
    title: "Delhi Public School Miyapur Bus Branding",
    category: "bus-branding",
    categoryLabel: "School Bus & Fleet",
    image: "/images/lucky-signs/11-school-bus-branding/img-000.jpg",
    description: "Full exterior vinyl wrapping, route details, and reflective safety boards for school bus fleet.",
    client: "Delhi Public School Miyapur",
    location: "Hyderabad"
  },
  {
    id: "gal-22",
    title: "Woxsen University Campus Fleet Branding",
    category: "bus-branding",
    categoryLabel: "School Bus & Fleet",
    image: "/images/lucky-signs/11-school-bus-branding/img-001.jpg",
    description: "High-durability cast vinyl graphics and university emblems applied to transit fleet.",
    client: "Woxsen University",
    location: "Hyderabad"
  },

  // Events & Monograms
  {
    id: "gal-23",
    title: "A♥M Royal Wedding Monogram",
    category: "events",
    categoryLabel: "Events & Monograms",
    image: "/images/lucky-signs/06-events-backdrops/img-000.jpg",
    description: "Mirror-gold laser cut monogram ring with floral and balloon installation integration.",
    location: "Convention Hall, Hyderabad"
  },
  {
    id: "gal-24",
    title: "Calligraphy Name Backdrop for Engagement",
    category: "events",
    categoryLabel: "Events & Monograms",
    image: "/images/lucky-signs/06-events-backdrops/img-001.jpg",
    description: "Large-scale cursive script acrylic cutout in polished mirror gold.",
    location: "Taj Krishna, Hyderabad"
  }
];
