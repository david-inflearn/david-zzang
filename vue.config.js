/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
==========================================================================================*/


module.exports = {
  lintOnSave: false,
  publicPath: '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  pwa: {
    name: "david",
    themeColor: "#66615B",
    msTileColor: "#66615B",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#66615B",
    workboxOptions: {
      skipWaiting: true
    }
  },
}

