<template>
  <div class="carousel-container" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
    <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-slide" v-for="(slide, idx) in slides" :key="idx">
        <div class="slide-bg" :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="slide-overlay"></div>
        </div>
        <div class="slide-content">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <!-- 指示点 -->
    <div class="carousel-dots">
      <button
        v-for="(_, idx) in slides"
        :key="idx"
        class="dot"
        :class="{ active: currentIndex === idx }"
        @click="goToSlide(idx)"
      ></button>
    </div>

    <!-- 左右箭头 -->
    <button class="carousel-arrow prev" @click="prevSlide">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="carousel-arrow next" @click="nextSlide">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  image: string
  title: string
  description: string
}

const props = defineProps<{
  slides: Slide[]
  autoPlayInterval?: number
}>()

const currentIndex = ref(0)
let autoPlayTimer: number | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const startAutoPlay = () => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
  autoPlayTimer = window.setInterval(() => {
    nextSlide()
  }, props.autoPlayInterval || 5000)
}

const pauseAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  pauseAutoPlay()
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 28px;
  box-shadow: var(--shadow-md);
  margin: 2rem 0;
  background: var(--bg-card-solid);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex-shrink: 0;
  width: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
}

.slide-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
}

.slide-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 2rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.slide-content p {
  font-size: 1rem;
  max-width: 80%;
  opacity: 0.9;
  color: #f0f0f0;
}

/* 指示点 */
.carousel-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.6rem;
  z-index: 3;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
}

.dot.active {
  background: var(--accent-primary);
  width: 24px;
  border-radius: 6px;
}

/* 箭头按钮 */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 3;
}

.carousel-arrow:hover {
  background: var(--accent-primary);
  transform: translateY(-50%) scale(1.05);
}

.prev {
  left: 1rem;
}

.next {
  right: 1rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .slide-content h3 {
    font-size: 1.2rem;
  }
  .slide-content p {
    font-size: 0.8rem;
    max-width: 100%;
  }
  .carousel-arrow {
    width: 36px;
    height: 36px;
  }
}
</style>