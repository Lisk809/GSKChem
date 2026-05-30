<template>
  <footer class="social-footer">
    <div class="social-links">
      <a
        href="https://qm.qq.com/q/p1ngPNMB0Y"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        aria-label="QQ官方账号"
      >
        <Icon icon="simple-icons:qq" class="social-icon" />
        <span class="link-label">QQ</span>
      </a>
      <a
        href="https://space.bilibili.com/3632312667343431"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        aria-label="Bilibili官方账号"
      >
        <Icon icon="simple-icons:bilibili" class="social-icon" />
        <span class="link-label">Bilibili</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
// 如果需要动态设置链接，可以使用 props，这里为简单示例直接写占位符
// 用户可根据实际情况修改 href 中的地址
</script>

<style scoped>
.social-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(20px);
  background: var(--bg-card-solid, rgba(255, 255, 255, 0.6));
  border-top: 1px solid var(--footer-border, rgba(0, 0, 0, 0.05));
  padding: 12px 24px;
  z-index: 100;
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}

/* 支持暗色主题（通过 data-theme 或父级 class） */
:global([data-theme="dark"]) .social-footer {
  --footer-bg: rgba(15, 23, 42, 0.7);
  --footer-border: rgba(255, 255, 255, 0.08);
  background: var(--footer-bg);
  border-top-color: var(--footer-border);
}

/* 如果没有全局主题变量，回退默认暗色样式 */
@media (prefers-color-scheme: dark) {
  .social-footer {
    --footer-bg: rgba(15, 23, 42, 0.7);
    --footer-border: rgba(255, 255, 255, 0.08);
    background: var(--footer-bg);
    border-top-color: var(--footer-border);
  }
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--text-secondary, #475569);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 40px;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
}

.social-link:hover {
  color: var(--accent-color, #a855f7);
  background: rgba(168, 85, 247, 0.1);
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

.link-label {
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

/* 响应式：小屏幕上隐藏文字，只显示图标 */
@media (max-width: 480px) {
  .link-label {
    display: none;
  }
  .social-link {
    padding: 8px;
  }
  .social-links {
    gap: 20px;
  }
}
</style>
