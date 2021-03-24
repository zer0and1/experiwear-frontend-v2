
module.exports = {
  async redirects() {
    const isAuthenticated = typeof window === 'undefined' ? '' : localStorage.isAuthenticated;
    if (isAuthenticated !== 'true') {
      return [
        {
          source: '/',
          destination: '/auth/sign-in',
          permanent: true
        },
      ]
    } else {
      return []
    }
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
};
