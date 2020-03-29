<template>
	<div class="str">
		<a href="#" class="oa" @click='getDetail' style="float: right;">
			<img :src="$baseUrl+data.icon" alt="">
			<span>{{data.title}}</span>
			<p >{{data.des}}</p>
		</a>
	</div>
</template>

<script>
	export default{
		name:'Cell',
		props:{
			data:{
				type:Object,
				required:true,
				default:function(){
					return{}
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
					/* console.log('跳转详情',this.apiName)
					console.log(this.data) */
					// '/detail/1211?apiName=home'
					this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)
				}
			}
		}
	}
</script>

<style scoped>
	/* .str{
		width:100%;
		height:10px;
		background-color: red;
	} */
	.str a{
		width: 50%;
		margin-bottom: 15px;
	}
	.str a img{
		width:180px;
		height:122px;
		display: block;
	}
	.str a img:first-child{
		margin-right: 5px;
	}
	.str a span {
		font-size:14px;
		display: block;
		color:#000000;
		text-indent:22px;
		margin-top:6px;
		line-height: 16px;
	}
	.str a p{
		font-size:12px;
		color:#a7a7a7;
		text-indent:22px;
		margin-top:6px;
 	}
</style>
