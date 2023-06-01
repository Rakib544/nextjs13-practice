/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lms-course.netlify.app",
      },
      {
        protocol: "https",
        hostname: "img-c.udemycdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
