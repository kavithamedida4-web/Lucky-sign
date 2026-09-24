"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site-config";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-dismiss tooltip after 7 seconds so it doesn't perpetually occlude content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 pointer-events-auto select-none">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white text-brand-navy px-3.5 py-2 rounded-2xl shadow-xl border border-brand-border text-xs font-medium animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-brand-whatsapp shrink-0" />
          <span>Chat directly with Mohammed Rafeeq on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-brand-slate hover:text-brand-navy ml-1 p-0.5 rounded-full hover:bg-brand-offwhite transition-colors cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={siteConfig.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Lucky Signs"
        className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-whatsapp text-white shadow-xl hover:scale-[1.03] transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-brand-whatsapp/30"
      >
        <span className="absolute -top-0.5 -right-0.5 inline-flex rounded-full h-3.5 w-3.5 bg-brand-orange border-2 border-white" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
      </a>
    </div>
  );
}

