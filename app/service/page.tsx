'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sun,
  Moon,
  Home,
  ShieldCheck,
  Wrench,
  Scale,
  DollarSign,
  Headphones,
} from "lucide-react";

const services = [
  {
    title: "Property Listing",
    desc: "Showcase your property with precision and reach verified buyers and renters.",
    icon: <Home className="w-10 h-10 text-[#60A5FA]" />,
  },
  {
    title: "Tenant Screening",
    desc: "Protect your investment with trusted tenants, verified through seamless checks.",
    icon: <ShieldCheck className="w-10 h-10 text-[#60A5FA]" />,
  },
  {
    title: "Property Management",
    desc: "Full property management including maintenance, rent collection, and updates.",
    icon: <Wrench className="w-10 h-10 text-[#60A5FA]" />,
  },
  {
    title: "Legal Assistance",
    desc: "Get legal support for documentation, compliance, and ownership verification.",
    icon: <Scale className="w-10 h-10 text-[#60A5FA]" />,
  },
  {
    title: "Valuation & Pricing",
    desc: "Accurate valuations powered by AI-driven analytics and local insights.",
    icon: <DollarSign className="w-10 h-10 text-[#60A5FA]" />,
  },
  {
    title: "Customer Support",
    desc: "24/7 expert guidance for buyers, sellers, and property managers.",
    icon: <Headphones className="w-10 h-10 text-[#60A5FA]" />,
  },
];

export default function ServicesModern() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-700 ${
        darkMode ? "bg-[#0F172A]" : "bg-[#EFF6FF]"
      }`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/20 to-[#0F172A]/80 pointer-events-none" />

      {/* Toggle */}
      <div className="absolute top-6 right-8 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB] hover:bg-[#2563EB]/10 transition-all text-sm text-[#2563EB]"
        >
          {darkMode ? (
            <>
              <Sun className="w-5 h-5" /> Light
            </>
          ) : (
            <>
              <Moon className="w-5 h-5" /> Dark
            </>
          )}
        </button>
      </div>

      {/* Header */}
      <div className="text-center pt-24 mb-20 relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1E40AF]"
        >
          Explore Our Premium Services
        </motion.h1>
        <p
          className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto font-light ${
            darkMode ? "text-[#CBD5E1]" : "text-[#334155]"
          }`}
        >
          Crafted for seamless experiences — from listing to closing the deal.
        </p>
      </div>

      {/* Floating Panels */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(37,99,235,0.25)",
            }}
            className={`relative group overflow-hidden rounded-3xl p-[2px] bg-gradient-to-r from-[#2563EB]/60 to-[#1E40AF]/60 hover:from-[#1E40AF] hover:to-[#2563EB] transition-all duration-500`}
          >
            <div
              className={`relative bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-xl rounded-3xl p-8 transition-all`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-[#2563EB]/10 to-[#1E40AF]/10">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
              </div>
              <p
                className={`text-base leading-relaxed ${
                  darkMode ? "text-[#AAB8D6]" : "text-[#475569]"
                }`}
              >
                {s.desc}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white hover:opacity-90 transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.67,22,103.44,29.14,158,17.39C230.14,49.24,284.85,7.16,339.6,1.67,411.61-5.6,481.76,33.88,554.07,58.47c70.24,24,140.49,27.51,210.73,8.38,93.1-24.93,185.13-82.63,278.23-90.46C1110.12-31,1170.06,13.36,1200,34.27V0Z"
            opacity=".25"
            fill="#2563EB"
          ></path>
        </svg>
      </div>
    </main>
  );
}
