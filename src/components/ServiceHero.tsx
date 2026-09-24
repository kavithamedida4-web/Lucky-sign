"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { DetailedServiceItem } from "@/data/services-data";
import {
  Phone,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceHeroProps {
  service: DetailedServiceItem;
}

interface FramePhoto {
  src: string;
  alt: string;
  label: string;
}

// Curated 4-photo gallery frames tailored specifically to each of the 7 services
const serviceHeroGalleries: Record<string, {
  headlinePrefix: string;
  headlineHighlight: string;
  frames: [FramePhoto, FramePhoto, FramePhoto, FramePhoto];
}> = {
  "laser-cutting": {
    headlinePrefix: "Precision Laser",
    headlineHighlight: "& Custom CNC!",
    frames: [
      {
        src: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
        alt: "Laser Cut Acrylic Jaali Ceiling Grill",
        label: "Acrylic Jaali Grill",
      },
      {
        src: "/images/lucky-signs/laser-cutting-cnc.jpg",
        alt: "High Precision CNC Laser Machine Lucky Signs",
        label: "In-House CNC Machine",
      },
      {
        src: "/images/lucky-signs/03-acrylic-mandir-background/img-000.jpg",
        alt: "Sacred Om Backlit Mandir Backdrop",
        label: "Mandir Backlit Arch",
      },
      {
        src: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-005.jpg",
        alt: "Architectural Laser Cut MDF Screen",
        label: "Architectural Screen",
      },
    ],
  },
  "uv-printing": {
    headlinePrefix: "High-Resolution UV",
    headlineHighlight: "& Flatbed Prints!",
    frames: [
      {
        src: "/images/lucky-signs/08-vinyl-printing/img-000.jpg",
        alt: "Large Format Corporate Office Wall Mural",
        label: "Wall Murals",
      },
      {
        src: "/images/lucky-signs/01-cover-services/img-004.jpg",
        alt: "Direct Substrate UV Flatbed Printer",
        label: "UV Flatbed Print",
      },
      {
        src: "/images/lucky-signs/08-vinyl-printing/img-002.jpg",
        alt: "Direct Rigid Acrylic Color Print",
        label: "Acrylic Rigid Print",
      },
      {
        src: "/images/lucky-signs/08-vinyl-printing/img-003.jpg",
        alt: "Government Emblem and Directory Board",
        label: "Emblem Displays",
      },
    ],
  },
  "plotter-cutting": {
    headlinePrefix: "Precision Plotter",
    headlineHighlight: "& Vinyl Cutting!",
    frames: [
      {
        src: "/images/lucky-signs/10-plotter-cutting/img-000.jpg",
        alt: "Precision Contour Cut Vinyl Sticker",
        label: "Contour Vinyl Cut",
      },
      {
        src: "/images/lucky-signs/01-cover-services/img-005.jpg",
        alt: "Graphtec High Speed Plotter Machine",
        label: "Graphtec Plotter",
      },
      {
        src: "/images/lucky-signs/11-school-bus-branding/img-000.jpg",
        alt: "DPS School Bus Fleet Decal Branding",
        label: "Bus Fleet Branding",
      },
      {
        src: "/images/lucky-signs/10-plotter-cutting/img-002.jpg",
        alt: "Reflective Transport Safety Decals",
        label: "Reflective Decals",
      },
    ],
  },
  "acrylic-bending": {
    headlinePrefix: "Custom Thermo-Bent",
    headlineHighlight: "& Acrylic Displays!",
    frames: [
      {
        src: "/images/lucky-signs/04-acrylic-bending-products/img-000.jpg",
        alt: "Optical Clarity Brochure Rack and Table Stand",
        label: "Brochure Stand",
      },
      {
        src: "/images/lucky-signs/01-cover-services/img-006.jpg",
        alt: "Heat-Bent Clear Acrylic Display Showcase",
        label: "Heat Bent Acrylic",
      },
      {
        src: "/images/lucky-signs/04-acrylic-bending-products/img-002.jpg",
        alt: "Luxury Bent Serving Tray with Handles",
        label: "Serving Tray",
      },
      {
        src: "/images/lucky-signs/04-acrylic-bending-products/img-005.jpg",
        alt: "Countertop Restaurant Menu Holder",
        label: "Menu & QR Stand",
      },
    ],
  },
  "engraving": {
    headlinePrefix: "Precision Laser",
    headlineHighlight: "& Metal Engraving!",
    frames: [
      {
        src: "/images/lucky-signs/07-acrylic-engraving-name-plates/img-000.jpg",
        alt: "Architectural Golden Villa Residence Name Plate",
        label: "Golden Villa Plate",
      },
      {
        src: "/images/lucky-signs/01-cover-services/img-007.jpg",
        alt: "Precision Rotary and Laser Engraving Tooling",
        label: "Precision Etch",
      },
      {
        src: "/images/lucky-signs/05-acrylic-memento/img-000.jpg",
        alt: "Hyderabad Cyclists Rally Acrylic Trophy",
        label: "Sports Trophy",
      },
      {
        src: "/images/lucky-signs/07-acrylic-engraving-name-plates/img-002.jpg",
        alt: "Two-Tone Executive Cabin Desk Plate",
        label: "Executive Desk Plate",
      },
    ],
  },
  "sign-boards": {
    headlinePrefix: "Custom 3D LED",
    headlineHighlight: "& Sign Boards!",
    frames: [
      {
        src: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
        alt: "Tatva Modern Dining Storefront 3D LED Board",
        label: "3D LED Storefront",
      },
      {
        src: "/images/lucky-signs/storefront-daylight.jpg",
        alt: "Lucky Signs Hyderabad Workshop Storefront Elevation",
        label: "Lucky Signs Facade",
      },
      {
        src: "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
        alt: "Vibrant Flex-Neon Statement Wall Sign",
        label: "Custom Neon Sign",
      },
      {
        src: "/images/lucky-signs/14-led-sign-boards/img-002.jpg",
        alt: "Mythri Hospital Multi-Story Commercial LED Elevation",
        label: "Hospital Elevation",
      },
    ],
  },
  "event-backdrops": {
    headlinePrefix: "Custom Monograms",
    headlineHighlight: "& Event Backdrops!",
    frames: [
      {
        src: "/images/lucky-signs/06-events-backdrops/img-000.jpg",
        alt: "Mirror Gold Laser Cut Wedding Stage Monogram",
        label: "Mirror Gold Monogram",
      },
      {
        src: "/images/lucky-signs/06-events-backdrops/img-001.jpg",
        alt: "Wedding Couple Initials Backlit Ring",
        label: "Couple Initials",
      },
      {
        src: "/images/lucky-signs/12-neon-led-boards/img-001.jpg",
        alt: "Happy Birthday Illuminated Neon Photo Backdrop",
        label: "Glow Backdrop",
      },
      {
        src: "/images/lucky-signs/06-events-backdrops/img-002.jpg",
        alt: "Floral Ring Laser-Cut Arch Monogram",
        label: "Stage Decor",
      },
    ],
  },
};

export function ServiceHero({ service }: ServiceHeroProps) {
  const whatsappUrl = siteConfig.getWhatsAppUrl(
    service.whatsappTemplate ||
      `Hello Mohammed Rafeeq, I need ${service.name} fabrication services in Hyderabad.`
  );

  // Retrieve curated 4-frame setup or fallback dynamically
  const galleryConfig = serviceHeroGalleries[service.slug] || {
    headlinePrefix: service.name,
    headlineHighlight: "in Hyderabad!",
    frames: [
      {
        src: service.galleryImages[0] || service.heroImage,
        alt: `${service.name} Sample 1`,
        label: service.name,
      },
      {
        src: service.heroImage,
        alt: `${service.name} In-House Machine`,
        label: "In-House Machine",
      },
      {
        src: service.galleryImages[1] || service.heroImage,
        alt: `${service.name} Sample 2`,
        label: "Workshop Output",
      },
      {
        src: service.galleryImages[2] || service.heroImage,
        alt: `${service.name} Sample 3`,
        label: "Custom Design",
      },
    ],
  };

  const featureItems = service.features.slice(0, 3);

  return (
    <section className="relative -mt-20 pt-24 sm:pt-28 pb-10 sm:pb-16 bg-[#F7F2EB] text-neutral-900 overflow-hidden border-b border-orange-200/50">
      
      {/* Background Soft Warm Tone & Subtle Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">
        
        {/* Breadcrumb Navigation (Desktop only) */}
        <nav
          aria-label="Breadcrumb"
          className="hidden sm:flex items-center gap-2 text-xs text-neutral-500"
        >
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/services" className="hover:text-brand-orange transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">{service.name}</span>
        </nav>

        {/* 2-Column Hero Grid Matching "The Art World" Reference Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[440px] sm:min-h-[500px]">
          
          {/* =========================================================================
              LEFT COLUMN: Typography & Action Buttons
              ========================================================================= */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-5">
            
            {/* 100% In-House Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-[10px] sm:text-xs font-bold text-brand-orange">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="tracking-wider uppercase">100% In-House Workshop · {service.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-heading text-neutral-900 tracking-tight leading-[1.1]">
              {galleryConfig.headlinePrefix} <br />
              <span className="text-brand-orange">
                {galleryConfig.headlineHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-neutral-700 leading-relaxed max-w-md font-normal">
              {service.description}
            </p>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 pt-1">
              {/* Primary Orange Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 sm:px-7 sm:py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-orange/25 hover:shadow-lg hover:shadow-brand-orange/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct Call / Catalog Button */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-3 sm:px-7 sm:py-3.5 bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 border border-neutral-300 font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call Workshop</span>
              </a>
            </div>

            {/* Feature Highlights (Desktop only) */}
            <div className="hidden sm:flex pt-3 border-t border-neutral-300/70 flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-medium text-neutral-600">
              {featureItems.map((feat, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span className="truncate max-w-[160px]">{feat}</span>
                </div>
              ))}
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4 Staggered Art Frames over Circular Backdrop (Mobile & Desktop)
              ========================================================================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center py-2 sm:py-6">
            
            {/* Large White/Cream Circular Backdrop Disc */}
            <div className="absolute w-[290px] sm:w-[440px] lg:w-[500px] aspect-square rounded-full bg-white/80 border border-neutral-300/60 shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* 4-Frame Gallery Grid / Composition (Active on Mobile, Tablet & Desktop) */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[620px]">
              
              <div className="grid grid-cols-12 gap-2 sm:gap-3.5 lg:gap-4 items-center">
                
                {/* 1. Left Frame (Centered vertically) */}
                <div className="col-span-4 flex justify-center">
                  <div className="w-full max-w-[105px] sm:max-w-[190px] aspect-[3/4.2] bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-neutral-900 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900">
                      <Image
                        src={galleryConfig.frames[0].src}
                        alt={galleryConfig.frames[0].alt}
                        fill
                        sizes="(max-width: 640px) 105px, 200px"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 brightness-[1.08] contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-bold text-white truncate bg-black/60 backdrop-blur-xs px-1 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {galleryConfig.frames[0].label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2 & 3. Middle Column (Top Frame + Bottom Frame) */}
                <div className="col-span-4 flex flex-col gap-2 sm:gap-3.5 lg:gap-4 items-center">
                  
                  {/* Top Middle Frame */}
                  <div className="w-full max-w-[105px] sm:max-w-[190px] aspect-[3/3.8] bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-neutral-900 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900">
                      <Image
                        src={galleryConfig.frames[1].src}
                        alt={galleryConfig.frames[1].alt}
                        fill
                        priority
                        sizes="(max-width: 640px) 105px, 200px"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 brightness-[1.08] contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-bold text-white truncate bg-black/60 backdrop-blur-xs px-1 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {galleryConfig.frames[1].label}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Middle Frame */}
                  <div className="w-full max-w-[105px] sm:max-w-[190px] aspect-[3/3.8] bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-neutral-900 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900">
                      <Image
                        src={galleryConfig.frames[2].src}
                        alt={galleryConfig.frames[2].alt}
                        fill
                        sizes="(max-width: 640px) 105px, 200px"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 brightness-[1.08] contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-bold text-white truncate bg-black/60 backdrop-blur-xs px-1 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {galleryConfig.frames[2].label}
                      </span>
                    </div>
                  </div>

                </div>

                {/* 4. Right Frame (Centered vertically, slightly offset) */}
                <div className="col-span-4 flex justify-center">
                  <div className="w-full max-w-[105px] sm:max-w-[190px] aspect-[3/4.2] bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-neutral-900 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900">
                      <Image
                        src={galleryConfig.frames[3].src}
                        alt={galleryConfig.frames[3].alt}
                        fill
                        sizes="(max-width: 640px) 105px, 200px"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 brightness-[1.08] contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-bold text-white truncate bg-black/60 backdrop-blur-xs px-1 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {galleryConfig.frames[3].label}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

// Re-export as LaserCuttingHero for backwards compatibility
export { ServiceHero as LaserCuttingHero };
