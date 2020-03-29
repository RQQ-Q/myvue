<template>
	<div class="Follow">
		<colF
			v-for="(item,index) of $store.state.follow"
			:key="item._id"
			:data='item'
			apiName='follow'
		/>
	</div>
</template>

<script>
	import colF from '../components/colF.vue'
	import {mapActions} from 'vuex'
	import {FOLLOW} from '../store/types.js'
	export default{
		name:'Follow',
		props:{},
		data(){
			return{
				follow:[]
			}
		},
		components:{
			colF
		},
		activated(){
			this[this.$types.FOLLOW]()
		},
		updated(){},
		methods:mapActions([FOLLOW])
	}
</script>

<style scoped> 
	 .Follow{
		margin-top:38px;
	 }
</style>
