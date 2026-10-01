import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { faqsData } from "@/data/faqs-data";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { MapPin, Navigation, ExternalLink, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Lucky Signs – Bazar Guard Workshop, Hyderabad",
  description:
    "Contact Lucky Signs in Bazar Guard, Hyderabad. Inquire about LED sign boards, laser-cut jaali grills, mandir backgrounds, and UV printing. Phone/WhatsApp: +91 92468 73092.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pt-8 sm:pt-14 pb-24">
      {/* Work With Us - Main Contact & Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>

      {/* Workshop Location & Directions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border/70 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold">
                <Navigation className="w-3.5 h-3.5" />
                <span>Visit Our Facility</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-navy">
                Bazar Guard Workshop &amp; Studio
              </h2>
              <p className="text-sm text-brand-slate leading-relaxed">
                Bring your material samples, CAD drawings, or conceptual sketches directly to our workshop in Hyderabad for in-person consultation and live material review.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-navy hover:bg-brand-orange text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat with Rafeeq Bhai</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-brand-border/80 aspect-[16/10] sm:aspect-[16/9] bg-[#FFF7F2] relative flex items-center justify-center p-6 text-center">
                <div className="space-y-3 max-w-sm">
                  <div className="w-14 h-14 rounded-2xl bg-white text-brand-orange flex items-center justify-center mx-auto shadow-sm border border-brand-orange/20">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-brand-navy">
                      Lucky Signs Workshop
                    </h3>
                    <p className="text-xs text-brand-slate mt-1 leading-normal">
                      {siteConfig.address}
                    </p>
                  </div>
                  <div className="text-[11px] text-brand-orange font-medium bg-white/80 py-1.5 px-3 rounded-md inline-block border border-brand-orange/15">
                    Open: Mon - Sat (10:00 AM - 9:00 PM)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          highlightWord="Questions"
          align="center"
          description="Everything you need to know about pricing estimates, custom fabrication timelines, and delivery across Hyderabad."
        />
        <FaqAccordion items={faqsData} />
      </section>
    </div>
  );
}

