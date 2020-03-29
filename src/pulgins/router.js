import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Column from '../pages/Column.vue'
import Follow from '../pages/Follow.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'
import NoPage from '../pages/NoPage.vue'
Vue.use(VueRouter)
let routes=[
	{path:'/home',component:Home},
	{path:'/Follow',component:Follow},
	{path:'/Column',component:Column},
	{path:'/User',component:User},
	{path:'/Login',component:Login},
	{path:'/Reg',component:Reg},
	{path:'/Detail/:_id',component:Detail,name:'detail'},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
]
let router=new VueRouter({
	routes
})
export default router