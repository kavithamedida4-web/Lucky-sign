"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  badge: string;
}

interface ServiceCarouselProps {
  services: ServiceCardItem[];
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const scrollAmount = direction === "left" ? -(cardWidth + 20) : cardWidth + 20;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-full">
      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={() => handleScroll("left")}
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-brand-border bg-white/95 backdrop-blur-md text-brand-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
        aria-label="Previous service"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="w-full max-w-full flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none px-2 sm:px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="w-[82vw] sm:w-[300px] lg:w-[320px] shrink-0 snap-start flex flex-col"
          >
            <Link
              href={service.href}
              className="group bg-white rounded-2xl overflow-hidden border border-brand-border shadow-xs hover:shadow-lg hover:border-brand-orange/50 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full justify-between"
            >
              <div>
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 80vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[1.06] contrast-[1.08] saturate-[1.18]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 text-brand-navy shadow-xs uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <div className="w-6 h-6 rounded-full bg-brand-offwhite group-hover:bg-brand-orange group-hover:text-white flex items-center justify-center text-brand-navy transition-colors shrink-0 mt-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-xs text-brand-slate leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-orange">
                  <span>Explore Specifications</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={() => handleScroll("right")}
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-brand-border bg-white/95 backdrop-blur-md text-brand-navy hover:bg-brand-orange hover:text-white hover:border-brand-orange flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
        aria-label="Next service"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
