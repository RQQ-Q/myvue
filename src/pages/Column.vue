<template>
	<div class="Column">
		<colF
			v-for="item of  $store.state.column"
			:key="item._id"
			:data='item'
			apiName='column'
		/>
		
	</div>
</template>

<script>
	import colF from '../components/colF.vue'
	export default{
		name:'Column',
		props:{},
		data(){
			return{
				column:[]
			}
		},
		
		components:{
			colF
		},
		activated(){
			this.$store.dispatch(this.$types.COLUMN)
		},
		
		
		updated(){},
		methods:{}
	}
</script>

<style scoped>
	 .Column{
		 margin-top:38px;
	 }
</style>
