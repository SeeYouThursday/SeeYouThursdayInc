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
        hostname: 'ta0g4axiwsztasg1.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};
