import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlightWord,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  // If highlightWord is provided, split the title and wrap the highlight
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={i} className="text-brand-orange">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}>
      {badge && (
        <span className={`text-xs font-semibold uppercase tracking-wider text-brand-orange block mb-2 ${
          isCenter ? "text-center" : ""
        }`}>
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight text-brand-navy leading-[1.15]">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
