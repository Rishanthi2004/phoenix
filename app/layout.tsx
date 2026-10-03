import type { Metadata, Viewport } from "next";
import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09172a",
};

export const metadata: Metadata = {
  title: "Phoenix Silambam Academy | Master the Art. Preserve the Tradition.",
  description:
    "Official website of Phoenix Silambam Academy, Namakkal, Tamil Nadu. Led by Master S. Muhibur Rahman (7 years experience). Premier traditional Indian martial arts training for kids, beginners, advanced practitioners, and competitors.",
  keywords: [
    "Silambam",
    "Silambam Academy",
    "Phoenix Silambam Academy",
    "Namakkal Silambam",
    "S. Muhibur Rahman",
    "Master Muhibur Rahman",
    "Tamil Martial Arts",
    "Traditional Indian Martial Arts",
    "Self Defence Classes",
    "Stick Fighting",
  ],
  authors: [{ name: "Phoenix Silambam Academy" }],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cinzel.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#09172a] text-[#f1f5f9] antialiased selection:bg-amber-500 selection:text-black overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
