'use client';
import React from "react";
import { motion } from "framer-motion";
import { Camera, Megaphone, FileText, DollarSign, Users, ChartLine, Home } from "lucide-react";

const sellerServices = [
  { title: "Property Listing", icon: <Home className="w-6 h-6 text-white"/>, desc: "Step-by-step guidance to create attractive listings." },
  { title: "Pricing & Market", icon: <DollarSign className="w-6 h-6 text-white"/>, desc: "Estimate value and set competitive pricing." },
  { title: "Photography Support", icon: <Camera className="w-6 h-6 text-white"/>, desc: "Tips for professional photos and videos." },
  { title: "Marketing & Promotion", icon: <Megaphone className="w-6 h-6 text-white"/>, desc: "Promote your property on social media." },
  { title: "Buyer Communication", icon: <Users className="w-6 h-6 text-white"/>, desc: "Manage inquiries efficiently." },
  { title: "Legal & Docs", icon: <FileText className="w-6 h-6 text-white"/>, desc: "Get guidance for all required documents." },
  { title: "Transaction Help", icon: <DollarSign className="w-6 h-6 text-white"/>, desc: "Tips for negotiation and secure payments." },
  { title: "Dashboard & Analytics", icon: <ChartLine className="w-6 h-6 text-white"/>, desc: "Track views and optimize your listing." },
];

export default function SellNamePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 mt-10">
      
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Seller Help
        </motion.h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Everything you need to sell or rent your property successfully.
        </p>
        <motion.div 
          className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sellerServices.map((service, idx) => (
          <motion.div 
            key={idx}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition flex flex-col gap-4 cursor-pointer relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            {/* Icon circle with gradient */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-2">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.desc}</p>
            {/* Creative hover glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 opacity-0 group-hover:opacity-100 rounded-3xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="mt-16 text-center flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-600">Ready to Sell Your Property?</h2>
        <p className="text-gray-600 max-w-md">
          Start by adding your property now and get guidance every step of the way.
        </p>
        <motion.button 
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        >
          Add Your Property
        </motion.button>
      </motion.div>

    </div>
  )
}
