"use client";

import React, { useState } from "react";
import { DetailedServiceItem } from "@/data/services-data";
import { ServiceCard } from "@/components/ServiceCard";
import { Sparkles, Layers, Cpu, CheckCircle2 } from "lucide-react";

interface ServicesHubCatalogProps {
  services: DetailedServiceItem[];
}

export function ServicesHubCatalog({ services }: ServicesHubCatalogProps) {
  const [activeTab, setActiveTab] = useState<"all" | "fabrication" | "solution">("all");

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.category === activeTab);

  const fabricationCount = services.filter((s) => s.category === "fabrication").length;
  const solutionCount = services.filter((s) => s.category === "solution").length;

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <button
          onClick={() => setActiveTab("all")}
          className={`cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs ${
            activeTab === "all"
              ? "bg-brand-navy text-white shadow-md"
              : "bg-white text-neutral-700 hover:text-brand-orange hover:bg-orange-50 border border-neutral-200"
          }`}
        >
          <span>All Offerings</span>
          <span
            className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center ${
              activeTab === "all"
                ? "bg-white/20 text-white"
                : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {services.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("fabrication")}
          className={`cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs ${
            activeTab === "fabrication"
              ? "bg-brand-navy text-white shadow-md"
              : "bg-white text-neutral-700 hover:text-brand-orange hover:bg-orange-50 border border-neutral-200"
          }`}
        >
          <span>In-House Fabrication</span>
          <span
            className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center ${
              activeTab === "fabrication"
                ? "bg-brand-orange text-white"
                : "bg-brand-orange/10 text-brand-orange"
            }`}
          >
            {fabricationCount}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("solution")}
          className={`cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs ${
            activeTab === "solution"
              ? "bg-brand-navy text-white shadow-md"
              : "bg-white text-neutral-700 hover:text-brand-orange hover:bg-orange-50 border border-neutral-200"
          }`}
        >
          <span>Turnkey Solutions</span>
          <span
            className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center ${
              activeTab === "solution"
                ? "bg-brand-orange text-white"
                : "bg-brand-orange/10 text-brand-orange"
            }`}
          >
            {solutionCount}
          </span>
        </button>
      </div>

      {/* 3-Column Responsive Grid matching reference card design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            title={service.name}
            badge={service.badge}
            badgeStyleIndex={index}
            description={service.description}
            image={service.heroImage}
            href={`/services/${service.slug}`}
            authorName="Mohammed Rafeeq"
            authorSubtitle="Bazar Guard Workshop"
            authorInitials="MR"
            actionText="Explore"
          />
        ))}
      </div>
    </div>
  );
}
