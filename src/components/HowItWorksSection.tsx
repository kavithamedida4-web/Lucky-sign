"use client";

import React from "react";
import { MessageSquare, FileText, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Share Specs or Sketch",
      desc: "Send your board size, rough drawing, or vector design (CorelDRAW / PDF) on WhatsApp.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Material & Price Quote",
      desc: "We recommend genuine acrylic, ACP, and Samsung LEDs with honest, direct pricing.",
      icon: FileText,
    },
    {
      step: "03",
      title: "In-House Fabrication",
      desc: "Laser cutting, UV flatbed printing, and 3D letter assembly in our Bazar Guard workshop.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Delivery & Installation",
      desc: "Fast on-site mounting, wiring, and structural fitting anywhere across Hyderabad.",
      icon: CheckCircle2,
    },
  ];

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
            How We Operate
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-brand-slate max-w-md mx-auto">
            From your initial idea to professional on-site installation in 4 straightforward steps.
          </p>
        </div>

      {/* Steps Container */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={item.step} className="relative flex flex-col items-center text-center group">
                
                {/* Step Circle with Floating Numbered Badge */}
                <div className="relative mb-6">
                  {/* Outer circular container with soft gradient & subtle hover lift */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-brand-border/80 shadow-md flex items-center justify-center group-hover:border-brand-orange/50 group-hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFF9F3] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-orange" strokeWidth={1.75} />
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
