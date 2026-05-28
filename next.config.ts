import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackMinify: true,
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
  },
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
