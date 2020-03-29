<template>
	<div class="uc-input">
		<input :type="type" :value="value" @input="$emit('input',$event.target.value)" @keyup.13='$emit("login")'/>
	</div>
</template>

<script>
	export default{
		name:'uc-input',
		props:{
			value:{
				type:String,
				default:''
			},
			type:{
				type:String,
				default:'text'
			}
		},
		data(){
			return{
				
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
   .uc-input{border-bottom:1px solid #e5e7e8;height:0.95rem; position:relative;}
   .uc-input input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem; padding-left: 1.5rem;	}
</style>
