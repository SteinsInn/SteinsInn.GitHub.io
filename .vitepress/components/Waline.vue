<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vitepress';

// 引入官方样式
import '@waline/client/style';

const serverURL = 'https://steinsinn-waline-comment.vercel.app'; 
const route = useRoute();
const path = computed(() => route.path);

// 🌟 核心逻辑：自动检测语言
const lang = computed(() => {
  return route.path.includes('/en/') ? 'en-US' : 'zh-CN';
});

// 🌟 占位符逻辑
const placeholder = computed(() => {
  return lang.value === 'en-US' 
    ? 'Welcome to Steins;Inn Website! Leave your message here...(Allow Markdown)' 
    : '欢迎来到次元旅社网站，欢迎评论...（支持 Markdown）';
});

// 🌟 标题逻辑
const title = computed(() => {
  return lang.value === 'en-US' ? '💬 Comments' : '💬 评论区';
});

const emoji = [
  '//unpkg.com/@waline/emojis@1.1.0/weibo',
  '//unpkg.com/@waline/emojis@1.1.0/bilibili',
  '//unpkg.com/@waline/emojis@1.1.0/qq',
  '//unpkg.com/@waline/emojis@1.1.0/tieba',
  '//unpkg.com/@waline/emojis@1.1.0/twemoji',
];
</script>

<template>
  <div class="waline-integration">
    <div class="waline-title">
      <h3>{{ title }}</h3>
    </div>
    
    <Waline 
      :serverURL="serverURL" 
      :path="path" 
      :dark="'html.dark'"
      :requiredMeta="['nick']"
      :emoji="emoji"
      avatar="retro"
      :lang="lang"
      :placeholder="placeholder"
      :imageUploader="false" 
      :search="true"
      :pageview="true"
      :comment="true"
      :copyright="false"
    />

    <div class="waline-copyright">
      Copyright © Steins;Inn 次元旅社
    </div>
  </div>
</template>

<style>
/* =========================================
   深度美化：适配 VitePress 主题
   ========================================= */

.waline-integration {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px dashed var(--vp-c-divider);
}

.waline-title h3 {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-align: center;
}

.waline-copyright {
  margin-top: 3rem;
  padding-bottom: 2rem;
  text-align: center;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  letter-spacing: 1px;
}

/* 颜色变量适配 */
:root {
  --waline-theme-color: var(--vp-c-brand-1) !important;
  --waline-active-color: var(--vp-c-brand-2) !important;
  --waline-bgcolor: transparent !important;
  --waline-bgcolor-light: var(--vp-c-bg-alt) !important;
  --waline-border-color: var(--vp-c-divider) !important;
}

/* 输入框美化 */
.wl-editor {
  border-radius: 12px !important;
  background: var(--vp-c-bg-soft) !important;
  transition: all 0.3s ease !important;
}

.wl-editor:focus {
  border-color: var(--vp-c-brand-1) !important;
  background: var(--vp-c-bg) !important;
}

/* 按钮美化 */
.wl-btn {
  border-radius: 20px !important;
}

/* 隐藏自带的版权 */
.wl-power {
  display: none !important;
}
</style>
