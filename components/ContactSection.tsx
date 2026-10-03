"use client";
import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Flame,
} from "lucide-react";

interface ContactSectionProps {
  initialProgram?: string;
}

export default function ContactSection({ initialProgram }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    training: "Beginner Training",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, training: initialProgram }));
    }
  }, [initialProgram]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please provide both your name and contact phone number.");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      age: "",
      training: "Beginner Training",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#09172a] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Connect & Enroll</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-white mb-4">
            Contact <span className="flame-gradient-text">Our Academy</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have questions or eager to enroll? Reach out to Master S. Muhibur Rahman directly or send us an enquiry.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side: Contact Information & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="phoenix-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold font-cinzel text-white flex items-center gap-2">
                <span>Academy Information</span>
              </h3>

              {/* Location Card */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">Phoenix Silambam Academy</p>
                  <p className="text-xs text-slate-300">Namakkal, Tamil Nadu - 637001, India</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / Direct Line</h4>
                  <a
                    href="tel:+919876543210"
                    className="text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors block mt-0.5"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-[11px] text-slate-400">Available: 6:00 AM - 8:30 PM</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Enquiries</h4>
                  <a
                    href="mailto:info@veerasilambam.com"
                    className="text-sm font-semibold text-amber-400 hover:underline block mt-0.5"
                  >
                    info@veerasilambam.com
                  </a>
                  <p className="text-[11px] text-slate-400">Official academy admissions</p>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Master%20Muhibur%20Rahman,%20I%20am%20interested%20in%20Silambam%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-bold text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Google Map Representation */}
            <div className="phoenix-card rounded-2xl overflow-hidden p-2">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#0a182b] flex items-center justify-center text-center p-4">
                <iframe
                  title="Phoenix Silambam Academy Namakkal Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62635.845946146435!2d78.12727181140026!3d11.218898124231682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce60f381c629%3A0x6b747be8855e96b3!2sNamakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute top-2 left-2 px-3 py-1 rounded-md bg-[#09172a]/90 border border-sky-400/40 text-[11px] font-bold text-amber-300">
                  📍 Namakkal, Tamil Nadu
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="phoenix-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
                    Enquiry Received!
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-amber-300">{formData.name}</strong>! Master S. Muhibur Rahman & the Phoenix Silambam Academy team will contact you shortly at{" "}
                    <strong className="text-white">{formData.phone}</strong> with batch timings and details.
                  </p>
                  <button
                    onClick={handleReset}
                    type="button"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-sky-500/20 text-sky-200 hover:bg-sky-500/30 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold font-cinzel text-white mb-1">
                      Join Our Training
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      Fill out the form below to register your interest for upcoming batches.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. K. Vigneshwaran"
                      className="w-full px-4 py-3 rounded-xl bg-[#09172a]/90 border border-sky-400/25 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-all"
                    />
                  </div>

                  {/* Phone & Age Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-3 rounded-xl bg-[#09172a]/90 border border-sky-400/25 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="age" className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                        Age of Trainee
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 8 or 24"
                        min="4"
                        max="80"
                        className="w-full px-4 py-3 rounded-xl bg-[#09172a]/90 border border-sky-400/25 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Training Select */}
                  <div>
                    <label htmlFor="training" className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Preferred Training Program
                    </label>
                    <select
                      id="training"
                      name="training"
                      value={formData.training}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#09172a] border border-sky-400/25 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-all"
                    >
                      <option value="Kids Training">Kids Training (Ages 5 - 12)</option>
                      <option value="Beginner Training">Beginner Training (All Ages)</option>
                      <option value="Advanced Training">Advanced Training & Weaponry</option>
                      <option value="Competition Training">Competition & Tournament Sparring</option>
                      <option value="Self Defence Training">Self Defence & Practical Tactics</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Message / Any Prior Experience (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your goals or questions with Master S. Muhibur Rahman..."
                      className="w-full px-4 py-3 rounded-xl bg-[#09172a]/90 border border-sky-400/25 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-orange-500/25 hover:shadow-orange-500/45 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Submitting Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Submit Training Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
