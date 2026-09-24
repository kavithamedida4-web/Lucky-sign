"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  ShieldCheck,
  Award,
  Truck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function WhyChooseUsSection() {
  const cards = [
    {
      id: "card-1",
      number: "01",
      title: "100% In-House CNC",
      desc: "Laser cutting, UV flatbed printing, acrylic bending, and channel letter assembly all done in our Bazar Guard workshop.",
      icon: Cpu,
      color: "navy", // Navy Blue Theme
      bgAccent: "bg-[#1B2A4A]",
      circleBg: "bg-[#1B2A4A]",
      iconColor: "text-[#1B2A4A]",
    },
    {
      id: "card-2",
      number: "02",
      title: "Cast Acrylic & LEDs",
      desc: "Virgin cast acrylic sheets that resist sunlight yellowing, paired with long-life Samsung LEDs and weather-proof ACP facades.",
      icon: ShieldCheck,
      color: "orange", // Bright Orange Theme
      bgAccent: "bg-[#E8730C]",
      circleBg: "bg-[#E8730C]",
      iconColor: "text-[#E8730C]",
    },
    {
      id: "card-3",
      number: "03",
      title: "20+ Years Craftsmanship",
      desc: "Led by Mohammed Rafeeq, translating CorelDRAW vectors, architectural CADs, and sketches to exact millimeter cuts.",
      icon: Award,
      color: "navy", // Navy Blue Theme
      bgAccent: "bg-[#1B2A4A]",
      circleBg: "bg-[#1B2A4A]",
      iconColor: "text-[#1B2A4A]",
    },
    {
      id: "card-4",
      number: "04",
      title: "Hyderabad-Wide Fitting",
      desc: "Complete structural frame mounting, safe electrical wiring, and on-site fitting across Hyderabad & Secunderabad.",
      icon: Truck,
      color: "orange", // Bright Orange Theme
      bgAccent: "bg-[#E8730C]",
      circleBg: "bg-[#E8730C]",
      iconColor: "text-[#E8730C]",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Centered Eyebrow & Section Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
        <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#D97706]">
          <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
          <span>WHY CHOOSE US</span>
          <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight">
          Crafted In-House with{" "}
          <span className="text-[#D97706]">Precision &amp; Trust</span>
        </h2>

        <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto font-normal leading-relaxed">
          Direct workshop fabrication in Bazar Guard with industrial CNC laser, UV printing, and 20+ years of expertise.
        </p>
      </div>

      {/* 4-Card 3D Layered Infographic Grid (Exact Reference Anatomy) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-6 pt-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.id}
              className="relative group transition-transform duration-300 hover:-translate-y-2 cursor-default"
            >
              {/* BACK LAYER: Colored Angled 3D Accent Card (Navy Blue / Bright Orange) */}
              <div
                className={`absolute inset-0 rounded-[28px] ${card.bgAccent} transform translate-x-2.5 translate-y-2 sm:translate-x-3 sm:translate-y-2.5 transition-transform duration-300 group-hover:translate-x-3.5 group-hover:translate-y-3.5 shadow-md`}
              />

              {/* FRONT LAYER: Clean White Card */}
              <div className="relative bg-white rounded-[26px] border border-slate-200/90 shadow-lg p-6 sm:p-7 flex flex-col items-center text-center justify-between min-h-[310px] sm:min-h-[330px] z-10">
                {/* Top Icon */}
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <Icon className={`w-6 h-6 ${card.iconColor} stroke-[2]`} />
                </div>

                {/* Title & Description */}
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-brand-slate leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Numbered Colored Circle (Matching 01, 02, 03, 04 in Reference) */}
                <div className="mt-5">
                  <div
                    className={`w-11 h-11 rounded-full ${card.circleBg} text-white font-heading font-extrabold text-sm flex items-center justify-center shadow-md shadow-black/10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.number}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Conversion Bar */}
      <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-brand-navy text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
        <div className="space-y-1.5 text-center md:text-left">
          <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
            Need a fast quote or material advice?
          </h4>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl">
            Send your rough sketch or dimensions on WhatsApp. Mohammed Rafeeq will share sample photos and direct workshop pricing.
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
