"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import {
  Lightbulb,
  Layers,
  Sparkles,
  CreditCard,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { LightboxModal } from "@/components/LightboxModal";

export function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const collageCards = [
    {
      id: "card-led",
      title: "LED Sign Boards",
      label: "LED Sign Boards",
      src: "/images/lucky-signs/14-led-sign-boards/img-001.jpg",
      category: "LED Signs",
    },
    {
      id: "card-acrylic",
      title: "Acrylic Signs & Channel Letters",
      label: "Acrylic Signs",
      src: "/images/lucky-signs/03-acrylic-mandir-background/img-000.jpg",
      category: "Acrylic Signs",
    },
    {
      id: "card-laser",
      title: "Laser Cutting & Precision Engraving",
      label: "Laser Cutting & Engraving",
      src: "/images/lucky-signs/laser-cutting-cnc.jpg",
      category: "Laser CNC",
    },
    {
      id: "card-nameplate",
      title: "Custom Metal & Acrylic Name Plates",
      label: "Name Plates",
      src: "/images/lucky-signs/07-acrylic-engraving-name-plates/img-000.jpg",
      category: "Name Plates",
    },
    {
      id: "card-center",
      title: "Lucky Signs 3D LED Storefront Elevation",
      label: "Lucky Signs Storefront",
      src: "/images/lucky-signs/storefront-daylight.jpg",
      category: "Commercial Storefront",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF8F5] text-neutral-900 -mt-20 pt-24 sm:pt-28 pb-6 sm:pb-8 lg:pb-10 border-b border-neutral-200/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
            
            {/* =========================================================================
                LEFT COLUMN / TOP ON MOBILE: TYPOGRAPHY, HIGHLIGHTS & BUTTONS
                ========================================================================= */}
            <div className="lg:col-span-5 text-left space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-7">
              
              {/* Top Label */}
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-brand-orange" />
                <span className="text-[11px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-neutral-700">
                  CUSTOM SIGNAGE SOLUTIONS
                </span>
              </div>

              {/* Large Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[3.75rem] xl:text-[4.5rem] font-extrabold font-heading text-neutral-900 tracking-tight leading-[1.08] lg:leading-[1.05]">
                Your Vision <br />
                <span className="text-brand-orange">
                  Our Signage
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-neutral-600 leading-relaxed max-w-lg font-normal">
                From stunning LED boards to precision laser cutting, we bring your ideas to life with quality and creativity.
              </p>

              {/* Four Service Highlights (4-item row on mobile, 2x2 grid on desktop) */}
              <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-x-6 lg:gap-y-4 pt-1 max-w-xl">
                
                {/* 1. LED Signs */}
                <Link
                  href="/services/sign-boards"
                  className="flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-1.5 lg:gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange bg-brand-orange/5 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                    <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                  </div>
                  <span className="text-[10px] sm:text-xs lg:text-sm xl:text-[15px] font-bold text-neutral-900 group-hover:text-brand-orange transition-colors leading-tight">
                    LED Signs
                  </span>
                </Link>

                {/* 2. Acrylic Signs */}
                <Link
                  href="/services/acrylic-bending"
                  className="flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-1.5 lg:gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange bg-brand-orange/5 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                  </div>
                  <span className="text-[10px] sm:text-xs lg:text-sm xl:text-[15px] font-bold text-neutral-900 group-hover:text-brand-orange transition-colors leading-tight">
                    Acrylic Signs
                  </span>
                </Link>

                {/* 3. Laser Cutting */}
                <Link
                  href="/services/laser-cutting"
                  className="flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-1.5 lg:gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange bg-brand-orange/5 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                  </div>
                  <span className="text-[10px] sm:text-xs lg:text-sm xl:text-[15px] font-bold text-neutral-900 group-hover:text-brand-orange transition-colors leading-tight">
                    Laser Cutting &amp; Engraving
                  </span>
                </Link>

                {/* 4. Name Plates */}
                <Link
                  href="/gallery"
                  className="flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-1.5 lg:gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange bg-brand-orange/5 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                    <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5" />
                  </div>
                  <span className="text-[10px] sm:text-xs lg:text-sm xl:text-[15px] font-bold text-neutral-900 group-hover:text-brand-orange transition-colors leading-tight">
                    Name Plates &amp; More
                  </span>
                </Link>

              </div>

              {/* Action Buttons: Get a Quote & Explore Services */}
              <div className="flex items-center gap-3.5 pt-2 sm:pt-3">
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 lg:px-7 lg:py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm lg:text-base shadow-md shadow-brand-orange/25 hover:shadow-lg hover:shadow-brand-orange/35 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 lg:px-7 lg:py-3.5 bg-[#FAF8F5] hover:bg-neutral-900 hover:text-white text-neutral-900 border border-neutral-900 font-bold text-xs sm:text-sm lg:text-base transition-all duration-300"
                >
                  <span>Explore Services</span>
                </Link>
              </div>

            </div>

            {/* =========================================================================
                RIGHT COLUMN / BOTTOM ON MOBILE: COLLAGE WITH CENTER DOMINANT CARD
                ========================================================================= */}
            <div className="lg:col-span-7 relative w-full flex items-center justify-center pt-4 pb-6 sm:py-6 lg:py-4">
              
              {/* Warm Soft Orange Organic Backdrop Shape */}
              <div 
                className="absolute inset-1 sm:inset-2 lg:-inset-3 xl:-inset-4 bg-[#FED7AA]/45 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] transform rotate-1 -z-10"
                style={{
                  clipPath: "polygon(3% 0%, 98% 2%, 97% 97%, 0% 93%)",
                }}
              />

              {/* Decorative Top-Left Radiant Doodle Rays */}
              <div className="absolute -top-1 sm:-top-2 lg:-top-4 left-2 sm:left-4 lg:left-0 z-20 text-brand-orange select-none pointer-events-none">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M12 28L6 22" />
                  <path d="M18 20L12 12" />
                  <path d="M28 16L24 8" />
                </svg>
              </div>

              {/* Decorative Top-Right Radiant Doodle Rays */}
              <div className="absolute -top-1 sm:-top-2 lg:-top-4 right-4 sm:right-6 lg:right-2 z-20 text-brand-orange select-none pointer-events-none">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M28 28L34 22" />
                  <path d="M22 20L28 12" />
                  <path d="M12 16L16 8" />
                </svg>
              </div>

              {/* Collage Grid: Left 2 Cards + Center Large Storefront + Right 2 Cards */}
              <div className="grid grid-cols-12 gap-2 sm:gap-3.5 lg:gap-4 xl:gap-5 items-center w-full max-w-[760px] lg:max-w-[840px] xl:max-w-[880px]">
                
                {/* --- LEFT SUB-COLUMN (2 Stacked Cards: LED & Acrylic) --- */}
                <div className="col-span-3 flex flex-col gap-2 sm:gap-3.5 lg:gap-4 xl:gap-5 z-10">
                  {/* Top-Left: LED Sign Boards */}
                  <div
                    onClick={() => setActiveImageIndex(0)}
                    className="group relative h-[88px] sm:h-[135px] lg:h-[205px] xl:h-[225px] w-full rounded-xl sm:rounded-2xl lg:rounded-[1.4rem] overflow-hidden bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border sm:border-2 border-neutral-900/10 hover:-translate-y-1"
                  >
                    <Image
                      src={collageCards[0].src}
                      alt={collageCards[0].title}
                      fill
                      sizes="(max-width: 768px) 30vw, 18vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out brightness-[1.1] contrast-[1.1] saturate-[1.25]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 lg:bottom-3 lg:left-3 lg:right-3 text-white">
                      <span className="text-[8px] sm:text-xs lg:text-sm font-bold truncate block">
                        {collageCards[0].label}
                      </span>
                    </div>
                  </div>

                  {/* Bottom-Left: Acrylic Signs */}
                  <div
                    onClick={() => setActiveImageIndex(1)}
                    className="group relative h-[88px] sm:h-[135px] lg:h-[205px] xl:h-[225px] w-full rounded-xl sm:rounded-2xl lg:rounded-[1.4rem] overflow-hidden bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border sm:border-2 border-neutral-900/10 hover:-translate-y-1"
                  >
                    <Image
                      src={collageCards[1].src}
                      alt={collageCards[1].title}
                      fill
                      sizes="(max-width: 768px) 30vw, 18vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out brightness-[1.08] contrast-[1.08] saturate-[1.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 lg:bottom-3 lg:left-3 lg:right-3 text-white">
                      <span className="text-[8px] sm:text-xs lg:text-sm font-bold truncate block">
                        {collageCards[1].label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* --- CENTER COLUMN (Large Dominant Storefront Card) --- */}
                <div className="col-span-6 z-20">
                  <div
                    onClick={() => setActiveImageIndex(4)}
                    className="group relative h-[195px] sm:h-[300px] lg:h-[445px] xl:h-[490px] w-full rounded-2xl sm:rounded-[2rem] lg:rounded-[2.4rem] overflow-hidden bg-neutral-900 shadow-2xl hover:shadow-brand-orange/30 transition-all duration-300 cursor-pointer border-2 sm:border-4 lg:border-[5px] border-white ring-1 ring-black/15 hover:-translate-y-1"
                  >
                    <Image
                      src={collageCards[4].src}
                      alt={collageCards[4].title}
                      fill
                      priority
                      sizes="(max-width: 768px) 60vw, 40vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out brightness-[1.06] contrast-[1.08] saturate-[1.18]"
                    />
                    
                    {/* Softened gradient overlay so photo clarity and colors pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Top Storefront Floating Pill */}
                    <div className="absolute top-2 left-2 right-2 sm:top-3.5 sm:left-3.5 sm:right-3.5 lg:top-4 lg:left-4 lg:right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 lg:px-3.5 lg:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[8px] sm:text-[11px] lg:text-xs font-bold uppercase tracking-wider border border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                        <span>Lucky Signs Storefront</span>
                      </span>
                      <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    {/* Bottom Storefront Text */}
                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-5 lg:left-5 lg:right-5 text-white">
                      <span className="text-[8px] sm:text-[11px] lg:text-xs font-bold uppercase tracking-wider text-brand-orange block">
                        Commercial Grade Signage
                      </span>
                      <h3 className="text-[11px] sm:text-base lg:text-lg xl:text-xl font-bold font-heading text-white truncate mt-0.5">
                        Custom 3D LED Illuminated Storefronts
                      </h3>
                    </div>
                  </div>
                </div>

                {/* --- RIGHT SUB-COLUMN (2 Stacked Cards: Laser Cutting & Name Plates) --- */}
                <div className="col-span-3 flex flex-col gap-2 sm:gap-3.5 lg:gap-4 xl:gap-5 z-10">
                  {/* Top-Right: Laser Cutting & Engraving */}
                  <div
                    onClick={() => setActiveImageIndex(2)}
                    className="group relative h-[88px] sm:h-[135px] lg:h-[205px] xl:h-[225px] w-full rounded-xl sm:rounded-2xl lg:rounded-[1.4rem] overflow-hidden bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border sm:border-2 border-neutral-900/10 hover:-translate-y-1"
                  >
                    <Image
                      src={collageCards[2].src}
                      alt={collageCards[2].title}
                      fill
                      sizes="(max-width: 768px) 30vw, 18vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out brightness-[1.08] contrast-[1.08] saturate-[1.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 lg:bottom-3 lg:left-3 lg:right-3 text-white">
                      <span className="text-[8px] sm:text-xs lg:text-sm font-bold truncate block">
                        {collageCards[2].label}
                      </span>
                    </div>
                  </div>

                  {/* Bottom-Right: Name Plates */}
                  <div
                    onClick={() => setActiveImageIndex(3)}
                    className="group relative h-[88px] sm:h-[135px] lg:h-[205px] xl:h-[225px] w-full rounded-xl sm:rounded-2xl lg:rounded-[1.4rem] overflow-hidden bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border sm:border-2 border-neutral-900/10 hover:-translate-y-1"
                  >
                    <Image
                      src={collageCards[3].src}
                      alt={collageCards[3].title}
                      fill
                      sizes="(max-width: 768px) 30vw, 18vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out brightness-[1.08] contrast-[1.08] saturate-[1.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2 lg:bottom-3 lg:left-3 lg:right-3 text-white">
                      <span className="text-[8px] sm:text-xs lg:text-sm font-bold truncate block">
                        {collageCards[3].label}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={
          activeImageIndex !== null
            ? {
                title: collageCards[activeImageIndex].title,
                categoryLabel: collageCards[activeImageIndex].category,
                image: collageCards[activeImageIndex].src,
                description: "High precision acrylic fabrication, CNC laser cut details, and illuminated signage crafted in Bazar Guard, Hyderabad.",
              }
            : null
        }
        onClose={() => setActiveImageIndex(null)}
        onNext={() => setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % collageCards.length : 0))}
        onPrev={() => setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + collageCards.length) % collageCards.length : 0))}
      />
    </>
  );
}
