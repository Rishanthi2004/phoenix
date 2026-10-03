"use client";
import React from "react";
import { ArrowRight, MessageSquare, Flame } from "lucide-react";

interface JoinCtaProps {
  onJoinClick?: () => void;
}

export default function JoinCta({ onJoinClick }: JoinCtaProps) {
  return (
    <section className="py-16 md:py-20 relative bg-[#09172a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 border border-sky-400/30 bg-gradient-to-r from-[#0d2545] via-[#123661] to-[#0a1c36] shadow-2xl shadow-orange-500/10 text-center">
          {/* Decorative glowing background elements */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-orange-500/25 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-200 text-xs font-bold uppercase tracking-widest mb-6">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>Admissions Open for All Age Groups</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-cinzel text-white leading-tight mb-6 max-w-4xl mx-auto">
            Ready to Begin Your <br className="hidden sm:inline" />
            <span className="flame-gradient-text">Silambam Journey?</span>
          </h2>

          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Take the first step toward fearless confidence, unbreakable discipline, and martial prowess.
            Join Master S. Muhibur Rahman’s training batches in Namakkal today.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#contact"
              onClick={onJoinClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-black bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/919876543210?text=Hello%20Master%20Muhibur%20Rahman,%20I%20am%20interested%20in%20joining%20Phoenix%20Silambam%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white phoenix-card hover:bg-sky-500/20 rounded-full border border-sky-400/40 hover:border-amber-400 transition-all duration-300 group"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-green-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-slate-300">
            <span>Weekend & Weekday Batches Available • Kids (5+) & Adults Welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
}
