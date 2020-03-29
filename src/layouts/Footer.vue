<template>
	<!-- footer -->
	<div class="footerD">
		<footer>
			<ul>
				<router-link
					to='/home'
					exact-active-class='active'
					tag='li'
				>
					<a href="#">
						<img src="../assets/img/f1.png" alt="">
						<span>首页</span>
					</a>
				</router-link>
				<router-link
				to='/column'
				exact-active-class='active'
				tag='li'
				>
					<a href="#"><img src="../assets/img/f2.png" alt=""><span>发现</span></a>
				</router-link>
				<router-link
				to='/'
				exact-active-class='active'
				tag='li'
				>
					<a href="#"></a>
				</router-link>
				<router-link
				to='/user'
				exact-active-class='active'
				tag='li'
				>
				<a href="#"><img src="../assets/img/f4.png" alt=""><span>我的</span></a>
				</router-link>
				<router-link
				to='/login'
				exact-active-class='active'
				tag='li'
				>
					<a href="#"><img src="../assets/img/f5.png" alt="" @click='logout'><span>退出</span></a>
				</router-link>
				<router-link
				to='/noPage'
				exact-active-class='active'
				tag='li'
				>
					<div class="photo"><img src="../assets/img/photo.png"></div>
				</router-link>
				
			</ul>
		</footer>
	</div>
</template>


<script>
	export default{
		name:'app',
		props:{},
		data(){
			return{
				
			}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{
			logout(){
				
				//删除本地token
				window.localStorage.removeItem('user')
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped>
	
	footer ul{
		width: 100%;
		height: 44px;
		border-top: 1px solid #cfd4d0;
		display: flex;
		align-items: center;
		position: relative;
		background: white;
		position:fixed; left:0; bottom:0;
	}
	footer ul li a{
		width: 75px;
		display: block;
		text-align: center;
	}
	footer ul li a img{
		width: 18px;
		height: 18px;
		margin:0 auto;
	}
	footer ul li a span{
		display: block;
		font-size: 12px;
		color: #9e9a95;
	}
	.photo{
		width: 50px;
		height: 50px;
		border: 1px solid #e0e2e1;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		margin-left: -25px;
		top: -9px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: white;
	}
	.photo img{
		width: 32px;
		height: 28px;
	}
</style>
