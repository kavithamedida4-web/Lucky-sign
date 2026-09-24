"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export function AboutCompanySection() {
  const checkItems = [
    "In-House Facility — CNC Laser, UV Flatbed & Acrylic Bending",
    "Premium Materials — Cast Acrylic, ACP Facades & Samsung LEDs",
    "Direct Craftsmanship — Exact Millimeter Vector & CAD Cutting",
    "On-Site Fitting — Delivered & Installed Across Hyderabad",
    "Direct Workshop Pricing — Zero Middlemen Markups",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* =========================================================================
            LEFT COLUMN: STAGGERED OVERLAPPING IMAGES WITH CIRCULAR BADGE & STATS
            ========================================================================= */}
        <div className="lg:col-span-6 relative">
          <div className="relative max-w-lg mx-auto lg:max-w-none">
            
            {/* 1. Top-Left Staggered Image */}
            <div className="relative w-[78%] sm:w-[72%] aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 sm:border-4 border-white bg-slate-100 z-10">
              <Image
                src="/images/lucky-signs/01-cover-services/img-000.jpg"
                alt="Lucky Signs Master Craftsman at Workshop"
                fill
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover hover:scale-105 transition-transform duration-500 brightness-[1.06] contrast-[1.08] saturate-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* 2. Bottom-Right Overlapping Image */}
            <div className="relative -mt-16 sm:-mt-20 ml-auto w-[82%] sm:w-[76%] aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-slate-900 z-20">
              <Image
                src="/images/lucky-signs/14-led-sign-boards/img-000.jpg"
                alt="Finished 3D LED Sign Board Storefront"
                fill
                sizes="(max-width: 768px) 85vw, 420px"
                className="object-cover hover:scale-105 transition-transform duration-500 brightness-[1.06] contrast-[1.08] saturate-[1.18]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            {/* 3. Circular Rotating Badge (Top Right) */}
            <div className="absolute -top-6 right-2 sm:-top-8 sm:right-6 z-30 pointer-events-none">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl border border-brand-border flex items-center justify-center p-1">
                {/* SVG Curved Circular Text */}
                <svg
                  className="w-full h-full animate-[spin_18s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[7.8px] font-extrabold uppercase fill-brand-navy tracking-widest">
                    <textPath href="#circlePath" startOffset="0%">
                      • LUCKY SIGNS • IN-HOUSE WORKSHOP • HYD •
                    </textPath>
                  </text>
                </svg>

                {/* Center Monogram / Logo */}
                <div className="absolute inset-0 m-auto w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-brand-navy flex items-center justify-center text-white shadow-inner">
                  <span className="font-heading font-extrabold text-brand-orange text-sm sm:text-base">
                    LS
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Speech Bubble Stat Tag (Overlapping the center-right) */}
            <div className="absolute top-[38%] right-0 sm:right-4 z-30 transform translate-y-[-50%]">
              <div className="relative bg-brand-orange text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex items-center gap-2.5">
                {/* Speech bubble tail pointing left */}
                <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-brand-orange" />
                
                <div>
                  <div className="text-lg sm:text-xl font-extrabold font-heading leading-tight tracking-tight">
                    500+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-white/90 leading-tight">
                    Satisfied Clients
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: EXACT TYPOGRAPHY DESIGN FROM REFERENCE IMAGE
            ========================================================================= */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Eyebrow Line & Text */}
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
            <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
            <span>ABOUT US</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-heading text-brand-navy tracking-tight leading-[1.15]">
            Lucky Signs —<br className="hidden sm:inline" />{" "}
            Trusted <span className="text-[#D97706]">Since 2004</span>
          </h2>

          {/* Paragraph Typography with bold highlights */}
          <p className="text-sm sm:text-[15px] text-brand-slate leading-relaxed font-normal">
            Lucky Signs (Est. 2004) provides architectural 3D sign boards, precision CNC laser cutting, direct UV printing, and custom acrylic fabrication <strong className="font-semibold text-brand-navy">exclusively from our Bazar Guard workshop in Hyderabad</strong>. Rated <strong className="font-semibold text-brand-navy">4.9 Stars on Google (500+ Projects)</strong>, we deliver computerized laser accuracy with on-site fitting available anywhere across Hyderabad!
          </p>

          {/* 5 Checklist Items with Solid Filled Checkmarks */}
          <div className="space-y-3 pt-1 text-xs sm:text-sm font-medium text-brand-navy">
            {checkItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D97706] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-brand-navy font-semibold">{item}</span>
              </div>
            ))}
          </div>

          {/* Golden Pill CTA Button (Matching Reference Image) */}
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 bg-gradient-to-r from-[#D97706] via-[#E8730C] to-[#D97706] hover:opacity-95 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
