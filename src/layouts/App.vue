<template>
  <div id="app" >
	<loading v-if="$store.state.bLoading"/>
	
   <Header v-if="$store.state.bNav"/>
   
   <!-- 展示区 -->
   <!-- 动画 -->
  <transition
  	enter-active-class="animated bounceInLeft"
  	leave-active-class="fadeOut bounceOutRight"
  	mode='out-in'
  >
  	<keep-alive>
  		<router-view ></router-view>
  	</keep-alive>
  </transition>
   <Footer v-show="$store.state.bFoot"/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

import loading from '../components/loading.vue';
export default {
  name: 'App',
  components: {
	  Header,Footer,loading
  },
  watch:{  //路由的监听或者属性的检测：让根实例main来集中式管理bNav，bFoot，bLoading
  			//在app.vue中，先引入v-if，后写上监听条件
  	  $route:{
  	  		  handler(nextValue,preValue){
  	  			 // console.log('路由变化了',nextValue) 
  	  			 let path=nextValue.path
  	  			 if(/home|follow|column/.test(path)){
  	  				 this.$store.commit('UPDATE_NAV',true)
  	  				 this.$store.commit('UPDATE_FOOT',true)
  	  			 }
  	  			 if(/detail|login|reg/.test(path)){
  	  				 this.$store.commit('UPDATE_NAV',false)
  	  				 this.$store.commit('UPDATE_FOOT',false)
  	  			 }
  	  			 if(path.includes('/user')){
  	  				 this.$store.commit('UPDATE_NAV',false)
  	  				 this.$store.commit('UPDATE_FOOT',true)
  	  			 }
  	  		  },
  	  		  immediate:true
  	  }
  }
}
</script>

<style>

</style>
