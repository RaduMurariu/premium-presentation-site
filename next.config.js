/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 14
  output: 'standalone',
  trailingSlash: false,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
