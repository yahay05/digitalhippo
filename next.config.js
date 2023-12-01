/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000",
        protocol: "http",
      },
      {
        hostname: "digitalhippo-production-783c.up.railway.app",
        pathname: "**",
        protocol: "https",
        port: "443",
      },
    ],
  },
};

module.exports = nextConfig;
