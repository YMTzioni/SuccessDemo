/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/SuccessDemo' : ''
const assetPrefix = isProd ? '/SuccessDemo' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  trailingSlash: true,
  assetPrefix: assetPrefix,
};

module.exports = nextConfig;
