/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["www.g2.com"], // Enables NextJS to serve images from external domains.
  },
}

module.exports = nextConfig
