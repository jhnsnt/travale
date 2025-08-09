/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export mode
  basePath: '/travale', // Folder name on GitHub Pages
  assetPrefix: '/travale/', // Makes JS/CSS load from correct path
  trailingSlash: true, // Ensures all routes end with /
  images: { unoptimized: true }, // Required for static export
};

module.exports = nextConfig;