import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  output: 'export',
};

export default nextConfig;
