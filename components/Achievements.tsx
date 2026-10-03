"use client";
import React from "react";
import Image from "next/image";
import { Trophy, Medal, Award, Crown, Star, CheckCircle } from "lucide-react";

export default function Achievements() {
  const achievementCards = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: "District Level Champions",
      count: "15+ Golds",
      year: "2018 - 2026",
      description:
        "Consistent Overall Championship winners in the Namakkal District Silambam meets across Sub-Junior, Junior, and Senior categories.",
      highlights: ["Namakkal Inter-School Gold", "District Sparring Champions", "Best Academy Trophy"],
    },
    {
      icon: <Medal className="w-6 h-6 text-amber-400" />,
      title: "State Level Participants & Winners",
      count: "8+ State Medals",
      year: "Tamil Nadu State",
      description:
        "Representing the district in official Tamil Nadu State Silambam Association tournaments with stellar performances in Single Stick and Artistic Forms.",
      highlights: ["State Level Bronze & Silver", "Selected for National Trials", "Individual Form Honors"],
    },
    {
      icon: <Award className="w-6 h-6 text-orange-400" />,
      title: "Traditional Martial Tournaments",
      count: "12+ Titles",
      year: "South India Meets",
      description:
        "Special invitational honors in Classical Weaponry Demonstrations, Surul Vaal displays, and Heritage Martial Arts symposiums across South India.",
      highlights: ["Heritage Revival Award", "Speed Rotation Records", "Traditional Weapon Excellence"],
    },
    {
      icon: <Crown className="w-6 h-6 text-sky-400" />,
      title: "Student Awards & Honors",
      count: "50+ Honorees",
      year: "All Age Groups",
      description:
        "Recognizing exemplary discipline, outstanding academic improvement, leadership qualities, and martial progress in our students.",
      highlights: ["Veera Thamizhan Youth Awards", "Best Disciplined Athlete", "Annual Phoenix Honors"],
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 relative bg-[#09172a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Excellence & Glory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-white mb-4">
            Our Proud <span className="flame-gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From local tournaments to state podiums, our students consistently prove their grit,
            technique, and indomitable spirit.
          </p>
        </div>

        {/* Big Spotlight Banner with Awards Photo */}
        <div className="relative rounded-3xl overflow-hidden phoenix-card-gold mb-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image showcase */}
            <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto lg:h-[420px]">
              <Image
                src="/images/awards.jpg"
                alt="Phoenix Silambam Academy Championship Winners"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#0d223d]/90" />
            </div>

            {/* Banner Text */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span>State Championship Spotlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white leading-tight">
                National & State Silambam Championship Laurels
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
                Phoenix Silambam Academy students proudly clinched the overall runner-up and championship positions at the prestigious State Silambam Tournament, showcasing flawless synchronous forms and fierce sparring control.
              </p>
              
              {/* Quick Trophy counter bar */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#09172a]/70 border border-sky-400/20 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400 font-cinzel">15+</div>
                  <div className="text-[11px] text-slate-300">District Titles</div>
                </div>
                <div className="p-3 rounded-xl bg-[#09172a]/70 border border-sky-400/20 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-orange-400 font-cinzel">8+</div>
                  <div className="text-[11px] text-slate-300">State Medals</div>
                </div>
                <div className="p-3 rounded-xl bg-[#09172a]/70 border border-sky-400/20 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-sky-400 font-cinzel">100%</div>
                  <div className="text-[11px] text-slate-300">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Achievement Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementCards.map((card, index) => (
            <div
              key={index}
              className="phoenix-card rounded-2xl p-6 sm:p-7 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/25 to-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    {card.count}
                  </span>
                  <p className="text-[10px] text-slate-300 mt-1">{card.year}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold font-cinzel text-white mb-2">{card.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {card.description}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-sky-500/15">
                {card.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
