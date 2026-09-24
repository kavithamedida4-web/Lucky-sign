"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "3D LED Facade Sign Boards",
    dimensions: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "3D LED Facade Sign Boards",
    "Laser-Cut Jaali Grills & Ceilings",
    "Acrylic Mandir Backgrounds",
    "Direct UV Flatbed Printing",
    "Vinyl Plotter Cutting & Decals",
    "School Bus & Fleet Branding",
    "Thermo-Bent Acrylic Products (Trays/Stands)",
    "Acrylic Mementos & Trophies",
    "LED & Engraved Name Plates",
    "Neon LED Custom Glow Signs",
    "Custom Event Backdrops & Monograms",
    "Other Bespoke Acrylic / Signage Work",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Lucky Signs! I need a quote for ${formData.service}.
Name: ${formData.name}
Phone: ${formData.phone}
Dimensions / Qty: ${formData.dimensions || "Not specified yet"}
Project Details: ${formData.message || "Please share catalog and price list."}`;

    const url = siteConfig.getWhatsAppUrl(text);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 border border-brand-border shadow-xs text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-brand-whatsapp/10 text-brand-whatsapp flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-brand-navy">
          Quotation Request Dispatched!
        </h3>
        <p className="text-sm text-brand-slate max-w-md mx-auto leading-relaxed">
          Your requirement has been sent directly to Mohammed Rafeeq on WhatsApp. If WhatsApp didn&apos;t open automatically, tap the button below.
        </p>
        <div className="pt-3">
          <a
            href={siteConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white font-semibold text-sm shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-brand-slate hover:text-brand-orange underline block mx-auto pt-2 cursor-pointer"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-7 sm:p-10 border border-brand-border/60 shadow-xs space-y-6"
    >
      <div className="space-y-1">
        <h3 className="text-2xl font-bold font-heading text-brand-navy">
          Request a Custom Quotation
        </h3>
        <p className="text-xs sm:text-sm text-brand-slate">
          Fill in your details below for an immediate estimate and technical advice.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
            Your Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ramesh Kumar / Dr. Fatima"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-brand-border/60 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm text-brand-navy bg-brand-offwhite/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
            Phone / WhatsApp Number <span className="text-brand-orange">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 98490 XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-brand-border/60 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm text-brand-navy bg-brand-offwhite/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
            Service or Product Category <span className="text-brand-orange">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-brand-border/60 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm text-brand-navy bg-brand-offwhite/50 transition-colors"
          >
            {serviceOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
            Approximate Dimensions / Quantity (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. 10ft x 4ft facade board, or 25 trophies"
            value={formData.dimensions}
            onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-brand-border/60 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm text-brand-navy bg-brand-offwhite/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
            Project Description & Requirements
          </label>
          <textarea
            rows={4}
            placeholder="Describe your design, desired material (acrylic, brass, vinyl, wood), backlight preferences, or installation area..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-brand-border/60 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 text-sm text-brand-navy bg-brand-offwhite/50 resize-none transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 px-7 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold shadow-md transition-colors flex items-center justify-center gap-2 group cursor-pointer"
      >
        <span>Get a quote on WhatsApp</span>
        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="text-[11px] text-center text-brand-slate">
        We respect your privacy. Inquiries route directly to Mohammed Rafeeq at Lucky Signs.
      </p>
    </form>
  );
}
