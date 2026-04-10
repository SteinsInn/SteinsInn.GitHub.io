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
      :dark="'html.dark'"
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
   清爽通透风：去掉厚重背景，融入页面
   ========================================= */

.waline-integration {
  margin-top: 4rem;
  /* 🌟 去掉黑底，改用一条优雅的顶部过渡线 */
  padding-top: 3rem;
  border-top: 1px dashed var(--vp-c-divider);
}

.waline-title h3 {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* 覆盖 Waline 的自带变量，强制使用 VitePress 的主题色 */
:root {
  --waline-theme-color: var(--vp-c-brand-1) !important;
  --waline-active-color: var(--vp-c-brand-2) !important;
  
  /* 🌟 让输入框在白天看起来更白静，晚上更深邃，不瞎眼 */
  --waline-bgcolor: transparent !important;
  --waline-bgcolor-light: var(--vp-c-bg-alt) !important;
  --waline-border-color: var(--vp-c-divider) !important;
}

/* 输入框圆角与获取焦点时的边框颜色 */
.wl-editor {
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
}
.wl-editor:focus {
  border-color: var(--vp-c-brand-1) !important;
}

/* 按钮变圆润一点 */
.wl-btn {
  border-radius: 6px !important;
  font-weight: bold !important;
}

/* 隐藏不必要的版权信息 */
.wl-power {
  display: none !important;
}
</style>
