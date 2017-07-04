<template>
	<div>
		<ul>
			<li :class="currentPage==1?'disabled':''"><a href="#" @click='turnPage(1)'>首页</a></li>
			<li :class="currentPage==1?'disabled':''"><a href="#" @click='turnPage(currentPage-1)'>上一页</a></li>
			<li v-if='currentPage-3>0' @click='turnPage(currentPage-3)'><a href="#" v-text='currentPage-3'></a></li>
			<li v-if='currentPage-2>0' @click='turnPage(currentPage-2)'><a href="#" v-text='currentPage-2'></a></li>
			<li v-if='currentPage-1>0' @click='turnPage(currentPage-1)'><a href="#" v-text='currentPage-1'></a></li>
			<li class='ac'><a href="#" v-text="currentPage"></a></li>
			<li v-if='currentPage+1<totalPage' @click='turnPage(currentPag+1)'><a href="#" v-text='currentPage+1'></a></li>
			<li v-if='currentPage+2<totalPage' @click='turnPage(currentPage+2)'><a href="#" v-text='currentPage+2'></a></li>
			<li v-if='currentPage+3<totalPage' @click='turnPage(currentPage+3)'><a href="#" v-text='currentPage+3'></a></li>
			<li :class="currentPage==totalPage?'disabled':''"><a href="#" @click='turnPage(currentPage+1)'>下一页</a></li>
			<li :class="currentPage==totalPage?'disabled':''"><a href="#" @click='turnPage(totalPage)'>尾页</a></li>
		</ul>
		<div>
			<small>当前第<span>{{currentPage}}</span>页,共有<span>{{totalPage}}</span>页</small>
			<input type='number' v-model='goToPage' :class='{err:bol}'/><button @click='turnPage(goToPage)'>Go</button>
		</div>
	</div>
</template>

<script>
export default{
	props:['change'],
	data:function(){
		return{
			currentPage:7,
			totalPage:100,
			goToPage:'',
			bol:false
			 
		}
	},
	methods:{
		turnPage:function(num){
			var myNum=parseInt(num);
			
			if(myNum>100 || myNum<1 || !myNum){
				this.bol=true;
				this.goToPage='';
				return;	
			}else{
				this.bol=true
			}
			
			this.currentPage=myNum;
			this.goToPage='';
			this.change(num)
		}
	}
}
</script>

<style>
	ul{display:inline-block;margin-top:200px;}
	li{list-style-type:none;float:left;padding:10px 20px;height:30px;border:1px solid #eee}
	a{text-decoration:none}
	.ac{background:pink}
	.disabled a{cursor:not-allowed;color:#666}
	.err{border:1px solid red}
</style>