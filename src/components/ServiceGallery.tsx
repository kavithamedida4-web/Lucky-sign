"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LightboxModal, LightboxData } from "@/components/LightboxModal";
import { ZoomIn, Sparkles, ArrowRight } from "lucide-react";

interface ServiceGalleryProps {
  images?: string[];
  serviceName: string;
  categoryLabel?: string;
  slug?: string;
}

const serviceBentoImages: Record<string, string[]> = {
  "laser-cutting": [
    "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
    "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-002.jpg",
    "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-004.jpg",
    "/images/lucky-signs/laser-cutting-cnc.jpg",
    "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-006.jpg",
    "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-008.jpg",
    "/images/lucky-signs/03-acrylic-mandir-background/img-000.jpg",
    "/images/lucky-signs/03-acrylic-mandir-background/img-001.jpg",
    "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-005.jpg",
  ],
  "uv-printing": [
    "/images/lucky-signs/08-vinyl-printing/img-000.jpg",
    "/images/lucky-signs/08-vinyl-printing/img-001.jpg",
    "/images/lucky-signs/08-vinyl-printing/img-002.jpg",
    "/images/lucky-signs/01-cover-services/img-004.jpg",
    "/images/lucky-signs/08-vinyl-printing/img-003.jpg",
    "/images/lucky-signs/08-vinyl-printing/img-004.jpg",
    "/images/lucky-signs/01-cover-services/img-000.jpg",
    "/images/lucky-signs/01-cover-services/img-002.jpg",
    "/images/lucky-signs/08-vinyl-printing/img-000.jpg",
  ],
  "plotter-cutting": [
    "/images/lucky-signs/10-plotter-cutting/img-000.jpg",
    "/images/lucky-signs/10-plotter-cutting/img-002.jpg",
    "/images/lucky-signs/11-school-bus-branding/img-000.jpg",
    "/images/lucky-signs/01-cover-services/img-005.jpg",
    "/images/lucky-signs/11-school-bus-branding/img-002.jpg",
    "/images/lucky-signs/11-school-bus-branding/img-000.jpg",
    "/images/lucky-signs/10-plotter-cutting/img-000.jpg",
    "/images/lucky-signs/10-plotter-cutting/img-002.jpg",
    "/images/lucky-signs/11-school-bus-branding/img-002.jpg",
  ],
  "acrylic-bending": [
    "/images/lucky-signs/04-acrylic-bending-products/img-000.jpg",
    "/images/lucky-signs/04-acrylic-bending-products/img-001.jpg",
    "/images/lucky-signs/04-acrylic-bending-products/img-002.jpg",
    "/images/lucky-signs/01-cover-services/img-006.jpg",
    "/images/lucky-signs/04-acrylic-bending-products/img-003.jpg",
    "/images/lucky-signs/04-acrylic-bending-products/img-005.jpg",
    "/images/lucky-signs/04-acrylic-bending-products/img-006.jpg",
    "/images/lucky-signs/04-acrylic-bending-products/img-007.jpg",
    "/images/lucky-signs/04-acrylic-bending-products/img-000.jpg",
  ],
  "engraving": [
    "/images/lucky-signs/05-acrylic-memento/img-000.jpg",
    "/images/lucky-signs/05-acrylic-memento/img-002.jpg",
    "/images/lucky-signs/07-acrylic-engraving-name-plates/img-000.jpg",
    "/images/lucky-signs/01-cover-services/img-007.jpg",
    "/images/lucky-signs/07-acrylic-engraving-name-plates/img-001.jpg",
    "/images/lucky-signs/07-acrylic-engraving-name-plates/img-002.jpg",
    "/images/lucky-signs/07-acrylic-engraving-name-plates/img-003.jpg",
    "/images/lucky-signs/07-acrylic-engraving-name-plates/img-004.jpg",
    "/images/lucky-signs/05-acrylic-memento/img-000.jpg",
  ],
  "sign-boards": [
    "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
    "/images/lucky-signs/14-led-sign-boards/img-001.jpg",
    "/images/lucky-signs/14-led-sign-boards/img-002.jpg",
    "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
    "/images/lucky-signs/12-neon-led-boards/img-001.jpg",
    "/images/lucky-signs/09-auto-glow-sign-boards/img-000.jpg",
    "/images/lucky-signs/15-internal-sign-boards/img-000.jpg",
    "/images/lucky-signs/13-led-name-plates/img-000.jpg",
    "/images/lucky-signs/14-led-sign-boards/img-003.jpg",
  ],
  "event-backdrops": [
    "/images/lucky-signs/06-events-backdrops/img-000.jpg",
    "/images/lucky-signs/06-events-backdrops/img-001.jpg",
    "/images/lucky-signs/06-events-backdrops/img-002.jpg",
    "/images/lucky-signs/06-events-backdrops/img-006.jpg",
    "/images/lucky-signs/06-events-backdrops/img-003.jpg",
    "/images/lucky-signs/06-events-backdrops/img-004.jpg",
    "/images/lucky-signs/06-events-backdrops/img-005.jpg",
    "/images/lucky-signs/06-events-backdrops/img-007.jpg",
    "/images/lucky-signs/06-events-backdrops/img-000.jpg",
  ],
};

