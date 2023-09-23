const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置反向代理
  devServer: {
    proxy: {
      // 以这为开头的
      '/ytb': {
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        // 表示将这个开头路径重写
        pathRewrite: {
          '^/ytb': ''
        }
      }
    }
  }
})
