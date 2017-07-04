<template>
	<div class="wrap">
		<slot></slot>
	</div>
</template>

<script>

export default{
	props:['sel']
}
</script>

<style>
.wrap{width:100%;float:left}
</style>