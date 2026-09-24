"use client";

import React, { useState } from "react";
import { FaqItem } from "@/data/faqs-data";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-brand-border/60 border border-brand-border/60 bg-white rounded-2xl shadow-xs overflow-hidden">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.id} className="transition-colors">
            <button
              onClick={() => toggle(idx)}
              className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-brand-navy font-heading">
                {item.question}
              </span>
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? "bg-brand-orange text-white rotate-180"
                    : "bg-brand-offwhite text-brand-navy hover:bg-brand-orange/10"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-brand-slate leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
