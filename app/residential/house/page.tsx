'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [properties] = useState([
    {
      id: 1,
      title: "3 BHK Flat for Rent in Kudlu Gate, Bangalore",
      location: "NYK Metro Urbano",
      price: "₹70,000",
      deposit: "Security Deposit",
      owner: "Mridula",
      furnishing: "Semi-Furnished",
      bathroom: 3,
      tenant: "Family",
      description:
        "Aesthetic 3BHK situated close to major IT hubs of South Bangalore (OR). ",
      images: [
        "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-fc98504/www.tostemindia.com/wp-content/uploads/2024/12/Modern-Bungalow-Design.jpg",
        "https://images.unsplash.com/photo-1654535095187-769ba364ad7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
      ],
    },
    {
      id: 2,
      title: "2 BHK in HSR Layout, Bangalore",
      location: "Prestige Residency",
      price: "₹55,000",
      deposit: "2 Months Deposit",
      owner: "Rahul",
      furnishing: "Fully-Furnished",
      bathroom: 2,
      tenant: "Family Only",
      description:
        "Modern 2BHK with balcony and modular kitchen near HSR BDA Complex. Ideal for families and working professionals.",
      images: [
        "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-fc98504/www.tostemindia.com/wp-content/uploads/2024/12/Modern-Bungalow-Design.jpg",
       "https://images.unsplash.com/photo-1654535095187-769ba364ad7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
       
      ],
    },
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 p-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* LEFT: Property Listings */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">
            🏠 Featured Rentals in Bangalore
          </h1>

          {properties.map((p) => (
            <motion.div
              key={p.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-102 overflow-hidden flex flex-col md:flex-row border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Carousel */}
              <div className="relative w-full md:w-1/2 h-64 md:h-64 flex items-center justify-center overflow-hidden">
                <Carousel images={p.images} />
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                  For Sell
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-md md:text-lg font-semibold text-gray-800 leading-snug">
                      {p.title}
                    </h2>
                    <div className="text-right">
                      <p className="text-indigo-600 font-bold text-lg md:text-xl">
                        {p.price}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500">{p.deposit}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{p.location}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs md:text-sm">🛋️ {p.furnishing}</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs md:text-sm">🛁 {p.bathroom} Baths</span>
                    <span className="bg-pink-100 text-indigo-700 px-3 py-1 rounded-full text-xs md:text-sm">👥 {p.tenant}</span>
                  </div>

                  <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Owner: <span className="font-medium">{p.owner}</span> ⭐
                  </p>
                  <div className="flex gap-2">
                    <button className="border border-indigo-500 text-indigo-700 rounded-full px-3 py-1 text-sm md:text-base hover:bg-red-50 transition flex items-center gap-1">
                      📅 Check
                    </button>
                    <button className="bg-indigo-700 text-white rounded-full px-3 py-1 text-sm md:text-base hover:bg-red-600 transition flex items-center gap-1">
                      ✉️ Contact
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       {/* RIGHT: Why Choose Us + Sold Houses */}
<aside className="md:w-96 bg-white rounded-3xl shadow-lg p-6 flex flex-col gap-6 relative overflow-hidden">
  {/* Animated Blobs */}
  <div className="absolute w-32 h-32 bg-indigo-100 rounded-full top-[-15px] left-[-15px] mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute w-24 h-24 bg-pink-100 rounded-full bottom-[-15px] right-[-15px] mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

  {/* Why Choose Us */}
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center z-10"
  >
    <h2 className="text-xl md:text-2xl font-bold text-indigo-700 text-center">
      🌟 Why Choose Us
    </h2>
  </motion.div>

  <p className="text-gray-600 text-sm md:text-base leading-relaxed z-5">
    Sell or rent your home <strong>stress-free</strong> with us. We handle everything from listings to tenant screening.
  </p>

  <ul className="space-y-2 text-gray-700 text-sm md:text-base z-10">
    <li className="flex items-start gap-2">✅ Verified listings and genuine leads</li>
    <li className="flex items-start gap-2">🚀 Fast rental closures and expert support</li>
    <li className="flex items-start gap-2">💬 24×7 customer assistance</li>
    <li className="flex items-start gap-2">🔒 Safe and transparent transactions</li>
  </ul>

  {/* Sold Houses Section */}
  <div className="mt-6 flex flex-col gap-3">
    <h3 className="text-lg font-semibold text-indigo-700">🏘️ Sold Houses By Us</h3>
    <div className="flex items-center gap-3">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80"
        alt="Sold House"
        width={80}
        height={80}
        className="rounded-lg object-cover shadow-sm"
      />
      <p className="text-gray-600 text-sm md:text-base">
        Over <strong>120+ homes</strong> sold successfully in Bangalore with satisfied customers.
      </p>
    </div>
  </div>

  <div className="mt-4 text-center">
    <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transition">
      Start Selling Stress-Free
    </button>
  </div>
</aside>

      </div>
    </main>
  );
}

// Simple Carousel Component
function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Image src={images[index]} alt="Property Image" fill className="object-cover" />
      <button
        onClick={prev}
        className="absolute left-2 bg-white/70 rounded-full p-1 hover:bg-white transition"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-2 bg-white/70 rounded-full p-1 hover:bg-white transition"
      >
        ▶
      </button>
    </div>
  );
}
