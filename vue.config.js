module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://119.29.227.64:8090",
        changeOrigin: true,
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '年度账单查询'
      return args
    })
  }
}