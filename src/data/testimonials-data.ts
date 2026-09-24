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
