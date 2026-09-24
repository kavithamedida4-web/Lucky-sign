import React from "react";
import { Metadata } from "next";
import { GalleryClient } from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Project Gallery – Real Sign Boards, Laser Cut Grills & Acrylic Work in Hyderabad",
  description:
    "Explore real finished installation photography by Lucky Signs Hyderabad: illuminated storefront LED boards, acrylic mandir panels, ceiling jaali grills, neon signs, and vehicle fleet branding.",
};

export default function GalleryPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 sm:pt-16 pb-8 bg-brand-offwhite border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          {/* Eyebrow with gold dash lines on both sides */}
          <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#D97706]">
            <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
            <span>PROJECT GALLERY</span>
            <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-navy tracking-tight">
            Our Work Across <span className="text-brand-orange">Hyderabad</span>
          </h1>

          <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto font-normal leading-relaxed">
            Browse through our finished 3D LED boards, CNC laser jaali screens, mandir backdrops, and custom acrylic products.
          </p>
        </div>
      </section>

      {/* Full Architecture Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryClient />
      </section>
    </div>
  );
}
