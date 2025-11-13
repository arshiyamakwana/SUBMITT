'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, MapPin,Rabbit, Layers, Bed, Image } from "lucide-react";

export default function CreativePropertyFormNoScroll() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "sell",
    category: "Apartment",
    title: "",
    location: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    amenities: [] as string[],
    description: "",
    images: null as FileList | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmenitiesChange = (amenity: string) => {
    const newAmenities = formData.amenities.includes(amenity)
      ? formData.amenities.filter(a => a !== amenity)
      : [...formData.amenities, amenity];
    setFormData({ ...formData, amenities: newAmenities });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const calculateScore = () => {
    let score = 0;
    if (formData.location) score += 20;
    if (formData.price) score += 20;
    if (formData.area || formData.bedrooms || formData.bathrooms) score += 20;
    if (formData.amenities.length > 0) score += 20;
    if (formData.description) score += 10;
    if (formData.images && formData.images.length > 0) score += 10;
    return score;
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Property Submitted! Score: ${calculateScore()}/100`);
    console.log(formData);
  };

  // Animations
  const stepVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-indigo-50 to-purple-50 overflow-hidden">

      {/* LEFT SIDE ANIMATION / ILLUSTRATION */}
      <div className="md:w-3/5 flex flex-col justify-center items-center relative p-8">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-indigo-900 mb-6 text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          Add Your Property
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-indigo-700 mb-8 text-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          Step-by-step creative form with automatic property scoring
        </motion.p>

        {/* Animated floating shapes */}
        <motion.div
          className="absolute bg-indigo-300 rounded-full w-36 h-36 top-10 left-10 opacity-40"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.div
          className="absolute bg-purple-300 rounded-full w-28 h-28 bottom-20 right-20 opacity-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="md:w-2/5 flex justify-center items-center p-8">
        <AnimatePresence mode="wait">
          <motion.form
            key={step}
            onSubmit={handleSubmit}
            className="w-full bg-white p-6 rounded-3xl shadow-2xl flex flex-col gap-6"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >

            {/* Step Indicator */}
            <div className="flex justify-between mb-4">
              {[1,2,3,4,5].map((s) => (
                <div
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step >= s ? "bg-indigo-500 text-white border-indigo-500" : "border-gray-300 text-gray-400"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            {/* STEP CONTENT */}
            {step === 1 && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2"><Home className="text-indigo-500"/><select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400">
                  <option value="sell">Sell</option>
                  <option value="rent">Rent</option>
                </select></div>

                <div className="flex items-center gap-2"><Layers className="text-indigo-500"/><select name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400">
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Bungalow</option>
                  <option>Plot</option>
                </select></div>

                <div className="flex items-center gap-2"><Home className="text-indigo-500"/><input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Property Title" className="w-full border-b-2 border-gray-300 focus:border-indigo-500 p-2 outline-none" required /></div>

                <div className="flex items-center gap-2"><MapPin className="text-indigo-500"/><input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location / Address" className="w-full border-b-2 border-gray-300 focus:border-indigo-500 p-2 outline-none" required /></div>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2"><  Rabbit className="text-indigo-500"/><input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price / Rent" className="w-full border-b-2 border-gray-300 focus:border-indigo-500 p-2 outline-none" required /></div>

                <div className="flex items-center gap-2"><Layers className="text-indigo-500"/><input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Area (sq. ft / m²)" className="w-full border-b-2 border-gray-300 focus:border-indigo-500 p-2 outline-none"/></div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-1"><Bed className="text-indigo-500"/> <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} className="border p-2 rounded w-full"/></div>
                  
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-indigo-700">Amenities</p>
                <div className="flex flex-wrap gap-2">
                  {['Parking', 'Garden', 'Swimming Pool', 'Gym', 'Elevator'].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-1 bg-indigo-100 px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-200">
                      <input type="checkbox" checked={formData.amenities.includes(amenity)} onChange={() => handleAmenitiesChange(amenity)} className="accent-indigo-500"/>
                      {amenity}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2"><Layers className="text-indigo-500"/><textarea name="description" value={formData.description} onChange={handleChange} placeholder="Property Description" rows={2} className="w-full border-b-2 border-gray-300 focus:border-indigo-500 p-2 outline-none resize-none"/></div>
                <div className="flex items-center gap-2"><Image className="text-indigo-500"/> <input type="file" name="images" accept="image/*" multiple onChange={handleFileChange} className="border p-2 rounded w-full"/></div>
              </div>
            )}

            {step === 5 && (
              <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold text-indigo-700 text-lg">Your Property Score</p>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div className="bg-green-500 h-6 rounded-full text-white text-center font-bold transition-all" style={{width: `${calculateScore()}%`}}>
                    {calculateScore()}/100
                  </div>
                </div>
                <p className="text-gray-700 text-center">Complete more details to increase your score!</p>
              </div>
            )}

            {/* NAVIGATION */}
            <div className="flex justify-between mt-4">
              {step > 1 && <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Back</button>}
              {step < 5 && <button type="button" onClick={nextStep} className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Next</button>}
              {step === 5 && <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>}
            </div>

          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
}