const serviceHeroCardText: Record<string, { title: string; subtitle: string }> = {
  "laser-cutting": {
    title: "CNC Laser Cutting",
    subtitle: "±0.1mm Precision · Flame Polished Edges",
  },
  "uv-printing": {
    title: "1440 DPI UV Flatbed",
    subtitle: "Direct-to-Substrate · Instant Cured",
  },
  "plotter-cutting": {
    title: "Graphtec Vinyl Plotting",
    subtitle: "Cast Vinyl · 3M Fleet Branding",
  },
  "acrylic-bending": {
    title: "Thermo Acrylic Bending",
    subtitle: "Bubble-Free Radii · Polished Trims",
  },
  "engraving": {
    title: "Permanent Micro-Engraving",
    subtitle: "Baked Enamel Fill · Solid Brass",
  },
  "sign-boards": {
    title: "3D Illuminated LED Signs",
    subtitle: "Samsung LEDs · ACP Cladding",
  },
  "event-backdrops": {
    title: "Laser-Cut Event Monograms",
    subtitle: "Mirror Gold Acrylic · Stage Decor",
  },
};

export function ServiceGallery({
  images,
  serviceName,
  categoryLabel = "Workshop Portfolio",
  slug,
}: ServiceGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<LightboxData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Compile exactly 9 curated images for the bento grid
  const fallbackList = slug && serviceBentoImages[slug] ? serviceBentoImages[slug] : [];
  const mergedList: string[] = [];

  // Add provided images first, then fallback
  if (images && images.length > 0) {
    images.forEach((img) => {
      if (!mergedList.includes(img)) mergedList.push(img);
    });
  }
  fallbackList.forEach((img) => {
    if (!mergedList.includes(img)) mergedList.push(img);
  });

  // Ensure at least 9 images
  while (mergedList.length < 9) {
    mergedList.push(
      fallbackList[mergedList.length % fallbackList.length] ||
        "/images/lucky-signs/01-cover-services/img-000.jpg"
    );
  }

  const bentoPhotos = mergedList.slice(0, 9);
  const heroCardCopy =
    (slug && serviceHeroCardText[slug]) || {
      title: `${serviceName} Craftsmanship`,
      subtitle: "100% In-House in Bazar Guard",
    };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedItem({
      title: `${serviceName} – Frame #${index + 1}`,
      categoryLabel: categoryLabel,
      image: bentoPhotos[index],
      description: `Authentic ${serviceName.toLowerCase()} fabrication sample photographed directly inside Lucky Signs workshop in Bazar Guard, Hyderabad.`,
      location: "Bazar Guard, Hyderabad",
    });
  };

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? bentoPhotos.length - 1 : currentIndex - 1;
    openLightbox(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === bentoPhotos.length - 1 ? 0 : currentIndex + 1;
    openLightbox(nextIdx);
  };

  return (
    <div className="space-y-5 sm:space-y-7">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-2.5">
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
          <span className="w-6 sm:w-8 h-[2px] bg-[#D97706] inline-block" />
          <span>WORKSHOP PORTFOLIO</span>
          <span className="w-6 sm:w-8 h-[2px] bg-[#D97706] inline-block" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-navy tracking-tight font-serif sm:font-heading">
          From Our <span className="text-[#D97706]">Gallery</span>
        </h2>

        <p className="text-xs sm:text-sm text-brand-slate max-w-lg mx-auto font-normal leading-relaxed">
          Authentic {serviceName.toLowerCase()} craftsmanship and real workshop installations across Hyderabad. Click any photo to zoom in.
        </p>
      </div>

      {/* =========================================================================
          BENTO GRID (Identical 4-Column x 3-Row Layout on Mobile & Desktop)
          Reduced compact height: 290px (mobile) to 540px (desktop)
          ========================================================================= */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-4 grid-rows-3 gap-1.5 sm:gap-2.5 md:gap-3 h-[290px] sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[550px] w-full">
          {/* =======================================================================
              COL 1, ROW 1 (Item 0)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="col-start-1 row-start-1 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View photo 1 of ${serviceName}`}
          >
            <Image
              src={bentoPhotos[0]}
              alt={`${serviceName} sample 1`}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* =======================================================================
              COL 1, ROW 2 (Item 1)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(1)}
            className="col-start-1 row-start-2 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View photo 2 of ${serviceName}`}
          >
            <Image
              src={bentoPhotos[1]}
              alt={`${serviceName} sample 2`}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* =======================================================================
              COL 1, ROW 3 (Item 2)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(2)}
            className="col-start-1 row-start-3 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View photo 3 of ${serviceName}`}
          >
            <Image
              src={bentoPhotos[2]}
              alt={`${serviceName} sample 3`}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* =======================================================================
              COL 2, ROWS 1 & 2: SIGNATURE TALL HERO TILE WITH WHITE CAPTION CARD
              (Identical across Mobile & Desktop)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(3)}
            className="col-start-2 row-start-1 row-span-2 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View featured highlight of ${serviceName}`}
          >
            {/* Upper Image Section */}
            <div className="relative flex-1 min-h-0 w-full overflow-hidden bg-neutral-900">
              <Image
                src={bentoPhotos[3]}
                alt={`${serviceName} featured showcase`}
                fill
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/90 text-brand-navy flex items-center justify-center shadow-xs">
                <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </div>
            </div>

            {/* Bottom White Caption Box */}
            <div className="bg-white p-1 sm:p-2 md:p-2.5 text-center flex flex-col items-center justify-center border-t border-slate-100 shrink-0">
              <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#FFF9F3] text-brand-orange flex items-center justify-center mb-0.5 sm:mb-1 shadow-2xs">
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3" />
              </div>
              <h4 className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-bold font-heading text-brand-navy leading-tight group-hover:text-brand-orange transition-colors truncate max-w-full px-0.5">
                {heroCardCopy.title}
              </h4>
              <p className="text-[6.5px] sm:text-[8px] md:text-[9.5px] lg:text-[10.5px] text-brand-slate font-medium mt-0.5 tracking-tight truncate max-w-full px-0.5 hidden xs:block sm:block">
                {heroCardCopy.subtitle}
              </p>
            </div>
          </button>

          {/* =======================================================================
              COL 2, ROW 3 (Item 4)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(4)}
            className="col-start-2 row-start-3 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View photo 5 of ${serviceName}`}
          >
            <Image
              src={bentoPhotos[4]}
              alt={`${serviceName} sample 5`}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* =======================================================================
              COL 3 & 4, ROW 1: WIDE PANORAMA SPANNING 2 COLUMNS (Item 5)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(5)}
            className="col-start-3 col-span-2 row-start-1 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View wide panoramic photo 6 of ${serviceName}`}
          >
            <Image
              src={bentoPhotos[5]}
              alt={`${serviceName} panoramic sample 6`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* =======================================================================
              COL 3, ROW 2: PORTRAIT / VERTICAL (Item 6)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(6)}
            className="col-start-3 row-start-2 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View portrait photo 7 of ${serviceName}`}
          >
            <Image
              src={bentoPhotos[6]}
              alt={`${serviceName} portrait sample 7`}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* =======================================================================
              COL 4, ROW 2: PORTRAIT / VERTICAL (Item 7)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(7)}
            className="col-start-4 row-start-2 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View portrait photo 8 of ${serviceName}`}
          >
            <Image
              src={bentoPhotos[7]}
              alt={`${serviceName} portrait sample 8`}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* =======================================================================
              COL 3 & 4, ROW 3: WIDE PANORAMA SPANNING 2 COLUMNS (Item 8)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openLightbox(8)}
            className="col-start-3 col-span-2 row-start-3 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View wide panoramic photo 9 of ${serviceName}`}
          >
            <Image
              src={bentoPhotos[8]}
              alt={`${serviceName} panoramic sample 9`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Link to Full Gallery */}
      <div className="flex justify-center pt-2">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-border/80 hover:border-brand-orange text-brand-navy hover:text-brand-orange font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-300 group"
        >
          <span>Explore Complete Hyderabad Portfolio</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Lightbox for Zoomed High-Resolution Inspection */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={bentoPhotos.length > 1 ? handlePrev : undefined}
        onNext={bentoPhotos.length > 1 ? handleNext : undefined}
      />
    </div>
  );
}
