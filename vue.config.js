const apiMocker = require('webpack-api-mocker');
const path = require('path');
const mockFileList = [
  path.resolve('./mock/api.js'),
  path.resolve('./mock/chart.js'),
  path.resolve('./mock/geographic.js'),
  path.resolve('./mock/notices.js'),
  path.resolve('./mock/route.js'),
  //path.resolve('./mock/rule.js'),
  path.resolve('./mock/user.js'),
]

module.exports = {
  devServer: {
    port: 8009,
    before(app) {
      apiMocker(app, mockFileList);
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#4fc08d',
          'link-color': '#4fc08d',
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack:{
    resolve: {
      extensions: ['*', '.js', '.vue'],
      alias:{
          'vue$': 'vue/dist/vue.common.js',
          '@': path.resolve('src')
      }
    }
  }
}