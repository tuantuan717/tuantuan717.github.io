<template>
	<div class="audio">
		<MyHeader col="#666">
			<span class='title'>书影音</span>
			<img src="../../assets/images/ic_chat_green.png" class="bookimg1"/>
			<img src='../../assets/images/ic_group_search.png' class="bookimg2"/>
		</MyHeader>
		<div class="audioList">
			<span @click='change(0)' :class="{ac:sel==0}"><router-link to='/audio/film'>电影</router-link></span>
			<span @click='change(1)' :class="{ac:sel==1}"><router-link to='/audio/book'>读书</router-link></span>
			<span @click='change(2)' :class="{ac:sel==2}"><router-link to='/audio/tv'>电视</router-link></span>
			<span @click='change(3)' :class="{ac:sel==3}"><router-link to='/audio/city'>同城</router-link></span>
			<span @click='change(4)' :class="{ac:sel==4}"><router-link to='/audio/music'>音乐</router-link></span>
			<span @click='change(5)' :class="{ac:sel==5}"><router-view></router-view></span>
		</div>
	</div>
	
</template>

<script>
import MyHeader from '../../components/header'

export default{
	components:{
		MyHeader
	},
	created:function(){
		this.$router.push('/audio/film')
	},
	data:function(){
		return{
			sel:0
		}
	},
	methods:{
		change:function(i){
			console.log(i)
			this.sel=i
		}
	}

}
</script>

<style>
.audio .audioList a{text-decoration:none;color:#666}
.audio .audioList{width:95%;height:30px;border-bottom:1px solid #ddd;font-size:16px;padding-bottom:7px;text-align:center;margin-top:64px;}
.audio .audioList span{width:20%;line-height:30px;color:#ddd}
.audio .audioList span a{padding:0px 10px 10px;}
.audio .bookimg1{position:absolute;top:14px;left:310px;}
.audio .bookimg2{position:absolute;top:14px;left:253px;}
.audio .ac a{color:green;border-bottom: 3px solid green;}

</style>