<template>
  <div class="bowenlu-container">
    <div class="journal-header">
      <h1><i class="fas fa-feather-alt"></i> 燕石博物志</h1>
      <p class="subtitle">GSKChem · 化竞幻想乡社刊</p>
      <div class="header-divider"></div>
    </div>

    <div class="pdf-card">
      <div class="pdf-toolbar">
        <a :href="pdfUrl" download class="btn-download">
          <i class="fas fa-download"></i> 下载本期社刊 (PDF)
        </a>
        <span class="page-hint"><i class="fas fa-book-open"></i> 在线阅览下方</span>
      </div>

      <!-- PDF 嵌入显示 -->
      <div class="pdf-wrapper">
        <embed :src="pdfUrl" type="application/pdf" width="100%" height="800" class="pdf-embed" />
        <div class="fallback-message">
          <i class="fas fa-exclamation-triangle"></i> 您的浏览器无法直接预览 PDF，请
          <a :href="pdfUrl" download>点击下载</a> 后查看。
        </div>
      </div>

      <div class="journal-meta">
        <p><i class="fas fa-calendar-alt"></i> 创刊号 · 2026 初夏</p>
        <p><i class="fas fa-pen-fancy"></i> 主编：铃奈庵命题组</p>
        <p class="meta-desc">萃集化学竞赛好题、学术随笔与幻想乡风物志，每月一刊。</p>
      </div>
    </div>

    <div class="back-link">
      <router-link to="/" class="btn-outline">
        <i class="fas fa-arrow-left"></i> 返回主页
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// 请将实际的 PDF 文件放在 public 目录下，例如 public/shiyan_bowenlu_vol1.pdf
const pdfUrl = "public/shiyan_bowenlu_vol1.pdf";
</script>

<style scoped>
.bowenlu-container {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

/* 淡雅衬线风格 */
.journal-header {
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Georgia", "Times New Roman", "宋体", serif;
}

.journal-header h1 {
  font-size: 2.8rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: #3b5c3a;
  margin-bottom: 0.5rem;
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
  color: #2f5e3a;
  border-bottom: none;
  display: inline-block;
  padding-bottom: 0.25rem;
}

.journal-header h1 i {
  margin-right: 0.6rem;
  font-size: 2rem;
  color: #8faa7b;
}

.subtitle {
  font-size: 1rem;
  color: #6f8f6a;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.header-divider {
  width: 80px;
  height: 2px;
  background: #cbdcc2;
  margin: 1rem auto 0;
}

.pdf-card {
  background: #fefcf5;
  border-radius: 24px;
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.02);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.pdf-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.8rem;
  background: #faf7f0;
  border-bottom: 1px solid #e9e2d0;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.btn-download {
  background: #e6ede1;
  padding: 0.55rem 1.2rem;
  border-radius: 40px;
  color: #3c6b3a;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
}

.btn-download:hover {
  background: #d4e0ca;
  transform: translateY(-1px);
}

.page-hint {
  font-size: 0.85rem;
  color: #8b7a6b;
  font-family: "Inter", sans-serif;
}

.pdf-wrapper {
  position: relative;
  background: #e9e2d0;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pdf-embed {
  display: block;
  border: none;
}

.fallback-message {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 248, 235, 0.95);
  padding: 1.2rem 2rem;
  border-radius: 32px;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #8a6e4b;
  white-space: nowrap;
}

/* 当 embed 加载失败或浏览器不支持时显示降级内容 */
.pdf-embed:not([src]) + .fallback-message,
.pdf-embed[src=""] + .fallback-message {
  display: block;
}

/* 简单检测：如果 embed 无法渲染，手动显示（实际可用 CSS 无法完美检测，建议保留备用） */
.pdf-wrapper:hover .fallback-message {
  /* 不自动出现，需要主动触发? 简单做法：直接始终显示提示，但比较粗暴。更好的方式：用 JS 检测 */
  /* 为了优雅，我们不在 hover 时显示，而是默认显示一个轻提示在角落 */
}

/* 增加一个辅助提示 */
.fallback-message {
  display: block;
  bottom: 20px;
  top: auto;
  left: auto;
  transform: none;
  right: 20px;
  background: rgba(250, 245, 235, 0.9);
  backdrop-filter: blur(4px);
  font-size: 0.85rem;
  padding: 0.6rem 1.2rem;
  border-radius: 48px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.fallback-message a {
  color: #4a7c3f;
  text-decoration: underline;
}

.pdf-embed {
  width: 100%;
  min-height: 600px;
  background: #fefcf5;
}

.journal-meta {
  padding: 1.5rem 1.8rem;
  background: #ffffffd9;
  border-top: 1px solid #f0ebdf;
  font-family: "Georgia", serif;
  color: #5c6e53;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;
}

.journal-meta p {
  margin: 0;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-desc {
  font-style: italic;
  color: #8b9a7a;
}

.back-link {
  text-align: center;
  margin-top: 2rem;
}

.back-link .btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid #bdd0ae;
  padding: 0.6rem 1.6rem;
  border-radius: 40px;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  transition: 0.2s;
}

.back-link .btn-outline:hover {
  background: #f0f5ea;
  border-color: #9eb88b;
}

@media (max-width: 780px) {
  .journal-header h1 {
    font-size: 2rem;
  }
  .pdf-toolbar {
    flex-direction: column;
    align-items: flex-start;
  }
  .journal-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  .fallback-message {
    white-space: normal;
    max-width: 90%;
  }
}
</style>
