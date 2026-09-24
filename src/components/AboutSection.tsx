"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { MessageCircle, ArrowRight, Sparkles, MapPin, Award, CheckCircle2 } from "lucide-react";

interface AboutSectionProps {
  showFullDetails?: boolean;
}

export function AboutSection({ showFullDetails = true }: AboutSectionProps) {
  const showcasePhotos = [
    {
      id: "craftsman",
      title: "Master Craftsman & Workshop",
      subtitle: "Mohammed Rafeeq",
      image: "/images/lucky-signs/01-cover-services/img-000.jpg",
    },
    {
      id: "laser-cutting",
      title: "CNC Laser Jaali & Grills",
      subtitle: "Precision Cutting",
      image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
    },
    {
      id: "led-storefronts",
      title: "3D LED Sign Boards",
      subtitle: "Storefront Elevations",
      image: "/images/lucky-signs/14-led-sign-boards/img-000.jpg",
    },
    {
      id: "custom-neon",
      title: "Custom Neon & Acrylic Art",
      subtitle: "Interior & Ambience",
      image: "/images/lucky-signs/12-neon-led-boards/img-000.jpg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* =========================================================================
          1. TOP WARM GOLDEN/AMBER BANNER (Matching Reference Image)
          ========================================================================= */}
      <div className="relative bg-gradient-to-b from-[#C68A2D] via-[#B87A1E] to-[#9F6512] text-white pt-16 sm:pt-20 md:pt-24 pb-28 sm:pb-36 md:pb-40 px-4 sm:px-6 lg:px-8">
        {/* Subtle geometric dot matrix overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-amber-400/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
          {/* Sparkle decoration above title like reference image */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-amber-200 text-lg">✦</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            About us
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-amber-100/90 max-w-xl mx-auto font-normal leading-relaxed">
            Over 20 years of sign making, high-precision laser cutting &amp; custom acrylic fabrication directly from our workshop in Bazar Guard, Hyderabad.
          </p>
        </div>
      </div>

      {/* =========================================================================
          2. FOUR OVERLAPPING ROUNDED PHOTO CARDS (Matching Reference Layout)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 md:gap-6">
          {showcasePhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white shadow-xl bg-slate-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 text-white">
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-wider block truncate">
                  {photo.subtitle}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white truncate drop-shadow-sm">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          3. STORY & CONTENT (White Background, 2-Column Text like Reference)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-16">
        {/* Main Bold Headline */}
        <div className="max-w-4xl space-y-3 mb-6 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-navy tracking-tight leading-tight">
            We make sure your idea &amp; creation{" "}
            <span className="text-brand-orange">delivered properly</span>
          </h3>
        </div>

        {/* Two-Column Description (Matching Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 text-brand-slate text-xs sm:text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <p>
              Founded and operated by <strong>Mohammed Rafeeq</strong>, Lucky Signs has been Hyderabad&apos;s trusted direct manufacturer for architectural signage, 3D LED letters, precision laser jaali grills, and acrylic fabrications for more than 20 years.
            </p>
            <p>
              Every signboard and laser panel is cut, bent, printed, and assembled inside our own Bazar Guard workshop using industrial CNC laser machines and direct UV flatbed printers. This ensures strict quality control, millimeter accuracy, and eliminates middlemen markups and delays.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              We use 100% cast virgin acrylic sheets that remain crystal clear without yellowing, weather-resistant ACP facades, and genuine high-brightness Samsung LED modules designed for long-term commercial durability in Hyderabad&apos;s climate.
            </p>
            <p>
              From custom mandir backdrops and luxury villa nameplates to large-scale commercial storefront elevations and fleet graphics, our team handles complete fabrication, electrical wiring, and on-site fitting across Hyderabad and Secunderabad.
            </p>
          </div>
        </div>

        {/* Action CTAs & Highlights */}
        {showFullDetails && (
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-brand-border flex flex-wrap items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-xs sm:text-sm shadow-md shadow-brand-orange/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 rounded-full px-5 sm:px-6 py-3 bg-white hover:bg-brand-orange-light text-brand-navy hover:text-brand-orange border border-brand-border hover:border-brand-orange/40 font-semibold text-xs sm:text-sm transition-all duration-300 group"
              >
                <span>Learn more about us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust stats */}
            <div className="flex items-center gap-6 sm:gap-8 text-left">
              <div>
                <div className="text-lg sm:text-2xl font-bold font-heading text-brand-orange">20+</div>
                <div className="text-[11px] text-brand-slate font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-heading text-brand-navy">500+</div>
                <div className="text-[11px] text-brand-slate font-medium">Projects Done</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-heading text-brand-orange">100%</div>
                <div className="text-[11px] text-brand-slate font-medium">In-House Workshop</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
