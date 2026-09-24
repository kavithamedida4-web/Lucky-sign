import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  getFabricationServices,
  getSolutionServices,
  getAllServices,
} from "@/data/services-data";
import { siteConfig } from "@/data/site-config";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
  Printer,
  Scissors,
  Flame,
  ShieldCheck,
  Building2,
  CalendarHeart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Turnkey Solutions – Laser Cutting, UV Printing, LED Signs | Lucky Signs",
  description:
    "In-house sign board fabrication and acrylic work at Bazar Guard, Hyderabad. Laser jaali cutting, UV flatbed printing, LED 3D letters, and event monograms.",
};

export default function ServicesHubPage() {
  const fabricationServices = getFabricationServices();
  const solutionServices = getSolutionServices();
  const allServices = getAllServices();

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 sm:pt-16 pb-8 bg-brand-offwhite border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-3">
            Bazar Guard, Hyderabad · Complete In-House Facility
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-brand-navy tracking-tight leading-[1.15]">
            Precision Fabrication &amp;{" "}
            <span className="text-brand-orange">Turnkey Signage Solutions</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-brand-slate leading-relaxed font-normal max-w-3xl mx-auto">
            CNC laser cutting, UV flatbed printing, 3D LED letter bending, and custom event monograms. We fabricate all 7 categories under our own roof in Bazar Guard so you get direct pricing and honest delivery dates.
          </p>

          {/* Quick Category Switcher / Anchor Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#all"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy text-white text-xs sm:text-sm font-semibold shadow-xs hover:bg-brand-navy/90 transition-all duration-200"
            >
              <span>All 7 Offerings</span>
              <span className="w-5 h-5 rounded-full bg-white/20 text-[11px] flex items-center justify-center">
                7
              </span>
            </a>
            <a
              href="#fabrication"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-brand-navy border border-brand-border hover:border-brand-orange hover:text-brand-orange text-xs sm:text-sm font-semibold shadow-xs transition-all duration-200"
            >
              <span>In-House Fabrication</span>
              <span className="w-5 h-5 rounded-full bg-brand-orange-light text-brand-orange text-[11px] flex items-center justify-center font-bold">
                5
              </span>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-brand-navy border border-brand-border hover:border-brand-orange hover:text-brand-orange text-xs sm:text-sm font-semibold shadow-xs transition-all duration-200"
            >
              <span>Turnkey Solutions</span>
              <span className="w-5 h-5 rounded-full bg-brand-orange-light text-brand-orange text-[11px] flex items-center justify-center font-bold">
                2
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: IN-HOUSE FABRICATION SERVICES (5 CARDS) */}
      <section id="fabrication" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-brand-border/60">
          <div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-1.5">
              <Cpu className="w-4 h-4" />
              <span>Workshop Machinery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-navy tracking-tight">
              In-House Fabrication Services
            </h2>
            <p className="text-sm sm:text-base text-brand-slate mt-1 max-w-2xl">
              Precision machining on our own equipment at Bazar Guard. Vector-accurate cutting, direct curing, thermo-forming, and permanent etching.
            </p>
          </div>
          <span className="text-xs font-semibold text-brand-slate bg-brand-offwhite px-3 py-1.5 rounded-full border border-brand-border/60 self-start md:self-end">
            5 Dedicated Services
          </span>
        </div>

        <div className="space-y-8">
          {fabricationServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border/70 hover:border-brand-orange/40 shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold font-heading flex items-center justify-center shadow-xs">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-orange-light text-brand-orange border border-brand-orange/20">
                    {service.badge}
                  </span>
                  <span className="text-xs font-medium text-brand-slate">
                    Bazar Guard Facility
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                    <Link href={`/services/${service.slug}`}>
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-brand-orange mt-1">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                  {service.description}
                </p>

                {/* Key features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {service.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-brand-navy">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Materials Chips */}
                <div className="pt-3 border-t border-brand-border/60">
                  <span className="text-[11px] font-semibold text-brand-slate uppercase tracking-wider block mb-1.5">
                    Supported Materials &amp; Finishes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.materials.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[11px] font-medium bg-brand-offwhite text-brand-navy px-2.5 py-1 rounded-full border border-brand-border/60"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy hover:bg-brand-orange text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <span>View Details &amp; Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={siteConfig.getWhatsAppUrl(service.whatsappTemplate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-brand-whatsapp/10 hover:bg-brand-whatsapp text-brand-navy hover:text-white text-xs sm:text-sm font-semibold border border-brand-whatsapp/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-whatsapp hover:text-white" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5">
                <Link
                  href={`/services/${service.slug}`}
                  className="block relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-neutral-900 border border-brand-border shadow-xs group/img"
                >
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange px-2 py-0.5 rounded text-white">
                        {service.subServices.length} Sub-Services
                      </span>
                      <p className="text-xs font-semibold text-white mt-1">
                        Explore specifications &amp; photos
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white group-hover/img:bg-brand-orange transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION 2: TURNKEY SIGNAGE & EVENT SOLUTIONS (2 SHOWCASE CARDS) */}
      <section id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-brand-border/60">
          <div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Complete End-to-End Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-navy tracking-tight">
              Turnkey Signage &amp; Event Solutions
            </h2>
            <p className="text-sm sm:text-base text-brand-slate mt-1 max-w-2xl">
              Complete commercial sign boards and custom event decor. Designed, fabricated, wired, and installed on-site with structural stability and lighting safety.
            </p>
          </div>
          <span className="text-xs font-semibold text-brand-slate bg-brand-offwhite px-3 py-1.5 rounded-full border border-brand-border/60 self-start md:self-end">
            2 Turnkey Solutions
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutionServices.map((solution) => (
            <div
              key={solution.id}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-border/70 hover:border-brand-orange/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Hero Image */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={solution.heroImage}
                  alt={solution.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-orange text-white shadow-xs">
                    {solution.categoryLabel}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-navy text-white shadow-xs">
                    {solution.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {solution.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-1 line-clamp-2">
                    {solution.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Sub-offerings list */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy block mb-2">
                      Included Offerings &amp; Styles
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.subServices.map((sub, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-brand-navy">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          <span className="font-medium">{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clients / Applications */}
                  {solution.clientsOrProjects && (
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold text-brand-slate uppercase tracking-wider block mb-1.5">
                        Trusted In Hyderabad By
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {solution.clientsOrProjects.slice(0, 4).map((client, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[10px] font-medium bg-brand-offwhite text-brand-navy px-2.5 py-1 rounded-full border border-brand-border/60"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-brand-border/60 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/services/${solution.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-navy hover:bg-brand-orange text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <span>Explore {solution.name.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={siteConfig.getWhatsAppUrl(solution.whatsappTemplate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-brand-whatsapp/10 hover:bg-brand-whatsapp text-brand-navy hover:text-white text-xs sm:text-sm font-semibold border border-brand-whatsapp/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-whatsapp hover:text-white" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WORKSHOP MACHINERY TRUST METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
              In-House Machinery &amp; Standards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
              Direct workshop control at Bazar Guard
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              We cut, print, and assemble every piece ourselves in Bazar Guard so you get fair prices and clean work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-colors">
              <span className="text-[11px] font-mono font-bold text-brand-orange tracking-wide uppercase block">
                Tolerance: ±0.1mm
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                CNC Laser Machine
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Clean, burr-free cuts on acrylic from 2mm to 25mm, MDF boards, natural wood, and architectural laminates.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-colors">
              <span className="text-[11px] font-mono font-bold text-brand-orange tracking-wide uppercase block">
                Resolution: 1440 DPI
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                UV Flatbed Printer
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Direct-to-substrate photographic resolution with instant ultraviolet curing on glass, acrylic, and sheet metal.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-colors">
              <span className="text-[11px] font-mono font-bold text-brand-orange tracking-wide uppercase block">
                Width: Up to 48 Inches
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                Graphtec Plotter
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Micro-accurate contour cutting on cast vinyl, reflective films, and decals for commercial fleet branding.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2 hover:bg-white/10 transition-colors">
              <span className="text-[11px] font-mono font-bold text-brand-orange tracking-wide uppercase block">
                Finish: Flame-Polished
              </span>
              <h3 className="text-base font-bold font-heading text-white">
                Heat Bending &amp; Etching
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Thermo-forming acrylic stands with flame-polished edges and permanent computer-guided metal engraving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIRECT FOUNDER WHATSAPP CONSULTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-offwhite rounded-3xl p-8 sm:p-12 border border-brand-border text-center max-w-4xl mx-auto space-y-6 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center mx-auto shadow-xs">
            <MessageCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-navy">
              Share your dimensions or vector files
            </h2>
            <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto leading-relaxed">
              Send your CDR, AI, PDF files or a hand-drawn sketch to Mohammed Rafeeq. We provide exact quotes and turnaround timelines within a few hours.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={siteConfig.getWhatsAppUrl("Hi Lucky Signs! I have drawing/measurements for custom fabrication. Please share pricing: ")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Drawing on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-navy hover:bg-brand-orange text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
            >
              <span>Visit Bazar Guard Shop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
