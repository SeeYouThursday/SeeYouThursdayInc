const { hostname } = require('os');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/admin',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'see-you-thursday-inc-blob.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};
