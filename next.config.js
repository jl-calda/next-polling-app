/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dummyimage.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
