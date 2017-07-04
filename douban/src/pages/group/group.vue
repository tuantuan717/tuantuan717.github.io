<template>
	<div>
		<MyHeader col='#666'>
			<span class='title'>小组</span>
			<img src="../../assets/images/ic_chat_green.png" class="bookimg1"/>
			<img src='../../assets/images/ic_group_search.png' class="bookimg2"/>
		</MyHeader>
		
		<div class="play">
			<h4>418975个小组等你来玩</h4>
			<p>立即选择加入吧</p>
			<span>根据你的兴趣推荐</span>
		</div>
		<div class="group">	
			<img src="../../assets/images/ic_rec_group_banner_6.png" />
			<div class="view">
				<div class="view1">影视</div>
			</div>
			<div class="view2" v-for="(item,i) in arr">
				<img src="../../assets/images/ic_user_info_gender.png" class="viewimg" />
				<div class="view_mid">
					<h5>{{item.viewtitle}}</h5>
					<p>{{item.viewcont}}</p>
				</div>
				<span>{{item.peoplenum}}人</span>
				<img src="../../assets/images/ic_group_check_anonymous.png" class="viewimg2" @click="show(i)" v-show='item.bool'/>
				<img src="../../assets/images/ic_check_circle_pressed.png" class="viewimg22" @click="noshow(i)" v-show='!item.bool'/>

			</div>
		</div>
		
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
			bool:true,
			arr:[
				{bool:true,peoplenum:0,viewtitle:"日剧fans",viewcont:"请自由讨论你所热爱的与日剧相关的话题。以上"},
				{bool:true,peoplenum:0,viewtitle:"马特达蒙",viewcont:"骄阳似火的问题少年"},
				{bool:true,peoplenum:0,viewtitle:"美剧fans",viewcont:"美剧聚集！"},
				{bool:true,peoplenum:0,viewtitle:"日剧",viewcont:"请自由讨论你所热爱的与日剧相关的话题"},
			
			],
			
			
		}
		
	},
	methods:{
		show:function(i){
			this.arr[i].bool=!this.arr[i].bool;
			this.arr[i].peoplenum++
		},
		noshow:function(i){
			this.arr[i].bool=!this.arr[i].bool;
			this.arr[i].peoplenum--
		},
	}
}
</script>

<style>
.bookimg1{position:absolute;top:14px;left:310px;}
.bookimg2{position:absolute;top:14px;left:253px;}

.play{height:156px;width:100%;padding-top:70px;background:url(../../assets/images/ic_group_banner.png);text-align:left}
.play h4,p{text-align:center}
.play h4,p{font-size:14px;font-weight:normal}
.play h4{margin-top:50px;width:100%}
.play p{color:#b3b2c0}
.play span{font-size:12px;color:#666;margin-top:50px;display:block;margin-left:10px;}
.group{padding:0 10px;text-align:left}
.group img {width:100%;height:60px;margin-top:23px;display:block}
.view{width:100%;height:34px;border-bottom:1px solid #eee;position:relative}
.view1{font-size:14px;color:#000;width:30px;padding:0 30px;position:absolute;top:22px;left:38%;background:#fff}
.view2{height:50px;margin-top:10px;margin-top:46px;}
.view2 .viewimg {width:50px;height:50px;float:left}
.view2 .view_mid{float:left;width:174px;padding-top:18px;padding-left:15px;}
.view_mid p{text-align:left;font-size:12px;}
.view2 span{float:left;height:50px;padding-top:23px;font-size:8px;color:#666;margin:23px 0 0 22px;}
.view2 .viewimg2{width:25px;height:25px;float:left;margin:40px 0 0 13px}
.view2 .viewimg22{width:25px;height:25px;float:left;margin:40px 0 0 13px}
</style>
