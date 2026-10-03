"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrainingPrograms, { ProgramItem } from "@/components/TrainingPrograms";
import OurGuru from "@/components/OurGuru";
import WhySilambam from "@/components/WhySilambam";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import JoinCta from "@/components/JoinCta";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TrainingModal from "@/components/TrainingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [enquiryProgram, setEnquiryProgram] = useState<string>("Beginner Training");

  const handleOpenEnquiry = (programName?: string) => {
    if (programName) {
      setEnquiryProgram(programName);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnrollFromModal = (programTitle: string) => {
    setEnquiryProgram(programTitle);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#07090e] text-[#f1f3f7]">
      {/* Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Hero Section */}
      <Hero onJoinClick={() => handleOpenEnquiry()} />

      {/* About Section */}
      <About />

      {/* Training Programs */}
      <TrainingPrograms onSelectProgram={(program) => setSelectedProgram(program)} />

      {/* Our Guru */}
      <OurGuru />

      {/* Why Silambam */}
      <WhySilambam />

      {/* Achievements */}
      <Achievements />

      {/* Gallery */}
      <Gallery />

      {/* Call to Action */}
      <JoinCta onJoinClick={() => handleOpenEnquiry()} />

      {/* Contact & Enquiry Section */}
      <ContactSection initialProgram={enquiryProgram} />

      {/* Footer */}
      <Footer />

      {/* Training Program Details Modal */}
      <TrainingModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnroll={handleEnrollFromModal}
      />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}
