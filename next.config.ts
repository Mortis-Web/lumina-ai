import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  cacheComponents: true,
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/images/**' // match all files under /images
      },
      {
        protocol: 'https',
        hostname: 'production.com',
        pathname: '/images/**' // match all files under /images
      }
    ]
  },

  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForBuild: true,
  },

};

export default nextConfig;
