"use client";

import React from "react";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { getTestimonialsByService } from "@/data/testimonials-data";

interface ServiceTestimonialsProps {
  serviceName?: string;
  slug?: string;
}

export function ServiceTestimonials({
  serviceName,
  slug,
}: ServiceTestimonialsProps) {
  const testimonials = getTestimonialsByService(slug);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Centered Section Header Matching Home Section Design */}
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
          {serviceName ? (
            <>
              Real feedback from clients who commissioned {serviceName.toLowerCase()} and custom fabrication across Hyderabad.
            </>
          ) : (
            <>
              Real feedback from restaurants, schools, hospitals, and homeowners across Hyderabad.
            </>
          )}
        </p>
      </div>

      {/* Interactive Testimonials Slider with Left & Right Floating Arrows */}
      <TestimonialSlider testimonials={testimonials} />
    </section>
  );
}
