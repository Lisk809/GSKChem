import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExamView from '../views/ExamView.vue'
import LoginView from '../views/LoginView.vue'
import ShiyanBowenluView from '../views/ShiyanBowenluView.vue'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: HomeView,
    meta: { title: '主页 | GSKChem · 化竞幻想乡' }
  },
  { 
    path: '/exam', 
    name: 'exam', 
    component: ExamView,
    meta: { title: 'GSKChem联考 | 化学竞赛模拟测评' }
  },
  { 
    path: '/login', 
    name: 'login', 
    component: LoginView,
    meta: { title: '登录 | GSKChem 学术社区' }
  },
  { 
    path: '/register', 
    name: 'register', 
    component: LoginView,
    meta: { title: '注册 | 加入铃奈庵' }
  },
  { 
    path: '/bowuzhi', 
    name: 'bowuzhi', 
    component: ShiyanBowenluView,
    meta: { title: '燕石博物志 | 社刊与学术随笔' }
  },
  { path: '/index.html', redirect: '/' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 动态修改页面标题
router.beforeEach((to, _from, next) => {
  if (to.fullPath.includes('?page=gsk')) {
    next('/exam')
  } else {
    next()
  }
})

router.afterEach((to) => {
  const defaultTitle = 'GSKChem · 化竞幻想乡'
  document.title = to.meta?.title ? `${to.meta.title}` : defaultTitle
})

export default router