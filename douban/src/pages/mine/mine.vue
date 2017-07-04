<template>
	<div class="mine">
		<MyHeader col='#666'>
			<span class='title'>我的</span>
			<img src='../../assets/images/ic_settings.png' class='setImg'/>
		</MyHeader>
		<MyPage></MyPage>
		<MyList></MyList>
	</div>
</template>

<script>
import MyHeader from '../../components/header';
import MyPage from '../../components/mypage';
import MyList from '../../components/mylist';

export default{
	components:{
		MyHeader,
		MyPage,
		MyList
	}
}
</script>

<style>
.mine{margin-top:48px;background:#eee;}
.setImg{position:absolute;top:12px;left:300px;}
</style>