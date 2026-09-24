"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export interface ServiceDetailItem {
  id: string;
  number: string;
  category: "all" | "signs" | "laser" | "print" | "acrylic";
  title: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  badge: string;
  chips: string[];
}

export function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const services: ServiceDetailItem[] = [
    {
      id: "led-sign-boards",
      number: "01",
      category: "signs",
      title: "3D LED Sign Boards",
      tagline: "Storefront Elevations",
      description:
        "3D illuminated channel letters and ACP cladding with Samsung weatherproof LEDs.",
      image: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
      href: "/services/sign-boards",
      badge: "LED Channel",
      chips: ["Samsung LEDs", "Cast Acrylic & ACP"],
    },
    {
      id: "laser-cutting",
      number: "02",
      category: "laser",
      title: "Laser Cutting & Jaali Grills",
      tagline: "Temple & Ceiling Grills",
      description:
        "High-precision CNC cutting on acrylic and MDF for false ceilings, partitions, and mandir arches.",
      image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
      href: "/services/laser-cutting",
      badge: "In-House CNC",
      chips: ["0.1mm Precision", "Acrylic & MDF"],
    },
    {
      id: "uv-printing",
      number: "03",
      category: "print",
      title: "Direct UV Flatbed Printing",
      tagline: "Photographic Prints",
      description:
        "Vivid photographic printing cured instantly on rigid acrylic, glass, and panels.",
      image: "/images/lucky-signs/01-cover-services/img-004.jpg",
      href: "/services/uv-printing",
      badge: "UV Flatbed",
      chips: ["Instant Cured", "Fade Resistant"],
    },
    {
      id: "neon-signs",
      number: "04",
      category: "signs",
      title: "Custom Flex Neon LED Boards",
      tagline: "Ambient Glow Art",
      description:
        "Silicone neon tubing mounted on transparent acrylic for cafes, rooms, and events.",
      image: "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
      href: "/gallery",
      badge: "Neon LED",
      chips: ["12V Efficient", "Contour Backing"],
    },
    {
      id: "acrylic-bending",
      number: "05",
      category: "acrylic",
      title: "Thermo-Bent Acrylic Stands",
      tagline: "Heat-Bent Displays",
      description:
        "Line-heated acrylic brochure stands, counter organizers, and engraved name plates.",
      image: "/images/lucky-signs/04-acrylic-bending-products/img-000.jpg",
      href: "/services/acrylic-bending",
      badge: "Heat Bending",
      chips: ["Seamless Curves", "Clear Acrylic"],
    },
    {
      id: "plotter-cutting",
      number: "06",
      category: "print",
      title: "Plotter Cutting & Fleet Vinyl",
      tagline: "Vehicle Graphics",
      description:
        "Graphtec plotter cutting for reflective vehicle graphics and school bus branding.",
      image: "/images/lucky-signs/01-cover-services/img-005.jpg",
      href: "/services/plotter-cutting",
      badge: "Graphtec Cut",
      chips: ["Reflective Vinyl", "Fleet Branding"],
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  const filters = [
    { id: "all", label: "All Services" },
    { id: "signs", label: "LED & Neon" },
    { id: "laser", label: "Laser Cutting" },
    { id: "print", label: "UV & Vinyl" },
    { id: "acrylic", label: "Acrylic Displays" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Scaled & Reduced Section Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-9">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-orange-light border border-brand-orange/20 text-brand-orange text-[11px] font-semibold uppercase tracking-wider shadow-xs">
          <Sparkles className="w-3 h-3 text-brand-orange" />
          <span>In-House Workshop · Bazar Guard</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-navy tracking-tight">
          In-house fabrication &amp;{" "}
          <span className="text-brand-orange">sign services</span>
        </h2>
        <p className="text-xs sm:text-sm text-brand-slate max-w-md mx-auto leading-relaxed">
          Laser cutting, direct UV printing, 3D LED boards &amp; acrylic fabrication in Hyderabad.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1.5">
          {filters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-brand-orange text-white shadow-sm shadow-brand-orange/25"
                  : "bg-white text-brand-slate hover:text-brand-navy hover:bg-brand-orange-light border border-brand-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Compact & Clean Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-xs hover:shadow-lg hover:border-brand-orange/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Compact Card Image */}
              <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-brand-navy text-[10px] font-bold shadow-xs uppercase tracking-wider">
                    {service.badge}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    {service.number}
                  </span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5">
                  <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider block truncate">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <div className="w-5 h-5 rounded-full bg-brand-offwhite group-hover:bg-brand-orange group-hover:text-white flex items-center justify-center text-brand-navy transition-colors shrink-0 mt-0.5">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                <p className="text-xs text-brand-slate leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {service.chips.map((chip, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] font-medium bg-brand-offwhite text-brand-navy px-1.5 py-0.5 rounded border border-brand-border/60"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-orange shrink-0" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Action Footer */}
            <div className="p-3.5 sm:p-4 pt-0 flex items-center justify-between gap-2 border-t border-brand-border/40 mt-1">
              <Link
                href={service.href}
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-navy group-hover:text-brand-orange transition-colors"
              >
                <span>Specifications</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={siteConfig.getWhatsAppUrl(`Hi Lucky Signs! I need a quotation for ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-orange-light hover:bg-brand-orange text-brand-orange hover:text-white text-[10px] font-bold transition-all duration-300 shadow-xs"
                title="Get WhatsApp Quote"
                aria-label={`Get WhatsApp quote for ${service.title}`}
              >
                <MessageCircle className="w-3 h-3 fill-current" />
                <span>Quote</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
