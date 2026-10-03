"use client";
import React from "react";
import Image from "next/image";
import {
  Flame,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Guru", href: "#guru" },
    { name: "Why Silambam", href: "#why" },
    { name: "Achievements", href: "#achievements" },
    { name: "Photo Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  const trainingLinks = [
    { name: "Kids Training (5 - 12 Yrs)", href: "#training" },
    { name: "Beginner Training", href: "#training" },
    { name: "Advanced Weapons & Forms", href: "#training" },
    { name: "Competition Sparring Track", href: "#training" },
    { name: "Self Defence & Street Tactics", href: "#training" },
  ];

  return (
    <footer className="relative bg-[#061221] border-t border-sky-400/20 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-sky-500/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300 shadow-lg shadow-orange-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a182b] flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Phoenix Silambam Academy Logo"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-wider font-cinzel flame-gradient-text uppercase">
                    Phoenix
                  </span>
                  <Flame className="w-4 h-4 text-orange-500 inline-block" />
                </div>
                <p className="text-[10px] tracking-widest text-amber-300/90 font-semibold uppercase">
                  Silambam Academy
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Master the ancient 3,000-year-old Tamil martial art of Silambam. Dedicated to preserving authentic warrior heritage, cultivating discipline, physical agility, and championship excellence under Master S. Muhibur Rahman in Namakkal.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 hover:border-amber-400/50 hover:bg-amber-500/15 flex items-center justify-center text-slate-200 hover:text-amber-300 transition-all"
                aria-label="Phoenix Silambam on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 hover:border-amber-400/50 hover:bg-amber-500/15 flex items-center justify-center text-slate-200 hover:text-amber-300 transition-all"
                aria-label="Phoenix Silambam on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 hover:border-amber-400/50 hover:bg-amber-500/15 flex items-center justify-center text-slate-200 hover:text-amber-300 transition-all"
                aria-label="Phoenix Silambam on YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-400/20 hover:border-green-400/60 hover:bg-green-500/20 flex items-center justify-center text-green-300 hover:text-green-200 transition-all"
                aria-label="Phoenix Silambam on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-cinzel">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors inline-block text-slate-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Training Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-cinzel">
              Training Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {trainingLinks.map((program, idx) => (
                <li key={idx}>
                  <a
                    href={program.href}
                    className="hover:text-amber-300 transition-colors inline-block text-slate-300"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-cinzel">
              Namakkal Academy
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Namakkal, Tamil Nadu - 637001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-amber-300 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@veerasilambam.com" className="hover:text-amber-300 transition-colors">
                  info@veerasilambam.com
                </a>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-[#0a1c35] border border-sky-400/30 text-[11px] text-sky-200">
              <strong className="block text-white font-medium">Weekly Training Schedule:</strong>
              Monday – Saturday: 6:00 AM – 8:30 AM & 5:00 PM – 7:30 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Phoenix Silambam Academy. All Rights Reserved. • Never Give Up.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-slate-200 hover:text-amber-300 border border-sky-400/20 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
