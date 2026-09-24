"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LightboxModal } from "@/components/LightboxModal";
import { GalleryItem } from "@/data/gallery-data";
import { Maximize2, Link as LinkIcon, ArrowRight } from "lucide-react";

interface ArchitecturalGalleryProps {
  showViewAllButton?: boolean;
}

export function ArchitecturalGallery({ showViewAllButton = true }: ArchitecturalGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // 9 curated items mapping to the exact slots in the reference image
  const galleryItemsList: GalleryItem[] = [
    // 0: Col 1 Top (Ceiling Jaali)
    {
      id: "arch-1",
      title: "Architectural Ceiling Jaali Grills",
      category: "grills",
      categoryLabel: "CNC Laser Cutting",
      image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
      description: "Precision CNC cut acrylic & MDF jaali for modern ceilings and partitions.",
      location: "Hyderabad",
    },
    // 1: Col 1 Middle (Storefront Elevation)
    {
      id: "arch-2",
      title: "Tatva Modern Dining Facade",
      category: "sign-boards",
      categoryLabel: "3D LED Sign",
      image: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
      description: "Warm illuminated channel letters on architectural ACP facade.",
      location: "Hyderabad",
    },
    // 2: Col 1 Bottom (Mandir Arch Panel)
    {
      id: "arch-3",
      title: "Sacred Om & Temple Arch Backlit Panel",
      category: "mandir",
      categoryLabel: "Mandir Backdrops",
      image: "/images/lucky-signs/03-acrylic-mandir-background/img-000.jpg",
      description: "Multi-layered gold mirror acrylic with warm Samsung LED illumination.",
      location: "Banjara Hills",
    },
    // 3: Col 2 Top (Tall Portrait with Framed Caption Box)
    {
      id: "arch-4",
      title: "Founder & Master Craftsman Mohammed Rafeeq",
      category: "craft",
      categoryLabel: "Master Workshop",
      image: "/images/lucky-signs/01-cover-services/img-000.jpg",
      description: "Over 20 years of hands-on precision craftsmanship at Bazar Guard.",
      location: "Bazar Guard",
    },
    // 4: Col 2 Bottom (Villa Entrance Name Plate)
    {
      id: "arch-5",
      title: "Architectural Golden Mirror Villa Name Plate",
      category: "name-plates",
      categoryLabel: "LED Name Plate",
      image: "/images/lucky-signs/07-acrylic-led-name-plates/img-000.jpg",
      description: "Weatherproof gold titanium finish with warm edge lighting.",
      location: "Jubilee Hills",
    },
    // 5: Cols 3-4 Top Span (Wide Horizontal Elevation)
    {
      id: "arch-6",
      title: "Mythri Hospital Main Elevation Sign",
      category: "sign-boards",
      categoryLabel: "Commercial Sign Board",
      image: "/images/lucky-signs/14-led-sign-boards/img-002.jpg",
      description: "Multi-story illuminated sign board engineered for long-distance city visibility.",
      location: "Hyderabad",
    },
    // 6: Col 3 Middle (Statue / Award Detail)
    {
      id: "arch-7",
      title: "Custom Cut Acrylic Corporate Award",
      category: "mementos",
      categoryLabel: "Trophies & Mementos",
      image: "/images/lucky-signs/06-acrylic-mementos-awards/img-000.jpg",
      description: "Diamond-polished bevel-edged cast acrylic corporate trophy.",
      location: "HITEC City",
    },
    // 7: Col 4 Middle (Storefront Corner)
    {
      id: "arch-8",
      title: "The Broast Factory Storefront",
      category: "sign-boards",
      categoryLabel: "Storefront LED",
      image: "/images/lucky-signs/14-led-sign-boards/img-001.jpg",
      description: "Vibrant high-contrast outdoor illuminated sign board with IP68 LEDs.",
      location: "Hyderabad",
    },
    // 8: Cols 3-4 Bottom Span (Wide Interior Glow)
    {
      id: "arch-9",
      title: "Custom Neon Glow Art & Wall Decor",
      category: "neon-led",
      categoryLabel: "Flex-Neon Art",
      image: "/images/lucky-signs/09-neon-sign-boards/img-000.jpg",
      description: "Contour-cut acrylic with vibrant silicone neon tubing for interiors and cafes.",
      location: "Gachibowli",
    },
  ];

  const currentIndex = selectedItem
    ? galleryItemsList.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const handlePrev = () => {
    if (galleryItemsList.length === 0) return;
    const prevIdx =
      (currentIndex - 1 + galleryItemsList.length) % galleryItemsList.length;
    setSelectedItem(galleryItemsList[prevIdx]);
  };

  const handleNext = () => {
    if (galleryItemsList.length === 0) return;
    const nextIdx = (currentIndex + 1) % galleryItemsList.length;
    setSelectedItem(galleryItemsList[nextIdx]);
  };

  return (
    <div className="w-full">
      {/* Exact 4-Column Architectural Collage Grid matching reference image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-5 items-start">
        
        {/* ================= COLUMN 1 (3 Stacked Images) ================= */}
        <div className="flex flex-col gap-3.5 sm:gap-4 md:gap-5">
          {/* Col 1 Top */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(galleryItemsList[0])}
            className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={galleryItemsList[0].image}
              alt={galleryItemsList[0].title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                <Maximize2 className="w-4 h-4 text-brand-orange" />
              </div>
            </div>
          </div>

          {/* Col 1 Middle */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(galleryItemsList[1])}
            className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={galleryItemsList[1].image}
              alt={galleryItemsList[1].title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                <Maximize2 className="w-4 h-4 text-brand-orange" />
              </div>
            </div>
          </div>

          {/* Col 1 Bottom */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(galleryItemsList[2])}
            className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={galleryItemsList[2].image}
              alt={galleryItemsList[2].title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                <Maximize2 className="w-4 h-4 text-brand-orange" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2 (Tall Photo with Framed Caption Card + Bottom Photo) ================= */}
        <div className="flex flex-col gap-3.5 sm:gap-4 md:gap-5">
          {/* Col 2 Top: Tall Portrait Card with Framed Bottom Caption like Reference Image */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(galleryItemsList[3])}
            className="group rounded-xl overflow-hidden bg-white border border-brand-border/80 shadow-xs hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[3/4.6] w-full overflow-hidden bg-neutral-900">
              <Image
                src={galleryItemsList[3].image}
                alt={galleryItemsList[3].title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                  <Maximize2 className="w-4 h-4 text-brand-orange" />
                </div>
              </div>
            </div>

            {/* Framed White Card matching reference layout with chain icon */}
            <div className="p-3.5 sm:p-4 text-center bg-white border-t border-brand-border/60">
              <div className="flex items-center justify-center text-brand-orange mb-1">
                <LinkIcon className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-[13px] font-medium text-brand-navy font-heading line-clamp-1">
                Original In-House Craftsmanship
              </p>
              <p className="text-[10px] text-brand-slate tracking-wide mt-0.5">
                Modern Laser &amp; Acrylic Fabrication
              </p>
            </div>
          </div>

          {/* Col 2 Bottom: Classical Arch / Doorway photo */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(galleryItemsList[4])}
            className="group relative aspect-[4/3.8] w-full rounded-xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={galleryItemsList[4].image}
              alt={galleryItemsList[4].title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                <Maximize2 className="w-4 h-4 text-brand-orange" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= COLUMNS 3 & 4 (Wide Top Banner + 2 Middle Vertical Photos + Wide Bottom Banner) ================= */}
        <div className="sm:col-span-2 flex flex-col gap-3.5 sm:gap-4 md:gap-5">
          {/* Top Wide Horizontal Banner spanning 2 columns (Like London Bridge in reference) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(galleryItemsList[5])}
            className="group relative aspect-[16/7.5] w-full rounded-xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={galleryItemsList[5].image}
              alt={galleryItemsList[5].title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                <Maximize2 className="w-4 h-4 text-brand-orange" />
              </div>
            </div>
          </div>

          {/* Middle Row: 2 Parallel Side-by-Side Photos (Like Statue + Street Corner in reference) */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:gap-5">
            {/* Col 3 Middle */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedItem(galleryItemsList[6])}
              className="group relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={galleryItemsList[6].image}
                alt={galleryItemsList[6].title}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                  <Maximize2 className="w-4 h-4 text-brand-orange" />
                </div>
              </div>
            </div>

            {/* Col 4 Middle */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedItem(galleryItemsList[7])}
              className="group relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={galleryItemsList[7].image}
                alt={galleryItemsList[7].title}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                  <Maximize2 className="w-4 h-4 text-brand-orange" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wide Horizontal Banner spanning 2 columns (Like Museum Hallway in reference) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(galleryItemsList[8])}
            className="group relative aspect-[16/7.5] w-full rounded-xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:shadow-lg hover:border-brand-orange/50 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={galleryItemsList[8].image}
              alt={galleryItemsList[8].title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-brand-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-md">
                <Maximize2 className="w-4 h-4 text-brand-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered bottom pill button */}
      {showViewAllButton && (
        <div className="flex justify-center pt-10 sm:pt-14">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-brand-navy hover:bg-brand-orange text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-300 group"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
