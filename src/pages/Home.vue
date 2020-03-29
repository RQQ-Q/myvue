<template>
	<div class="Home">
		<swiper
			:data="$store.state.banner"
			apiName='banner'
		/>
		<HeaderT/>
		<Cell
			v-for="(item,index) of  $store.state.home"
			:key="item._id"
			:data='item'
			apiName="home"
		/>	
		
	</div>
</template>
<script>
	import swiper from '../components/swiper.vue'
	import HeaderT from '../layouts/HeaderT.vue'
	import Cell from '../components/Cell.vue'
	export default{
		name:'Home',
		props:{},
		data(){
			return{
				list:[],
				home:[]
			}
		},
		components:{
			swiper,HeaderT,Cell
		},
		activated(){
			this.$store.dispatch('HOME')
			this.$store.dispatch('BANNER')
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	.Home{
		margin-top:40px;
	}
</style>
