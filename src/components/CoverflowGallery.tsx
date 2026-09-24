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
      {/* Compact 9-Photo Editorial Masonry Collage Grid */}
      <div className="w-full max-w-4xl lg:max-w-[1020px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-2.5 lg:gap-3 items-stretch">
          
          {/* =========================================================================
              COLUMN 1 (Left: 3 Stacked Images - Top, Middle Tall, Bottom)
              ========================================================================= */}
          <div className="lg:col-span-3 flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
            {/* Top Image: Aspect ~ 16/10 */}
            <button
              type="button"
              onClick={() => openPhoto(0)}
              className="group relative aspect-[16/10] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer text-left focus:outline-none"
              aria-label={`View ${collagePhotos[0].title}`}
            >
              <Image
                src={collagePhotos[0].image}
                alt={collagePhotos[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.06] contrast-[1.08] saturate-[1.18]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                <span className="text-[10px] font-bold truncate">{collagePhotos[0].title}</span>
                <ZoomIn className="w-3 h-3 shrink-0 ml-1" />
              </div>
            </button>

            {/* Middle Image: Taller Aspect ~ 4/4.5 */}
            <button
              type="button"
              onClick={() => openPhoto(1)}
              className="group relative aspect-[4/4.4] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer text-left focus:outline-none"
              aria-label={`View ${collagePhotos[1].title}`}
            >
              <Image
                src={collagePhotos[1].image}
                alt={collagePhotos[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.08] contrast-[1.08] saturate-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                <span className="text-[10px] font-bold truncate">{collagePhotos[1].title}</span>
                <ZoomIn className="w-3 h-3 shrink-0 ml-1" />
              </div>
            </button>

            {/* Bottom Image: Aspect ~ 16/10 */}
            <button
              type="button"
              onClick={() => openPhoto(2)}
              className="group relative aspect-[16/10] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer text-left focus:outline-none"
              aria-label={`View ${collagePhotos[2].title}`}
            >
              <Image
                src={collagePhotos[2].image}
                alt={collagePhotos[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.08] contrast-[1.08] saturate-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                <span className="text-[10px] font-bold truncate">{collagePhotos[2].title}</span>
                <ZoomIn className="w-3 h-3 shrink-0 ml-1" />
              </div>
            </button>
          </div>

          {/* =========================================================================
              COLUMN 2 (Middle: Tall Featured Card with White Caption + Bottom Card)
              ========================================================================= */}
          <div className="lg:col-span-3 flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
            {/* Top: Tall Vertical Featured Card with White Caption Box */}
            <div
              onClick={() => openPhoto(3)}
              className="group flex-1 flex flex-col rounded-lg sm:rounded-xl overflow-hidden border border-neutral-200/90 bg-white shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative min-h-[170px] sm:min-h-[200px] lg:min-h-[220px] flex-1 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={collagePhotos[3].image}
                  alt={collagePhotos[3].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.06] contrast-[1.08] saturate-[1.18]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* White Caption Strip matching Reference Layout */}
              <div className="p-2 sm:p-2.5 text-center bg-white border-t border-neutral-100 flex flex-col items-center justify-center space-y-0.5">
                <div className="flex items-center gap-1 text-brand-orange">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-orange">
                    Crafted in Hyderabad
                  </span>
                </div>
                <h4 className="text-[11px] sm:text-xs font-bold font-heading text-neutral-900 group-hover:text-brand-orange transition-colors line-clamp-1">
                  Custom 3D LED Sign Boards
                </h4>
                <p className="text-[9.5px] text-neutral-400 line-clamp-1">
                  In-House Fabrication · Bazar Guard
                </p>
              </div>
            </div>

            {/* Bottom: Aspect ~ 16/10 */}
            <button
              type="button"
              onClick={() => openPhoto(4)}
              className="group relative aspect-[16/10] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer text-left focus:outline-none"
              aria-label={`View ${collagePhotos[4].title}`}
            >
              <Image
                src={collagePhotos[4].image}
                alt={collagePhotos[4].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.08] contrast-[1.08] saturate-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                <span className="text-[10px] font-bold truncate">{collagePhotos[4].title}</span>
                <ZoomIn className="w-3 h-3 shrink-0 ml-1" />
              </div>
            </button>
          </div>

          {/* =========================================================================
              COLUMNS 3 & 4 (Right Half: Wide Top Banner + 2 Middle Cards + Wide Bottom)
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
            {/* Top: Wide Horizontal Banner spanning 2 columns */}
            <button
              type="button"
              onClick={() => openPhoto(5)}
              className="group relative aspect-[16/6] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer text-left focus:outline-none"
              aria-label={`View ${collagePhotos[5].title}`}
            >
              <Image
                src={collagePhotos[5].image}
                alt={collagePhotos[5].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.06] contrast-[1.08] saturate-[1.18]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2.5 right-2.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                <div>
                  <span className="text-[8.5px] font-bold uppercase tracking-wider text-brand-orange block">
                    Commercial Facade
                  </span>
                  <span className="text-xs font-bold truncate block">
                    {collagePhotos[5].title}
                  </span>
                </div>
                <ZoomIn className="w-3 h-3 shrink-0 ml-2" />
              </div>
            </button>

            {/* Middle Row: 2 Split Cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:gap-3">
              {/* Left Middle Card */}
              <button
                type="button"
                onClick={() => openPhoto(6)}
                className="group relative aspect-[1/0.95] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer text-left focus:outline-none"
                aria-label={`View ${collagePhotos[6].title}`}
              >
                <Image
                  src={collagePhotos[6].image}
                  alt={collagePhotos[6].title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.08] contrast-[1.08] saturate-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                  <span className="text-[10px] font-bold truncate">{collagePhotos[6].title}</span>
                  <ZoomIn className="w-3 h-3 shrink-0 ml-1" />
                </div>
              </button>

              {/* Right Middle Card */}
              <button
                type="button"
                onClick={() => openPhoto(7)}
                className="group relative aspect-[1/0.95] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer text-left focus:outline-none"
                aria-label={`View ${collagePhotos[7].title}`}
              >
                <Image
                  src={collagePhotos[7].image}
                  alt={collagePhotos[7].title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.1] contrast-[1.1] saturate-[1.25]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                  <span className="text-[10px] font-bold truncate">{collagePhotos[7].title}</span>
                  <ZoomIn className="w-3 h-3 shrink-0 ml-1" />
                </div>
              </button>
            </div>

            {/* Bottom: Wide Horizontal Panoramic Banner spanning 2 columns */}
            <button
              type="button"
              onClick={() => openPhoto(8)}
              className="group relative aspect-[16/6] w-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-brand-orange/50 transition-all duration-300 cursor-pointer text-left focus:outline-none"
              aria-label={`View ${collagePhotos[8].title}`}
            >
              <Image
                src={collagePhotos[8].image}
                alt={collagePhotos[8].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.06] contrast-[1.08] saturate-[1.18]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2.5 right-2.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                <div>
                  <span className="text-[8.5px] font-bold uppercase tracking-wider text-brand-orange block">
                    In-House Precision
                  </span>
                  <span className="text-xs font-bold truncate block">
                    {collagePhotos[8].title}
                  </span>
                </div>
                <ZoomIn className="w-3 h-3 shrink-0 ml-2" />
              </div>
            </button>
          </div>

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
