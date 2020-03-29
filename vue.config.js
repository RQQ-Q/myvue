// 项目环境文件的配置目录 底层是node
/* 数据交互

客户端代理 */
module.exports = {
  devServer:{  //开发服务器  客户端代理，在打包完之后是失效的
    //设置代理
    proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api': { //axios访问 /api ==  target + /api
        target: 'http://localhost:3002',
        changeOrigin: true, //创建虚拟服务器 
        ws: true, //websocket代理
      },
      '/douban': { // axios 访问 /douban == target + '/v2/movie/in_theaters?start=0&count=10'
        target: 'https://douban.uieee.com',
        changeOrigin: true,
		
        pathRewrite: { //路径替换
          '^/douban': '', // axios 访问/douban/v2 == target + /v2
        }
      }
    }
  }
}