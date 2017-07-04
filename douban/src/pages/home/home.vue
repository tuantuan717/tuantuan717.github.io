<template>
	<div>
		<MyHeader bgcol="#42c055">
			<input type="text" value="影视 图书 唱片 小组等"/>
			<img src='../../assets/images/ic_search_gray.png' class="search"/>
			<img src='../../assets/images/ic_scan_gray.png' class='scan'/>
			<img src='../../assets/images/ic_chat_white.png' class='chat'/>
		</MyHeader>
		
		<Mybanner swipeid="swipe01" :autoplay=1000>
			<div class="swiper-slide" slot="swiper-con"><img src='../../assets/images/banner/01.jpg'/></div>
			<div class="swiper-slide" slot="swiper-con"><img src='../../assets/images/banner/02.jpg'/></div>
			<div class="swiper-slide" slot="swiper-con"><img src='../../assets/images/banner/03.jpg'/></div>
		</Mybanner>
	
		<div class='hot'>
			<h3>热点</h3>
			<Media v-for='item in arr'>
				<h4 slot='title'>{{item.title}}</h4>
				<p slot='cont'>{{item.target.desc}}</p>
				<span slot='author'>{{item.target.author.name}}</span>
				<img slot='bac' :src="item.target.cover_url"/>
			</Media>
		</div>
		
	</div>
</template>

<script>
import MyHeader from '../../components/header';
import Mybanner from '../../components/banner';
import Media from '../../components/media';

export default{
	components:{
		MyHeader,
		Mybanner,
		Media
	},
	mounted:function(){
		this.search()
	},
	methods:{
		search:function(){
				this.axios.get('/api/homeData').then((response) => {
		          	console.log(response.data.data.recommend_feeds[0]);
					this.arr=response.data.data.recommend_feeds
				})		
		}
	},
	data:function(){
		return{
			arr:[]
		}
	}
}
</script>

<style>

input{width:70%;height:27px;border-radius:7px;border:none;padding-left:35px;margin-left:30px;color:#cdcdcd}
.search{position:relative;top:6px;left:-293px;width:18px;}
.scan{position:relative;top:-43px;right:-138px;width:20px;}
.chat{position:relative;top:-43px;right:-159px;width:25px;}
.hot{text-align:left;margin-bottom:20px;} 
.hot h3{font-weight:normal;width:350px;padding-left:18px;height:20px;line-height:20px;border-left:5px solid #fd8446;
 margin:18px 0 20px 0;font-size:22px;color:#fd8446}

</style>