const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
    basePath: isProd ? '/travale' : '',
    assetPrefix: isProd ? '/travale/' : '',
    trailingSlash: true,
    images: { unoptimized: true },
};