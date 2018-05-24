'use strict';

module.exports = appInfo => {
  const config = exports = {
    mongoose: {
      clients: {
        db1: {
          url: 'mongodb://127.0.0.1:27017/egg',
          options: {},
        }
      }
    },
    cluster: {
      listen: {
        port: 8090,
        hostname: '127.0.0.1',
      }
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527045950945_6099';

  // add your config here
  config.middleware = [];

  return config;
};