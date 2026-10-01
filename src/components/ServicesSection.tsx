"use client";

import React, { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { Sparkles } from "lucide-react";

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

      {/* Service Cards Grid (Matching Reference Design) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            badge={service.badge}
            badgeStyleIndex={index}
            description={service.description}
            image={service.image}
            href={service.href}
            authorName="Mohammed Rafeeq"
            authorSubtitle="Bazar Guard Workshop"
            authorInitials="MR"
            actionText="Details"
          />
        ))}
      </div>
    </section>
  );
}
