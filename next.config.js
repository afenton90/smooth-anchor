module.exports = {
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/smooth-anchor',
  webpack: config => {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift('./polyfill.js');
      }
      return entries;
    };

    return config;
  }
};
