<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- 左侧：菜单按钮（可替换为自己的图标） -->
      <button class="icon-btn menu-btn" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
        <div class="icon-wrapper">
          <i class="fas fa-bars" v-show="!isMenuOpen"></i>
          <i class="fas fa-times" v-show="isMenuOpen"></i>
        </div>
      </button>

      <!-- 中间：Logo（可选，可替换为文字或图标） -->
      <div class="logo-area" @click="goHome">
      <span class="logo-text">GSKChem</span>
        <img class="logo-icon" src="/logo.jpg"></img>
      </div>

      <!-- 右侧：一组图标按钮-->

    </div>

    <!-- 菜单面板（点击菜单按钮时展开） -->
    <Transition name="menu-fade">
      <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>
    </Transition>
    <Transition name="menu-slide">
      <div v-if="isMenuOpen" class="menu-panel">
        <div class="menu-header">
          <span class="menu-title">导航</span>
        </div>
        <div class="menu-links">
          <router-link to="/" @click="closeMenu">
            <i class="fas fa-home"></i> 主页
          </router-link>
          <router-link to="/exam" @click="closeMenu">
            <i class="fas fa-chalkboard"></i> GSKChem联考
          </router-link>
          <router-link to="/bowuzhi" @click="closeMenu">
            <i class="fas fa-book"></i> 燕石博物志
          </router-link>
        </div>
        <div class="menu-divider"></div>
        <div class="menu-actions">
        <button class="menu-action-btn" @click="toggleThemeAndClose">
            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
            {{ isDark ? '浅色模式' : '深色模式' }}
          </button>
          <button class="menu-action-btn" @click="goToLoginAndClose">
            <i class="fas fa-user-astronaut"></i>
            登录 / 注册
          </button>
        </div>
        <SocialFooter />
      </div>
    </Transition>
  </nav>

  <main>
    <router-view />
  </main>

  <footer>
    <i class="far fa-copyright"></i> GSKChem
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SocialFooter from './components/SocialFooter.vue'

const router = useRouter()
const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const goHome = () => {
  router.push('/')
  closeMenu()
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const toggleThemeAndClose = () => {
  toggleTheme()
  closeMenu()
}

const goToLogin = () => {
  router.push('/login')
}

const goToLoginAndClose = () => {
  goToLogin()
  closeMenu()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    // 修改 theme-color
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#1a2418')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#eef2f0')
  }
}

const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
  }
}

onMounted(() => {
  initTheme()
})
</script>

<style scoped>
.navbar {
  position: relative;
  background: var(--bg-nav);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-light);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 通用图标按钮样式 */
.icon-btn {
  background: var(--btn-bg);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  color: var(--btn-color);
  font-size: 1.3rem;
}

.icon-btn:hover {
  background: var(--accent-light);
  color: white;
  transform: scale(1.02);
}

/* 菜单按钮的旋转动画 */
.menu-btn .icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

.menu-btn.is-active .icon-wrapper {
  transform: rotate(90deg);
}

/* Logo 区域 */
.logo-area {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  padding: 0.2rem 0.8rem;
  border-radius: 40px;
  transition: background 0.2s;
  width:fit-content;
}

.logo-area:hover {
  background: var(--bg-code);
}

.logo-icon {
  font-size: 1.6rem;
  /*color: var(--accent-green);*/
}

.logo-text {
  font-weight: 100;
  font-size: 1rem;
  background: linear-gradient(135deg, #2d5430, #1d3a1a);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* 右侧图标组 */
.right-icons {
  display: flex;
  gap: 0.8rem;
}

/* 菜单面板与遮罩（与之前相同） */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  z-index: 99;
}

.menu-panel {
  position: fixed;
  top: 70px;
  right: 2rem;
  width: 280px;
  background: var(--bg-card-solid);
  backdrop-filter: blur(8px);
  border-radius: 28px;
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-card);
  padding: 1rem 0;
  z-index: 100;
  overflow: hidden;
}

.menu-header {
  padding: 0 1.2rem 0.6rem;
  border-bottom: 1px solid var(--border-light);
}

.menu-title {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-muted);
  letter-spacing: 1px;
}

.menu-links {
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
}

.menu-links a {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 1.2rem;
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: background 0.15s;
}

.menu-links a i {
  width: 1.4rem;
  font-size: 1.1rem;
  color: var(--accent-green);
}

.menu-links a:hover {
  background: var(--bg-code);
  color: var(--accent-green);
}

.menu-divider {
  height: 1px;
  background: var(--border-light);
  margin: 0.4rem 1rem;
}

.menu-actions {
  padding: 0.4rem 0;
}

.menu-action-btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0.7rem 1.2rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.15s;
  font-family: inherit;
  text-align: left;
}

.menu-action-btn i {
  width: 1.4rem;
  font-size: 1.1rem;
  color: var(--accent-green);
}

.menu-action-btn:hover {
  background: var(--bg-code);
  color: var(--accent-green);
}

/* 过渡动画 */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.96);
}

@media (max-width: 640px) {
  .nav-container {
    padding: 0.6rem 1rem;
  }
  .menu-panel {
    right: 1rem;
    left: 1rem;
    width: auto;
  }

  .icon-btn {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style>