import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Work Gallery", href: "/gallery" },
    { label: "Request Quote", href: "/contact" },
    { label: "Workshop Location", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Laser Cutting", href: "/services/laser-cutting" },
    { label: "UV Flatbed Printing", href: "/services/uv-printing" },
    { label: "3D LED Sign Boards", href: "/services/sign-boards" },
    { label: "Plotter Cutting & Decals", href: "/services/plotter-cutting" },
    { label: "Acrylic Bending", href: "/services/acrylic-bending" },
    { label: "Precision Engraving", href: "/services/engraving" },
    { label: "Event Backdrops & Monograms", href: "/services/event-backdrops" },
  ];

  return (
    <footer className="bg-[#0B0F19] text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* =========================================================================
              COLUMN 1: BRAND LOGO & COMPANY DESCRIPTION
              ========================================================================= */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {/* Circular Gold Outline Badge */}
              <div className="w-12 h-12 rounded-full border-2 border-[#F59E0B] bg-[#161D2E] flex items-center justify-center text-[#F59E0B] font-extrabold text-sm tracking-wider shadow-sm shrink-0">
                LS
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-white leading-none">
                  LUCKY <span className="text-[#F59E0B]">SIGNS</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-white/60 tracking-widest uppercase mt-1">
                  INTEGRATED SIGNAGE &amp; FABRICATION
                </span>
              </div>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm pt-1">
              <strong className="text-white font-semibold">Lucky Signs</strong> is Hyderabad and Telangana&apos;s trusted in-house signage and acrylic fabrication partner. With headquarters in <strong className="text-white font-semibold">Bazar Guard</strong> and operations across <strong className="text-white font-semibold">Hyderabad</strong>, we deliver professional CNC laser cutting, UV flatbed printing, 3D LED letter bending, and custom event monograms ✦ all with direct workshop craftsmanship, transparent pricing, and 20+ years of trusted excellence.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Direct WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-medium transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-[#F59E0B]" />
                <span>{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* =========================================================================
              COLUMN 2: QUICK LINKS (With > Bullets)
              ========================================================================= */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold font-heading text-white tracking-wide mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F59E0B] transition-colors flex items-center group"
                  >
                    <span className="text-[#F59E0B] font-bold mr-2 transition-transform duration-200 group-hover:translate-x-1 inline-block">
                      &gt;
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================================
              COLUMN 3: SERVICES (With > Bullets)
              ========================================================================= */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold font-heading text-white tracking-wide mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/75">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F59E0B] transition-colors flex items-center group"
                  >
                    <span className="text-[#F59E0B] font-bold mr-2 transition-transform duration-200 group-hover:translate-x-1 inline-block">
                      &gt;
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================================
              COLUMN 4: CONTACT US (With Gold Accent Icons)
              ========================================================================= */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-bold font-heading text-white tracking-wide mb-5">
              Contact Us
            </h3>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
              <div className="text-xs sm:text-sm text-white/80 space-y-0.5">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#F59E0B] transition-colors font-medium block"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href="tel:919849012345"
                  className="hover:text-[#F59E0B] transition-colors text-white/70 block"
                >
                  +91 98490 12345
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
              <div className="text-xs sm:text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/80 hover:text-[#F59E0B] transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Studio Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
              <div className="text-xs sm:text-sm text-white/80 leading-relaxed">
                <p>{siteConfig.address}</p>
                <p className="text-white/60 text-[11px] mt-0.5">Lakdikapul, Hyderabad, Telangana 500004</p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F59E0B] hover:text-[#FBBF24] font-semibold inline-block mt-1 hover:underline"
                >
                  View locations on Google Maps
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3 pt-1">
              <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" />
              <div className="text-xs sm:text-sm text-white/80 leading-relaxed">
                <p className="font-medium text-white">Mon ✦ Sat: 10:00 AM ✦ 9:00 PM</p>
                <p className="text-[11px] text-white/60 mt-0.5">Sunday: 11:00 AM ✦ 4:00 PM (WhatsApp Orders)</p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM BAR (Separated by subtle border, with exact Edone Solutions credit)
            ========================================================================= */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Lucky Signs. All rights reserved.</p>

          <p className="text-white/70">
            Designed &amp; Developed by{" "}
            <span className="text-[#F59E0B] font-semibold hover:text-[#FBBF24] transition-colors cursor-pointer">
              Edone Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
