// app/page.jsx
'use client';

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="text-center py-20 px-4 bg-blue-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Every parcel of land deserves a voice</h1>
        <p className="text-lg md:text-xl mb-6">
          AI-driven valuations, blockchain-verified ownership, and crystal-clear insights — building a smarter, more transparent future for Indian real estate.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Request a demo</button>
          <button className="bg-gray-200 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-300">Explore the platform</button>
        </div>
        <p className="mt-4 text-sm text-gray-600">Pre-launch • Ahmedabad | Benchmarked on 10K+ verified sale records</p>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">The hidden issues behind Indian real estate</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Opaque & slow:</strong> Complex systems and hidden data slow down every deal.</li>
          <li><strong>Fraud risk:</strong> Inconsistent records and fake documents erode trust.</li>
          <li><strong>Data gaps:</strong> Scattered data prevents confident decision-making.</li>
        </ul>
      </section>

      {/* CORE MODULES SECTION */}
      <section className="py-16 px-4 bg-gray-50 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Core Modules – What powers BannaAI</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>SmartVal:</strong> AI-powered property valuation engine using verified market data and imagery.</li>
          <li><strong>Tokenization:</strong> Blockchain-secured fractional ownership that makes property transparent and liquid.</li>
          <li><strong>Analytics:</strong> Real-time dashboards and risk insights for investors, developers, and analysts.</li>
          <li><strong>AR Reality:</strong> Explore property context in 3D/AR for faster decisions.</li>
        </ul>
      </section>

      {/* SECURITY & TRUST SECTION */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Trust built into every layer</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Enterprise-grade encryption:</strong> Bank-level protection for ownership and valuation data.</li>
          <li><strong>Audit trails:</strong> Every transaction is timestamped and verifiable.</li>
          <li><strong>Trusted data sources:</strong> Integrated with verified government and market databases.</li>
          <li><strong>On-chain proofs:</strong> Ownership and history recorded securely on blockchain.</li>
        </ul>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 px-4 bg-gray-50 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">From valuation to verified ownership — in three steps</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Search your property and get instant AI valuation.</li>
          <li>Verify records and ownership through blockchain validation.</li>
          <li>Invest or track confidently with live analytics and insights.</li>
        </ol>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">What we stand for</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Vision:</strong> Building India’s most transparent and data-driven real estate ecosystem.</li>
          <li><strong>Integrity:</strong> Every valuation and record built on honesty, accuracy, and trust.</li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 bg-gray-50 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Common questions</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>What is BannaAI?</strong> AI-powered platform for transparent property valuation, ownership verification, and market analytics.</li>
          <li><strong>How does SmartVal work?</strong> Analyzes verified sale records, government data, and satellite imagery.</li>
          <li><strong>What is property tokenization?</strong> Converts property rights into secure blockchain-based tokens.</li>
          <li><strong>Is my data secure?</strong> All ownership and personal data encrypted and stored with audit trails.</li>
          <li><strong>When is the public launch?</strong> Pre-launch in Ahmedabad; national rollout after pilot.</li>
        </ul>
      </section>

      {/* WAITLIST SECTION */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Join the waitlist</h2>
        <p className="text-gray-700 mb-6">Sign up early to get demo access, product updates, and exclusive beta invitations.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Request access</button>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center text-sm">
        <p className="mb-2">© 2025 BannaAI RealtyTech Private Limited</p>
        <p className="mb-2">Registered Office: Ahmedabad, Gujarat | Jurisdiction: Courts of Ahmedabad</p>
        <p className="mb-2">CIN: To be updated post-registration</p>
        <p>legal@bannaai.com | privacy@bannaai.com | www.bannaai.com</p>
      </footer>
    </main>
  );
}
