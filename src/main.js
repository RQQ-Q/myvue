import Vue from 'vue'
import App from './layouts/App.vue'

//引入通用样式
import './assets/css/base.css'  //src一样不用变量存
//引入字体比例控制
import './assets/js/font.js'

//引入路由
import router from './pulgins/router'

//引入公共图片路径,服务端配置模块
import server from './config/server.js'

//把服务器的基础地址，作为实例属性，绑定到vue上
Vue.prototype.$baseUrl=server.baseUrl;

//引入axios
import './pulgins/axios.js'   //不在main里用就不用变量存

//引入全局动画样式库
import 'animate.css'


//引入store实例，管理vue实例
import store from './pulgins/vuex.js'
//引入提交类型模块，绑定到vue实例
import * as types from './store/types.js'
Vue.prototype.$types=types;
let vm=new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')

export default vm
