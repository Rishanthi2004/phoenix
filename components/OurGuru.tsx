"use client";
import React from "react";
import Image from "next/image";
import { Sparkles, Award, Star, Quote, CheckCircle2, Phone } from "lucide-react";

export default function OurGuru() {
  const guruAchievements = [
    "Master of Traditional Tamil Weaponry & Stick Combat Pedagogy",
    "7+ years of dedicated Gurukulam mentoring across Tamil Nadu",
    "Trained multiple State & District Silambam Championship medalists",
    "Certified Martial Instructor specializing in traditional forms & sparring",
    "Pioneer in youth strength, discipline, and cultural heritage revival",
  ];

  return (
    <section id="guru" className="py-20 md:py-28 relative bg-[#09172a] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Master & Lineage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-white mb-4">
            Meet Our <span className="flame-gradient-text">Guru</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The heart of Phoenix Silambam Academy is anchored by the deep knowledge, discipline,
            and unshakeable devotion of Master S. Muhibur Rahman.
          </p>
        </div>

        {/* Guru Profile Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center phoenix-card rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          {/* Guru Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-2xl overflow-hidden border-2 border-sky-400/40 shadow-2xl shadow-orange-500/10 aspect-[3/4] group">
              <Image
                src="/images/guru.jpg"
                alt="Master S. Muhibur Rahman - Phoenix Silambam Academy Guru"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09172a] via-transparent to-transparent opacity-85" />

              {/* Experience Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-black" />
                <span>7 Years Exp</span>
              </div>

              {/* Name on image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0d223d]/90 backdrop-blur-md border border-sky-400/30 text-center">
                <h3 className="text-xl font-bold font-cinzel text-white">S. Muhibur Rahman</h3>
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Founder & Chief Instructor
                </p>
              </div>
            </div>
          </div>

          {/* Guru Bio, Philosophy & Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 uppercase tracking-wider">
                  Silambam Master
                </span>
                <span className="text-slate-300 text-xs">• Namakkal, Tamil Nadu</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white mb-3">
                S. Muhibur Rahman
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4 font-light">
                With <strong className="text-amber-300 font-semibold">7 years of experience</strong> in Silambam training, S. Muhibur Rahman is dedicated to teaching the traditional art of Silambam with discipline, technique, and passion.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
                His training focuses on developing <strong className="text-white font-medium">strength, confidence, concentration, self-discipline, and respect for Tamil traditional martial arts</strong>.
              </p>
            </div>

            {/* Philosophy Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-sky-500/15 via-orange-500/10 to-[#0d223d] border border-sky-400/30 relative">
              <Quote className="w-8 h-8 text-sky-400/30 absolute top-4 right-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-2 font-cinzel">
                <span>Training Philosophy</span>
              </h4>
              <p className="text-slate-100 text-sm sm:text-base italic leading-relaxed">
                &ldquo;Silambam is more than a martial art—it is a way of life that instills unyielding mental resilience, true humility, and physical excellence while carrying forward the sacred pride of our Tamil ancestors.&rdquo;
              </p>
              <div className="mt-3 text-right">
                <span className="text-xs font-bold text-amber-300 font-cinzel">— S. Muhibur Rahman</span>
              </div>
            </div>

            {/* Key Achievements & Focus */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2 font-cinzel">
                <Award className="w-4 h-4 text-amber-400" />
                Key Milestones & Focus Areas
              </h4>
              <div className="space-y-2.5">
                {guruAchievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 text-sky-200 text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct Guidance: +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
