import React from "react";
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
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceWhyChooseUs } from "@/components/ServiceWhyChooseUs";
import { ServiceHowItWorks } from "@/components/ServiceHowItWorks";
import { ServiceTestimonials } from "@/components/ServiceTestimonials";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";

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


  return (
    <div className="space-y-12 sm:space-y-24 md:space-y-28 pb-14 sm:pb-24">
      {/* 1. BREADCRUMBS & MODERN STAGGERED 4-FRAME HERO SECTION */}
      <ServiceHero service={service} />



      {/* 3. DEEP-DIVE SUB-SERVICES & VARIANTS (Matching Reference Card Design) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <span>✦</span>
            <span>EXPLORE OUR SERVICES</span>
            <span>✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-navy tracking-tight">
            Explore Our <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto font-normal">
            Choose from our popular specifications or request custom sizing according to your architectural drawings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {service.subServices.map((sub, sIdx) => {
            const subWhatsApp = siteConfig.getWhatsAppUrl(
              `Hi Lucky Signs! I need a quotation for "${sub.title}" under your ${service.name} service. Details: `
            );

            return (
              <ServiceCard
                key={sIdx}
                title={sub.title}
                badge={sub.applications && sub.applications.length > 0 ? sub.applications[0] : service.badge}
                badgeStyleIndex={sIdx}
                description={sub.description}
                image={sub.image}
                href={subWhatsApp}
                isExternal={true}
                authorName="Mohammed Rafeeq"
                authorSubtitle="Direct Workshop Quote"
                authorInitials="MR"
                actionText="WhatsApp"
              />
            );
          })}
        </div>
      </section>

      {/* 3.5 WHY CHOOSE US SECTION */}
      <ServiceWhyChooseUs serviceName={service.name} />

      {/* 3.6 HOW IT WORKS SECTION */}
      <ServiceHowItWorks serviceName={service.name} slug={service.slug} />

      {/* 3.7 SERVICE REVIEWS & TESTIMONIALS */}
      <ServiceTestimonials serviceName={service.name} slug={service.slug} />

      {/* 4. FROM OUR GALLERY - BENTO WORKSHOP PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceGallery
          images={service.galleryImages}
          serviceName={service.name}
          categoryLabel={service.categoryLabel}
          slug={service.slug}
        />
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <ServiceFaqSection serviceName={service.name} slug={service.slug} />



    </div>
  );
}
