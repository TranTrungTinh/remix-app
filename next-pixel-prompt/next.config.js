/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
      { protocol: "https", hostname: "replicate.delivery" },
    ],
  },
};

module.exports = nextConfig;
