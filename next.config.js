/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-domain.com'], // Add your image domains here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable experimental features if needed
  experimental: {
    turbopack: true,
    externalDir: true,
    serverComponentsExternalPackages: ['go'],
  },
  webpack: (config, { isServer }) => {
    // Handle Go-related imports
    if (isServer) {
      config.externals.push('go');
    }
    return config;
  }
};

module.exports = nextConfig;
