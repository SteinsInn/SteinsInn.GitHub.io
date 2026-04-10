<script setup>
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vitepress';

// 引入官方样式
import '@waline/client/style';

const serverURL = 'https://steinsinn-waline-comment.vercel.app'; 

const route = useRoute();
const path = computed(() => route.path);

// 🌟 扩充后的海量表情包
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
      <h3>💬 旅者留言板</h3>
    </div>
    
    <Waline 
      :serverURL="serverURL" 
      :path="path" 
      :dark="'html.dark'"
      lang="zh-CN"
      placeholder="此地乃次元旅社，請留下你的旅者傳聞...（支持 Markdown）"
      :requiredMeta="['nick', 'mail']"
      :emoji="emoji"

      /* 🌟 头像设置 */
      /* 如果你想让没头像的人显示一张固定的二次元图，可以把下面的 'retro' 改成图片链接 */
      /* 例如 avatar="https://your-image-url.png" */
      avatar="retro" 
      
      :imageUploader="false" 
      :search="true"
      :pageview="true"
      :comment="true"
      :copyright="false"
    />
    
    <div class="shuming">
      —— Steins;Inn 次元旅社
    </div>
  </div>
</template>

<style>
/* =========================================
   清爽通透风：美化与适配
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

.shuming {
  margin-top: 2rem;
  text-align: right;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  opacity: 0.7;
  font-style: italic;
}

/* 颜色变量适配 */
:root {
  --waline-theme-color: var(--vp-c-brand-1) !important;
  --waline-active-color: var(--vp-c-brand-2) !important;
  --waline-bgcolor: transparent !important;
  --waline-bgcolor-light: var(--vp-c-bg-alt) !important;
  --waline-border-color: var(--vp-c-divider) !important;
}

/* 输入框聚焦效果 */
.wl-editor {
  border-radius: 12px !important;
  background: var(--vp-c-bg-soft) !important;
  transition: all 0.3s ease !important;
}

.wl-editor:focus {
  border-color: var(--vp-c-brand-1) !important;
  background: var(--vp-c-bg) !important;
}

/* 按钮变圆润 */
.wl-btn {
  border-radius: 20px !important;
}

/* 隐藏版权 */
.wl-power {
  display: none !important;
}
</style>
