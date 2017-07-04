<template>
	<div class="itemWrap" @click="fn">
		<span v-show='bol'><slot name="normalImg"></slot><br/></span>
		<span v-show='!bol'><slot name="activeImg"></slot><br/></span>
		<span v-text="txt"></span>
	</div>
</template>

<script>
export default{
	props:['txt','id'],
	computed:{
		bol:function(){
			if(this.$parent.sel==this.id){
				return false
			}
			return true
		}
		
	},
	methods:{
		fn:function(){
			this.$router.push('/'+this.id)
			this.$emit('change',this.id)
		}
	}
}
</script>

<style>
.itemWrap{width:20%;float:left}
</style>