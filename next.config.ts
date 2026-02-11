import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackMinify: true,
  },
  compress: true,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
