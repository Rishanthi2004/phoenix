"use client";
import React from "react";
import { Activity, ShieldCheck, HeartPulse, Brain, Trophy, Landmark, Flame } from "lucide-react";

export default function WhySilambam() {
  const benefits = [
    {
      icon: <Activity className="w-6 h-6 text-amber-400" />,
      title: "Physical Fitness",
      tagline: "Total Body Conditioning",
      description:
        "High-octane rotational movements engage the core, shoulders, wrists, and legs, boosting cardiovascular endurance, flexibility, and reflexes.",
      color: "from-amber-500/25 to-sky-500/15",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
      title: "Self Defence",
      tagline: "Practical Real-World Safety",
      description:
        "Master lethal and non-lethal disarms, situational awareness, and cane stick maneuvers to protect yourself and loved ones in any emergency.",
      color: "from-orange-500/25 to-sky-500/15",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-yellow-400" />,
      title: "Discipline",
      tagline: "Gurukulam Moral Character",
      description:
        "Instills punctuality, profound humility, emotional restraint, and deep respect for elders, masters, and fellow practitioners.",
      color: "from-yellow-500/25 to-sky-500/15",
    },
    {
      icon: <Brain className="w-6 h-6 text-sky-400" />,
      title: "Concentration",
      tagline: "Laser-Sharp Mental Focus",
      description:
        "Demands total synchronization between eye, breath, and weapon, dramatically elevating bilateral brain coordination and focus in studies & work.",
      color: "from-sky-400/25 to-amber-500/15",
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-400" />,
      title: "Confidence",
      tagline: "Fearless Warrior Mindset",
      description:
        "Overcome hesitation and fear through progressive sparring, public demonstrations, and competitive championships on stage.",
      color: "from-orange-400/25 to-sky-500/15",
    },
    {
      icon: <Landmark className="w-6 h-6 text-amber-400" />,
      title: "Traditional Culture",
      tagline: "Ancient Tamil Pride",
      description:
        "Connect directly with the 3,000+ year old martial legacy of Agathiyar Siddha, preserving sacred heritage for generations to come.",
      color: "from-amber-500/25 to-sky-500/15",
    },
  ];

  return (
    <section id="why" className="py-20 md:py-28 relative bg-[#0b1d36] overflow-hidden">
      {/* Subtle mandala background */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Holistic Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-white mb-4">
            Why Learn <span className="flame-gradient-text">Silambam?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            More than just martial movements, Silambam is a complete system of physical mastery,
            mental poise, and cultural empowerment.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="phoenix-card rounded-2xl p-7 hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle top corner gradient glow */}
              <div
                className={`absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br ${item.color} blur-2xl group-hover:scale-150 transition-transform duration-500`}
              />

              <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-amber-500/20 to-sky-500/20 border border-sky-400/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-amber-400/60 transition-all duration-300">
                {item.icon}
              </div>

              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 font-cinzel">
                {item.tagline}
              </div>

              <h3 className="text-xl font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
