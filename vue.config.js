//文件引用别名头路径
module.exports = {
  publicPath: "./", //打包后index空白问题
  configureWebpack: {
    resolve: {
      alias: {
        'common' : '@/common',
        'components': '@/components',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        'store':'@/store'
      }
    }
  }
}