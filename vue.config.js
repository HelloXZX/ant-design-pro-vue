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
        javascriptEnabled: true
      }
    }
  }
}