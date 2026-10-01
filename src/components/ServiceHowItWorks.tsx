"use client";

import React from "react";
import {
  MessageSquare,
  FileText,
  Cpu,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface StepItem {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface ServiceHowItWorksProps {
  serviceName?: string;
  slug?: string;
}

const serviceStepsMap: Record<string, StepItem[]> = {
  "laser-cutting": [
    {
      step: "01",
      title: "Share Vector or Dimensions",
      desc: "Send your vector files (CDR, DXF, AI, PDF) or rough drawings with measurements directly on WhatsApp.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Material & Thickness Choice",
      desc: "Select 2mm–25mm cast acrylic, high-density MDF, or wood with direct workshop pricing and zero hidden fees.",
      icon: FileText,
    },
    {
      step: "03",
      title: "CNC Laser Cutting",
      desc: "High-precision laser cutting with ±0.1mm tolerance, clean internal filigrees, and smooth flame-polished edges in Bazar Guard.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Quality Check & Delivery",
      desc: "Burr-free edge inspection, protective masking check, and rapid doorstep delivery or installation across Hyderabad.",
      icon: CheckCircle2,
    },
  ],
  "uv-printing": [
    {
      step: "01",
      title: "Send High-Res Artwork",
      desc: "Upload your high-resolution artwork, logos, or photographic designs (TIFF, PDF, AI, PSD) on WhatsApp.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Substrate & Color Match",
      desc: "Choose direct printing on acrylic, ACP, glass, metal, or sunboard with opaque white ink underlay options.",
      icon: FileText,
    },
    {
      step: "03",
      title: "1440 DPI Flatbed Print",
      desc: "Instant UV lamp curing deposits scratch-proof, vibrant, sun-resistant photographic prints directly to material.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Inspection & Safe Dispatch",
      desc: "Strict color calibration check, protective packaging, and fast delivery or architectural installation across Hyderabad.",
      icon: CheckCircle2,
    },
  ],
  "plotter-cutting": [
    {
      step: "01",
      title: "Provide Cut Lines or Vector",
      desc: "Share your vector outlines, lettering fonts, or fleet branding dimensions in CorelDRAW, Illustrator, or PDF.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Vinyl Grade & Finish Choice",
      desc: "Select cast vinyl, 3M reflective films, frosted glass film, or transport-grade vehicle wrap materials.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Graphtec Micro-Plotting",
      desc: "High-speed, razor-sharp contour cutting with clean weeded excess and pre-applied transfer application tape.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Bubble-Free Site Fitting",
      desc: "Ready-to-peel decal handover or professional bubble-free on-site application for glass, walls, or vehicle fleets.",
      icon: CheckCircle2,
    },
  ],
  "acrylic-bending": [
    {
      step: "01",
      title: "Share Specs or Sample",
      desc: "Send product dimensions, hand sketches, or sample photos for custom display stands, trays, or brochure racks.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Gauge & Template Design",
      desc: "Confirm acrylic thickness (2mm to 8mm+), bend radius, clear or tinted finishes, and batch volume pricing.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Heat Bending & Joining",
      desc: "Evenly heated line bending on specialized jigs produces bubble-free curved radii and crystal-clear solvent joints.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Edge Buffing & Dispatch",
      desc: "Flame-polished edges, optical clarity verification, and secure cushioned packaging dispatched across Hyderabad.",
      icon: CheckCircle2,
    },
  ],
  "engraving": [
    {
      step: "01",
      title: "Submit Text & Insignia",
      desc: "Send cabin titles, executive names, award citations, or organization crests in text or vector artwork.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Plate & Finish Selection",
      desc: "Select solid brass, brushed aluminum, dual-color Rowmark plastic, or thick crystal-cut acrylic blocks.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Laser & Rotary Etching",
      desc: "Computer-guided micro-engraving cuts permanent deep text and emblems, filled with high-gloss baked enamel colors.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Hardware Mounting & Dispatch",
      desc: "Beveled edges, supplied with brass/steel standoffs or heavy-duty foam tape, packaged securely for delivery.",
      icon: CheckCircle2,
    },
  ],
  "sign-boards": [
    {
      step: "01",
      title: "Share Facade Dimensions & Logo",
      desc: "Send your storefront photos, wall measurements, and brand logo on WhatsApp for technical evaluation.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Design Proof & Upfront Quote",
      desc: "Receive scaled 2D/3D mockups with recommended Samsung LED specs, ACP framing, and all-inclusive pricing.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Workshop Letter Fabrication",
      desc: "Computerized acrylic channel letter fabrication, LED wiring, and weatherproof sealing inside our Bazar Guard workshop.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Citywide On-Site Mounting",
      desc: "Professional structural mounting, civil fitting, electrical wiring, and testing anywhere across Hyderabad & Secunderabad.",
      icon: CheckCircle2,
    },
  ],
  "event-backdrops": [
    {
      step: "01",
      title: "Share Names & Event Theme",
      desc: "Send the couple's names, event date, monogram motif, or Pinterest inspirations directly on WhatsApp.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Font Style & Mirror Finish",
      desc: "Select luxury mirror gold, rose gold, silver chrome, or neon backlighting with scaled digital preview proofs.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Precision Laser Cutting",
      desc: "Intricate script cutting on virgin cast acrylic with clean edges and reinforced backing for event stability.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Event Delivery & Ring Mounting",
      desc: "Supplied with discreet mounting eyelets or delivered directly to your venue/home decorator in Hyderabad.",
      icon: CheckCircle2,
    },
  ],
};

const defaultSteps: StepItem[] = [
  {
    step: "01",
    title: "Share Specs or Vector File",
    desc: "Send your required dimensions, reference images, or design files (CDR, AI, PDF) directly on WhatsApp.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Material Specs & Exact Quote",
    desc: "Receive expert recommendations on material grade, thickness, and honest direct workshop pricing.",
    icon: FileText,
  },
  {
    step: "03",
    title: "In-House Machine Fabrication",
    desc: "Computerized CNC laser cutting, UV printing, and handcrafting under direct workshop supervision at Bazar Guard.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Quality Check & Delivery",
    desc: "Comprehensive quality inspection followed by safe packaging and professional on-site installation across Hyderabad.",
    icon: CheckCircle2,
  },
];

export function ServiceHowItWorks({ serviceName, slug }: ServiceHowItWorksProps) {
  const steps = (slug && serviceStepsMap[slug]) ? serviceStepsMap[slug] : defaultSteps;

  return (
    <section className="bg-brand-orange-light/80 border-y border-[#FED7AA]/40 py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-brand-orange text-xs font-bold uppercase tracking-wider border border-brand-orange/20 shadow-xs">
            <span className="text-[10px]">✦</span>
            <span>Work Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-brand-navy tracking-tight">
            How It Works {serviceName ? (
              <>
                for <span className="text-brand-orange">{serviceName}</span>
              </>
            ) : (
              <>
                &amp; How We <span className="text-brand-orange">Operate</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-brand-slate max-w-md mx-auto">
            From initial dimensions or drawings to in-house workshop fabrication and reliable delivery in 4 straightforward steps.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Mobile Swipe Hint */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 text-[11px] font-semibold text-brand-orange/90 bg-white py-1 px-3 rounded-full w-fit mx-auto border border-brand-orange/15 mb-6 shadow-xs">
            <span>⟵ Swipe steps horizontally ⟶</span>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10 overflow-x-auto sm:overflow-visible pb-4 pt-1 px-4 -mx-4 sm:px-0 sm:mx-0 snap-x snap-mandatory scroll-smooth no-scrollbar">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={item.step}
                  className="relative flex flex-col items-center text-center group w-[75vw] max-w-[280px] min-w-[240px] sm:w-auto sm:max-w-none sm:min-w-0 shrink-0 sm:shrink snap-center bg-white/70 sm:bg-transparent rounded-3xl sm:rounded-none p-5 sm:p-0 border border-orange-200/50 sm:border-0 shadow-xs sm:shadow-none"
                >
                  {/* Step Circle with Floating Numbered Badge */}
                  <div className="relative mb-6">
                    {/* Outer circular container with soft gradient & subtle hover lift */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-brand-border/80 shadow-md flex items-center justify-center group-hover:border-brand-orange/50 group-hover:shadow-lg transition-all duration-300">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFF9F3] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          className="w-7 h-7 sm:w-8 sm:h-8 text-brand-orange"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>

                    {/* Top-Left Numbered Badge */}
                    <div className="absolute -top-1 -left-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-orange text-white font-mono font-bold text-xs flex items-center justify-center shadow-md border-2 border-white">
                      {item.step}
                    </div>
                  </div>

                  {/* Connecting Curved Arrow (Desktop Only: shown between steps 1-2, 2-3, 3-4) */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-8 left-[65%] w-[70%] pointer-events-none z-0">
                      {/* SVG Curved Flow Arrow */}
                      <svg
                        className="w-full h-10 text-brand-orange/40 stroke-current"
                        viewBox="0 0 100 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d={
                            index % 2 === 0
                              ? "M 5,8 Q 50,-8 90,14"
                              : "M 5,16 Q 50,32 90,8"
                          }
                          strokeWidth="1.75"
                          strokeDasharray="4 4"
                          fill="none"
                        />
                        <polygon
                          points={
                            index % 2 === 0
                              ? "86,8 94,15 88,18"
                              : "86,2 94,8 88,14"
                          }
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Step Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed max-w-[240px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
