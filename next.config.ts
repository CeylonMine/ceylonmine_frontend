import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    // Don't fail the build on ESLint warnings
    ignoreDuringBuilds: true
  },
  typescript: {
    // Don't fail the build on TypeScript errors
    ignoreBuildErrors: true
  }
};

export default nextConfig;
