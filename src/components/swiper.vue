<template>
	<!--banner-->
	<div class="banner">
	  <ul class="clearfix">
	    <router-link
			v-for="item of data"
			:key='item._id'
			:to="{name:'detail',params:{_id:item._id},query:{apiName:apiName}}"
			tag='li'
		><img :src="$baseUrl+item.icon" alt=""/>
	      <div class="text-box">
	        <h2>{{item.title}}</h2>
	        <p>{{item.sun_title}}</p>
	      </div>
	    </router-link>
	    
	  </ul>
	
	</div>
</template>

<script>
	import Swipe from '../assets/js/swipe.js'
	import $ from 'jquery'  // npm i jquery@1.7.2 -S
	export default{
		name:'swiper',
		props:['data','apiName'],
		
		data(){
			return{
				
			}
		},
		components:{},
		mounted(){
			console.log(this.data)
		},
		updated(){
			// //js 控制 轮播图，计算横向长度=item*num
			//在mounted中的话，第一次获取么有宽高
			new Swipe($('.banner')[0],{
			  auto:2000,
			  continuous:true,
			  stopPropation:true,
			  callback:function (index,element){
			    $('.banner ol li').removeClass('active');
			    $('.banner ol li').eq(index).addClass('active');
			  }
			})
		},
		methods:{}
	}
</script>

<style scoped>
	 .banner{ position: relative;overflow: hidden; z-index: 1}
	  .banner .clearfix li{width:6.4rem;float:left;position: relative;}
	  .banner .clearfix li img{width:100%; height:220px;display:block;}
	  .banner .clearfix li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
	  .text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
	  .text-box p{ line-height:100%;}
	  
	  .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
	  .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
	  .banner ol li.active{ background:#fff;}
	  
</style>
