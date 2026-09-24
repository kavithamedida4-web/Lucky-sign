import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getAllServices,
  getServiceBySlug,
  DetailedServiceItem,
} from "@/data/services-data";
import { siteConfig } from "@/data/site-config";
import { ServiceGallery } from "@/components/ServiceGallery";
import { ServiceHero } from "@/components/ServiceHero";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  ChevronRight,
  ShieldCheck,
  Layers,
  Sparkles,
  MapPin,
  Tag,
  Wrench,
  Award,
} from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Lucky Signs Hyderabad",
    };
  }

  return {
    title: `${service.name} in Hyderabad – ${service.tagline} | Lucky Signs`,
    description: `${service.description} 100% in-house workshop fabrication at Bazar Guard, Hyderabad. Quick turnaround, direct pricing.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* 1. BREADCRUMBS & MODERN STAGGERED 4-FRAME HERO SECTION */}
      <ServiceHero service={service} />

      {/* 2. TECHNICAL SPECIFICATIONS & MATERIALS GRID (Redesigned Bento Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <span>✦</span>
            <span>CAPABILITIES &amp; MATERIALS</span>
            <span>✦</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
            Technical Specs &amp; Supported Materials
          </h2>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto font-normal">
            Fabricated with 0.1mm tolerance using commercial-grade machinery at our Bazar Guard workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Key Capabilities */}
          <div className="bg-gradient-to-b from-white via-white to-[#FFF9F3] rounded-3xl p-6 sm:p-7 border border-orange-200/80 shadow-xs hover:shadow-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy">
                    Key Capabilities
                  </h3>
                  <span className="text-xs text-brand-slate font-medium">
                    0.1mm micro-precision
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-orange-100 flex items-center justify-between text-[11px] font-bold text-brand-orange">
              <span>100% IN-HOUSE FABRICATION</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Materials & Finishes */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-border/80 shadow-xs hover:shadow-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy">
                    Materials &amp; Finishes
                  </h3>
                  <span className="text-xs text-brand-slate font-medium">
                    Stock ready in workshop
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                  Supported Materials
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold bg-[#F8F9FA] hover:bg-brand-orange/10 hover:text-brand-orange hover:border-brand-orange/30 text-neutral-800 px-3 py-1.5 rounded-xl border border-neutral-200 transition-colors"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {service.finishes && service.finishes.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                    Available Finishes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.finishes.map((fin, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-brand-orange/5 text-brand-orange px-2.5 py-1 rounded-lg border border-brand-orange/20"
                      >
                        {fin}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold text-neutral-500">
              <span>DIRECT WORKSHOP STOCK</span>
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
            </div>
          </div>

          {/* Card 3: Common Applications */}
          <div className="bg-gradient-to-b from-white via-white to-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy">
                    Common Applications
                  </h3>
                  <span className="text-xs text-brand-slate font-medium">
                    Commercial &amp; residential
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {service.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-2" />
                    <span className="leading-snug">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-neutral-600">
              <span>HYDERABAD INSTALLATION</span>
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. DEEP-DIVE SUB-SERVICES & VARIANTS (Matching Reference Card Design) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <span>✦</span>
            <span>SPECIALIZED OFFERINGS</span>
            <span>✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight">
            Specialized <span className="text-brand-orange">Offerings</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto font-normal">
            Choose from our popular specifications or request custom sizing according to your architectural drawings.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {service.subServices.map((sub, sIdx) => {
            const subWhatsApp = siteConfig.getWhatsAppUrl(
              `Hi Lucky Signs! I need a quotation for "${sub.title}" under your ${service.name} service. Details: `
            );

            return (
              <a
                key={sIdx}
                href={subWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-[330px] bg-white rounded-[2rem] sm:rounded-[2.25rem] p-3 sm:p-3.5 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-brand-orange/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Rounded Picture Container */}
                  <div className="relative w-full aspect-[4/4.8] rounded-[1.5rem] sm:rounded-[1.65rem] overflow-hidden bg-neutral-900 shadow-inner">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out brightness-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating Top Pill Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold text-white bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text & Icon Row (Matching Reference Layout) */}
                  <div className="pt-3.5 pb-1 px-1 sm:px-1.5 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-[15px] font-bold font-heading text-neutral-900 group-hover:text-brand-orange transition-colors truncate block leading-tight">
                        {sub.title}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-orange block mt-0.5 truncate">
                        {sub.applications ? sub.applications[0] : service.categoryLabel}
                      </span>
                    </div>

                    {/* Circular Action Button */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#112437] group-hover:bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-brand-orange/30 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Optional Short Description */}
                <div className="pt-2 px-1 sm:px-1.5 pb-1 border-t border-neutral-100 mt-2">
                  <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 4. WORKSHOP PHOTO GALLERY WITH LIGHTBOX */}
      {service.galleryImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1.5">
                  Real Workshop Installations
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-navy tracking-tight">
                  Recent {service.name} Workshop Photos
                </h2>
                <p className="text-sm sm:text-base text-brand-slate mt-1 max-w-2xl">
                  Click any photo to zoom in, view details, or request an instant WhatsApp quote for that specific design.
                </p>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:text-brand-orange-hover self-start md:self-end"
              >
                <span>View Complete Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <ServiceGallery
              images={service.galleryImages}
              serviceName={service.name}
              categoryLabel={service.categoryLabel}
            />
          </div>
        </section>
      )}

      {/* 5. INSTALLED CLIENTS & APPLICATIONS */}
      {service.clientsOrProjects && service.clientsOrProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-brand-orange text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight">
              Installed Clients &amp; Featured Projects in Hyderabad
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">
              We have fabricated and installed {service.name.toLowerCase()} work for prominent institutions, luxury restaurants, healthcare centers, and residences across the city.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {service.clientsOrProjects.map((client, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. EXPLORE OTHER SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block mb-1.5">
                Complete In-House Facility
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-navy tracking-tight">
                Explore Other Services
              </h2>
              <p className="text-sm sm:text-base text-brand-slate mt-1">
                Order your sign board, acrylic stands, and vinyl decals together directly from our shop.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange hover:text-brand-orange-hover self-start md:self-end"
            >
              <span>View All 7 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.slug}`}
                className="group bg-white rounded-2xl p-5 border border-brand-border hover:border-brand-orange/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-neutral-900">
                    <Image
                      src={other.heroImage}
                      alt={other.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-brand-navy/90 text-white">
                        {other.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-navy group-hover:text-brand-orange transition-colors">
                    {other.name}
                  </h3>
                  <p className="text-xs text-brand-slate line-clamp-2">
                    {other.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-orange">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CONSULTATION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-offwhite rounded-3xl p-8 sm:p-12 border border-brand-border text-center max-w-4xl mx-auto space-y-6 shadow-xs">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider block">
              Direct Workshop Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-brand-navy">
              Ready to start your {service.name.toLowerCase()} order?
            </h2>
            <p className="text-sm sm:text-base text-brand-slate max-w-xl mx-auto leading-relaxed">
              Connect with Mohammed Rafeeq directly. Send your design files, measurements, or visit our Bazar Guard shop to inspect sample materials.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={siteConfig.getWhatsAppUrl(service.whatsappTemplate)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Get WhatsApp Quote</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-navy hover:bg-brand-orange text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
            >
              <span>Visit Workshop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
