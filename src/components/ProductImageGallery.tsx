"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
  priority?: boolean;
}

export function ProductImageGallery({ images, alt, priority = false }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const currentImage = images[activeIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      {/* Main Image Display */}
      <div className="relative h-[300px] sm:h-[360px] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-border/60 bg-neutral-900 group">
        <Image
          key={currentImage}
          src={currentImage}
          alt={`${alt} view ${activeIndex + 1}`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 500px"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
        />

        {/* Counter Badge */}
        {images.length > 1 && (
          <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-brand-navy border border-white/20 text-white text-[11px] font-semibold tracking-wider">
            {activeIndex + 1} / {images.length}
          </div>
        )}

        {/* Prev / Next Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous product image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brand-navy/90 hover:bg-brand-navy text-white flex items-center justify-center transition-colors opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next product image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brand-navy/90 hover:bg-brand-navy text-white flex items-center justify-center transition-colors opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Interactive Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
          {images.map((img, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Switch to ${alt} image ${idx + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative h-18 sm:h-20 rounded-xl overflow-hidden transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                  isActive
                    ? "ring-2 ring-brand-orange ring-offset-2 border-brand-orange shadow-sm"
                    : "border border-brand-border/70 opacity-70 hover:opacity-100 hover:border-brand-orange/50"
                }`}
              >
                <Image
                  src={img}
                  alt={`${alt} thumbnail ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
