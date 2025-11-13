/** @type {import('next').NextConfig} */
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["cdn-ildpppi.nitrocdn.com", "images.unsplash.com"], // add your image domains here
  },
  env: {
    NEXT_PUBLIC_API_URL: apiUrl,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
