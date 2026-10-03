"use client";
import React from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <a
        href="https://wa.me/919876543210?text=Hello%20Master%20Muhibur%20Rahman,%20I%20want%20to%20know%20more%20about%20Phoenix%20Silambam%20Academy."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs sm:text-sm rounded-full shadow-2xl shadow-green-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
        title="Chat with Master S. Muhibur Rahman on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-black text-black" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
