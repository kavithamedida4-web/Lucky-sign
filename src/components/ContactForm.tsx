"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import {
  ArrowUpRight,
  Send,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    "Other Bespoke Signage Work",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Lucky Signs! I have an inquiry:
• Name: ${formData.name || "Not provided"}
• Phone: ${formData.phone || "Not provided"}
• Email: ${formData.email || "Not provided"}
• Service / Category: ${formData.service}
• Dimensions / Quantity: ${formData.dimensions || "Not specified"}
• Project Details: ${formData.message || "Please share catalog and price estimate."}`;

    const url = siteConfig.getWhatsAppUrl(text);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Subtle Background Grid Accent Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: `radial-gradient(#e5d8cf 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-neutral-900 tracking-tight flex items-center justify-center gap-2">
          <span>Work with us</span>
          <ArrowUpRight className="w-7 h-7 sm:w-8 sm:h-8 text-brand-orange inline-block transform translate-y-[-2px]" />
        </h1>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
          Send your board size or sketch on WhatsApp, or stop by our Bazar Guard workshop. Mohammed Rafeeq will provide an accurate estimate within 2 to 3 hours.
        </p>
      </div>

      {/* Main Two-Card Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
        {/* Left Card: Contact Information */}
        <div className="lg:col-span-4 bg-[#FFF6EF] border border-[#FBE5D6] rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative shadow-[0_4px_25px_rgba(232,115,12,0.04)] overflow-hidden">
          <div className="space-y-6">
            {/* Contact Person */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Contact Person
              </span>
              <p className="text-sm font-semibold text-neutral-900">
                {siteConfig.founder}
              </p>
              <p className="text-xs text-brand-orange font-medium">Lucky Signs Hyderabad</p>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Email Address
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs sm:text-sm text-neutral-700 hover:text-brand-orange transition-colors block break-all font-medium"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Office Location */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Workshop &amp; Studio Location
              </span>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                {siteConfig.address}
              </p>
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Direct Phone / WhatsApp
              </span>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-xs sm:text-sm text-neutral-800 hover:text-brand-orange transition-colors block font-semibold"
              >
                {siteConfig.phone}
              </a>
            </div>

            {/* Working Hours */}
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Business Hours
              </span>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                {siteConfig.workingHours}
              </p>
            </div>

            {/* Social Media & Direct Channels */}
            <div className="pt-2 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Direct Channels
              </span>
              <div className="flex items-center gap-3 text-neutral-700">
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center hover:bg-brand-whatsapp hover:text-white hover:border-brand-whatsapp transition-all shadow-2xs"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all shadow-2xs"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all shadow-2xs"
                  aria-label="Google Maps Location"
                >
                  <MapPin className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all shadow-2xs"
                  aria-label="Call Direct"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Corner Triangle */}
          <div className="absolute bottom-3 right-3 w-0 h-0 border-b-[18px] border-b-brand-orange border-l-[18px] border-l-transparent pointer-events-none" />
        </div>

        {/* Right Card: Contact Form */}
        <div className="lg:col-span-8 bg-[#FFF6EF] border border-[#FBE5D6] rounded-3xl p-7 sm:p-9 relative shadow-[0_4px_25px_rgba(232,115,12,0.04)]">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-neutral-900">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting Lucky Signs. Your inquiry has been forwarded directly to Mohammed Rafeeq on WhatsApp.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Full Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Company"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-[#EADBCE] rounded-lg text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your-email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-[#EADBCE] rounded-lg text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Phone / WhatsApp Number <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98490 XXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-[#EADBCE] rounded-lg text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Service / Product Category <span className="text-brand-orange">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[#EADBCE] rounded-lg text-sm text-neutral-800 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange appearance-none transition-all cursor-pointer"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Dimensions / Quantity (Optional) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-neutral-700">
                  Approximate Dimensions or Quantity (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10ft x 4ft LED sign board, or 25 custom trophies"
                  value={formData.dimensions}
                  onChange={(e) =>
                    setFormData({ ...formData, dimensions: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-[#EADBCE] rounded-lg text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                />
              </div>

              {/* Row 4: Message Textarea */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-neutral-700">
                  Message / Project Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your design, desired materials (acrylic, brass, vinyl, LED neon), or installation area in Hyderabad..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-[#EADBCE] rounded-lg text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-medium rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Send Message on WhatsApp</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
