const path = require('path'); //引入path模块

function resolve(dir) {
  return path.join(__dirname, dir);
}

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  publicPath:'./',
  outputDir:'dist',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#13c2c2',
          // "primary-color": "#9867f7",
          'layout-color': '#9867f7',
          // "layout-color": "#ee88aa"
        },
        javascriptEnabled: true,
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./packages'),
      },
    },
    devtool: isDev ? 'source-map' : false,
  },
};
