<template>
	<div>
		<MyHeader col='#666'>
			<span class='title'>广播</span>
			<img src='../../assets/images/ic_status_search_user.png' class="groupshare"/>
			<img src='../../assets/images/ic_create_group_chat_blue.png' class="groupblue"/>
		</MyHeader>
		<div class="groupcontent">
			<div class='gCont'>
				<img src="../../assets/images/ic_status_anonymous_header.png"  class="status"/>
				<h4>发现有趣的人</h4>
				<p>关注他们，发现更大的世界</p>
			</div>
			<div class='gCont1' v-show="val.showing" v-for="(val,i) in arr1">
				<div class="person">
					<img src="../../assets/images/ic_user_info_gender.png"/>
				</div>
				<div class="cont1" >
					<div class="name1">
						<div class="name_left">
							<h3>{{val.name}}</h3>
							<p>{{val.guannum}}人关注</p>
						</div>
						<div class="guan" v-show="!val.bol"  @click="gz(i)"><span>关注</span></div>
						<div class="yguanzhu"  v-show="val.bol" @click="ygz(i)"><span>已关注</span></div>
					</div>
					<h5>{{val.title}}</h5>
					<div class="words">
						{{val.cont}}
					</div>
					<div class="comment">
						<div class='zan' @click='zan(i)'><img src="../../assets/images/ic_fill_voted_large.png"/><span>{{val.votenum}}</span></div>
						<div class='com1' @click='comment(i)'><img src="../../assets/images/ic_forum_topic_comment.png"/><span>{{val.comnum}}</span></div>
					</div>
					<div class="cha" @click="del(i)">×</div>
				</div>
			</div>
			
		</div>
		
		<div class="groupChange"></div>
		
	</div>
</template>

<script>
import MyHeader from '../../components/header'

export default{
	components:{
		MyHeader
	},
	
	data:function(){
		return{
		
		showing:true,
		bol:true,
		votenum:0,
		comnum:0,
		guannum:0,
		arr1:[
			{
				name:"胡桑",
				guannum:0,
				showing:true,
				bol:false,
				votenum:0,
				comnum:0,
				title:'爱指向处于虚弱的他人',
				cont:'遭遇到的对象与你之上。（女性）爱人的临显，与其温柔的支配方式（regime）合而为一。温柔的样式，在于一种极端的脆弱，在于一种可伤害性。温柔显示		在存在与不存在的交接处，就像一种柔和的热烈：在这种柔和的热烈中，村子消融的光辉里，就像《牧神的午后》中，仙女那“轻盈的肉色”“在睡意浓浓的空气中飞舞”，消极个体，摆脱自己。'
			
			},
			{
				name:"tuantuan",
				guannum:0,
				showing:true,
				bol:false,
				votenum:0,
				comnum:0,
				title:'爱指向处于虚弱的他人',
				cont:'遭遇到的对象与你之上。（女性）爱人的临显，与其温柔的支配方式（regime）合而为一。温柔的样式，在于一种极端的脆弱，在于一种可伤害性。温柔显示		在存在与不存在的交接处，就像一种柔和的热烈：在这种柔和的热烈中，村子消融的光辉里，就像《牧神的午后》中，仙女那“轻盈的肉色”“在睡意浓浓的空气中飞舞”，消极个体，摆脱自己。'
			
			},
		]
				
		}
		
	},
	methods:{
		del:function(i){
			this.arr1[i].showing=false
		},
		gz:function(i){
			this.arr1[i].bol=!this.arr1[i].bol;
			this.arr1[i].guannum++
		},
		ygz:function(i){
			this.arr1[i].bol=!this.arr1[i].bol;
			this.arr1[i].guannum--
		},
		zan:function(i){
			this.arr1[i].votenum++
		},
		comment:function(i){
			this.arr1[i].comnum++
		}

	}
}
</script>

<style>
.groupshare{position:absolute;left:250px;top:12px;}
.groupblue{position:absolute;left:320px;top:12px;}
.groupcontent{text-align:left;background:#f8f8f8;height:100%;border-top:1px solid #dbdbdb;border-bottom:1px solid #dbdbdb;margin-top:47px;position:relative}
.gCont{padding:20px 0 0 50px;height:80px;}
.status{width:92px;float:left;margin-right:20px;}
.gCont h4{font-size:14px;line-height:25px;margin-top:20px;width:196px;}
.gCont p{font-size:11px;text-align:left;margin-top:5px;}
.gCont1{width:350px;height:294px;background:#fff;border-radius:7px;margin-top:15px;margin-left:12px;box-shadow:0 0 10px 10px #eee}
.gCont1{position:relative;padding-top:19px;}
.cha{position:absolute;top:5px;right:10px;color:#e3e3e3}
.person{width:50px;height:100%;padding:0 15px;float:left;}
.person img{width:50px;height:50px;}
.cont1{float:left;width:250px;}
.name1{width:250px;height:54px;}
.name1 h3{line-height:27px;height:27px;font-size:16px;font-weight:normal}
.name1 p{line-height:27px;height:27px;font-size:10px;color:#a8a8a8;text-align:left}
.name_left{float:left;width:172px;}
.guan{float:left;font-size:12px;width:75px;height:22px;background:#42c055;text-align:center;padding-top:5px;border-radius:7px;}
.yguanzhu{float:left;font-size:12px;width:75px;height:22px;background:#eee;text-align:center;padding-top:5px;border-radius:7px;}
.cont1 h5{font-size:15px;height:34px;height:34px;}
.cont1 .words{font-size:10px;line-height:18px;width:222px;padding:17px 12px 0px 14px;background:#161d2f;height:140px;color:#fff}
.comment{height:16px;font-size:6px;color:#666;margin:15px 0 0 10px;}
.zan,.com{float:left}
.zan{margin-right:10px;}
.zan span{margin-right:3px;display:inline-block;font-size:12px;}
.com1 span{margin-right:3px;display:inline-block;font-size:12px;padding-top:5px;}
.zan img{width:22px;margin-right:5px;}
.com1 img {width:15px;margin-top:5px;margin-right:5px;}
.gCont2 .words{background:#eee;color:#000;padding-top:5px;}
</style>