import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lucky Signs – Sign Boards, Laser Cutting & Printing Services in Hyderabad",
    template: "%s | Lucky Signs Hyderabad",
  },
  description:
    "Lucky Signs Hyderabad – In-house UV printing, laser cutting, acrylic bending, engraving, LED & neon sign boards, name plates & mementos at Bazar Guard. Fast quotation on WhatsApp.",
  keywords: [
    "sign boards Hyderabad",
    "LED sign board",
    "laser cutting Hyderabad",
    "acrylic mandir background",
    "UV printing Hyderabad",
    "neon signs Hyderabad",
    "Bazar Guard sign makers",
    "Lucky Signs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-brand-offwhite text-brand-navy flex flex-col selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
