<template>
<div class="mypage">
	<div class="mypage1">
		<div class="mypage_left">
			<img src="../assets/images/ic_user_info_location.png" class="headImg"/>
		</div>
		<div class="mypage_right">
			<div class="right_top">
				<div class="top1">
					<span class="page_name">团团</span>
					<img src="../assets/images/ic_mine_female.png" class="sexImg"/><br/>
				</div>
				<div class="top2">
					<span class="mypage_id">ID:156104476</span>
					<span class="person_page">个人主页 ></span>
				</div>
			</div>
			<div class="right_bot">
				<span>关注</span>
				<span class="guan_num">0</span>
				<span>被关注</span>
				<span>0</span>
			</div>
		</div>
	</div>
	<div class="mycaution">
		<div class="caution_top">
			<img src="../assets/images/ic_mine_notification.png" class="cauImg"/>
			<span>提醒</span>
		</div>
		<div class="caution_bot">
			暂无新提醒
		</div>
	</div>
	<div class="page_mid"></div>
</div>
</template>

<style>
.mypage{text-align:left}
.mypage1{height:100px;background:orange;text-align:left;padding:30px 0 0 20px;color:#fff}
.mypage1 .mypage_left{width:70px;padding-right:15px;height:100%;float:left}
.mypage1 .headImg{width:70px;}
.right_top{border-bottom:1px solid #fff}
.mypage_right{float:left;width:75%}
.right_top .page_name{font-size:20px;}
.right_top .sexImg{width:14px;}
.right_top .mypage_id{font-size:14px;}
.right_top .person_page{float:right;font-size:14px;}
.right_top .top2{padding-bottom:12px;padding-right:12px;}
.right_bot{font-size:14px;padding-top:7px}
.right_bot .guan_num{margin-right:10px;}
.mycaution{height:100px;background:#fff;margin-top:16px;padding-left:15px;}
.mycaution .caution_top{font-size:18px;border-bottom:1px solid #eee;height:53px;line-height:53px;}
.caution_top .cauImg{width:15px;}
.caution_bot {font-size:15px;color:#ccc;text-align:center;padding-top:12px;}
.page_mid{height:15px;background:#eee}
</style>