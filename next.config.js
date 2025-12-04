/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // אם האתר לא ב-root של GitHub Pages, בטל את ההערה והחלף בשם ה-repository שלך
  // לדוגמה: אם ה-URL הוא username.github.io/repository-name, אז:
  // basePath: '/repository-name',
  // trailingSlash: true,
  // assetPrefix: '/repository-name',
};

module.exports = nextConfig;
