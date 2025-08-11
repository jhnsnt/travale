/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/travale', // required for GitHub Pages subfolder
  assetPrefix: '/travale/', // ensures assets load from correct folder
  images: {
    unoptimized: true, // avoids next/image optimization issues on static hosting
  },
};

module.exports = nextConfig;
