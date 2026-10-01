import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getAllServices } from "@/data/services-data";
import { siteConfig } from "@/data/site-config";
import { ServicesHubCatalog } from "@/components/ServicesHubCatalog";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Turnkey Solutions – Laser Cutting, UV Printing, LED Signs | Lucky Signs",
  description:
    "In-house sign board fabrication and acrylic work at Bazar Guard, Hyderabad. Laser jaali cutting, UV flatbed printing, LED 3D letters, and event monograms.",
};

export default function ServicesHubPage() {
  const allServices = getAllServices();

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 sm:pt-16 pb-8 bg-brand-offwhite border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-3">
            Bazar Guard, Hyderabad · Complete In-House Facility
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-brand-navy tracking-tight leading-[1.15]">
            Precision Fabrication &amp;{" "}
            <span className="text-brand-orange">Turnkey Signage Solutions</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-brand-slate leading-relaxed font-normal max-w-3xl mx-auto">
            CNC laser cutting, UV flatbed printing, 3D LED letter bending, and custom event monograms. We fabricate all 7 categories under our own roof in Bazar Guard so you get direct pricing and honest delivery dates.
          </p>
        </div>
      </section>

      {/* 2. SERVICES CATALOG (Reference 3-Column Card Design) */}
      <section id="services-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <ServicesHubCatalog services={allServices} />
      </section>

      {/* 4. WORKSHOP MACHINERY TRUST METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
              In-House Machinery &amp; Standards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
              Direct workshop control at Bazar Guard
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              We cut, print, and assemble every piece ourselves in Bazar Guard so you get fair prices and clean work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-colors">
              <span className="text-[11px] font-mono font-bold text-brand-orange tracking-wide uppercase block">
                Tolerance: ±0.1mm
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                CNC Laser Machine
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Clean, burr-free cuts on acrylic from 2mm to 25mm, MDF boards, natural wood, and architectural laminates.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-colors">
              <span className="text-[11px] font-mono font-bold text-brand-orange tracking-wide uppercase block">
                Resolution: 1440 DPI
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                UV Flatbed Printer
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Direct-to-substrate photographic resolution with instant ultraviolet curing on glass, acrylic, and sheet metal.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-colors">
              <span className="text-[11px] font-mono font-bold text-brand-orange tracking-wide uppercase block">
                Width: Up to 48 Inches
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                Graphtec Plotter
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Micro-accurate contour cutting on cast vinyl, reflective films, and decals for commercial fleet branding.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-colors">
              <span className="text-[11px] font-mono font-bold text-brand-orange tracking-wide uppercase block">
                Finish: Flame-Polished
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                Heat Bending &amp; Etching
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Thermo-forming acrylic stands with flame-polished edges and permanent computer-guided metal engraving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIRECT FOUNDER WHATSAPP CONSULTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-offwhite rounded-3xl p-8 sm:p-12 border border-brand-border text-center max-w-4xl mx-auto space-y-6 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center mx-auto shadow-xs">
            <MessageCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-navy">
              Share your dimensions or vector files
            </h2>
            <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto leading-relaxed">
              Send your CDR, AI, PDF files or a hand-drawn sketch to Mohammed Rafeeq. We provide exact quotes and turnaround timelines within a few hours.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={siteConfig.getWhatsAppUrl("Hi Lucky Signs! I have drawing/measurements for custom fabrication. Please share pricing: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Drawing on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-navy hover:bg-brand-orange text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
            >
              <span>Visit Bazar Guard Shop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
