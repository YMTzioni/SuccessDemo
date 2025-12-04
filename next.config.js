/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // אם האתר לא ב-root של GitHub Pages, הוסף basePath
  // basePath: '/success-college-site',
  // trailingSlash: true,
};

module.exports = nextConfig;
