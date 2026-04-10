<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vitepress';

// ✅ 彻底修复样式丢失问题：引入 V3 版本的官方样式
import '@waline/client/style';

// 填入你 Vercel 部署成功后的最终域名 (例如：https://your-domain.vercel.app)
const serverURL = 'https://steinsinn-waline-comment.vercel.app'; 

const route = useRoute();
const path = computed(() => route.path);

// 表情包配置
const emoji = [
  '//unpkg.com/@waline/emojis@1.1.0/weibo',
  '//unpkg.com/@waline/emojis@1.1.0/bilibili',
];
</script>

<template>
  <div class="waline-integration">
    <div class="waline-title">
      <h3>💬 旅者留言板</h3>
    </div>
    
    <Waline 
      :serverURL="serverURL" 
      :path="path" 
      :dark="true"
      placeholder="此地乃次元旅社，請留下你的旅者傳聞...（支持 Markdown）"
      :requiredMeta="['nick']"
      :emoji="emoji"
      :imageUploader="false" 
      :search="true"
      :pageview="true"
      :comment="true"
      :copyright="false"
    />
  </div>
</template>

<style>
/* =========================================
   全局样式深度优化：完美融入次元旅社
   ========================================= */

.waline-integration {
  margin-top: 4rem;
  padding: 2rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.waline-title h3 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-align: center;
}

/* 覆盖 Waline 的自带变量，强制使用 VitePress 的主题色 */
:root {
  --waline-theme-color: var(--vp-c-brand-1) !important;
  --waline-active-color: var(--vp-c-brand-2) !important;
  --waline-border-color: var(--vp-c-divider) !important;
  --waline-white: transparent !important;
  --waline-bgcolor-light: var(--vp-c-bg-alt) !important;
}

/* 深色模式适配 */
.dark :root {
  --waline-bgcolor: var(--vp-c-bg) !important;
  --waline-bgcolor-light: var(--vp-c-bg-alt) !important;
  --waline-text-color: var(--vp-c-text-1) !important;
}

/* 输入框圆角与边框动画 */
.wl-editor {
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
}
.wl-editor:focus {
  border-color: var(--vp-c-brand-1) !important;
}

/* 按钮美化 */
.wl-btn {
  border-radius: 6px !important;
  font-weight: bold !important;
}

/* 隐藏无关信息，保持界面纯净 */
.wl-power {
  display: none !important;
}
</style>
