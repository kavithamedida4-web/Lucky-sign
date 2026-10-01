"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LightboxModal, LightboxData } from "@/components/LightboxModal";
import { Sparkles, ZoomIn } from "lucide-react";

export function CoverflowGallery() {
  const [selectedItem, setSelectedItem] = useState<LightboxData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Exact 9-Photo Editorial Masonry Collage matching the reference layout
  const collagePhotos = [
    // Column 1 (3 items: top, middle tall, bottom)
    {
      id: "photo-1",
      title: "Mythri Hospital Main Elevation LED Sign",
      category: "Commercial Sign Boards",
      image: "/images/lucky-signs/14-led-sign-boards/img-002.jpg",
      description: "Multi-story illuminated medical hospital sign board engineered for long-distance city visibility.",
      location: "Bazar Guard, Hyderabad",
    },
    {
      id: "photo-2",
      title: "Acrylic CNC Laser-Cut Ceiling & Jaali Grill",
      category: "Jaali Grills & Ceilings",
      image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
      description: "Intricate laser-cut acrylic and MDF jaali partition grills with polished edges.",
      location: "Hyderabad",
    },
    {
      id: "photo-3",
      title: "Sacred Om Backlit Mandir Backdrop",
      category: "Mandir Backdrops",
      image: "/images/lucky-signs/03-acrylic-mandir-background/img-000.jpg",
      description: "Temple arch with warm halo internal lighting and Sanskrit typography.",
      location: "Hyderabad",
    },

    // Column 2 (2 items: tall featured card with caption + bottom square)
    {
      id: "photo-4",
      title: "Tatva Modern Dining Storefront Sign",
      category: "3D LED Storefronts",
      image: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
      description: "Custom illuminated 3D channel letters with warm ambient backlight on architectural ACP facade.",
      location: "Hyderabad",
    },
    {
      id: "photo-5",
      title: "Architectural Golden Villa Name Plate",
      category: "Name Plates",
      image: "/images/lucky-signs/07-acrylic-engraving-name-plates/img-000.jpg",
      description: "Custom laser-cut acrylic and mirror metal name plate for modern residences.",
      location: "Hyderabad",
    },

    // Column 3 & 4 (4 items: top wide banner, middle left, middle right, bottom wide banner)
    {
      id: "photo-6",
      title: "Commercial Retail Storefront 3D LED Elevation",
      category: "Storefront Elevations",
      image: "/images/lucky-signs/storefront-daylight.jpg",
      description: "Weatherproof 3D channel letters on premium exterior composite panels.",
      location: "Hyderabad",
    },
    {
      id: "photo-7",
      title: "Custom Cut Acrylic Corporate Award Memento",
      category: "Mementos & Awards",
      image: "/images/lucky-signs/05-acrylic-memento/img-000.jpg",
      description: "Flame-polished crystal acrylic mementos with precision UV color printing.",
      location: "Hyderabad",
    },
    {
      id: "photo-8",
      title: "Custom Neon Glow Art & Ambient Sign",
      category: "Neon LED Signs",
      image: "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
      description: "12V energy efficient flexible silicone neon tubing on clear acrylic.",
      location: "Hyderabad",
    },
    {
      id: "photo-9",
      title: "Industrial CNC Laser Cutting in Workshop",
      category: "In-House Fabrication",
      image: "/images/lucky-signs/laser-cutting-cnc.jpg",
      description: "High-precision 0.1mm CNC laser cutting of acrylic, wood, and architectural panels.",
      location: "Bazar Guard Workshop",
    },
  ];

  const openPhoto = (index: number) => {
    setCurrentIndex(index);
    const photo = collagePhotos[index];
    setSelectedItem({
      title: photo.title,
      categoryLabel: photo.category,
      image: photo.image,
      description: photo.description,
      location: photo.location,
    });
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + collagePhotos.length) % collagePhotos.length;
    openPhoto(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % collagePhotos.length;
    openPhoto(nextIdx);
  };

  return (
    <>
      {/* Bento Grid (Identical 4-Column x 3-Row Layout on Mobile & Desktop) */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-4 grid-rows-3 gap-1.5 sm:gap-2.5 md:gap-3 h-[290px] sm:h-[380px] md:h-[460px] lg:h-[520px] xl:h-[550px] w-full">
          {/* =======================================================================
              COL 1, ROW 1 (Item 0)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openPhoto(0)}
            className="col-start-1 row-start-1 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View ${collagePhotos[0].title}`}
          >
            <Image
              src={collagePhotos[0].image}
              alt={collagePhotos[0].title}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
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
            onClick={() => openPhoto(1)}
            className="col-start-1 row-start-2 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View ${collagePhotos[1].title}`}
          >
            <Image
              src={collagePhotos[1].image}
              alt={collagePhotos[1].title}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
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
            onClick={() => openPhoto(2)}
            className="col-start-1 row-start-3 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View ${collagePhotos[2].title}`}
          >
            <Image
              src={collagePhotos[2].image}
              alt={collagePhotos[2].title}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>

          {/* =======================================================================
              COL 2, ROWS 1 & 2: SIGNATURE TALL HERO TILE WITH WHITE CAPTION CARD
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openPhoto(3)}
            className="col-start-2 row-start-1 row-span-2 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View featured highlight ${collagePhotos[3].title}`}
          >
            {/* Upper Image Section */}
            <div className="relative flex-1 min-h-0 w-full overflow-hidden bg-neutral-900">
              <Image
                src={collagePhotos[3].image}
                alt={collagePhotos[3].title}
                fill
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
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
                3D LED Storefronts
              </h4>
              <p className="text-[6.5px] sm:text-[8px] md:text-[9.5px] lg:text-[10.5px] text-brand-slate font-medium mt-0.5 tracking-tight truncate max-w-full px-0.5 hidden xs:block sm:block">
                Architectural Facades · Hyderabad
              </p>
            </div>
          </button>

          {/* =======================================================================
              COL 2, ROW 3 (Item 4)
              ======================================================================= */}
          <button
            type="button"
            onClick={() => openPhoto(4)}
            className="col-start-2 row-start-3 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View ${collagePhotos[4].title}`}
          >
            <Image
              src={collagePhotos[4].image}
              alt={collagePhotos[4].title}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
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
            onClick={() => openPhoto(5)}
            className="col-start-3 col-span-2 row-start-1 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View wide panoramic ${collagePhotos[5].title}`}
          >
            <Image
              src={collagePhotos[5].image}
              alt={collagePhotos[5].title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
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
            onClick={() => openPhoto(6)}
            className="col-start-3 row-start-2 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View portrait ${collagePhotos[6].title}`}
          >
            <Image
              src={collagePhotos[6].image}
              alt={collagePhotos[6].title}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
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
            onClick={() => openPhoto(7)}
            className="col-start-4 row-start-2 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View portrait ${collagePhotos[7].title}`}
          >
            <Image
              src={collagePhotos[7].image}
              alt={collagePhotos[7].title}
              fill
              sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
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
            onClick={() => openPhoto(8)}
            className="col-start-3 col-span-2 row-start-3 relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View wide panoramic ${collagePhotos[8].title}`}
          >
            <Image
              src={collagePhotos[8].image}
              alt={collagePhotos[8].title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.05] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
