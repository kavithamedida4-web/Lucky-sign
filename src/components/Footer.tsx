import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-brand-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Col 1 & 2: Brand and Studio details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center text-white font-bold text-lg font-heading shadow-md">
                LS
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-white">
                LUCKY <span className="text-brand-orange">SIGNS</span>
              </span>
            </div>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              In-house signage and acrylic fabrication workshop in Bazar Guard, Hyderabad. Direct UV flatbed printing, laser jaali cutting, LED 3D letters, and precision engraving.
            </p>
            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>Led by <span className="text-white/80 font-medium">Mohammed Rafeeq</span></p>
              <p>100% In-House Production Facility · No Outsourcing</p>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get a quote on WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-medium transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-brand-orange" />
                <span>{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-sm font-semibold font-heading uppercase tracking-wider text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  All Services &amp; Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#solutions" className="hover:text-brand-orange transition-colors">
                  Turnkey Solutions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-orange transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  About Mohammed Rafeeq
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-orange transition-colors">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Services */}
          <div>
            <h3 className="text-sm font-semibold font-heading uppercase tracking-wider text-white mb-4">
              Direct Offerings
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/services/laser-cutting" className="hover:text-brand-orange transition-colors">
                  Precision Laser Cutting
                </Link>
              </li>
              <li>
                <Link href="/services/uv-printing" className="hover:text-brand-orange transition-colors">
                  Direct UV Flatbed Printing
                </Link>
              </li>
              <li>
                <Link href="/services/plotter-cutting" className="hover:text-brand-orange transition-colors">
                  Plotter Vinyl Cutting
                </Link>
              </li>
              <li>
                <Link href="/services/acrylic-bending" className="hover:text-brand-orange transition-colors">
                  Thermo Acrylic Bending
                </Link>
              </li>
              <li>
                <Link href="/services/engraving" className="hover:text-brand-orange transition-colors">
                  Rotary &amp; Metal Engraving
                </Link>
              </li>
              <li>
                <Link href="/services/sign-boards" className="hover:text-brand-orange transition-colors">
                  3D LED &amp; Neon Sign Boards
                </Link>
              </li>
              <li>
                <Link href="/services/event-backdrops" className="hover:text-brand-orange transition-colors">
                  Event Backdrops &amp; Monograms
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio Address & Contact */}
          <div>
            <h3 className="text-sm font-semibold font-heading uppercase tracking-wider text-white mb-4">
              Studio Location
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {siteConfig.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-semibold hover:bg-brand-orange hover:text-white transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Lucky Signs. All rights reserved. Bazar Guard, Hyderabad.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1">
            <span>Shop # 11-4-555 to 556, Bazar Guard</span>
            <span className="hidden sm:inline opacity-40">·</span>
            <span>Telangana 500004</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
