<template>
	<div class="headerWrap" :style="{background:bgcol,color:col}">
		<slot v-txt='txt'></slot>
		<slot name='leftImg'></slot>
		<slot name='rightImg'></slot>
	</div>
</template>
<script>
export default{
	props:{
		bgcol:{
			default:'#f7f7f7'
		},
		col:{
			default:'#fff'
		}
		
	}
}
</script>


<style>
	.headerWrap{width:100%;position:fixed;top:0;left:0;height:48px;line-height:48px;text-align:center}
	.title{font-size:16px;}
</style>
