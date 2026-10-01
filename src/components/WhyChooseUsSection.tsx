"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
  Rocket,
  ShieldCheck,
  Truck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface WhyChooseUsSectionProps {
  yearsExperience?: string;
  imageSrc?: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
}

export function WhyChooseUsSection({
  yearsExperience = "20+",
  imageSrc = "/images/lucky-signs/01-cover-services/img-000.jpg",
  eyebrow = "WHY CHOOSE US",
  heading = "Real people delivering real results.",
  description = "Direct workshop fabrication in Bazar Guard with industrial CNC laser cutting, direct UV printing, and 20+ years of craftsmanship. We eliminate middlemen markups and deliver computerized millimeter precision across Hyderabad.",
}: WhyChooseUsSectionProps) {
  const features = [
    {
      id: "in-house-cnc",
      title: "100% In-House Workshop & CNC",
      description:
        "Laser cutting, UV flatbed printing, acrylic bending, and channel letter assembly done directly in Bazar Guard—zero broker markups.",
      icon: Factory,
    },
    {
      id: "materials-fitting",
      title: "Certified Materials & Fast Fitting",
      description:
        "Sun-resistant virgin cast acrylic, long-life Samsung LEDs, and safe structural on-site installation across Hyderabad & Secunderabad.",
      icon: Rocket,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* 2-Column Exact Layout from Reference Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* =========================================================================
            LEFT COLUMN: ORGANIC PEBBLE PHOTO + GOLDEN CRESCENT SWOOP + EXPERIENCE BADGE
            ========================================================================= */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-[480px] sm:max-w-[510px] aspect-[520/460]">
            
            {/* SVG Illustration: Golden-Orange Crescent & Clipped Authentic Workshop Photo */}
            <svg
              viewBox="0 0 520 460"
              className="w-full h-full filter drop-shadow-sm select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Vibrant Golden-Orange Gradient matching Reference Accent */}
                <linearGradient
                  id="goldenCrescentGrad"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#EA580C" />
                  <stop offset="35%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FFAE19" />
                </linearGradient>

                {/* Organic Asymmetrical Pebble Clip Path for Workshop Photo */}
                <clipPath id="organicPhotoClip">
                  <path d="M 145 95 C 195 55, 290 50, 355 65 C 415 80, 460 120, 472 180 C 485 240, 470 315, 425 370 C 378 425, 295 440, 225 430 C 150 420, 95 385, 85 315 C 75 245, 95 135, 145 95 Z" />
                </clipPath>
              </defs>

              {/* 1. Golden-Orange Crescent Accent Swoop (Peeking out Top-Right & Bottom-Left) */}
              <path
                d="M 160 65 C 245 15, 360 12, 430 30 C 485 45, 515 100, 508 175 C 502 245, 485 300, 455 335 C 415 410, 310 460, 215 462 C 120 465, 48 430, 42 345 C 38 270, 68 185, 105 135 C 120 115, 140 85, 160 65 Z"
                fill="url(#goldenCrescentGrad)"
              />

              {/* 2. Authentic Lucky Signs Workshop Photo clipped into organic shape */}
              <g clipPath="url(#organicPhotoClip)">
                <image
                  href={imageSrc}
                  x="70"
                  y="45"
                  width="415"
                  height="400"
                  preserveAspectRatio="xMidYMid slice"
                />
                {/* Subtle soft contrast overlay to ensure premium clarity */}
                <rect
                  x="70"
                  y="45"
                  width="415"
                  height="400"
                  fill="black"
                  opacity="0.04"
                />
              </g>
            </svg>

            {/* 3. Floating Experience Badge (Top Left, overlapping image & swoop) */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 w-28 h-28 sm:w-34 sm:h-34 rounded-full bg-white shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-slate-100/90 flex flex-col items-center justify-center text-center p-2 transition-transform duration-300 hover:scale-105 select-none">
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#E8730C] leading-none tracking-tight">
                {yearsExperience}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight mt-1 max-w-[85px]">
                Years of Experience
              </span>
            </div>

          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: EYEBROW + DASHED ARROW + HEADLINE + PARAGRAPH + 2 VALUE ITEMS
            ========================================================================= */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7">
          
          {/* Eyebrow */}
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D97706]">
              {eyebrow}
            </span>
          </div>

          {/* Headline with Curved Dashed Arrow from Reference */}
          <div className="relative">
            <div className="flex items-start gap-3 sm:gap-4">
              
              {/* Whimsical Curved Dashed Hand-Drawn Arrow pointing right towards headline */}
              <div className="pt-1.5 shrink-0 hidden sm:block">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-[#1B2A4A]/70"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 8 46 C 12 24, 24 14, 40 16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeDasharray="3.5 3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 36 10 L 46 17 L 36 21 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold font-heading text-[#1B2A4A] tracking-tight leading-[1.18]">
                {heading}
              </h2>
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm md:text-[15px] text-[#55647E] leading-relaxed max-w-xl font-normal">
            {description}
          </p>

          {/* Feature Items with Orange Outline Icons (Matching Reference Layout) */}
          <div className="space-y-5 sm:space-y-6 pt-1">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="flex items-start gap-4 sm:gap-5 group">
                  {/* Orange Outline Icon Box */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-[#E8730C]/50 bg-[#E8730C]/5 flex items-center justify-center text-[#E8730C] shrink-0 transition-colors duration-300 group-hover:bg-[#E8730C] group-hover:text-white">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#1B2A4A] leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#55647E] leading-relaxed max-w-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Bottom Conversion / WhatsApp Contact Bar */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-brand-navy text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
        <div className="space-y-1.5 text-center md:text-left">
          <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
            Need a fast quote or direct workshop pricing?
          </h4>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl">
            Send your design or dimensions on WhatsApp. Mohammed Rafeeq will share sample photos and instant estimates.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3.5 shrink-0">
          <a
            href={siteConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-orange/25 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all duration-300"
          >
            <span>Explore Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
