export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrCompany: string;
  category: string;
  comment: string;
  rating: number;
  location: string;
  verifiedProject: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Management Team",
    roleOrCompany: "Tatva Modern Dining",
    category: "LED Storefront Signage",
    comment: "Lucky Signs delivered an outstanding illuminated 3D storefront sign for our restaurant. The acrylic finish, warm backlight balance, and weatherproofing on the ACP panel are top-notch. Rafeeq Bhai completed fabrication and installation right on schedule.",
    rating: 5,
    location: "Hyderabad",
    verifiedProject: "Storefront 3D LED Sign Board"
  },
  {
    id: "test-2",
    clientName: "Transport Department",
    roleOrCompany: "Delhi Public School, Miyapur",
    category: "Fleet Vehicle Branding",
    comment: "We entrusted Lucky Signs with the complete fleet branding of our school buses. The reflective vinyl lettering, route boards, and safety graphics are crisp and highly durable against rain and sun. Professional service from start to finish.",
    rating: 5,
    location: "Miyapur, Hyderabad",
    verifiedProject: "School Bus Fleet Vinyl Wrapping"
  },
  {
    id: "test-3",
    clientName: "Facilities & Admin",
    roleOrCompany: "Mythri Hospital",
    category: "Hospital Elevation & Safety Signs",
    comment: "From our large outdoor illuminated elevation board to the internal auto-glow fire exit signage across all floors, Lucky Signs proved their in-house manufacturing capability. High quality at honest pricing.",
    rating: 5,
    location: "Hyderabad",
    verifiedProject: "Multi-Floor Signage & Glow Signs"
  },
  {
    id: "test-4",
    clientName: "S. Bhat & Family",
    roleOrCompany: "Bhat Villa Residence",
    category: "LED Designer Name Plate",
    comment: "The LED name plate for our home looks absolutely stunning at night. The laser-cut precision on the acrylic and the subtle warm perimeter lighting gave our entrance an ultra-premium feel. Highly recommended!",
    rating: 5,
    location: "Banjara Hills, Hyderabad",
    verifiedProject: "Custom Backlit LED Name Plate"
  },
  {
    id: "test-5",
    clientName: "Administrative Operations",
    roleOrCompany: "Hopper Automation",
    category: "Corporate Office Branding",
    comment: "Clean cuts, beautiful acrylic standoffs, and sharp dimensional lettering for our reception lobby. In-house production means they deliver faster than anyone else in the city.",
    rating: 5,
    location: "HITEC City, Hyderabad",
    verifiedProject: "Internal Reception Branding"
  }
];

