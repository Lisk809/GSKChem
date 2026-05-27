<template>
  <!-- 主入口，背景暗色系，几何portal氛围，懒滚动高性能 -->
  <div class="home-portal" ref="portalRef">
    <!-- HERO 区域：科技门户入口，动态光标+扫描线 -->
    <section class="hero" ref="heroSection">
      <div class="hero-bg-glow"></div>
      <div class="container">
        <div class="hero-badge" ref="badgeRef">
          <span class="badge-dot"></span> GSKChem Ecosystem
        </div>
        <h1 class="hero-title" ref="titleRef">
          <span class="title-line">打造下一代</span>
          <span class="title-line gradient-text">化学竞赛研习平台</span>
        </h1>
        <p class="hero-desc" ref="descRef">
          联考测评 | 社刊研读 | 学术社区 — 为化学爱好者与师生提供纯净、高效的学术环境。
        </p>
        <div class="hero-buttons" ref="btnsRef">
          <a href="/exam" class="btn-primary">
            <span>开始联考</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="/bowuzhi" class="btn-secondary">
            <i class="fas fa-book"></i>
            <span>燕石博物志</span>
          </a>
        </div>
      </div>
      <div class="hero-scroll-indicator" ref="scrollRef">
        <span>滚动探索</span>
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>

    <!-- 数据看板：展示社区关键统计数据，动态数字效果 -->
    <section class="stats-section">
      <div class="container stats-grid">
        <div class="stat-card" v-for="(stat, idx) in stats" :key="idx">
          <div class="stat-number" :ref="(el) => (statRefs[idx] = el)" :data-target="stat.target">
            0
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>
    <!-- 轮播图区域 -->
    <section class="carousel-section">
      <div class="container">
        <Carousel :slides="carouselSlides" :autoPlayInterval="5000" />
      </div>
    </section>
    <!-- 产品矩阵：展示平台的核心产品/模块，体现门户式品牌连接感 -->
    <section class="products-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">平台生态</h2>
          <p class="section-sub">GSKChem 全线研习产品，构建完整化学竞赛知识体系</p>
        </div>
        <div class="products-grid">
          <div class="product-card" v-for="(product, idx) in products" :key="idx">
            <div class="product-icon">
              <i :class="product.icon"></i>
            </div>
            <h3>{{ product.title }}</h3>
            <p>{{ product.desc }}</p>
            <a :href="product.link" class="product-link">探索 →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 全宽品牌声明：统一视觉语言 + 几何Portal分割线 -->
    <section class="brand-statement">
      <div class="portal-line"></div>
      <div class="container">
        <p class="statement-quote">「冀以尘雾之微，补益山海；萤烛末光，增辉日月。」</p>
        <p class="statement-author">—— 铃奈庵命题组</p>
      </div>
      <div class="portal-line bottom"></div>
    </section>

    <!-- 底部 CTA -->
    <section class="cta-section">
      <div class="container cta-container">
        <h3>加入铃奈庵命题组</h3>
        <p>与我们一起构建高质量化学试题库，共赏化学之趣。</p>
        <div class="cta-buttons">
          <a href="/register" class="btn-primary">立即注册</a>
          <a href="mailto:gskchem@example.com" class="btn-secondary">邮件联系</a>
        </div>
      </div>
    </section>

    <!-- 将 Footer 移到最外层，保证布局完整性 -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "countup.js";
import Carousel from "@/components/Carousel.vue";

const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format",
    title: "GSKChem联考",
    description: "高质量模拟试题，贴近国初实况，智能批阅系统即将上线。",
  },
  {
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format",
    title: "燕石博物志",
    description: "社刊在线阅读，收录化学随笔、竞赛真题与幻想乡风物志。",
  },
  {
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format",
    title: "铃奈庵命题组",
    description: "加入我们，共同打造有深度、有温度的化学试题库。",
  },
];

gsap.registerPlugin(ScrollTrigger);

// 统计数据
const stats = [
  { label: "社区成员", target: 5280 },
  { label: "联考参与次数", target: 15620 },
  { label: "试题/社刊", target: 428 },
  { label: "命题组贡献者", target: 36 },
];
const statRefs = ref([]);

// 产品矩阵数据
const products = [
  {
    title: "GSKChem联考",
    desc: "高质量模拟联考，贴近国初实况，支持答题卡收集与智能批阅。",
    icon: "fas fa-file-signature",
    link: "/exam",
  },
  {
    title: "燕石博物志",
    desc: "社刊PDF在线阅览，收录化学随笔、竞赛真题与幻想乡风物志。",
    icon: "fas fa-dragon",
    link: "/bowuzhi",
  },
  {
    title: "铃奈庵命题组",
    desc: "加入命题团队，共同打造有深度、有温度的化学试题库。",
    icon: "fas fa-users",
    link: "/register",
  },
  {
    title: "学术社区",
    desc: "邮箱+QQ注册系统，纯净学术交流空间，等你来探索。",
    icon: "fas fa-comments",
    link: "/login",
  },
];

