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
