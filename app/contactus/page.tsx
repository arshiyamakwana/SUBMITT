'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Contact Info + Illustration */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Animated Blobs */}
          <div className="absolute w-32 h-32 bg-indigo-100 rounded-full top-[-30px] left-[-30px] mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute w-24 h-24 bg-pink-100 rounded-full bottom-[-20px] right-[-20px] mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">📬 Get In Touch</h1>
          <p className="text-gray-600 mb-6">Have questions or want to list your property? Reach out to Bhumi X team and we’ll respond ASAP.</p>

          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <p>📍 <strong>Address:</strong> 123 Bhumi X Street, Bangalore</p>
            <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
            <p>✉️ <strong>Email:</strong> support@bhumix.com</p>
            <p>⏰ <strong>Working Hours:</strong> Mon-Sat 9:00 AM - 6:00 PM</p>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-4 relative overflow-hidden"
        >
          {/* Animated Blobs */}
          <div className="absolute w-32 h-32 bg-indigo-100 rounded-full top-[-25px] right-[-25px] mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute w-24 h-24 bg-pink-100 rounded-full bottom-[-25px] left-[-25px] mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

          <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition mt-2"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </main>
  );
}