// DOM 元素引用
const portalRef = ref(null);
const heroSection = ref(null);
const badgeRef = ref(null);
const titleRef = ref(null);
const descRef = ref(null);
const btnsRef = ref(null);
const scrollRef = ref(null);

onMounted(() => {
  // 初始化 GSAP 滚动动画
  const ctx = gsap.context(() => {
    // Hero 入场动画
    gsap.fromTo(
      badgeRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    );
    gsap.fromTo(
      titleRef.value.children,
      { opacity: 0, y: 30, stagger: 0.2 },
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.2)", stagger: 0.2 },
    );
    gsap.fromTo(
      descRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" },
    );
    gsap.fromTo(
      btnsRef.value.children,
      { opacity: 0, x: -20, stagger: 0.1 },
      { opacity: 1, x: 0, duration: 0.6, delay: 0.6, stagger: 0.15 },
    );
    gsap.fromTo(
      scrollRef.value,
      { opacity: 0 },
      { opacity: 0.7, duration: 1, delay: 1, repeat: -1, yoyo: true, ease: "power1.inOut" },
    );

    // 统计数据滚动计数器
    statRefs.value.forEach((el, idx) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          const target = parseFloat(el.dataset.target);
          new CountUp(el, target, { duration: 2.5, startVal: 0, decimalPlaces: 0 }).start();
        },
      });
    });
  }, portalRef);

  // 初始化计数器元素的数据属性
  statRefs.value.forEach((el, idx) => {
    if (el) el.setAttribute("data-target", stats[idx].target);
  });

  onUnmounted(() => {
    ctx.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });
});
</script>

<style scoped>
/* ========== 全局变量引用 ========== */
.home-portal {
  --bg-dark: var(--bg-hero);
  --bg-card: var(--bg-card-solid);
  --border-glow: rgba(74, 222, 128, 0.2);
  --text-dim: var(--text-dim);
  scroll-behavior: smooth;
}

/* ========== Hero 区域 ========== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: radial-gradient(circle at 30% 10%, #1a1f2e, var(--bg-hero));
  overflow: hidden;
}

.hero-bg-glow {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, transparent 70%);
  pointer-events: none;
  animation: rotateGlow 25s infinite linear;
}

@keyframes rotateGlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(74, 222, 128, 0.1);
  backdrop-filter: blur(4px);
  padding: 0.5rem 1rem;
  border-radius: 40px;
  font-size: 0.85rem;
  color: var(--accent-primary);
  border: 1px solid rgba(74, 222, 128, 0.2);
  margin-bottom: 2rem;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: var(--accent-primary);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--accent-primary);
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #f1f2ef;
}

.title-line {
  display: block;
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent-primary), #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--text-dim);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  border-radius: 40px;
  font-weight: 600;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(105deg, var(--accent-primary), #16a34a);
  color: #0a0c12;
  box-shadow: 0 4px 12px rgba(74, 222, 128, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(74, 222, 128, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  backdrop-filter: blur(4px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dim);
  font-size: 0.8rem;
  opacity: 0.7;
}

/* ========== 统计区域 ========== */
.stats-section {
  padding: 5rem 0;
  background: var(--bg-stats);
  border-top: 1px solid var(--border-light);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-dim);
  font-size: 0.9rem;
}

/* ========== 产品矩阵 ========== */
.products-section {
  padding: 6rem 0;
  background: radial-gradient(circle at 80% 20%, var(--bg-hero));
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.section-sub {
  color: var(--text-dim);
  max-width: 600px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.product-card {
  background: var(--bg-card);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-light);
  border-radius: 28px;
  padding: 2rem;
  transition: all 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-primary);
  box-shadow: 0 12px 24px -12px rgba(74, 222, 128, 0.2);
}

.product-icon {
  font-size: 2rem;
  color: var(--accent-primary);
  margin-bottom: 1.2rem;
}

.product-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
}

.product-card p {
  color: var(--text-dim);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.product-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap 0.2s;
}

.product-link:hover {
  gap: 0.8rem;
}

/* ========== 品牌声明 ========== */
.brand-statement {
  padding: 4rem 0;
  background: var(--bg-hero);
  position: relative;
}

.portal-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
  margin: 1rem 0;
}

.statement-quote {
  font-size: 1.3rem;
  text-align: center;
  color: var(--text-primary);
  font-style: italic;
  max-width: 700px;
  margin: 0 auto 1rem;
}

.statement-author {
  text-align: center;
  color: var(--text-dim);
  font-size: 0.9rem;
}

/* ========== CTA 区域 ========== */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--bg-hero));
}

.cta-container {
  text-align: center;
}

.cta-container h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.cta-container p {
  color: var(--text-dim);
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.carousel-section {
  padding: 2rem 0;
  background: var(--bg-dark);
}
/* 响应式 */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  .hero-title {
    font-size: 2rem;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
