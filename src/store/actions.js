import axios from '../pulgins/axios.js'
import {get} from './service.js'
import * as types from './types.js'   //整体输入，存成了types对象
export default{
	[types.HOME]({commit,state},payload){
		get({apiname:'home',params:{_limit:10,_page:1}}).then(
			result=>commit('HOME',result)
		)
	},
	[types.BANNER]({commit,state},payload){
	  get({apiname:'banner'}).then(
	    result=>commit('BANNER',result)
	  )
	},
	[types.FOLLOW]({commit,state},payload){
		get({apiname:'follow',params:{_page:1,_limit:8}}).then(
			result=>commit('FOLLOW',result)
		)
	},
	[types.COLUMN]({commit,state},payload){
		get({apiname:'column',params:{_page:1,_limit:8}}).then(
			result=>commit('COLUMN',result)
		)
	},
	[types.DETAIL]({commit,state},{apiname,_id}){
	 	get({apiname,_id}).then(
	 		result=>commit('DETAIL',result)
	 	)
	 },
	
}
	
