/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.prismic.io"], // Enables NextJS to serve images from external domains.
  },
}

module.exports = nextConfig
