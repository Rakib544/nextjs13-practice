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
      {
        protocol: "https",
        hostname: "lms.rocket-soft.org",
      },
      {
        protocol: "https",
        hostname: "phero-web.nyc3.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

module.exports = nextConfig;
