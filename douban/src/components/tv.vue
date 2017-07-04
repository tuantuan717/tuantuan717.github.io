<template>
	<div>
		<div class="tv">
			<div class="hotfilm">
				<div class="hotfilm_title">
					<h3>电视</h3>
					<div class="more">更多<span>></span></div>
				</div>
				<div class="swiper-container sasasq">
						<ul class="film_cont swiper-wrapper">
							<li class="filmcont1 filmcont2  swiper-slide aajh" data-history="2">
								<img src="../assets/images/services/2.jpg" class="films1"/>
								<h4>木乃伊</h4>
								<div class="star">
									<img src="../assets/images/rating_star_xsmall_on.png"/>
									<img src="../assets/images/rating_star_xsmall_on.png"/>
									<img src="../assets/images/rating_star_xsmall_on.png"/>
									<img src="../assets/images/rating_star_xsmall_half.png"/>
									<img src="../assets/images/rating_star_xsmall_off.png"/>
									<span>4.8</span>
								</div>
							</li>
							<li class="filmcont1 filmcont3  swiper-slide aajh" data-history="3">
								<img src="../assets/images/services/3.jpg" class="films1"/>
								<h4>加勒比海盗</h4>
								<div class="star">
									<img src="../assets/images/rating_star_xsmall_on.png"/>
									<img src="../assets/images/rating_star_xsmall_on.png"/>
									<img src="../assets/images/rating_star_xsmall_on.png"/>
									<img src="../assets/images/rating_star_xsmall_on.png"/>
									<img src="../assets/images/rating_star_xsmall_half.png"/>
									<span>7.3</span>
								</div>
							</li>
						</ul>
					</div>
			</div>
			<img src="../assets/images/ic_rec_group_banner_1.png" class="bg"/>
			<div class="pop">
				演技太尴尬？欧阳娜娜自嘲是“靠实力失败”第一人
			</div>
		</div>
	</div>
</template>
<script>
import '../assets/libs/swiper/js/swiper.js'
export default{
	mounted: function(){			
			new Swiper('.swiper-container ',{
				//循环	
				 pagination: '.swiper-pagination',
               slidesPerView: 3,
              paginationClickable: true,
             spaceBetween: 10,
             freeMode: true,
              loop:true,
			});	
			new Swiper('.sasasq ',{
				//循环	
				 pagination: '.swiper-pagination',
               slidesPerView: 3,
              paginationClickable: true,
             spaceBetween: 10,
             freeMode: true	,
              loop:true,
			});
			
	}		
	
}
	
</script>


<style>
@import "../assets/libs/swiper/css/swiper.css";

.tv{background:#eee;width:95%;text-align:left;margin-left:14px;}
.tv .hotfilm{height:275px;width:340px;background:#fff;padding-left:15px;margin:8px 0 0 -13px}
.tv .hotfilm_title{height:66px;line-height:66px;padding-right:20px}
.tv .hotfilm_title h3{float:left;width:66px;height:66px;font-size:16px;color:#454545;
font-weight:normal} 
.tv .more{float:right;width:37px;font-size:14px;color:#429355;margin-right:-14px;}
.tv .filmcont1 .films1{width:100px;height:140px;}
.tv .filmcont1{float:left;margin-right:12px;margin-top:-28px;}
.tv .filmcont1 h4{font-size:13px;color:#000;line-height:13px;}
.tv .star{margin-top:-42px;}
.tv .star img {width:8px;height:12px;}
.tv .bg{width:100%;height:108px;margin-top:10px;}
.tv .pop{height:84px;background:#fff;padding:15px 26px 0;font-size:16px;color:#222}
</style>
