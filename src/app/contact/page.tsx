import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { faqsData } from "@/data/faqs-data";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import {
  MapPin,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Lucky Signs – Bazar Guard Workshop, Hyderabad",
  description:
    "Contact Lucky Signs in Bazar Guard, Hyderabad. Inquire about LED sign boards, laser-cut jaali grills, mandir backgrounds, and UV printing. Phone/WhatsApp: +91 92468 73092.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 sm:pt-16 pb-6 bg-brand-offwhite border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-brand-navy tracking-tight leading-[1.15]">
            Contact <span className="text-brand-orange">Lucky Signs</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-brand-slate leading-relaxed font-normal">
            Send your board size or sketch on WhatsApp, or stop by our Bazar Guard shop. Rafeeq Bhai will give you an estimate within 2 to 3 hours.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contacts & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-brand-border/60 shadow-xs space-y-6">
              <h2 className="text-xl font-bold font-heading text-brand-navy">
                Shop &amp; Workshop Contact
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-brand-slate uppercase tracking-wider block">
                      Workshop &amp; Studio Address
                    </span>
                    <p className="font-medium text-brand-navy mt-1 leading-snug">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-brand-whatsapp shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-brand-slate uppercase tracking-wider block">
                      Direct WhatsApp &amp; Phone
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="font-bold text-base text-brand-navy hover:text-brand-orange transition-colors block mt-1"
                    >
                      {siteConfig.phone}
                    </a>
                    <span className="text-xs text-brand-slate">Mohammed Rafeeq</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-brand-slate uppercase tracking-wider block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-brand-navy hover:text-brand-orange transition-colors block mt-1"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-slate shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-brand-slate uppercase tracking-wider block">
                      Business Hours
                    </span>
                    <p className="font-medium text-brand-navy mt-1">
                      {siteConfig.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Big WhatsApp CTA button */}
              <div className="pt-4 border-t border-brand-border/60">
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-7 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white font-semibold text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Get a quote on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Visual Card */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-brand-border/60 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-brand-orange" />
                  <span className="text-sm font-bold font-heading text-brand-navy">
                    Google Maps Location
                  </span>
                </div>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-orange hover:underline inline-flex items-center gap-1"
                >
                  <span>Open App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-brand-border/60 aspect-[16/9] bg-neutral-100 relative flex items-center justify-center p-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-brand-navy">
                      Lucky Signs Workshop
                    </p>
                    <p className="text-xs text-brand-slate mt-0.5">
                      Shop # 11-4-555 to 556, Bazar Guard, Hyderabad
                    </p>
                  </div>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-navy text-white text-xs font-semibold hover:bg-brand-orange shadow-sm transition-colors"
                  >
                    <span>Get Driving Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Questions before placing an order"
          highlightWord="placing an order"
          align="center"
          description="Answers regarding vector file formats, fabrication turnaround, and on-site fitting across Hyderabad."
        />
        <FaqAccordion items={faqsData} />
      </section>
    </div>
  );
}
