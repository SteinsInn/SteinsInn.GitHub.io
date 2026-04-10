import '@waline/client/style';

<template>
  <div class="waline-container">
    <Waline 
      :serverURL="serverURL" 
      :path="path" 
      :dark="true"
      :emoji="emoji"
      :imageUploader="false" 
      :search="true"
      :pageview="true"
      :comment="true"
      :copyright="false"
    />
  </div>
</template>

<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vitepress';

// 1. 填入你的后端地址
const serverURL = 'https://steinsinn-waline-comment.vercel.app'; 

// 2. 路由逻辑：确保切换页面时评论区刷新
const route = useRoute();
const path = computed(() => route.path);

// 3. 评论区功能增强配置
const emoji = [
  '//unpkg.com/@waline/emojis@1.1.0/weibo',
  '//unpkg.com/@waline/emojis@1.1.0/bilibili',
  '//unpkg.com/@waline/emojis@1.1.0/qq',
];
</script>

<style>
/* 这里是全局微调评论区外观，让它更好看 */
:root {
  --waline-theme-color: var(--vp-c-brand); /* 使用 VitePress 主题色 */
  --waline-white: var(--vp-c-bg);           /* 适配背景色 */
}

.waline-container {
  margin-top: 4rem;
  padding: 0 1.5rem;
  /* 解决某些主题下评论区宽度缩进的问题 */
  width: 100%;
  box-sizing: border-box;
}

/* 隐藏不必要的版权信息，保持界面纯净 */
.wl-power {
  display: none;
}
</style>
