'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Ruler,
  Bed,
  ShieldCheck,
  Phone,
  Heart,
  Star,
} from 'lucide-react';

export default function PropertyDetail() {
  const [selectedImage, setSelectedImage] = useState(0);

  const property = {
    name: "3 BHK Premium Apartment",
    price: "₹1.25 Crore",
    location: "Vastrapur, Ahmedabad",
    area: "1520 sq.ft",
    configuration: "3 Bedrooms · 3 Baths · 2 Balconies",
    reraStatus: "RERA Verified 🏢 (Asandhara Affected Area – near Vastrapur, Ahmedabad)",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560185127-6f8f3a920b6f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9b63911?auto=format&fit=crop&w=900&q=80",
    ],
    amenities: [
      { emoji: "🏊‍♂️", name: "Pool" },
      { emoji: "🏋️‍♀️", name: "Gym" },
      { emoji: "🌳", name: "Garden" },
      { emoji: "👮‍♂️", name: "24/7 Security" },
      { emoji: "🚗", name: "Parking" },
      { emoji: "🎉", name: "Clubhouse" },
      { emoji: "🎭", name: "Community Hall" },
      { emoji: "🧒", name: "Kids Play Zone" },
    ],
    detailedAmenities: {
      building: [
        { emoji: "🛗", name: "High-Speed Lifts", desc: "Multiple automatic elevators" },
        { emoji: "🅿️", name: "Parking Space", desc: "Allocated resident & visitor parking" },
        { emoji: "🏢", name: "Elegant Lobby", desc: "Luxurious and welcoming entrance" },
        { emoji: "🕋", name: "Temple Area", desc: "Peaceful spiritual space" },
      ],
      security: [
        { emoji: "📸", name: "CCTV Surveillance", desc: "Round-the-clock monitoring" },
        { emoji: "👮‍♂️", name: "24/7 Security Staff", desc: "Trained guards on duty" },
        { emoji: "🧯", name: "Fire Safety", desc: "Integrated alarm and sprinklers" },
      ],
      eco: [
        { emoji: "♻️", name: "Rainwater Harvesting", desc: "Eco-friendly water conservation" },
        { emoji: "🌞", name: "Solar Power", desc: "Sustainable energy support" },
        { emoji: "🌴", name: "Terrace Garden", desc: "Green relaxation zone" },
      ],
      utilities: [
        { emoji: "💧", name: "24x7 Water Supply", desc: "Borewell + Corporation water" },
        { emoji: "⚡", name: "Power Backup", desc: "Uninterrupted electricity" },
        { emoji: "🧹", name: "Maintenance Staff", desc: "On-site daily service team" },
        { emoji: "🧺", name: "Laundry Service", desc: "Available for residents" },
      ],
    },
    nearby: [
      "🚇 Metro Station – 0.6 km",
      "🏫 School – 0.8 km",
      "🏥 Hospital – 1.2 km",
      "🛍️ Shopping Mall – 1.5 km",
    ],
    reviews: {
      rating: 4.6,
      summary: "Highly rated for connectivity, safety, and greenery.",
    },
    priceTrend: {
      current: "₹8,250/sq.ft",
      lastYear: "₹7,600/sq.ft",
      change: "+8.5% yearly growth 📈",
    },
    map: { lat: 23.0225, lng: 72.5714 },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{property.name}</h1>
            <p className="text-xl text-blue-700 font-semibold mt-1">{property.price}</p>
            <p className="flex items-center text-gray-600 mt-1">
              <MapPin className="w-5 h-5 mr-1" /> {property.location}
            </p>
            <p className="text-sm text-green-700 mt-1 font-medium">{property.reraStatus}</p>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 flex items-center gap-2">
              <Phone className="w-5 h-5" /> Contact Owner
            </button>
            <button className="px-5 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-100">
              ❤️ Shortlist
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image Gallery */}
          <div className="lg:w-2/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={property.gallery[selectedImage]}
                alt="Property"
                width={900}
                height={600}
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="flex gap-2 mt-3 overflow-x-auto">
              {property.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 cursor-pointer ${
                    selectedImage === i ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Amenities & Info */}
          <div className="lg:w-1/3 space-y-5">
            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">✨ Key Amenities</h2>
              <div className="grid grid-cols-2 gap-3 text-gray-700">
                {property.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-base">
                    <span>{a.emoji}</span> {a.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">🏡 Property Details</h2>
              <ul className="space-y-1 text-gray-700">
                <li><Ruler className="inline w-5 h-5 text-blue-600 mr-2" />Area: {property.area}</li>
                <li><Bed className="inline w-5 h-5 text-blue-600 mr-2" />Configuration: {property.configuration}</li>
                <li><ShieldCheck className="inline w-5 h-5 text-blue-600 mr-2" />RERA Status: Verified</li>
                <li><MapPin className="inline w-5 h-5 text-blue-600 mr-2" />Address: {property.location}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why This Society & Review */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold border-b pb-1">💡 Why This Society?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Located in one of Ahmedabad’s most sought-after neighborhoods.</li>
            <li>Built by a reputed developer with excellent track record.</li>
            <li>Modern amenities with green and family-friendly spaces.</li>
            <li>Strong community with 24x7 safety and maintenance.</li>
          </ul>

          <div className="flex items-center gap-3 mt-4">
            <Star className="text-yellow-500 w-6 h-6" />
            <p className="text-gray-700">
              <strong>{property.reviews.rating}/5</strong> — {property.reviews.summary}
            </p>
          </div>
        </div>

        {/* Enhanced Detailed Amenities */}
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          <h2 className="text-xl font-semibold border-b pb-1">🏢 Detailed Amenities</h2>

          {/* Building */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">🏢 Building Facilities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              {property.detailedAmenities.building.map((a, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 flex flex-col shadow-sm border">
                  <span className="text-2xl">{a.emoji}</span>
                  <p className="font-medium mt-1">{a.name}</p>
                  <p className="text-sm text-gray-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">🔒 Security & Safety</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              {property.detailedAmenities.security.map((a, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 flex flex-col shadow-sm border">
                  <span className="text-2xl">{a.emoji}</span>
                  <p className="font-medium mt-1">{a.name}</p>
                  <p className="text-sm text-gray-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eco */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">🌿 Eco & Lifestyle</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              {property.detailedAmenities.eco.map((a, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 flex flex-col shadow-sm border">
                  <span className="text-2xl">{a.emoji}</span>
                  <p className="font-medium mt-1">{a.name}</p>
                  <p className="text-sm text-gray-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">💧 Utilities & Convenience</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              {property.detailedAmenities.utilities.map((a, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3 flex flex-col shadow-sm border">
                  <span className="text-2xl">{a.emoji}</span>
                  <p className="font-medium mt-1">{a.name}</p>
                  <p className="text-sm text-gray-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nearby */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-semibold border-b pb-1">📍 Nearby Locations</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
              {property.nearby.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden h-80">
            <iframe
              src={`https://www.google.com/maps?q=${property.map.lat},${property.map.lng}&z=15&output=embed`}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950 text-white mt-10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 BannaAI Real Estate. All Rights Reserved.</p>
          <p className="text-sm mt-2 md:mt-0">Contact: contact@bannaai.com | +91 81409 99907</p>
        </div>
      </footer>
    </div>
  );
}
