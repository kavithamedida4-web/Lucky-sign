"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryItems, galleryCategories, GalleryItem } from "@/data/gallery-data";
import { LightboxModal } from "@/components/LightboxModal";
import { Maximize2, Link as LinkIcon, Sparkles } from "lucide-react";

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentIndex = selectedItem
    ? filteredItems.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const handlePrev = () => {
    if (filteredItems.length === 0) return;
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIdx]);
  };

  const handleNext = () => {
    if (filteredItems.length === 0) return;
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIdx]);
  };

  // Helper to determine aspect ratio pattern for artistic masonry collage feel
  const getAspectClass = (index: number) => {
    const pattern = index % 8;
    switch (pattern) {
      case 0:
        return "aspect-[4/3]"; // Landscape
      case 1:
        return "aspect-[3/4]"; // Portrait
      case 2:
        return "aspect-[16/10]"; // Wide
      case 3:
        return "aspect-[3/4]"; // Portrait
      case 4:
        return "aspect-square"; // Square
      case 5:
        return "aspect-[4/3]"; // Landscape
      case 6:
        return "aspect-[3/4]"; // Portrait
      case 7:
        return "aspect-[16/9]"; // Panoramic
      default:
        return "aspect-[4/3]";
    }
  };

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
        {galleryCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-brand-orange text-white shadow-md scale-[1.02]"
                  : "bg-white text-brand-navy border border-brand-border/80 hover:border-brand-orange/60 hover:text-brand-orange shadow-xs"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "bg-brand-offwhite text-brand-slate"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry Architectural Collage Grid (Matching Reference Photo Style) */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
        {filteredItems.map((item, idx) => {
          const isFramedCard = idx % 5 === 1; // Elegant framed card with bottom white caption box like reference
          const aspectClass = getAspectClass(idx);

          return (
            <div
              key={item.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="rounded-2xl overflow-hidden bg-white border border-brand-border/80 shadow-sm hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
                {/* Photo Container */}
                <div
                  className={`relative ${aspectClass} w-full overflow-hidden bg-neutral-900`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="w-10 h-10 rounded-full bg-white/95 text-brand-navy flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4 text-brand-orange" />
                    </div>
                  </div>

                  {/* Subtle category badge on top-left of image */}
                  {!isFramedCard && (
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-brand-navy/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md truncate">
                        {item.title}
                      </div>
                    </div>
                  )}
                </div>

                {/* Elegant White Bottom Card (Matching Reference Layout) */}
                {isFramedCard && (
                  <div className="p-3.5 sm:p-4 text-center bg-white border-t border-brand-border/60">
                    <div className="flex items-center justify-center gap-1.5 text-brand-orange mb-1">
                      <LinkIcon className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-xs sm:text-[13px] font-medium text-brand-navy line-clamp-1">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-brand-slate uppercase tracking-wider block mt-0.5">
                      {item.categoryLabel} · Hyderabad
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

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
