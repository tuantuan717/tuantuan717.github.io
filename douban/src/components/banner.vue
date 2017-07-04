<template>
	<div class="swiper-container" :class="swipeid">
		<div class="swiper-wrapper">
			<slot name="swiper-con"></slot>
		</div>
		<div :class='{"swiper-pagination":pagination}' :style='{"text-align":paginationDirection}'></div>
	</div>
</template>

<script>
import '../assets/libs/swiper/js/swiper.js';
export default{
	props:{
		swipeid:{
			type:String,
			default:'#000'
		},
		pagination:{
			type:Boolean,
			default:true
		},
		paginationDirection:{
			type:String,
			default:'center'
		},
		effect:{
			type:String,
			default:"slide"
		},
		loop:{
			type:Boolean,
			default:true
		},
		direction:{
			type:String,
			default:'horizontal'
		},
		autoplay:{
			type:Number,
			default:3000
		},
		paginationType:{
			type:String,
			default:'bullets'
		}
	
	},
	mounted:function(){
		var That=this;
		new Swiper('.'+That.swipeid,{
			loop:That.loop,
			pagination:'.swiper-pagination',
			paginationType:That.paginationType,
			autoplay:That.autoplay,
			direction:That.direction,
			effect:That.effect
			
		})
	}

}
</script>

<style>
@import '../assets/libs/swiper/css/swiper.css';
.swiper-container img{width:375px;height:120px;margin-top:48px;}
.swiper-pagination-bullet-active{background:#fff}
</style>