"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Mobile menu
  const [loginOpen, setLoginOpen] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dropdown states
  const [buyerOpen, setBuyerOpen] = useState(false);
    const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [sellerOpen, setSellerOpen] = useState(false);

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && userType) {
      setLoginOpen(false);
      setIsSidebarOpen(true);
    }
  };

  const handleLogout = () => {
    setUserType(null);
    setIsSidebarOpen(false);
    setEmail("");
    setPassword("");
  };

  // Common menu classes
  const menuItemClasses =
    "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-lg";

  // Close dropdowns when clicking a menu item
  const handleMenuClick = () => {
    setBuyerOpen(false);
    setSellerOpen(false);
    setOpen(false); // for mobile menu
  };

  return (
    <>
      {/* Navbar */}
     \<nav className="w-full bg-gradient-to-r from-indigo-800 to-indigo-900 text-white shadow-md fixed top-0 left-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link href="/" className="text-2xl font-extrabold text-indigo-200 hover:text-white">
            BannaAI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {/* Buyer Dropdown */}
            <div className="relative">
              <div
                className={menuItemClasses}
                onClick={() => setBuyerOpen(!buyerOpen)}
              >
                Buyer
                <ChevronDown
                  className={`ml-1 transition-transform ${buyerOpen ? "rotate-180" : ""}`}
                  size={14}
                />
              </div>
              {buyerOpen && (
                <div className="absolute mt-2 bg-white text-gray-800 rounded-md shadow-lg w-52 z-50">
                  {/* Residential Section */}
                  <div
                    className={menuItemClasses + " text-gray-800"}
                    onClick={() => setResidentialOpen(!residentialOpen)}
                  >
                    Residential
                    <ChevronDown
                      size={12}
                      className={`ml-1 transition-transform ${residentialOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  {residentialOpen && (
                    <div className="ml-4">
                      <Link href="/residential/house" className={menuItemClasses + " text-gray-800"} onClick={handleMenuClick}>
                        Houses
                      </Link>
                      <Link href="/residential/villas" className={menuItemClasses + " text-gray-800"} onClick={handleMenuClick}>
                        Villas
                      </Link>
                    </div>
                  )}

                  {/* Commercial Section */}
                  <div
                    className={menuItemClasses + " text-gray-800"}
                    onClick={() => setCommercialOpen(!commercialOpen)}
                  >
                    Commercial
                    <ChevronDown
                      size={12}
                      className={`ml-1 transition-transform ${commercialOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  {commercialOpen && (
                    <div className="ml-4">
                      <Link href="/commercial/shops" className={menuItemClasses + " text-gray-800"} onClick={handleMenuClick}>
                        Shops
                      </Link>
                      <Link href="/commercial/plots" className={menuItemClasses + " text-gray-800"} onClick={handleMenuClick}>
                        Plots
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Seller Dropdown */}
            <div className="relative">
              <div
                className={menuItemClasses}
                onClick={() => setSellerOpen(!sellerOpen)}
              >
                For Sellers
                <ChevronDown
                  className={`ml-1 transition-transform ${sellerOpen ? "rotate-180" : ""}`}
                  size={14}
                />
              </div>
              {sellerOpen && (
                <div className="absolute mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48 z-50">
                  <Link href="/addproperty" className={menuItemClasses + " text-gray-800"} onClick={handleMenuClick}>
                    Add Property
                  </Link>
                  <Link href="/manage" className={menuItemClasses + " text-gray-800"} onClick={handleMenuClick}>
                    Manage Listings
                  </Link>
                  <Link href="/sellhelp" className={menuItemClasses + " text-gray-800"} onClick={handleMenuClick}>
                    Seller Help
                  </Link>
                </div>
              )}
            </div>

            <Link href="/tenant" className={menuItemClasses} onClick={handleMenuClick}>For Tenants</Link>
           {/* // <Link href="/service" className={menuItemClasses} onClick={handleMenuClick}>Services</Link> */}
            <Link href="/articles" className={menuItemClasses} onClick={handleMenuClick}>Articles</Link>
          </div>

          {/* Right Side Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLoginOpen(true)}
              className="border border-purple-400 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all"
            >
              {userType ? `${userType.toUpperCase()}` : "Login / Register"}
            </button>

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all"
            >
              Sidebar
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-indigo-200 focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-indigo-900 text-white shadow-lg z-40 p-5 space-y-4 transition-transform duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold capitalize">{userType} Panel</h2>
            <X className="cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
          </div>

          <div className="flex flex-col space-y-2">
            {userType === "seller" && (
              <>
                <Link href="/addproperty" className={menuItemClasses} onClick={handleMenuClick}>Post Property</Link>
                <Link href="/manage" className={menuItemClasses} onClick={handleMenuClick}>Listed Properties</Link>
                <Link href="/shortlisted" className={menuItemClasses} onClick={handleMenuClick}>People Shortlisted</Link>
              </>
            )}
            {userType === "buyer" && (
              <>
                <Link href="/favorites" className={menuItemClasses} onClick={handleMenuClick}>Favorites</Link>
                <Link href="/viewed" className={menuItemClasses} onClick={handleMenuClick}>Viewed Properties</Link>
                <Link href="/shortlist" className={menuItemClasses} onClick={handleMenuClick}>My Shortlist</Link>
              </>
            )}
            {userType === "tenant" && (
              <>
                <Link href="/rentals" className={menuItemClasses} onClick={handleMenuClick}>My Rentals</Link>
                <Link href="/favorites" className={menuItemClasses} onClick={handleMenuClick}>Favorites</Link>
              </>
            )}

            <hr className="border-gray-500 my-2" />
            <Link href="/contactus" className={menuItemClasses} onClick={handleMenuClick}>Contact Us</Link>
            <Link href="/aboutus" className={menuItemClasses} onClick={handleMenuClick}>About Us</Link>

            <button
              onClick={handleLogout}
              className="mt-2 w-full bg-purple-500 py-2 rounded-md hover:bg-purple-600 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {loginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 w-96 text-gray-800 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setLoginOpen(false)}
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">Login / Register</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex justify-around mb-3">
                {["buyer", "seller", "tenant"].map((role) => (
                  <label key={role} className="flex items-center space-x-1 capitalize">
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      onChange={(e) => setUserType(e.target.value)}
                      checked={userType === role}
                    />
                    <span>{role}</span>
                  </label>
                ))}
              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
                required
              />
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white py-2 rounded-md hover:bg-indigo-800 transition-all"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
