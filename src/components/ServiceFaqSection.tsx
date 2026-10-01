"use client";

import React from "react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getFaqsByService } from "@/data/faqs-data";

interface ServiceFaqSectionProps {
  serviceName?: string;
  slug?: string;
}

export function ServiceFaqSection({
  serviceName,
  slug,
}: ServiceFaqSectionProps) {
  const faqs = getFaqsByService(slug);

  return (
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
            {serviceName ? (
              <>
                Common questions about {serviceName.toLowerCase()}, material options, tolerances, and workshop delivery in Hyderabad.
              </>
            ) : (
              <>
                File formats, cutting thickness, timelines, and installation across Hyderabad and Secunderabad.
              </>
            )}
          </p>
        </div>

        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
