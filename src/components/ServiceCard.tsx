import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  badge: string;
  badgeStyleIndex?: number;
  badgeColorClass?: string;
  description: string;
  image: string;
  href: string;
  isExternal?: boolean;
  authorName?: string;
  authorSubtitle?: string;
  authorInitials?: string;
  actionText?: string;
}

const BADGE_STYLES = [
  "bg-blue-50 text-blue-600 border-blue-200/70", // Technology blue
  "bg-amber-50 text-amber-700 border-amber-200/70", // Warm food amber
  "bg-rose-50 text-rose-600 border-rose-200/70", // Automobile coral/red
  "bg-emerald-50 text-emerald-700 border-emerald-200/70", // Emerald
  "bg-purple-50 text-purple-600 border-purple-200/70", // Purple
  "bg-orange-50 text-brand-orange border-orange-200/70", // Brand orange
  "bg-cyan-50 text-cyan-700 border-cyan-200/70", // Cyan
];

export function ServiceCard({
  title,
  badge,
  badgeStyleIndex = 0,
  badgeColorClass,
  description,
  image,
  href,
  isExternal = false,
  authorName = "Mohammed Rafeeq",
  authorSubtitle = "Bazar Guard Workshop",
  authorInitials = "MR",
  actionText,
}: ServiceCardProps) {
  const badgeClass =
    badgeColorClass || BADGE_STYLES[badgeStyleIndex % BADGE_STYLES.length];

  const cardContent = (
    <>
      {/* 1. TOP IMAGE (Clean photo with smooth hover zoom) */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* 2. CARD CONTENT BODY */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category / Topic Pill Badge */}
          <div className="inline-flex">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeClass}`}
            >
              {badge}
            </span>
          </div>

          {/* Bold Heading */}
          <h3 className="text-lg sm:text-xl font-bold font-heading text-neutral-900 group-hover:text-brand-orange transition-colors mt-2.5 mb-2 leading-snug line-clamp-1">
            {title}
          </h3>

          {/* Description Excerpt */}
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* 3. BOTTOM AUTHOR / WORKSHOP META BAR */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Small circular avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0F1E2E] to-brand-navy text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs border border-white">
              <span>{authorInitials}</span>
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-neutral-800 block truncate leading-tight">
                {authorName}
              </span>
              <span className="text-[11px] text-neutral-400 block truncate leading-tight">
                {authorSubtitle}
              </span>
            </div>
          </div>

          {/* Action icon / arrow */}
          <div className="flex items-center gap-1.5 shrink-0">
            {actionText && (
              <span className="hidden sm:inline-block text-[11px] font-semibold text-neutral-400 group-hover:text-brand-orange transition-colors">
                {actionText}
              </span>
            )}
            <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-brand-orange text-neutral-600 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl sm:rounded-[1.25rem] overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl sm:rounded-[1.25rem] overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
    >
      {cardContent}
    </Link>
  );
}
