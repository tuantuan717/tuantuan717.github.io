import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '../pages/Index'
import Home from '../pages/home/home'
import Audio from '../pages/audio/audio'
import Broadcast from '../pages/broadcast/broadcast'
import Group from '../pages/group/group'
import Mine from '../pages/mine/mine'
import Film from '../components/film'
import Book from '../components/book'
import Tv from '../components/tv'
import City from '../components/city'
import Music from '../components/music'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
	  children:[
	  	{path:'film',component:Film},
	  	{path:'book',component:Book},
	  	{path:'tv',component:Tv},
	  	{path:'city',component:City},
	  	{path:'music',component:Music},
	  ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
  ]
})
