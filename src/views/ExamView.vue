<template>
  <div class="card-panel">
    <h2><i class="fas fa-chalkboard"></i> GSKChem联考专区</h2>
    <p style="margin: 1rem 0">
      发布高质量模拟联考试卷，支持在线提交与答题卡收集。扫描图片上传功能正在开发，届时可便捷完成主观题收集。
    </p>
    <div class="announce-banner">
      <i class="fas fa-upload"></i> <strong>答题卡收集系统</strong><br />
      联考期间，考生可将答题卡扫描为图片上传，后台统一整理、阅卷。敬请关注首场联考通知。
    </div>
    <button class="btn-outline" @click="notifyReminder">
      <i class="fas fa-bell"></i> 预约联考提醒
    </button>
  </div>
  <HeroDisplay />
</template>

<script setup lang="ts">
import HeroDisplay from '../components/HeroDisplay.vue';
const notifyReminder = () => {
  alert("📢 联考提醒登记功能开发中，届时会通过邮箱通知。");
};
</script>
