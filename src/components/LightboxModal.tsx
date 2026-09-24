"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export interface LightboxData {
  title: string;
  categoryLabel?: string;
  image: string;
  description?: string;
  client?: string;
  location?: string;
}

interface LightboxModalProps {
  item: LightboxData | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export function LightboxModal({ item, onClose, onPrev, onNext }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-brand-navy/90 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] h-[75vh] sm:h-[85vh] bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors focus:outline-none cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container with Prev/Next Buttons */}
        <div className="relative w-full h-full flex items-center justify-center group">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-contain p-2 sm:p-4"
            priority
          />

          {/* Previous Button */}
          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-brand-orange text-white flex items-center justify-center transition-colors cursor-pointer opacity-80 hover:opacity-100 shadow-lg"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-brand-orange text-white flex items-center justify-center transition-colors cursor-pointer opacity-80 hover:opacity-100 shadow-lg"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
