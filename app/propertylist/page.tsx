'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";//import { Home, MapPin, DollarSign, Layers, Bed, Shower, Image, Mail } from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  floors: string;
  propertyType: string;
  category: string;
}

export default function PropertyPlatform() {
  const [activeTab, setActiveTab] = useState("listing"); // listing, your, inquiry
  const [properties, setProperties] = useState<Property[]>([]);
  const [formData, setFormData] = useState<any>({
    propertyType: "sell",
    category: "Apartment",
    title: "",
    location: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    description: ""
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProperty = () => {
    const newProperty: Property = {
      id: properties.length + 1,
      ...formData
    };
    setProperties([...properties, newProperty]);
    setFormData({
      propertyType: "sell",
      category: "Apartment",
      title: "",
      location: "",
      price: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      floors: "",
      description: ""
    });
    alert("Property Added!");
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 justify-center">
        {["listing", "your", "inquiry"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === tab ? "bg-indigo-500 text-white" : "bg-white shadow hover:bg-indigo-100"
            }`}
          >
            {tab === "listing" ? "Property Listing" : tab === "your" ? "Your Properties" : "Customer Inquiry"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "listing" && (
          <motion.div
            key="listing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {properties.length === 0 ? (
              <p className="text-center col-span-2 text-gray-500">No properties listed yet.</p>
            ) : (
              properties.map(p => (
                <div key={p.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                  <h3 className="font-bold text-indigo-700 text-lg">{p.title}</h3>
                  <p className="text-gray-600">{p.location}</p>
                  <p className="text-green-600 font-semibold">₹{p.price}</p>
                  <p className="text-gray-500">{p.bedrooms} Beds | {p.bathrooms} Baths | {p.area} sqft</p>
                </div>
              ))
            )}
          </motion.div>
        )}

        {activeTab === "your" && (
          <motion.div
            key="your"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white p-6 rounded-3xl shadow-2xl">
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">Add Your Property</h2>
              <div className="flex flex-col gap-3">
                <select name="propertyType" value={formData.propertyType} onChange={handleFormChange} className="border p-2 rounded">
                  <option value="sell">Sell</option>
                  <option value="rent">Rent</option>
                </select>
                <select name="category" value={formData.category} onChange={handleFormChange} className="border p-2 rounded">
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Bungalow</option>
                  <option>Plot</option>
                </select>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleFormChange} className="border p-2 rounded"/>
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleFormChange} className="border p-2 rounded"/>
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleFormChange} className="border p-2 rounded"/>
                <input type="text" name="area" placeholder="Area" value={formData.area} onChange={handleFormChange} className="border p-2 rounded"/>
                <input type="text" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleFormChange} className="border p-2 rounded"/>
                <input type="text" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleFormChange} className="border p-2 rounded"/>
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleFormChange} className="border p-2 rounded"/>
                <button onClick={addProperty} className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600">Add Property</button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {properties.length === 0 ? <p className="text-gray-500 col-span-2">No properties added yet.</p> : properties.map(p => (
                <div key={p.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
                  <h3 className="font-bold text-indigo-700">{p.title}</h3>
                  <p className="text-gray-600">{p.location}</p>
                  <p className="text-green-600 font-semibold">₹{p.price}</p>
                  <p className="text-gray-500">{p.bedrooms} Beds | {p.bathrooms} Baths | {p.area} sqft</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "inquiry" && (
          <motion.div
            key="inquiry"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Customer Inquiry</h2>
            <input type="text" placeholder="Your Name" className="border p-2 rounded"/>
            <input type="email" placeholder="Your Email" className="border p-2 rounded"/>
            <select className="border p-2 rounded">
              <option value="">Select Property</option>
              {properties.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
            <textarea placeholder="Message" className="border p-2 rounded"/>
            <button className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600">Send Inquiry</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
