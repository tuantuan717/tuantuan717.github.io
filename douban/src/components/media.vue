<template>
	<div class="hot-mid">
		<div class='hot1'>
			<div class='hotleft'>
				<slot name="title"></slot>
				<slot name="cont"></slot>
				<div class="line"></div>
				<h5>作者:<slot name="author"></slot></h5>
			</div>
			<div class="hotright">
				<slot name="bac"></slot>
			</div>
		</div>
	</div>		
</template>

<style>
.hot-mid{text-align:left;}
.hotleft{width:224px;padding-left:22px;float:left;margin-bottom:30px;}
.hotleft h4{font-size:18px;line-height:25px;width:186px;}
.hotleft p{font-size:12px;line-height:19px;margin-top:7px;color:#bbb;text-align:left}
.line{width:16px;height:8px;border-bottom:2px solid #bbb;}
.hotleft h5{margin-top:10px;font-size:13px;color:#bbb}
.hotright{float:left;width:30%}
.hotright img {width:100%;margin-top:4px;}

</style>