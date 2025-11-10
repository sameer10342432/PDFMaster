import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["https://*.replit.dev", "https://*.repl.co", "http://127.0.0.1:5000"],
  experimental: {
    serverActions: {
      allowedOrigins: ["https://*.replit.dev", "https://*.repl.co"],
    },
  },
};

export default nextConfig;
