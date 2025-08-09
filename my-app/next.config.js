/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // enable static export
  basePath: '/travale',     // repo name, leading slash
  assetPrefix: '/travale/', // repo name, trailing slash here!
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;