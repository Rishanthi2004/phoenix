"use client";
import React from "react";
import Image from "next/image";
import { X, CheckCircle2, Clock, Users, Shield, Award, ArrowRight } from "lucide-react";
import { ProgramItem } from "./TrainingPrograms";

interface TrainingModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onEnroll: (programTitle: string) => void;
}

export default function TrainingModal({
  program,
  onClose,
  onEnroll,
}: TrainingModalProps) {
  if (!program) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#06101e]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0c203a] border border-sky-400/40 rounded-3xl overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#09172a]/80 hover:bg-[#09172a] text-slate-300 hover:text-white border border-sky-400/30 transition-all"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c203a] via-[#0c203a]/60 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md">
              {program.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white mt-2">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {program.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#09172a]/70 border border-sky-400/20 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Age Category</span>
                <span className="font-semibold text-white">{program.age}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Batch Duration</span>
                <span className="font-semibold text-white">{program.duration}</span>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 font-cinzel flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Curriculum & Techniques Covered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.curriculum.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Perks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 font-cinzel flex items-center gap-2">
              <Award className="w-4 h-4" />
              Program Benefits
            </h4>
            <div className="space-y-1.5">
              {program.keyPerks.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Enroll CTA */}
          <div className="pt-4 border-t border-sky-400/20 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onEnroll(program.title);
              }}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <span>Enroll for {program.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
