"use client";
import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Clock, Users, Flame } from "lucide-react";

export interface ProgramItem {
  id: string;
  title: string;
  badge: string;
  level: string;
  age: string;
  duration: string;
  image: string;
  description: string;
  curriculum: string[];
  keyPerks: string[];
}

export const trainingPrograms: ProgramItem[] = [
  {
    id: "kids-training",
    title: "Kids Training",
    badge: "Most Popular",
    level: "Foundational (Ages 5 - 12)",
    age: "5 to 12 Years",
    duration: "1 Hr / Session (3 Days/Week)",
    image: "/images/kids.jpg",
    description:
      "A fun, safe, and disciplined environment tailored for young minds to develop motor agility, razor-sharp concentration, respect, and foundational bamboo staff handling.",
    curriculum: [
      "Basic Stances (Kaaladi) & Balanced Footwork",
      "Single-stick wrist rotation fundamentals",
      "Coordination drills & agility games",
      "Gurukulam discipline & peer respect",
    ],
    keyPerks: [
      "Improves academic concentration & memory",
      "Develops bilateral coordination & posture",
      "Builds anti-bullying confidence & resilience",
    ],
  },
  {
    id: "beginner-training",
    title: "Beginner Training",
    badge: "All Ages",
    level: "Fundamental Mastery",
    age: "Teens & Adults",
    duration: "1.5 Hrs / Session",
    image: "/images/beginner.jpg",
    description:
      "Designed for newcomers with zero martial arts experience. Master the authentic Tamil terminology, primary grips (Pidivarisai), rhythmic swings, and balance.",
    curriculum: [
      "18 fundamental footwork patterns (Kaaladi Varisai)",
      "Bamboo stick balancing and twirl kinematics",
      "Upper & lower body blocking techniques",
      "Cardiovascular stamina and body flexibility",
    ],
    keyPerks: [
      "No prior experience required",
      "Step-by-step personalized mentoring",
      "Total body workout & flexibility boost",
    ],
  },
  {
    id: "advanced-training",
    title: "Advanced Training",
    badge: "Expert Track",
    level: "Weaponry Mastery",
    age: "Experienced Practitioners",
    duration: "2 Hrs / Session",
    image: "/images/weapons.jpg",
    description:
      "Elevate your skills to master complex multi-directional forms, double stick combat (Irattai Silambam), and rare classical weapons like Surul Vaal and Maduvu.",
    curriculum: [
      "Double Stick (Irattai Silambam) synchronized combat",
      "Flexible Steel Ribbon Sword (Surul Vaal)",
      "Deer horn daggers (Maduvu) & Short stick (Kedi)",
      "Blindfolded precision spinning & acoustic reflexes",
    ],
    keyPerks: [
      "Authentic Siddha weaponry transmission",
      "Mastery of high-speed fluid combat combinations",
      "Instructor certification pathway",
    ],
  },
  {
    id: "competition-training",
    title: "Competition Training",
    badge: "Championship Track",
    level: "Elite Athletes",
    age: "Selected Trainees",
    duration: "Intensive Daily Regime",
    image: "/images/competition.jpg",
    description:
      "Rigorous tournament-oriented coaching focusing on point-scoring speed, ring tactics, lightning counter-attacks, endurance, and state association rulebook perfection.",
    curriculum: [
      "Speed sparring (Sandai) tactics & ring control",
      "High-speed synchronous artistic forms (Thodu Murai)",
      "High-intensity interval stamina training",
      "Psychological composure under tournament pressure",
    ],
    keyPerks: [
      "Official association registration & badges",
      "Direct coaching under Master S. Muhibur Rahman",
      "Track record of 25+ medals and honors",
    ],
  },
  {
    id: "self-defence-training",
    title: "Self Defence Training",
    badge: "Practical Combat",
    level: "Street Awareness & Defense",
    age: "Youth & Adults (Men & Women)",
    duration: "Flexible Batches / Weekend Specials",
    image: "/images/selfdefence.jpg",
    description:
      "Direct, no-nonsense martial application of Silambam leverage principles, joint locks, cane/umbrella defense, and disarming techniques for real-world personal safety.",
    curriculum: [
      "Improvised weapon defense (umbrella, cane, stick)",
      "Grab escapes, joint locks & pressure point strikes",
      "Defense against multiple unarmed or armed assailants",
      "Situational awareness & boundary enforcement",
    ],
    keyPerks: [
      "Empowers women and working professionals",
      "Fast reflex conditioning under stress",
      "Pragmatic, lethal-free control tactics",
    ],
  },
];

interface TrainingProgramsProps {
  onSelectProgram: (program: ProgramItem) => void;
}

export default function TrainingPrograms({ onSelectProgram }: TrainingProgramsProps) {
  return (
    <section id="training" className="py-20 md:py-28 relative bg-[#0b1d36] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Curriculum & Courses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-white mb-4">
            Our <span className="flame-gradient-text">Training Programs</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From young children discovering discipline to seasoned athletes striving for gold medals,
            we offer specialized tracks curated for every stage of martial growth.
          </p>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className="group phoenix-card rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d223d] via-transparent to-black/30" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md">
                    {program.badge}
                  </span>

                  {/* Level Tag */}
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#09172a]/90 text-sky-200 border border-sky-400/20">
                    {program.level}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors mb-2">
                    {program.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {program.description}
                  </p>

                  {/* Quick specs */}
                  <div className="space-y-1.5 py-3 border-y border-sky-500/15 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>{program.age}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectProgram(program)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500/15 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 text-sky-200 hover:text-black font-bold text-xs uppercase tracking-wider border border-sky-400/30 hover:border-transparent transition-all duration-300 group/btn shadow-md"
                >
                  <span>Learn More & Enroll</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
