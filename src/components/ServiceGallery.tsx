"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LightboxModal, LightboxData } from "@/components/LightboxModal";
import { ZoomIn } from "lucide-react";

interface ServiceGalleryProps {
  images: string[];
  serviceName: string;
  categoryLabel: string;
}

export function ServiceGallery({ images, serviceName, categoryLabel }: ServiceGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<LightboxData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedItem({
      title: `${serviceName} - Workshop Sample #${index + 1}`,
      categoryLabel: categoryLabel,
      image: images[index],
      description: `Real fabrication and installation work produced by Lucky Signs workshop in Bazar Guard, Hyderabad.`,
      location: "Bazar Guard, Hyderabad",
    });
  };

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    openLightbox(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    openLightbox(nextIdx);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => openLightbox(idx)}
            className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-neutral-900 border border-brand-border/70 shadow-xs hover:border-brand-orange/50 hover:shadow-md transition-all duration-300 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label={`View photo ${idx + 1} of ${serviceName}`}
          >
            <Image
              src={img}
              alt={`${serviceName} workshop sample ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-brand-navy/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ZoomIn className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>

      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={images.length > 1 ? handlePrev : undefined}
        onNext={images.length > 1 ? handleNext : undefined}
      />
    </>
  );
}
