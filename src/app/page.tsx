import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { testimonialsData } from "@/data/testimonials-data";
import { faqsData } from "@/data/faqs-data";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ServiceCarousel } from "@/components/ServiceCarousel";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { HeroSection } from "@/components/HeroSection";
import { AboutCompanySection } from "@/components/AboutCompanySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CoverflowGallery } from "@/components/CoverflowGallery";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building2,
  Layers,
  Award,
  Star,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  // Section 2: 5 In-House Services for Interactive Carousel
  const serviceCards = [
    {
      id: "laser-cutting",
      title: "Laser Cutting & Jaali",
      description: "CNC cutting on acrylic and MDF for ceilings, partitions, and mandir arches.",
      image: "/images/lucky-signs/02-acrylic-laser-cutting-grills/img-000.jpg",
      href: "/services/laser-cutting",
      badge: "In-House CNC",
    },
    {
      id: "led-sign-boards",
      title: "3D LED Sign Boards",
      description: "Illuminated channel letters and ACP facades with Samsung LEDs.",
      image: "/images/lucky-signs/14-led-sign-boards/img-001.jpg",
      href: "/services/sign-boards",
      badge: "Commercial Grade",
    },
    {
      id: "uv-printing",
      title: "UV Flatbed Printing",
      description: "Photographic printing cured directly on acrylic, glass, and panels.",
      image: "/images/lucky-signs/01-cover-services/img-004.jpg",
      href: "/services/uv-printing",
      badge: "Direct UV",
    },
    {
      id: "plotter-cutting",
      title: "Plotter & Fleet Vinyl",
      description: "Precision vinyl cutting, vehicle graphics, and route markers.",
      image: "/images/lucky-signs/01-cover-services/img-005.jpg",
      href: "/services/plotter-cutting",
      badge: "Graphtec Cut",
    },
    {
      id: "acrylic-bending",
      title: "Thermo-Bent Acrylics",
      description: "Heat-bent display stands, brochure racks, and table tents.",
      image: "/images/lucky-signs/04-acrylic-bending-products/img-000.jpg",
      href: "/services/acrylic-bending",
      badge: "Heat Bending",
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-24 md:space-y-28 pb-14 sm:pb-24">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* =========================================================================
          2. OUR SERVICES SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-10">
          {/* Eyebrow with gold dash lines on both sides */}
          <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#D97706]">
            <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
            <span>OUR SERVICES</span>
            <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight">
            Explore Our <span className="text-[#D97706]">Services</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto font-normal leading-relaxed">
            Complete 3D sign boards, precision laser cutting, UV printing, and custom acrylic fabrication solutions for shops, offices, and homes.
          </p>
        </div>

        {/* Interactive In-House Services Carousel */}
        <ServiceCarousel services={serviceCards} />
      </section>

      {/* =========================================================================
          3. ABOUT / EXPERIENCE SECTION (Redesigned matching reference collage)
          ========================================================================= */}
      <AboutCompanySection />

      {/* =========================================================================
          4. HOW IT WORKS SECTION (4-Step Process with Curved Flow Arrows)
          ========================================================================= */}
      <HowItWorksSection />

      {/* =========================================================================
          5. TESTIMONIALS SECTION (Placed directly after How It Works)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-10">
          {/* Centered Eyebrow with gold dash lines */}
          <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#D97706]">
            <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
            <span>TESTIMONIALS</span>
            <span className="w-8 h-[2px] bg-[#D97706] inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight">
            What Our Customers <span className="text-[#D97706]">Say</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto font-normal leading-relaxed">
            Real feedback from restaurants, schools, hospitals, and homeowners across Hyderabad.
          </p>
        </div>

        {/* Interactive Testimonials Slider with Left & Right Floating Arrows */}
        <TestimonialSlider testimonials={testimonialsData} />
      </section>


      {/* =========================================================================
          7. FREQUENTLY ASKED QUESTIONS (Light Orange Background)
          ========================================================================= */}
      <section className="bg-brand-orange-light/80 border-y border-[#FED7AA]/40 py-10 sm:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-brand-orange text-xs font-bold uppercase tracking-wider border border-brand-orange/20 shadow-xs">
              <span className="text-[10px]">✦</span>
              <span>Common Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto">
              File formats, cutting thickness, timelines, and installation across Hyderabad and Secunderabad.
            </p>
          </div>

          <FaqAccordion items={faqsData} />
        </div>
      </section>

      {/* =========================================================================
          8. LATEST WORK SHOWCASE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-5 sm:mb-7">
          {/* Centered Eyebrow with gold dash lines */}
          <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
            <span className="w-6 sm:w-8 h-[2px] bg-[#D97706] inline-block" />
            <span>WORKSHOP PORTFOLIO</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#D97706] inline-block" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-navy tracking-tight font-serif sm:font-heading">
            From Our <span className="text-[#D97706]">Gallery</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-slate max-w-md mx-auto font-normal">
            Custom fabricated 3D signs, laser-cut jaali screens &amp; architectural panels. Click any photo to zoom in.
          </p>
        </div>

        {/* Bento Gallery Grid (Matching Exact Reference Layout on Mobile & Desktop) */}
        <CoverflowGallery />

        {/* Centered button to explore full gallery */}
        <div className="flex justify-center pt-4 sm:pt-6">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white border border-brand-border/80 hover:border-brand-orange text-brand-navy hover:text-brand-orange font-semibold text-xs sm:text-sm shadow-xs hover:shadow transition-all duration-300 group"
          >
            <span>Explore All Categories &amp; Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
