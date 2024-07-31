module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: '/api/admin',
        },
      ];
    },
  };
  