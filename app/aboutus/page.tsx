'use client';

import { motion } from "framer-motion";

export default function AboutUsPage() {
  const features = [
    {
      icon: "🏠",
      title: "Complete Property Solutions",
      desc: "From rent to sale, we provide a seamless experience for every property need.",
    },
    {
      icon: "🔍",
      title: "Verified Listings",
      desc: "All properties are verified and genuine, ensuring trust and transparency.",
    },
    {
      icon: "💬",
      title: "Expert Guidance",
      desc: "Our experts help buyers and sellers make informed decisions quickly.",
    },
    {
      icon: "⚡",
      title: "Fast and Easy",
      desc: "Quick property discovery, listings, and transactions with user-friendly tools.",
    },
  ];

  const values = [
    { title: "Integrity", desc: "We maintain honesty and transparency in all property dealings." },
    { title: "Innovation", desc: "Constantly evolving with tech to simplify real estate transactions." },
    { title: "Customer First", desc: "Your satisfaction and ease are our top priorities." },
    { title: "Reliability", desc: "Trustworthy platform for buyers, sellers, and tenants alike." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-4"
        >
          Welcome to Bhumi X 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 5 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-600 md:text-lg max-w-2xl mx-auto"
        >
          Your one-stop real estate platform for everything from renting to buying properties. Bhumi X
          makes property management simple, reliable, and hassle-free.
        </motion.p>

        {/* Floating shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className=" px-2 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-5">Why Choose Bhumi X</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl text-center cursor-pointer transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-indigo-700">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 md:px-12 bg-indigo-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 md:text-lg leading-relaxed">
              To simplify real estate transactions and provide a trustworthy, seamless platform
              where buyers, sellers, and tenants can connect effortlessly.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 bg-white rounded-3xl p-6 shadow-lg text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 md:text-lg leading-relaxed">
              To be India’s most trusted and innovative real estate platform, empowering users
              to make smart property decisions quickly and confidently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl text-center cursor-pointer transition"
            >
              <h3 className="text-xl font-bold mb-2 text-indigo-700">{value.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6"
        >
          Ready to Find Your Dream Property?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-600 mb-8 md:text-lg"
        >
          Explore our listings, connect with trusted brokers, and discover properties that fit your lifestyle.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
        >
          Get Started
        </motion.button>
      </section>
    </main>
  );
}
