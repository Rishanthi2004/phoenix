"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Flame,
  ChevronRight,
  Home,
  Info,
  Swords,
  User,
  Sparkles,
  Trophy,
  Camera,
  MessageSquare,
} from "lucide-react";

interface NavbarProps {
  onOpenEnquiry?: (program?: string) => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4 text-amber-400" /> },
    { name: "About", href: "#about", icon: <Info className="w-4 h-4 text-sky-400" /> },
    { name: "Training", href: "#training", icon: <Swords className="w-4 h-4 text-orange-400" /> },
    { name: "Our Guru", href: "#guru", icon: <User className="w-4 h-4 text-amber-300" /> },
    { name: "Why Silambam", href: "#why", icon: <Sparkles className="w-4 h-4 text-yellow-400" /> },
    { name: "Achievements", href: "#achievements", icon: <Trophy className="w-4 h-4 text-amber-400" /> },
    { name: "Gallery", href: "#gallery", icon: <Camera className="w-4 h-4 text-sky-300" /> },
    { name: "Contact", href: "#contact", icon: <Phone className="w-4 h-4 text-green-400" /> },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09182d]/95 backdrop-blur-md border-b border-sky-500/20 py-2.5 shadow-xl shadow-[#040c17]/60"
            : "bg-gradient-to-b from-[#09182d]/95 via-[#09182d]/70 to-transparent py-3 md:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 flex-nowrap">
          {/* Mobile Left Menu Trigger Button */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-[#102a4d] to-[#163a6b] border border-sky-400/40 text-amber-300 shadow-md shadow-sky-950/50 active:scale-95 transition-all focus:outline-none"
              aria-label="Open navigation menu from left"
            >
              <Menu className="w-5 h-5 text-amber-400" />
              <span className="text-[11px] font-bold text-white uppercase tracking-wider hidden xs:inline">Menu</span>
            </button>
          </div>

          {/* Logo & Brand (Single Line) */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0 whitespace-nowrap"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300 shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0d223d] flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Phoenix Silambam Academy Logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1 leading-none">
                <span className="text-base sm:text-xl md:text-2xl font-black tracking-wider font-cinzel flame-gradient-text uppercase whitespace-nowrap">
                  Phoenix
                </span>
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500 shrink-0 animate-pulse" />
              </div>
              <p className="text-[8.5px] sm:text-[10px] tracking-widest text-amber-300/90 font-semibold uppercase whitespace-nowrap mt-0.5">
                Silambam Academy • Namakkal
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (Single Line, Never Wraps) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0 flex-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold text-slate-200 hover:text-amber-300 rounded-lg hover:bg-sky-500/15 transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button & Direct Call */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 flex-nowrap">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-amber-300 transition-colors whitespace-nowrap"
              title="Call Phoenix Silambam Academy"
            >
              <div className="w-7 h-7 rounded-full bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0">
                <Phone className="w-3 h-3" />
              </div>
              <span className="hidden xl:inline text-xs font-bold">+91 98765 43210</span>
            </a>

            <a
              href="#contact"
              onClick={() => onOpenEnquiry?.()}
              className="inline-flex items-center justify-center px-4 xl:px-5 py-2 text-xs font-extrabold text-black bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 rounded-full shadow-md shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>Join Training</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1 shrink-0" />
            </a>
          </div>

          {/* Mobile Right Action Button */}
          <div className="lg:hidden flex items-center shrink-0">
            <a
              href="#contact"
              onClick={() => onOpenEnquiry?.()}
              className="px-3 py-1.5 text-[11px] font-extrabold text-black bg-gradient-to-r from-amber-400 to-orange-500 rounded-full whitespace-nowrap shadow-md active:scale-95 transition-transform"
            >
              Join Now
            </a>
          </div>
        </div>
      </header>

      {/* Full-Screen Left-Side Mobile Menu Drawer & Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-start animate-in fade-in duration-200">
          {/* Backdrop (tap to close) */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Drawer Panel from the LEFT */}
          <div className="relative w-[82%] max-w-xs sm:max-w-sm h-full bg-[#0a1b32] border-r border-sky-400/30 shadow-2xl flex flex-col justify-between p-5 z-10 overflow-y-auto animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sky-500/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 to-orange-500">
                    <div className="w-full h-full rounded-full bg-[#0d223d] flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={36}
                        height={36}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold font-cinzel flame-gradient-text">
                      Phoenix Silambam
                    </h3>
                    <p className="text-[9px] text-amber-300/80 font-bold uppercase">Namakkal, TN</p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 py-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-100 hover:text-amber-300 bg-sky-500/5 hover:bg-sky-500/15 border border-transparent hover:border-sky-400/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {link.icon}
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-sky-400/50" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 border-t border-sky-500/20 space-y-2.5">
              <a
                href="#contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry?.();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider text-center shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                <span>Join Our Training</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#102a4d] border border-sky-400/30 text-sky-200 font-bold text-xs hover:bg-sky-500/20 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Master</span>
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hello%20Master%20Muhibur%20Rahman,%20I%20want%20to%20know%20about%20Silambam%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs hover:bg-[#25D366]/30 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
