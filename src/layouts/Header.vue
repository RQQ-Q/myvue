<template>
	<div class="navD">
<!-- header -->
		<!-- <header> -->
			<!-- <ul class='ul1'>
				<router-link 
					to='/column'
					exact-active-class="active"
					tag='li'
				>
					<a href="#" class="frista">热点</a>
				</router-link>
				<router-link
					to='/follow'
					exact-active-class="active"
					tag='li'
				>
					<a href="#" class="lasta">关注</a>
				</router-link>
				
			</ul> -->
		<!-- </header> -->
	<!-- nav -->
		<!-- <nav> -->
			<ul class='ul2'>
				<router-link
					to='/home'
					exact-active-class="active"
					tag='li'
				>
					<a href="#" class="focus" >首页</a>
				</router-link>
				<router-link
					to='/follow'
					exact-active-class="active"
					tag='li'
				>
					<a href="#">关注</a>
				</router-link>
				<router-link
					to='/column'
					exact-active-class="active"
					tag='li'
				>
					<a href="#">栏目</a>
				</router-link>
			</ul> 
	</div>
</template>

<script>
</script>

<style scoped>
.navD{
	width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;
}
/* .ul1{
	width: 100%;
	height: 44px;
	background: #0cc440;
	display: flex;
	justify-content: center;
	align-items: center;
}

.ul1 li a{
	width: 61px;
	height: 24px;
	background: #60db81;
	color: #fffafa;
	font-size: 12px;
	text-align: center;
	line-height: 24px;
	display: block;
}
.ul1 li .frista{
	border-top-left-radius: 12px;
	border-bottom-left-radius: 12px;
}
.ul1 li .lasta{
	border-top-right-radius: 12px;
	border-bottom-right-radius: 12px;
	background: #3ed065;
	color: #8ff0ab;
} */
/*nav*/
 .ul2{
	width: 100%;
	height: 35px;
	display: flex;
}
.ul2  li a{
	width:120px;
	display: block;
}
.ul2  li.active a{
	width:120px;
	display: block;
	border-bottom:2px solid #60db81;
	color:#60db81;
}
.ul2  li a{
	text-align: center;
	line-height: 35px;
	color: #626262;
	font-size: 14px;
}
.ul2  .focus{
	color: #19af55;
} 
</style>
