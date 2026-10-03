"use client";
import React from "react";
import Image from "next/image";
import { Target, Compass, Sparkles, Flame, CheckCircle2, History } from "lucide-react";

export default function About() {
  const highlights = [
    "Traditional Gurukulam lineage & modern sports scientific methodology",
    "Comprehensive bamboo staff (Pirambu) & weapon mastery forms",
    "Specialized focus on youth character building, discipline & leadership",
    "Affiliated with state and district Silambam sports governing bodies",
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#09172a] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>About Our Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-white mb-4">
            Preserving a <span className="flame-gradient-text">3,000-Year Heritage</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded in 2015 in Namakkal, Phoenix Silambam Academy is dedicated to resurrecting, teaching,
            and promoting the ancient weapon-based martial art of the Tamil people with uncompromising authenticity.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with traditional frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-sky-500/30 to-orange-500/30 blur-md -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden border border-sky-400/30 shadow-2xl shadow-black/80 aspect-[4/5]">
                <Image
                  src="/images/guru.jpg"
                  alt="Master S. Muhibur Rahman - Phoenix Silambam Academy"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09172a] via-transparent to-transparent opacity-90" />
                
                {/* Floating card on image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#09172a]/90 backdrop-blur-md border border-sky-400/30 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-cinzel font-bold text-sm sm:text-base">Phoenix Silambam</h4>
                    <p className="text-xs text-amber-300">Namakkal, Tamil Nadu</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-300 block">Established</span>
                    <span className="text-sm font-bold text-orange-400 font-cinzel">2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: History, Mission, Vision, Heritage */}
          <div className="lg:col-span-7 space-y-6">
            <div className="phoenix-card rounded-2xl p-6 md:p-8 border-l-4 border-l-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <History className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-cinzel text-white">Our Journey & History</h3>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                What began in 2015 in Namakkal under the vision of <strong className="text-amber-300">Master S. Muhibur Rahman</strong> as a humble gathering of passionate learners has evolved into one of the region’s most distinguished martial academies. We have nurtured over 500+ practitioners, instilling ancient warrior ethics alongside modern competitive athletic training.
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="phoenix-card rounded-2xl p-6 hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-cinzel text-white mb-2">Our Mission</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  To empower every child and adult with indestructible physical resilience, situational awareness, self-discipline, and deep cultural self-respect through rigorous Silambam training.
                </p>
              </div>

              <div className="phoenix-card rounded-2xl p-6 hover:border-sky-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300 mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-cinzel text-white mb-2">Our Vision</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  To be the global benchmark for traditional martial arts academies by preserving the purity of ancient Tamil weaponry forms while building state and national champions.
                </p>
              </div>
            </div>

            {/* Preserving Traditional Silambam Callout */}
            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-sky-500/10 to-[#0d223d] border border-amber-400/30">
              <h4 className="text-base font-bold text-amber-300 font-cinzel mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                The Importance of Preserving Silambam
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4">
                Silambam is not merely an art of swinging staves; it is a profound scientific system of body mechanics, breathing, and mental equilibrium crafted by ancient Tamil Siddhas. In an era dominated by screens and sedentary lifestyles, Silambam restores vital motor harmony, razor focus, and proud heritage.
              </p>

              <div className="space-y-2">
                {highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
