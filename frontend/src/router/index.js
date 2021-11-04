import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Login.vue')
  },
  {
    path: '/join_agree',
    name: 'join_agree',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Join_agree.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Movie.vue')
  },

  {
    path: '/reserve',
    name: 'reserve',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Reserve.vue')
  },
  {
    path: '/movie_be_schedule',
    name: 'movie_be_schedule',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Movie_be_schedule.vue')
  },
  {
    path: '/movie_chart',
    name: 'movie_chart',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Movie_chart')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import(/* webpackChunkName: "about" */ '@/components/SignUp.vue')
  },
  {
    path: '/detail_1',
    name: 'detail_1',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Detail_1.vue')
  },
  ,
  {
    path: '/detail_2',
    name: 'detail_2',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Detail_2.vue')
  },
  {
    path: '/star-rating',
    name: 'star-rating',
    component: () => import(/* webpackChunkName: "about" */ '@/components/star-rating.vue')
  },
  {
    path: '/grade_2',
    name: 'grade_2',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Grade_2.vue')
  },
  {
    path: '/trailler_1',
    name: 'trailler_1',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Trailler_1.vue')
  },
  {
    path: '/trailler_2',
    name: 'trailler_2',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Trailler_2.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Notice.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Mypage.vue')
  }
  ,{
    path:'/board/list'
    ,name: 'List'
    ,component: () => import(/* webpackChunkName: "about" */ '@/components/board/List.vue')
  }
  ,{
    path :'/board/write',
    name: 'Write',
    component: () => import(/* webpackChunkName: "about" */ '@/components/board/Write.vue')
  }
  ,{
    path:'/board/view'  //상세페이지 추가
    ,name: 'View'
    ,component: () => import(/* webpackChunkName: "about" */ '@/components/board/View.vue')
  }
]

const router = new VueRouter({
  routes,
  mode : 'history',
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
  }
});
export default router
