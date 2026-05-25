import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExamView from '../views/ExamView.vue'
import LoginView from '../views/LoginView.vue'
import ShiyanBowenluView from '../views/ShiyanBowenluView.vue'   // 新增

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/exam', name: 'exam', component: ExamView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: LoginView },
    { path: '/bowuzhi', name: 'bowuzhi', component: ShiyanBowenluView },  // 新增
    { path: '/index.html', redirect: '/' },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach((to, _from, next) => {
  if (to.fullPath.includes('?page=gsk')) {
    next('/exam')
  } else {
    next()
  }
})

export default router