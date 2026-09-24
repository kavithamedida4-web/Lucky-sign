import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Lucky Signs – Signage & Acrylic Products Studio in Hyderabad",
  description:
    "Learn about Lucky Signs, led by Mohammed Rafeeq at Bazar Guard, Hyderabad. 100% in-house UV printing, laser cutting, engraving, and LED signage manufacturing.",
};

export default function AboutPage() {
  const showcasePhotos = [
    {
      id: "workshop-craftsman",
      title: "Founder & Master Craftsman",
      subtitle: "Mohammed Rafeeq",
      image: "/images/lucky-signs/01-cover-services/img-000.jpg",
    },
    {
      id: "laser-cutting",
      title: "CNC Laser Cutting",
      subtitle: "Jaali Grills & Filigree",
      image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
    },
    {
      id: "led-fabrication",
      title: "3D LED Storefronts",
      subtitle: "Channel Letter Assembly",
      image: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
    },
    {
      id: "uv-printing",
      title: "Direct UV Flatbed",
      subtitle: "Acrylic & Glass Prints",
      image: "/images/lucky-signs/01-cover-services/img-004.jpg",
    },
  ];

  return (
    <div className="pb-24">
      {/* =========================================================================
          TOP BANNER WITH BRIGHT ORANGE BRAND BACKDROP (Reference Layout)
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#FF6B00] via-[#E8730C] to-[#D05A00] text-white pt-16 sm:pt-20 pb-28 sm:pb-36 overflow-hidden">
        {/* Subtle decorative vector sparkle */}
        <div className="absolute top-10 right-1/4 opacity-75 hidden sm:block pointer-events-none">
          <Sparkles className="w-6 h-6 text-white/80" />
        </div>

        {/* Ambient background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          {/* Sparkle Tag */}
          <div className="flex justify-center items-center gap-1.5 text-white/90 text-sm font-semibold">
            <span className="text-white/80">✦</span>
            <span className="uppercase tracking-widest text-xs font-bold text-white/90">
              Bazar Guard, Hyderabad · Established 2004
            </span>
            <span className="text-white/80">✦</span>
          </div>

          {/* Centered Main Title like Reference Image */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white tracking-tight">
            About us
          </h1>

          {/* Centered Short Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Over 20 years of sign making, high-precision laser cutting &amp; custom acrylic fabrication directly from our workshop in Hyderabad.
          </p>
        </div>
      </section>

      {/* =========================================================================
          4 OVERLAPPING PHOTO CARDS STRIP (Matching the Reference Image)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 md:-mt-28 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6">
          {showcasePhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white shadow-xl bg-slate-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              {/* Bottom Inset Caption */}
              <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 text-white">
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-wider block truncate">
                  {photo.subtitle}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white truncate drop-shadow-sm">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          BOTTOM STORY CONTENT (White Background, 2 Columns like Reference)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20">
        {/* Main Headline */}
        <div className="max-w-4xl space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight leading-[1.15]">
            We make sure your ideas &amp; signage are{" "}
            <span className="text-brand-orange">crafted and delivered properly</span>
          </h2>
        </div>

        {/* 2-Column Detailed Description (Matching Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 text-brand-slate text-sm sm:text-base leading-relaxed">
          <div className="space-y-4">
            <p>
              Mohammed Rafeeq started Lucky Signs at Bazar Guard with a simple commitment: in-house manufacturing without outsourcing delays. We take exact measurements, prepare vector cutting files, cut on our CNC laser machines, and assemble storefront 3D letters under one roof.
            </p>
            <p>
              Whether you are an architect seeking custom jaali grill ceiling inserts, a restaurant owner installing ACP storefront elevation letters, or a homeowner designing a sacred mandir backdrop, you deal directly with our craftsmen.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              We use genuine cast acrylic sheets that do not yellow under sunlight, weather-proof ACP composite panels, and long-life Samsung LED modules that stay lit reliably for years.
            </p>
            <p>
              Our fabrication team handles full electrical wiring, metal sub-structure mounting, and secure on-site installation across Hyderabad and Secunderabad—from Banjara Hills and Jubilee Hills to Gachibowli and Hitec City.
            </p>
          </div>
        </div>

        {/* Action Buttons & Quick Stats */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-brand-border flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-xs sm:text-sm shadow-md shadow-brand-orange/25 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Get a quote on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full px-6 sm:px-7 py-3.5 bg-white hover:bg-brand-orange-light text-brand-navy hover:text-brand-orange border border-brand-border hover:border-brand-orange/50 font-semibold text-xs sm:text-sm shadow-xs transition-all duration-300 group"
            >
              <span>Visit our workshop</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 sm:gap-8 text-left">
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-brand-orange">20+</div>
              <div className="text-[11px] text-brand-slate font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-brand-navy">500+</div>
              <div className="text-[11px] text-brand-slate font-medium">Projects Installed</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-brand-orange">100%</div>
              <div className="text-[11px] text-brand-slate font-medium">In-House Facility</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE OPERATE (4-Step Work Process)
          ========================================================================= */}
      <div className="mt-16 sm:mt-24">
        <HowItWorksSection />
      </div>
    </div>
  );
}
