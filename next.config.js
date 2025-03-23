/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't fail the build on ESLint warnings
    ignoreDuringBuilds: true
  },
  typescript: {
    // Don't fail the build on TypeScript errors
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig; 