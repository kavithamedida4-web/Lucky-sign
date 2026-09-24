"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import {
  getFabricationServices,
  getSolutionServices,
} from "@/data/services-data";
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Cpu,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fabricationServices = getFabricationServices();
  const solutionServices = getSolutionServices();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const isServicesActive = pathname.startsWith("/services");
  const isNavyMode = scrolled;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isNavyMode
            ? "bg-brand-navy shadow-xl border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg font-heading shadow-md transition-colors ${
                  isNavyMode
                    ? "bg-brand-orange text-white group-hover:bg-brand-orange-hover"
                    : "bg-brand-navy text-white group-hover:bg-brand-orange"
                }`}
              >
                LS
              </div>
              <div>
                <span
                  className={`text-xl font-bold font-heading tracking-tight block leading-none transition-colors ${
                    isNavyMode ? "text-white" : "text-brand-navy"
                  }`}
                >
                  LUCKY <span className="text-brand-orange">SIGNS</span>
                </span>
                <span
                  className={`text-[11px] font-medium tracking-wider uppercase block mt-1 transition-colors ${
                    isNavyMode ? "text-white/70" : "text-brand-slate"
                  }`}
                >
                  Studio · Bazar Guard, Hyderabad
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1.5">
              {siteConfig.navItems.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div
                      key={item.href}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer relative ${
                          isServicesActive
                            ? "text-brand-orange font-semibold"
                            : isNavyMode
                            ? "text-white/85 hover:text-brand-orange hover:bg-white/5"
                            : "text-brand-navy/85 hover:text-brand-orange hover:bg-black/5"
                        }`}
                      >
                        <Link href="/services" onClick={(e) => e.stopPropagation()}>
                          <span>Services</span>
                        </Link>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen
                              ? "rotate-180 text-brand-orange"
                              : isNavyMode
                              ? "text-white/70"
                              : "text-brand-slate"
                          }`}
                        />
                        {isServicesActive && (
                          <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-orange rounded-full" />
                        )}
                      </button>

                      {/* Services Mega Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-[#142038] text-white rounded-2xl shadow-2xl border border-white/15 p-5 z-50 animate-in fade-in zoom-in-95 duration-200">
                          <div className="grid grid-cols-2 gap-5 pb-4 border-b border-white/10">
                            {/* Column 1: IN-HOUSE FABRICATION (5 items) */}
                            <div>
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange px-2 mb-2">
                                <Cpu className="w-4 h-4 text-brand-orange shrink-0" />
                                <span>IN-HOUSE FABRICATION</span>
                              </div>
                              <div className="space-y-0.5">
                                {fabricationServices.map((service) => (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    onClick={() => setServicesDropdownOpen(false)}
                                    className="group block p-2 rounded-xl hover:bg-white/5 transition-all duration-150"
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                                        {service.name}
                                      </span>
                                      <span className="text-[10px] font-semibold text-white/70 bg-white/10 px-2 py-0.5 rounded-full border border-white/10 shrink-0">
                                        {service.badge}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-white/60 truncate mt-0.5 group-hover:text-white/80 transition-colors">
                                      {service.tagline || service.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: TURNKEY SOLUTIONS (2 items + Workshop Promo Box) */}
                            <div className="flex flex-col justify-between">
                              <div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange px-2 mb-2">
                                  <Sparkles className="w-4 h-4 text-brand-orange shrink-0" />
                                  <span>TURNKEY SOLUTIONS</span>
                                </div>
                                <div className="space-y-0.5">
                                  {solutionServices.map((service) => (
                                    <Link
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      className="group block p-2 rounded-xl hover:bg-white/5 transition-all duration-150"
                                    >
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                                          {service.name}
                                        </span>
                                        <span className="text-[10px] font-semibold text-white/70 bg-white/10 px-2 py-0.5 rounded-full border border-white/10 shrink-0">
                                          {service.badge}
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-white/60 truncate mt-0.5 group-hover:text-white/80 transition-colors">
                                        {service.tagline || service.description}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* 100% Bazar Guard Workshop Callout Box */}
                              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 mt-3">
                                <h4 className="text-xs font-bold text-white mb-0.5">
                                  100% Bazar Guard Workshop
                                </h4>
                                <p className="text-[11px] text-white/70 leading-relaxed">
                                  No middleman or outsourcing. Exact measurements &amp; fast turnaround.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Dropdown Footer */}
                          <div className="pt-3 flex items-center justify-between text-xs px-1">
                            <Link
                              href="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="font-semibold text-brand-orange hover:text-brand-orange-hover inline-flex items-center gap-1.5 group/hub"
                            >
                              <span>Explore All 7 Services Catalog</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hub-hover:translate-x-1" />
                            </Link>
                            <span className="text-white/60 text-[11px]">
                              Bazar Guard, Hyderabad
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                      isActive
                        ? "text-brand-orange font-semibold"
                        : isNavyMode
                        ? "text-white/85 hover:text-brand-orange hover:bg-white/5"
                        : "text-brand-navy/85 hover:text-brand-orange hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-orange rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-200 group ${
                  isNavyMode
                    ? "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-brand-orange/20"
                    : "bg-brand-navy hover:bg-brand-orange text-white shadow-brand-navy/20"
                }`}
              >
                <span>Get a quote</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none cursor-pointer transition-colors ${
                  isNavyMode
                    ? "text-white hover:bg-white/10"
                    : "text-brand-navy hover:bg-black/5"
                }`}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div
            data-testid="mobile-drawer"
            className="lg:hidden border-t border-white/10 bg-[#142038] text-white px-5 pt-3 pb-8 shadow-2xl animate-in slide-in-from-top-3 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="space-y-1.5">
              {siteConfig.navItems.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key={item.href} className="space-y-1">
                      <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`text-base font-semibold transition-colors ${
                            isServicesActive ? "text-brand-orange" : "text-white"
                          }`}
                        >
                          Services Hub
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1 text-white hover:text-brand-orange focus:outline-none cursor-pointer"
                          aria-label="Toggle services list"
                          aria-expanded={mobileServicesOpen}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180 text-brand-orange" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Mobile Collapsible Categories */}
                      {mobileServicesOpen && (
                        <div className="pl-2 pr-1 py-2 space-y-3 animate-in fade-in duration-200">
                          {/* 1. In-House Fabrication */}
                          <div>
                            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brand-orange px-2 mb-1.5">
                              <Cpu className="w-3.5 h-3.5 text-brand-orange" />
                              <span>In-House Fabrication</span>
                            </div>
                            <div className="space-y-1">
                              {fabricationServices.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-brand-orange/20 text-white hover:text-brand-orange border border-white/10 transition-colors text-xs font-semibold"
                                >
                                  <span>{service.name}</span>
                                  <span className="text-[10px] text-white/60 bg-white/10 px-2 py-0.5 rounded">
                                    {service.badge}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* 2. Turnkey Solutions */}
                          <div>
                            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brand-orange px-2 mb-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                              <span>Turnkey Solutions</span>
                            </div>
                            <div className="space-y-1">
                              {solutionServices.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-brand-orange/20 text-white hover:text-brand-orange border border-white/10 transition-colors text-xs font-semibold"
                                >
                                  <span>{service.name}</span>
                                  <span className="text-[10px] text-white/60 bg-white/10 px-2 py-0.5 rounded">
                                    {service.badge}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Link to Full Catalog */}
                          <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between p-2.5 rounded-lg bg-brand-orange/20 text-brand-orange hover:bg-brand-orange hover:text-white border border-brand-orange/30 transition-colors text-xs font-bold"
                          >
                            <span>Explore All 7 Services Catalog</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-brand-orange/20 text-brand-orange font-semibold"
                        : "text-white/90 hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand-orange" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-semibold text-white rounded-xl bg-white/5 border border-white/10 shadow-xs hover:border-brand-orange/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call Mohammed Rafeeq</span>
              </a>
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white text-sm font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get a quote on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold shadow-sm transition-colors"
              >
                <span>Visit our shop</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 bg-black/50 z-40 xl:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
