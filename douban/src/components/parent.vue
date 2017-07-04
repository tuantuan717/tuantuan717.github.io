<template>
	<div class="page">
		<h1>{{msg}}</h1>
		<child :change='parentChange'></child>
	</div>
</template>

<script>
import child from './child'
export default {
	components:{child},
	data:function(){
		return{
			msg:'Update your data here.'
		}
	},
	methods:{
		parentChange:function(num){
			this.msg="Update your data here.Page:"+num
		}
	}
}
</script>

