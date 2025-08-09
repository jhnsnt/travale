const nextConfig = {
  output: 'export',
  basePath: '/travale',
  assetPrefix: '/travale/',
  trailingSlash: true, // this can help with routing on GitHub Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;