"use client";
import React from "react";
import Image from "next/image";
import { ShieldCheck, Trophy, Users, Award, ArrowRight, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onJoinClick?: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const stats = [
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />,
      value: "10+",
      label: "Years of Training",
      sub: "Since 2015",
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />,
      value: "500+",
      label: "Students Trained",
      sub: "Kids & Adults",
    },
    {
      icon: <Trophy className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />,
      value: "25+",
      label: "Major Achievements",
      sub: "Medals & Honors",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-sky-400" />,
      value: "10+",
      label: "Competitions",
      sub: "State & District",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-24 md:pt-32 pb-12 overflow-hidden">
      {/* Background Hero Action Image with Phoenix royal navy gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Silambam Master Martial Artist with Bamboo Staff and Fire Embers"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse-glow brightness-[0.8] contrast-[1.15]"
        />
        {/* Layered Phoenix Blue & Flame overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09172a] via-[#09172a]/75 to-[#09172a]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09172a] via-[#09172a]/85 to-transparent" />
        <div className="absolute inset-0 hero-gradient opacity-90" />

        {/* Horizontal glowing blue streak (matches logo aura) */}
        <div className="absolute top-1/2 left-0 right-0 h-28 -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-200 text-xs md:text-sm font-semibold tracking-wider mb-6 backdrop-blur-md shadow-lg shadow-sky-500/10">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span className="uppercase font-semibold text-slate-200">Namakkal, Tamil Nadu • Estd. 2015</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span className="text-amber-300 font-bold">Never Give Up</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-cinzel text-white leading-[1.1] mb-6">
            Master the Art. <br />
            <span className="flame-gradient-text">Preserve the Tradition.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8 md:mb-10 font-light">
            Experience the ancient power of authentic Tamil Silambam. Guided by{" "}
            <span className="text-amber-300 font-medium">Master S. Muhibur Rahman</span>, Phoenix Silambam Academy
            builds unbeatable physical agility, razor-sharp discipline, real-world self defence, and timeless warrior pride.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
            <a
              href="#contact"
              onClick={onJoinClick}
              className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 rounded-full shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <span>Join Our Training</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#training"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white phoenix-card hover:bg-sky-500/20 rounded-full border border-sky-400/30 hover:border-amber-400/60 transition-all duration-300 group"
            >
              <Play className="w-4 h-4 mr-2 text-amber-400 fill-amber-400/40 group-hover:scale-110 transition-transform" />
              <span>Explore Classes</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Statistics Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="phoenix-card-gold rounded-2xl p-4 md:p-5 flex items-center gap-3.5 md:gap-4 hover:translate-y-[-3px] transition-all duration-300 group"
            >
              <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl bg-gradient-to-br from-amber-500/25 to-sky-500/20 border border-amber-400/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white font-cinzel group-hover:text-amber-400 transition-colors">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-slate-100">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-300 hidden sm:block">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
