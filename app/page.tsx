'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Area {
  name: string;
  img: string;
  properties: number;
}

interface Property {
  name: string;
  details: string;
  price: string;
  img: string;
}

interface Insight {
  title: string;
  desc: string;
  img: string;
}

interface Project {
  name: string;
  type: string;
  price?: string;
  img: string;
}

interface MoveIn {
  year: string;
  projects: number;
}

interface Emerge {
  name: string;
  increase: string;
}

interface ScrollState {
  left: boolean;
  right: boolean;
}

interface Project {
  name: string;
  img: string;
}
interface ScrollStates {
  area: ScrollState;
  property: ScrollState;
  topProject: ScrollState;
  trending: ScrollState;
  newProject: ScrollState;
  moveIn: ScrollState;
  emerge: ScrollState;
}

export default function HomePage() {
  // --- Refs for scrollable sections ---
  const areaScrollRef = useRef<HTMLDivElement>(null);
  const propertyScrollRef = useRef<HTMLDivElement>(null);
  const topProjectRef = useRef<HTMLDivElement>(null);
  const trendingRef = useRef<HTMLDivElement>(null);
  const newProjectRef = useRef<HTMLDivElement>(null);
  const moveInRef = useRef<HTMLDivElement>(null);
  const emergeRef = useRef<HTMLDivElement>(null);

  // --- Scroll state ---
  const [scrollState, setScrollState] = useState<ScrollStates>({
    area: { left: false, right: true },
    property: { left: false, right: true },
    topProject: { left: false, right: true },
    trending: { left: false, right: true },
    newProject: { left: false, right: true },
    moveIn: { left: false, right: true },
    emerge: { left: false, right: true },
  });

  // --- Scroll handler ---
  const handleScroll = (ref: React.RefObject<HTMLDivElement>, key: keyof ScrollStates) => {
    const el = ref.current;
    if (!el) return;
    const atStart = el.scrollLeft === 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    setScrollState(prev => ({
      ...prev,
      [key]: { left: !atStart, right: !atEnd }
    }));
  };

  // --- Scroll by amount ---
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', amount = 250) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  // --- Setup scroll event listeners ---
  useEffect(() => {
    const sections: [React.RefObject<HTMLDivElement>, keyof ScrollStates][] = [
      [areaScrollRef, 'area'],
      [propertyScrollRef, 'property'],
      [topProjectRef, 'topProject'],
      [trendingRef, 'trending'],
      [newProjectRef, 'newProject'],
      [moveInRef, 'moveIn'],
      [emergeRef, 'emerge'],
    ];

    const listeners: (() => void)[] = [];

    sections.forEach(([ref, key]) => {
      const el = ref.current;
      if (!el) return;
      const onScroll = () => handleScroll(ref, key);
      el.addEventListener('scroll', onScroll);
      onScroll();
      listeners.push(() => el.removeEventListener('scroll', onScroll));
    });

    return () => listeners.forEach(cleanup => cleanup());
  }, []);

  // --- Sample Data ---
  const areas: Area[] = [
    { name: 'Prahladnagar', img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80', properties: 12 },
    { name: 'Satellite', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80', properties: 13 },
    { name: 'Bopal', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80', properties: 10 },
    { name: 'Maninagar', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', properties: 11 },
    { name: 'Thaltej', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80', properties: 14 },
  ];

  const properties: Property[] = [
    { name: 'Pragyavan Residency', details: '3, 4BHK Apartment in Satellite Road', price: '₹1.6Cr - 2.1Cr', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Mithi Elevate', details: '3, 4BHK Apartment in Ghatlodia', price: '₹1.2Cr - 1.8Cr', img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Heritage Villa 79', details: '4BHK Villa in Thaltej', price: '₹1.3Cr - 1.9Cr', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80' },
  ];

  const insights: Insight[] = [
    { title: "Top 5 Premium Locations in Ahmedabad 2025", desc: "Prahladnagar and Thaltej continue to dominate the luxury real estate segment.", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80" },
    { title: "AI in Property Valuation", desc: "How BHUMI X AI is transforming how you know your property’s real worth.", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" },
  ];

  const topProjects: Project[] = [
    { name: 'Pragyavan Residency', type: 'Apartment', price: '₹1.6Cr - 2.1Cr', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Mithi Elevate', type: 'Apartment', price: '₹1.2Cr - 1.8Cr', img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Heritage Villa 79', type: 'Villa', price: '₹1.3Cr - 1.9Cr', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80' },
  ];

  const trending: Project[] = [
  { name: 'Luxury Villa', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Modern House', img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Sky Apartments', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=1200&q=80' },
];
  const newProjects: Project[] = [
    { name: 'Greenview Villa', type: 'Villa', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&w=1200&q=80' },
    { name: 'Sunshine Tenaments', type: 'Tenament', img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&w=1200&q=80' },
    { name: 'Skyline Apartments', type: 'Apartment', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=1200&q=80' },
  ];

  const whenToMove: MoveIn[] = [
    { year: '2025', projects: 5 },
    { year: '2026', projects: 8 },
    { year: '2027', projects: 10 },
  ];

  const emergeLocalities: Emerge[] = [
    { name: 'Prahladnagar', increase: '12%' },
    { name: 'Bopal', increase: '8%' },
    { name: 'Satellite', increase: '10%' },
  ];

  const propertyTypes = [
    {
      title: "Apartments",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bungalows",
      img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Villas",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Plots",
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Studio Flats",
      img: "https://images.unsplash.com/photo-1572120360610-d971b9b63911?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Farmhouses",
      img: "https://images.unsplash.com/photo-1600585154203-3b5b8b98aa9c?auto=format&fit=crop&w=800&q=80",
    },
  ];
  // --- Render scrollable section helper ---
  const renderScrollableSection = <T extends unknown>(
    ref: React.RefObject<HTMLDivElement>,
    items: T[],
    renderItem: (item: T, i: number) => React.ReactNode,
    key: keyof ScrollStates
  ) => (
    <div className="relative">
      {scrollState[key].left && (
        <button
          onClick={() => scroll(ref, 'left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#2563EB]/80 text-white p-2 rounded-full sm:hidden z-10"
        >
          <ChevronLeft />
        </button>
      )}
      {scrollState[key].right && (
        <button
          onClick={() => scroll(ref, 'right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2563EB]/80 text-white p-2 rounded-full sm:hidden z-10"
        >
          <ChevronRight />
        </button>
      )}
      <div ref={ref} className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth">
        {items.map(renderItem)}
      </div>
    </div>
  );
  const data = [
    {
      title: "Ready to Move",
      subtitle: "13,000+ Properties",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      bg: "bg-[#F9FAFB]",
    },
    {
      title: "Possession in 2025",
      subtitle: "400+ Properties",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      bg: "bg-[#EEF2FF]",
    },
    {
      title: "Possession in 2026",
      subtitle: "1,300+ Properties",
      img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
      bg: "bg-[#E6F4EA]",
    },
  ]

  return (
    <div className="space-y-20 px-4 sm:px-6 md:px-16 py-10 bg-[#F3F6FA] text-[#0A1A44] overflow-hidden">

      {/* Hero Section */}
          <section
      className="relative h-[200px] sm:h-[350px] bg-cover bg-center rounded-2xl shadow-lg overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A1A44]/70 flex flex-col justify-center items-center text-center text-white px-4">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
        >
          Find Your Dream Home in Ahmedabad
        </motion.h1>

        <p className="text-sm sm:text-base md:text-lg mb-5 max-w-xl md:max-w-2xl text-[#C7D2FE]">
          Powered by{" "}
          <span className="font-semibold text-[#60A5FA]">BHUMI X AI</span> — redefining property search intelligence.
        </p>

        {/* Premium Search Bar on Image */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 w-full sm:w-[85%] max-w-5xl mx-auto flex flex-col gap-6 border border-gray-100">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-8 font-semibold text-gray-700">
            {["Buy", "Rent", "Commercial", "Plots", "Projects"].map((tab, i) => (
              <button
                key={i}
                className={`pb-1 border-b-2 transition-all ${
                  i === 0
                    ? "border-blue-600 text-blue-700"
                    : "border-transparent hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-2">
            <select className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Bungalow</option>
              <option>Villa</option>
              <option>Plot</option>
            </select>

            <select className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Budget</option>
              <option>Below ₹50L</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr - ₹3Cr</option>
              <option>Above ₹3Cr</option>
            </select>

            <input
              type="text"
              placeholder="Search by area, project or keyword"
              className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg px-3 py-2 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg px-5 py-2 flex justify-center items-center gap-2 transition">
              <Search size={18} /> Search
            </button>
          </div>
        </div>
      </div>
    </section>
      

      {/* Explore by Area */}
      <section className='mb-5'>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Explore by Area</h2>
        {renderScrollableSection(areaScrollRef, areas, (a, i) => (
          <div key={i} className="min-w-[200px] sm:min-w-[250px] rounded-xl overflow-hidden shadow-md bg-[#EEF2FF] hover:shadow-lg transition transform hover:-translate-y-1">
            <Image src={a.img} alt={a.name} width={400} height={250} className="h-40 sm:h-48 w-full object-cover"/>
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-lg font-semibold">{a.name}</h3>
              <p className="text-[#2563EB] text-xs sm:text-sm">{a.properties} Properties</p>
            </div>
          </div>
        ), 'area')}
      </section>

   {/* Top Projects */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Top Projects</h2>
        {renderScrollableSection(topProjectRef, topProjects, (p, i) => (
          <div key={i} className="min-w-[260px] sm:min-w-[300px] rounded-2xl overflow-hidden bg-[#EEF2FF] shadow-md p-4">
            <Image src={p.img} alt={p.name} width={400} height={250} className="h-44 sm:h-48 w-full object-cover"/>
            <h3 className="text-lg sm:text-xl font-semibold mt-2">{p.name}</h3>
            <p className="text-[#2563EB]">{p.type}</p>
            {p.price && <p className="font-bold">{p.price}</p>}
          </div>
        ), 'topProject')}
      </section>
      <section className="w-full py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Explore by Property Type 🏡
        </h2>
        <p className="text-gray-500 mb-8">
          Discover the type of home that best fits your lifestyle and investment goals.
        </p>

        {/* Scrollable Container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[220px] sm:w-[260px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative w-full h-40">
                <Image
                  src={type.img}
                  alt={type.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Featured Projects</h2>
        {renderScrollableSection(propertyScrollRef, properties, (p, i) => (
          <div key={i} className="min-w-[260px] sm:min-w-[340px] rounded-2xl overflow-hidden bg-[#EEF2FF] shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <Image src={p.img} alt={p.name} width={400} height={250} className="h-48 sm:h-56 w-full object-cover"/>
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold">{p.name}</h3>
              <p className="text-[#2563EB] text-xs sm:text-sm mb-1 sm:mb-2">{p.details}</p>
              <p className="text-[#0A1A44] font-bold">{p.price}</p>
            </div>
          </div>
        ), 'property')}
      </section>
   {/* Trending */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Trending in Ahmedabad</h2>
        {renderScrollableSection(trendingRef, trending, (t, i) => (
          <div key={i} className="min-w-[220px] rounded-2xl overflow-hidden bg-[#EEF2FF] shadow-md">
            <Image src={t.img} alt={t.name} width={400} height={250} className="h-40 sm:h-44 w-full object-cover"/>
            <h3 className="p-3 text-lg font-semibold">{t.name}</h3>
          </div>
        ), 'trending')}
      </section>
        {/* When to Move In */}
      <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Move in Now, Next Year or Later 🏙️
        </h2>
        <p className="text-gray-500 mb-8">
          Choose your preferred possession timeline and explore properties that match your move-in goals.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-[280px] sm:w-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${item.bg}`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 mt-1">{item.subtitle}</p>
              </div>
              <div className="relative w-full h-40">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-none rounded-b-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* New Projects */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">New Projects</h2>
        {renderScrollableSection(newProjectRef, newProjects, (n, i) => (
          <div key={i} className="min-w-[240px] sm:min-w-[280px] rounded-2xl overflow-hidden bg-[#EEF2FF] shadow-md">
            <Image src={n.img} alt={n.name} width={400} height={250} className="h-44 sm:h-48 w-full object-cover"/>
            <div className="p-3 sm:p-4">
              <h3 className="text-lg sm:text-xl font-semibold">{n.name}</h3>
              <p className="text-[#2563EB]">{n.type}</p>
            </div>
          </div>
        ), 'newProject')}
      </section>
    
      {/* Emerge Localities */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Emerge Localities</h2>
        {renderScrollableSection(emergeRef, emergeLocalities, (e, i) => (
          <div key={i} className="min-w-[180px] sm:min-w-[220px] bg-[#EEF2FF] p-4 rounded-xl shadow-md text-center">
            <h3 className="text-lg sm:text-xl font-semibold">{e.name}</h3>
            <p className="text-[#2563EB] mt-1">{e.increase} Increase</p>
          </div>
        ), 'emerge')}
      </section>
{/* Insights */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Insights & Trends</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((i, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-md bg-[#EEF2FF] hover:shadow-lg transition">
              <Image src={i.img} alt={i.title} width={600} height={350} className="h-48 sm:h-52 w-full object-cover"/>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{i.title}</h3>
                <p className="text-[#2563EB] text-sm sm:text-base">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

   

    </div>
  );
}
