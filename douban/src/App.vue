<template>
  <div id="app">
    <router-view></router-view>
	<Tabbar></Tabbar>
	<div class="underline"></div>
  </div>
</template>

<script>

import Tabbar from './components/tabbar'

export default {
  name: 'app',
  components:{
  	Tabbar
  },
  created:function(){
  	this.$router.push('/')
  }
}
</script>

<style>
*{margin:0;padding:0}
ul{list-style:none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;  
  font-size:20px;
}
.underline{height:64px;clear:both}

</style>

