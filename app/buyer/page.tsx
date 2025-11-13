"use client";

import React, { useState } from "react";

export default function BuyerPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "Residential" | "Commercial" | ""
  >("");
  const [selectedType, setSelectedType] = useState("");

  const options: Record<"Residential" | "Commercial", string[]> = {
    Residential: ["House", "Villas"],
    Commercial: ["Shops"],
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Buyer Options</h1>

      <div className="w-64">
        {/* Category Dropdown */}
        <label className="block mb-2 font-semibold">Select Category:</label>
        <select
          className="w-full border border-gray-300 rounded p-2 mb-4"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value as "Residential" | "Commercial" | "");
            setSelectedType(""); // Reset sub-option
          }}
        >
          <option value="">--Choose Category--</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>

        {/* Type Dropdown */}
        {selectedCategory && (
          <>
            <label className="block mb-2 font-semibold">Select Type:</label>
            <select
              className="w-full border border-gray-300 rounded p-2"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">--Choose Type--</option>
              {options[selectedCategory].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </>
        )}

        {/* Display Selection */}
        {selectedType && (
          <p className="mt-4 text-blue-600">
            You selected: {selectedCategory} → {selectedType}
          </p>
        )}
      </div>
    </main>
  );
}
