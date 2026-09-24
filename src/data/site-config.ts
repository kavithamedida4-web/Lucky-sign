export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const siteConfig = {
  name: "Lucky Signs",
  legalName: "Lucky Signs Signage & Acrylic Solutions",
  founder: "Mohammed Rafeeq",
  tagline: "Signage, UV Printing, Laser Cutting & Acrylic Solutions in Hyderabad",
  address: "Shop # 11-4-555 to 556, Bazar Guard, Hyderabad 500004",
  city: "Hyderabad, Telangana",
  pincode: "500004",
  email: "luckysigns4u@gmail.com",
  phone: "+91 92468 73092",
  phoneRaw: "919246873092",
  instagramHandle: "@luckysigns4u",
  instagramUrl: "https://www.instagram.com/luckysigns4u",
  googleMapsUrl: "https://maps.app.goo.gl/ZCiCVKfMNU11KVCL6?g_st=aw",
  workingHours: "Monday to Saturday: 10:00 AM to 9:00 PM (Sunday Closed)",
  
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  metrics: [
    { value: "500+", label: "Projects Completed", description: "Across commercial & residential sectors" },
    { value: "100%", label: "In-House Facility", description: "UV, laser, bending & plotter in our workshop" },
    { value: "15+", label: "Product Lines", description: "From LED storefronts to jaali grill panels" },
    { value: "Same-Day", label: "Fast Quotations", description: "WhatsApp estimate within a few hours" },
  ],

  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = "Hi Lucky Signs! I need a quotation for custom signage/acrylic work. Please share pricing and timelines.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/919246873092?text=${text}`;
  },
};
