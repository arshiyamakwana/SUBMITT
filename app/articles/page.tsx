'use client';

import { motion } from "framer-motion";

export default function ArticlePage() {
  const articles = [
    {
      id: 1,
      title: "How Property Brokers Are Transforming the Housing Market in 2025",
      author: "Ravi Mehta",
      date: "Nov 4, 2025",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=60",
      summary:
        "Digital tools, AI valuation systems, and smart analytics are reshaping how brokers connect buyers and sellers in modern real estate.",
      category: "Market Trends",
    },
    {
      id: 2,
      title: "Top 10 Property Hotspots to Invest In This Year",
      author: "Aisha Patel",
      date: "Oct 28, 2025",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=900&q=60",
      summary:
        "Explore the cities and localities delivering the highest ROI and long-term growth potential for smart property investors.",
      category: "Investment",
    },
    {
      id: 3,
      title: "Why SmartValuation Tools Are Defining the Future of Real Estate",
      author: "Dhruv Shah",
      date: "Oct 19, 2025",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=60",
      summary:
        "AI-powered valuation tools are offering unparalleled accuracy and transparency, giving brokers a competitive edge.",
      category: "Technology",
    },
    {
      id: 4,
      title: "Broker Insights: Negotiation Strategies for Modern Property Deals",
      author: "Nisha Kumar",
      date: "Oct 10, 2025",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=60",
      summary:
        "Experienced brokers share practical frameworks for effective negotiation and closing deals with confidence.",
      category: "Guides",
    },
  ];

  return (
    <main className="relative min-h-screen py-20 px-6 sm:px-12 bg-[#F8FAFC] text-[#0A1A3F]">
      {/* Header */}
      <div className="text-center mb-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold font-serif mb-2 tracking-tight"
        >
          <span className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
            The Realty Journal
          </span>
        </motion.h1>
        <p className="text-[#475569] text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Curated insights, design trends, and investment intelligence for the modern property market.
        </p>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-[#2563EB]/90 text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wide">
                {article.category}
              </span>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold font-serif mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                {article.title}
              </h2>
              <p className="text-[#475569] text-base mb-5 leading-relaxed line-clamp-3 font-light">
                {article.summary}
              </p>

              <div className="flex items-center justify-between text-sm text-[#64748B] mb-5 italic">
                <span>By {article.author}</span>
                <span>{article.date}</span>
              </div>

              <a
                href="#"
                className="inline-block text-[#2563EB] text-sm font-semibold hover:underline hover:text-[#1E40AF] transition-all"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
