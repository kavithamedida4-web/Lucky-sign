"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { DetailedServiceItem } from "@/data/services-data";
import {
  MessageCircle,
  Phone,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  MapPin,
  Sparkles,
} from "lucide-react";

interface LaserCuttingHeroProps {
  service: DetailedServiceItem;
}

export function LaserCuttingHero({ service }: LaserCuttingHeroProps) {
  const whatsappUrl = siteConfig.getWhatsAppUrl(
    service.whatsappTemplate ||
      "Hello Mohammed Rafeeq, I need precision laser cutting services for my project in Hyderabad."
  );

  return (
    <section className="relative -mt-20 pt-24 sm:pt-28 pb-10 sm:pb-16 bg-[#F7F2EB] text-neutral-900 overflow-hidden border-b border-orange-200/50">
      
      {/* Background Soft Warm Tone & Subtle Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">
        
        {/* Breadcrumb Navigation (Desktop only) */}
        <nav
          aria-label="Breadcrumb"
          className="hidden sm:flex items-center gap-2 text-xs text-neutral-500"
        >
          <Link href="/" className="hover:text-brand-orange transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/services" className="hover:text-brand-orange transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Laser Cutting</span>
        </nav>

        {/* 2-Column Hero Grid Matching "The Art World" Reference Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[440px] sm:min-h-[500px]">
          
          {/* =========================================================================
              LEFT COLUMN: Typography & Action Buttons
              ========================================================================= */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-5">
            
            {/* 100% In-House Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-[10px] sm:text-xs font-bold text-brand-orange">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="tracking-wider uppercase">100% In-House Workshop · Bazar Guard</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold font-heading text-neutral-900 tracking-tight leading-[1.1]">
              Precision Laser <br />
              <span className="text-brand-orange">
                &amp; Custom CNC!
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-neutral-700 leading-relaxed max-w-md font-normal">
              High-accuracy 0.1mm laser cutting on Acrylic, MDF, ACP &amp; Wood with flame-polished edges fabricated directly at Bazar Guard, Hyderabad.
            </p>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 pt-1">
              {/* Primary Orange Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 sm:px-7 sm:py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-orange/25 hover:shadow-lg hover:shadow-brand-orange/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct Call / Catalog Button */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-3 sm:px-7 sm:py-3.5 bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 border border-neutral-300 font-bold text-xs sm:text-sm shadow-2xs hover:shadow transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <span>Call Workshop</span>
              </a>
            </div>

            {/* Feature Highlights (Desktop only) */}
            <div className="hidden sm:flex pt-3 border-t border-neutral-300/70 flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-medium text-neutral-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>0.1mm Tolerance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>Flame-Polished Edges</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>Direct Pricing</span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4 Staggered Art Frames over Circular Backdrop (Mobile & Desktop)
              ========================================================================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center py-2 sm:py-6">
            
            {/* Large White/Cream Circular Backdrop Disc */}
            <div className="absolute w-[290px] sm:w-[440px] lg:w-[500px] aspect-square rounded-full bg-white/80 border border-neutral-300/60 shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* 4-Frame Gallery Grid / Composition (Active on Mobile, Tablet & Desktop) */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[620px]">
              
              <div className="grid grid-cols-12 gap-2 sm:gap-3.5 lg:gap-4 items-center">
                
                {/* 1. Left Frame (Centered vertically) */}
                <div className="col-span-4 flex justify-center">
                  <div className="w-full max-w-[105px] sm:max-w-[190px] aspect-[3/4.2] bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-neutral-900 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900">
                      <Image
                        src="/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg"
                        alt="Laser Cut Acrylic Jaali Ceiling Grill"
                        fill
                        sizes="(max-width: 640px) 105px, 200px"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 brightness-[1.08] contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-bold text-white truncate bg-black/60 backdrop-blur-xs px-1 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Acrylic Jaali Grill
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2 & 3. Middle Column (Top Frame + Bottom Frame) */}
                <div className="col-span-4 flex flex-col gap-2 sm:gap-3.5 lg:gap-4 items-center">
                  
                  {/* Top Middle Frame: CNC Laser Machine */}
                  <div className="w-full max-w-[105px] sm:max-w-[190px] aspect-[3/3.8] bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-neutral-900 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900">
                      <Image
                        src="/images/lucky-signs/laser-cutting-cnc.jpg"
                        alt="High Precision CNC Laser Machine Lucky Signs"
                        fill
                        priority
                        sizes="(max-width: 640px) 105px, 200px"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 brightness-[1.08] contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-bold text-white truncate bg-black/60 backdrop-blur-xs px-1 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        In-House CNC Machine
                      </span>
                    </div>
                  </div>

                  {/* Bottom Middle Frame: Mandir Backlit Om Arch */}
                  <div className="w-full max-w-[105px] sm:max-w-[190px] aspect-[3/3.8] bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-neutral-900 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900">
                      <Image
                        src="/images/lucky-signs/03-acrylic-mandir-background/img-000.jpg"
                        alt="Sacred Om Backlit Mandir Backdrop"
                        fill
                        sizes="(max-width: 640px) 105px, 200px"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 brightness-[1.08] contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-bold text-white truncate bg-black/60 backdrop-blur-xs px-1 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Mandir Backlit Arch
                      </span>
                    </div>
                  </div>

                </div>

                {/* 4. Right Frame (Centered vertically, slightly offset) */}
                <div className="col-span-4 flex justify-center">
                  <div className="w-full max-w-[105px] sm:max-w-[190px] aspect-[3/4.2] bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-neutral-900 shadow-lg sm:shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900">
                      <Image
                        src="/images/lucky-signs/02-acrylic-laser-cutting-grills/img-005.jpg"
                        alt="Architectural Laser Cut MDF Screen"
                        fill
                        sizes="(max-width: 640px) 105px, 200px"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 brightness-[1.08] contrast-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2 text-[8px] sm:text-[10px] font-bold text-white truncate bg-black/60 backdrop-blur-xs px-1 sm:px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Architectural Screen
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
