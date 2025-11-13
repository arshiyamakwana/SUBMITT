"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type User = {
  email: string;
  password: string;
  name: string;
};

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Dummy credentials
  const users: User[] = [
    { email: "john@example.com", password: "123456", name: "John" },
    { email: "alice@example.com", password: "alice123", name: "Alice" },
    { email: "bob@example.com", password: "bobpass", name: "Bob" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just show user name after register
    const newUser = { email, password, name };
    setCurrentUser(newUser);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Left  Side */}
      <div className="md:w-1/2 flex items-center justify-center relative p-6">
        <div className="absolute w-72 h-72 bg-indigo-400 rounded-full top-10 left-10 mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-400 rounded-full bottom-10 right-10 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute w-56 h-56 bg-yellow-400 rounded-full top-1/3 left-1/2 mix-blend-multiply filter blur-2xl opacity-25 animate-bounce"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-4 leading-snug">
            {isRegister
              ? "Join Us Today!"
              : currentUser
              ? `Welcome, ${currentUser.name}!`
              : "Welcome Back!"}
          </h1>
          {!currentUser && (
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto">
              {isRegister
                ? "Create your account and start your journey with us."
                : "Login to access your personalized dashboard."}
            </p>
          )}
        </motion.div>
      </div>

      {/* Right Form Side */}
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md relative z-10"
        >
          {!currentUser ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                {isRegister ? "Create an Account" : "Login to Your Account"}
              </h2>

              <form
                className="space-y-4"
                onSubmit={isRegister ? handleRegister : handleLogin}
              >
                {isRegister && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition"
                >
                  {isRegister ? "Register" : "Login"}
                </motion.button>
              </form>

              <p className="text-center text-sm text-gray-600 mt-4">
                {isRegister
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-indigo-500 hover:underline font-medium transition"
                >
                  {isRegister ? "Login" : "Register"}
                </button>
              </p>
            </>
          ) : (
            <div className="text-center py-20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl">👤</div>
                <h3 className="text-2xl font-bold mt-4">
                  Hello, {currentUser.name}!
                </h3>
                <p className="text-gray-600 mt-2">You are logged in successfully.</p>

                <button
                  onClick={() => setCurrentUser(null)}
                  className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </motion.div>
            </div>
          )}

          {/* Floating Color Blobs */}
          <div className="absolute top-[-40px] right-[-40px] w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-[-40px] left-[-40px] w-24 h-24 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
}