export const serviceTestimonialsMap: Record<string, TestimonialItem[]> = {
  "laser-cutting": [
    {
      id: "lc-1",
      clientName: "Vikram R.",
      roleOrCompany: "Villas & Living Interior Architect",
      category: "Laser Cutting",
      comment: "Flawless CNC jaali cutting on 12mm cast acrylic for our living room partitions in Jubilee Hills. Laser edges were crystal clear with zero burrs. Rafeeq Bhai delivered all panels ahead of schedule.",
      rating: 5,
      location: "Jubilee Hills, Hyderabad",
      verifiedProject: "Custom Acrylic Jaali Partitions"
    },
    {
      id: "lc-2",
      clientName: "Pooja & S. Sharma",
      roleOrCompany: "Private Residence",
      category: "Laser Cutting",
      comment: "Lucky Signs fabricated our warm backlit Om & sacred motif Mandir backdrop with incredible precision. The multi-layered laser cut acrylic finish looks divine in our pooja room.",
      rating: 5,
      location: "Banjara Hills, Hyderabad",
      verifiedProject: "Backlit Acrylic Mandir Backdrop"
    },
    {
      id: "lc-3",
      clientName: "K. Nagesh",
      roleOrCompany: "Commercial Fitouts & Interiors",
      category: "Laser Cutting",
      comment: "Exceptional CNC laser accuracy on 18mm MDF architectural grills. All vector cutouts matched our CAD drawings to the exact millimeter. Direct workshop rates make them our go-to in Hyderabad.",
      rating: 5,
      location: "Gachibowli, Hyderabad",
      verifiedProject: "Architectural Wall Paneling Cutouts"
    },
    {
      id: "lc-4",
      clientName: "Farhan Qureshi",
      roleOrCompany: "Banquet Hall Management",
      category: "Laser Cutting",
      comment: "Ordered decorative laser-cut acrylic panels for our banquet stage false ceiling. The flame-polished finish and neat joints exceeded our expectations. Solid craftsmanship.",
      rating: 5,
      location: "Tolichowki, Hyderabad",
      verifiedProject: "Decorative Ceiling Jaali Inserts"
    }
  ],
  "uv-printing": [
    {
      id: "uv-1",
      clientName: "Anand M.",
      roleOrCompany: "Storefront Retail Operations",
      category: "UV Flatbed Printing",
      comment: "Direct UV flatbed printing on 8mm acrylic was razor-sharp. The colors are deeply saturated and the opaque white backing gives it true glass-like depth. Highly impressed.",
      rating: 5,
      location: "Banjara Hills, Hyderabad",
      verifiedProject: "High-Resolution Storefront Acrylic Branding"
    },
    {
      id: "uv-2",
      clientName: "Sneha Reddy",
      roleOrCompany: "Corporate Facility Lead",
      category: "UV Flatbed Printing",
      comment: "We printed photographic corporate murals directly onto brushed composite panels. Scratch-resistant, vibrant, and delivered well before our office inauguration.",
      rating: 5,
      location: "HITEC City, Hyderabad",
      verifiedProject: "UV Direct Wall Murals & Directories"
    },
    {
      id: "uv-3",
      clientName: "Tariq Mansoor",
      roleOrCompany: "Interior Art Studio",
      category: "UV Flatbed Printing",
      comment: "Outstanding UV printing on glass panels and toughened acrylic. Even fine typography and subtle photographic gradients reproduced with 1440 DPI sharpness.",
      rating: 5,
      location: "Jubilee Hills, Hyderabad",
      verifiedProject: "Architectural Glass Art Prints"
    },
    {
      id: "uv-4",
      clientName: "Clinic Administrator",
      roleOrCompany: "Secunderabad Healthcare Center",
      category: "UV Flatbed Printing",
      comment: "UV printed wayfinding and informational signs throughout our clinic. Wipe-clean and sun-resistant — zero fading even after months of intense light.",
      rating: 5,
      location: "Secunderabad",
      verifiedProject: "UV Direct Clinic Wayfinding Boards"
    }
  ],
  "plotter-cutting": [
    {
      id: "pc-1",
      clientName: "Transport Department",
      roleOrCompany: "Delhi Public School, Miyapur",
      category: "Plotter Cutting & Decals",
      comment: "We entrusted Lucky Signs with the complete fleet branding of our school buses. The reflective vinyl lettering, route boards, and safety graphics are crisp and all-weather durable.",
      rating: 5,
      location: "Miyapur, Hyderabad",
      verifiedProject: "School Bus Fleet Vinyl Wrapping"
    },
    {
      id: "pc-2",
      clientName: "Logistics Team",
      roleOrCompany: "Woxsen University Transport",
      category: "Plotter Cutting & Decals",
      comment: "Computerized contour cutting on 3M reflective vinyl. The weeded letters and transfer tape made installation fast across our entire bus fleet. Top reliability.",
      rating: 5,
      location: "Hyderabad",
      verifiedProject: "University Fleet Vehicle Graphics"
    },
    {
      id: "pc-3",
      clientName: "Zainab K.",
      roleOrCompany: "Designer Apparel Boutique",
      category: "Plotter Cutting & Decals",
      comment: "Clean frosted vinyl plotting for our storefront glass doors and operating hours lettering. Bubble-free application and looks very premium.",
      rating: 5,
      location: "Banjara Hills, Hyderabad",
      verifiedProject: "Glass Frosting & Window Decals"
    },
    {
      id: "pc-4",
      clientName: "Ramesh Goud",
      roleOrCompany: "Commercial Fleet Operator",
      category: "Plotter Cutting & Decals",
      comment: "Waterproof die-cut commercial decals for 15 delivery vans. Holds up through daily pressure washing without edge peeling. Excellent adhesive quality.",
      rating: 5,
      location: "Sanath Nagar, Hyderabad",
      verifiedProject: "Commercial Delivery Van Branding"
    }
  ],
  "acrylic-bending": [
    {
      id: "ab-1",
      clientName: "General Manager",
      roleOrCompany: "Luxury Boutique Hotel",
      category: "Acrylic Bending & Fabrication",
      comment: "Custom bent acrylic amenity trays and brochure holders for our suites. The curved corners are crystal clear with zero stress clouding or bubbling.",
      rating: 5,
      location: "Banjara Hills, Hyderabad",
      verifiedProject: "Flame-Polished Hotel Amenity Trays"
    },
    {
      id: "ab-2",
      clientName: "Dinesh Agarwal",
      roleOrCompany: "Jewelry Showroom Owner",
      category: "Acrylic Bending & Fabrication",
      comment: "Mohammed Rafeeq custom fabricated 60+ countertop acrylic risers and display fixtures for our showcase. Perfectly bent angles and flame-buffed edges.",
      rating: 5,
      location: "Abids, Hyderabad",
      verifiedProject: "Countertop Jewelry Showcase Risers"
    },
    {
      id: "ab-3",
      clientName: "Karthik Verma",
      roleOrCompany: "Cafe Chain Manager",
      category: "Acrylic Bending & Fabrication",
      comment: "Tabletop menu stands and QR code payment stands fabricated in 3mm cast acrylic. Sturdy, scratch-resistant, and delivered within 48 hours.",
      rating: 5,
      location: "Madhapur, Hyderabad",
      verifiedProject: "Acrylic Table Tents & QR Pedestals"
    },
    {
      id: "ab-4",
      clientName: "Shruti Sen",
      roleOrCompany: "Retail Showroom Manager",
      category: "Acrylic Bending & Fabrication",
      comment: "Custom multi-tier literature dispensers for our customer lounge. Solid weighted base with immaculate optical clarity and clean flame edges.",
      rating: 5,
      location: "Somajiguda, Hyderabad",
      verifiedProject: "Multi-Tier Acrylic Brochure Racks"
    }
  ],
  "engraving": [
    {
      id: "eng-1",
      clientName: "Dr. K. Srinivas Rao",
      roleOrCompany: "Multi-Specialty Dental Clinic",
      category: "Precision Engraving",
      comment: "Engraved brass door plates and acrylic cabin indicators with deep black enamel filling. Authoritative, scratch-proof, and permanently durable.",
      rating: 5,
      location: "Kukatpally, Hyderabad",
      verifiedProject: "Executive Cabin Brass Name Plates"
    },
    {
      id: "eng-2",
      clientName: "Organizing Committee",
      roleOrCompany: "Hyderabad Cyclists Rally",
      category: "Precision Engraving",
      comment: "Precision laser-engraved acrylic mementos on dark wooden pedestals for 200+ participants. Flawless calligraphy and emblem details.",
      rating: 5,
      location: "Hyderabad",
      verifiedProject: "Commemorative Rally Mementos & Trophies"
    },
    {
      id: "eng-3",
      clientName: "M. Bhaskar",
      roleOrCompany: "Jeedimetla Industrial Plant",
      category: "Precision Engraving",
      comment: "Heavy-duty dual-color Rowmark compliance plates and machine panel tags. Deep rotary etching that withstands oils and extreme workshop temperatures.",
      rating: 5,
      location: "Jeedimetla, Hyderabad",
      verifiedProject: "Industrial Machine Rating Plates"
    },
    {
      id: "eng-4",
      clientName: "Advocate S. Sundaram",
      roleOrCompany: "High Court of Telangana",
      category: "Precision Engraving",
      comment: "Heavy solid brass nameplate with mirror finish and beveled borders for my chamber entrance. Looks prestigious and timeless.",
      rating: 5,
      location: "Old City, Hyderabad",
      verifiedProject: "Solid Brass Chamber Name Plate"
    }
  ],
  "sign-boards": [
    {
      id: "sb-1",
      clientName: "Management Team",
      roleOrCompany: "Tatva Modern Dining",
      category: "Sign Boards & Commercial Signage",
      comment: "Lucky Signs delivered an outstanding illuminated 3D storefront sign for our restaurant. The acrylic finish, warm backlight balance, and weatherproofing on the ACP panel are top-notch.",
      rating: 5,
      location: "Jubilee Hills, Hyderabad",
      verifiedProject: "Storefront 3D LED Sign Board"
    },
    {
      id: "sb-2",
      clientName: "Managing Director",
      roleOrCompany: "The Broast Factory",
      category: "Sign Boards & Commercial Signage",
      comment: "The front-lit 3D channel letters with heavy-duty ACP cladding gave our restaurant front stunning visibility from the main road. 100% professional fitting in Hyderabad.",
      rating: 5,
      location: "Mehdipatnam, Hyderabad",
      verifiedProject: "Commercial Facade LED Sign"
    },
    {
      id: "sb-3",
      clientName: "Facilities & Admin",
      roleOrCompany: "Mythri Hospital",
      category: "Sign Boards & Commercial Signage",
      comment: "From our large outdoor illuminated elevation board to the internal auto-glow fire exit signage across all floors, Lucky Signs proved their in-house manufacturing capability. High quality at honest pricing.",
      rating: 5,
      location: "Hyderabad",
      verifiedProject: "Multi-Floor Signage & Glow Signs"
    },
    {
      id: "sb-4",
      clientName: "Operations Lead",
      roleOrCompany: "Phoenix Techzone / Aquila",
      category: "Sign Boards & Commercial Signage",
      comment: "Fabricated precision 3D brushed metal letter signage for our corporate lobby. Standoff mounting and concealed wiring are neat and tidy.",
      rating: 5,
      location: "Financial District, Hyderabad",
      verifiedProject: "Corporate Tech Park Lobby Sign"
    },
    {
      id: "sb-5",
      clientName: "Cafe Owner",
      roleOrCompany: "Retro Lounge & Cafe",
      category: "Sign Boards & Commercial Signage",
      comment: "The custom 12V silicone flex-neon sign is the highlight of our cafe's photo corner. Safe, vibrant, and draws compliments from every customer.",
      rating: 5,
      location: "Jubilee Hills, Hyderabad",
      verifiedProject: "Custom Neon LED Statement Sign"
    }
  ],
  "event-backdrops": [
    {
      id: "eb-1",
      clientName: "Event Production Lead",
      roleOrCompany: "Royal Hyderabad Weddings",
      category: "Event Backdrops & Monograms",
      comment: "The 4-foot mirror gold laser-cut monogram (A♥M) for our royal Taj Falaknuma wedding reception was breathtaking. Lightweight, sturdy, and easy to mount on the flower ring.",
      rating: 5,
      location: "Falaknuma, Hyderabad",
      verifiedProject: "Mirror Gold Wedding Stage Monogram"
    },
    {
      id: "eb-2",
      clientName: "Ayesha & Sameer",
      roleOrCompany: "Engagement Celebration",
      category: "Event Backdrops & Monograms",
      comment: "Our custom hashtag and couple initials in rose gold mirror acrylic made our engagement photo backdrop look like a fairy tale. Thank you Rafeeq Bhai!",
      rating: 5,
      location: "Jubilee Hills, Hyderabad",
      verifiedProject: "Rose Gold Engagement Backdrop Ring"
    },
    {
      id: "eb-3",
      clientName: "Prerna V.",
      roleOrCompany: "Luxury Wedding Stylist",
      category: "Event Backdrops & Monograms",
      comment: "We order all our wedding numerals and floral ring monograms from Lucky Signs. Precision laser cuts, no rough edges, and always ready before decorator call-time.",
      rating: 5,
      location: "Banjara Hills, Hyderabad",
      verifiedProject: "Laser Cut Wedding Stage Calligraphy"
    },
    {
      id: "eb-4",
      clientName: "Rohit & Meena",
      roleOrCompany: "1st Birthday Celebration",
      category: "Event Backdrops & Monograms",
      comment: "Bespoke laser cut acrylic 1st birthday milestone board with integrated pastel backlighting. The parents and guests were thrilled with the finish.",
      rating: 5,
      location: "Madhapur, Hyderabad",
      verifiedProject: "Milestone Birthday Cutout Monogram"
    }
  ]
};

export function getTestimonialsByService(slug?: string): TestimonialItem[] {
  if (slug && serviceTestimonialsMap[slug]) {
    return serviceTestimonialsMap[slug];
  }
  return testimonialsData;
}
