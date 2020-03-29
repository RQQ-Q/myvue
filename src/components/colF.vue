<template>
	<!-- 小丸子 -->
	<section  @click="getDetail">
		<a href="#" style="float: right;"><img :src="$baseUrl+data.icon" alt=""><span>{{data.title}}</span></a>
	
	</section>
</template>

<script>
	export default{
		name:'colF',
		props:{
			data:{
				type:Object,
				required:true,
				default:function(){  //props类型是个对象，默认值要是一个函数，最后需要返回对象
					//..
					return {}
				}
			},
			apiName:{
			  type:String,
			  default:null
			}
		},
		data(){
			return{
				
			}
		},
		components:{},
		mounted(){
		},
		updated(){},
		methods:{
			getDetail(){
				if(this.apiName){
					this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)  //编程式跳转
				}
			}
		}
	}
</script>

<style scoped>
	section a{
		width: 50%;
		margin-bottom: 5px;
		box-sizing: border-box;
	}
	section a:nth-child(odd){
		padding-right: 2.5px;
	}
	section a:nth-child(even){
		padding-left: 2.5px;
	}
	section a img{
		width: 180px;
		width: 180px;
		display: block;
		border: 1px solid #e2e7e3;
		box-sizing: border-box;
	}
	section a span{
		display: block;
		height: 29px;
		line-height: 29px;
		font-size: 12px;
		color: #313131;
		text-indent: 10px;
		border:1px solid #e2e7e3;
		border-top: none;
	}
	
</style>
