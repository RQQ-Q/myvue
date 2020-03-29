<template>
	<div class="content">
	  <uc-nav/>
	  <h1 @click='upload'></h1>
	  <input type="file" id='file' style="display: none;">
	  <div class="login-box">
	    <p class="lsolid"></p>
	    <div class="login">
	      <a href="login_m.html">登录</a>
	      <span></span>
	      <a href="reg_m.html">注册</a>
	    </div>
	    <p class="rsolid"></p>
	  </div>
	  <ul>
	    <li class="lifirst">
	      <uc-input type="text" v-model.lazy="username"/>
	      <span><img src="../assets/img/usr.png" alt=""></span>
	    </li>
	    <li>
	      <uc-input :type="'password'" v-model.lazy="password"/>
	      <span><img src="../assets/img/pass.png" alt=""></span>
	    </li>
	  </ul>
	  <div class="footbox">
		<Button :text="'注 册'" bgColor=" #0cc440" @click='reg'/>
	    <a href="javascript:;" class="tishi">忘记密码？</a>
		<br>
		{{errorMess}}
	  </div>
	</div>
	
</template>

<script>
	import Button from '../components/Button.vue'
	import ucNav from '../components/uc-nav'
	import UcInput from '../components/uc-input.vue'
	export default{
		name:'Reg',
		props:{},
		data(){
			return{
				username:'',
				password:'',
				errorMess:''
			}
		},
		
		components:{
			Button,ucNav,UcInput
		},
		mounted(){},
		updated(){},
		methods:{
			upload(){
				let file=document.getElementById('file')
				file.click()  //原生  模拟点击
			},
			reg(){
				// 点击注册时,将图像也上传
				let formdata=new FormData()  //FormData非地址栏传递 可以传文件体    URLSerachParams  数据格式
				formdata.append('username',this.username)   //给FormData型添加数据
				formdata.append('password',this.password)
				let file=document.getElementById('file')
				formdata.append('icon',file.files[0])  //文件体
				
				axios({
					url:'/api/reg',
					method:'post',
					data:formdata
				}).then(
					res=>{
						if(res.data.err==0){
							this.$router.replace('/login')
						}else{
							// console.log(res.data.msg)当用户已存在这几个字，渲染到页面
							this.errorMess=res.data.msg
						}
					}
				)
			}
		}
	}
</script>

<style scoped>
	.content{max-width:6.4rem; margin:0 auto;}
	.content .fhbtn{ padding-top:0.27rem;}
	.content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
	.content h1{width:2.18rem;height:1.35rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
	.content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
	.login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
	.login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
	.content .login-box{ position:relative;}
	.content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
	.content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
	.content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
	.content ul li{height:0.95rem; position:relative;}
	.content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
	.content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
	
	.content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>
