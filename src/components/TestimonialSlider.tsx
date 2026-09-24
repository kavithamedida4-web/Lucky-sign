"use client";

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialItem } from "@/data/testimonials-data";

interface TestimonialSliderProps {
  testimonials: TestimonialItem[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth > 640 ? 400 : 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-2 sm:px-6">
      {/* Floating Left Arrow Button */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-brand-navy border border-slate-200/90 shadow-xl hover:bg-brand-orange hover:text-white hover:border-brand-orange flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 group"
        aria-label="Scroll testimonials left"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.2] group-hover:translate-x-[-1px] transition-transform" />
      </button>

      {/* Floating Right Arrow Button */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-brand-navy border border-slate-200/90 shadow-xl hover:bg-brand-orange hover:text-white hover:border-brand-orange flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 group"
        aria-label="Scroll testimonials right"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.2] group-hover:translate-x-[1px] transition-transform" />
      </button>

      {/* Single Line Horizontal Scrolling Row */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4 px-6 sm:px-8 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="w-[310px] sm:w-[370px] min-h-[235px] sm:min-h-[250px] shrink-0 snap-start relative bg-white rounded-[26px] border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 pt-3 px-5 pb-5 sm:px-6 sm:pb-6 flex flex-col justify-between"
          >
            {/* Top Folded Navy Blue Ribbon Tab */}
            <div className="relative -ml-6 sm:-ml-7 mb-3.5 flex items-center">
              {/* Ribbon 3D Fold Left Edge */}
              <div className="w-2.5 h-11 bg-[#111C30] rounded-l-sm" />

              {/* Main Navy Tab Body */}
              <div className="bg-brand-navy text-white px-4 sm:px-5 py-2 rounded-r-2xl shadow-sm max-w-[85%] min-w-[190px]">
                <h4 className="text-xs sm:text-sm font-bold font-heading text-white tracking-tight truncate leading-snug">
                  {item.clientName}
                </h4>
                <p className="text-[11px] text-white/80 font-medium truncate leading-tight mt-0.5">
                  {item.roleOrCompany}
                </p>
              </div>
            </div>

            {/* Stars & Testimonial Quote with Left Vertical Line */}
            <div className="space-y-3 pl-1 flex-1 flex flex-col">
              {/* 5 Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, r) => (
                  <Star
                    key={r}
                    className={`w-4 h-4 ${
                      r < item.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text with Left Accent Line & Comfortable Height */}
              <div className="border-l-[3px] border-[#8BA3C7] pl-3.5 py-0.5 flex-1">
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>
            </div>

            {/* Verified Project Badge at bottom */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-brand-slate pl-1">
              <span className="font-semibold text-brand-navy truncate">
                Verified: <span className="text-brand-orange font-medium">{item.verifiedProject}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
