/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // replaces next export
  basePath: '/travale', // your repo name
  assetPrefix: '/travale/', // prefix for assets so styles/images load
  images: {
    unoptimized: true, // needed for static export
  },
};

module.exports = nextConfig;