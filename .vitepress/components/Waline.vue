<template>
  <div class="comment-wrapper">
    <div v-if="!isHome" id="waline"></div>
  </div>
</template>

<script setup>
import { onMounted, watch, computed } from 'vue';
import { useData, useRouter } from 'vitepress';
import { init } from '@waline/client';
import '@waline/client/dist/waline.css';

const { frontmatter } = useData();
const router = useRouter();

// 判断是否是首页（首页通常不需要评论）
const isHome = computed(() => frontmatter.value.layout === 'home');

let walineInstance = null;

const initWaline = () => {
  if (typeof window !== 'undefined' && !isHome.value) {
    walineInstance = init({
      el: '#waline',
      serverURL: 'https://你的后端地址.workers.dev', // 👈 换成你刚才得到的 CF 地址
      dark: 'auto', // 自动适配深色模式
      // 这里可以加更多配置，比如：
      // login: 'disable', // 如果你想强制匿名，不显示登录按钮
    });
  }
};

onMounted(() => {
  initWaline();
});

// 监听路由变化，确保切换页面时评论区刷新
watch(() => router.route.path, () => {
  if (walineInstance) {
    walineInstance.destroy(); // 销毁旧实例
  }
  setTimeout(initWaline, 100); // 重新初始化
});
</script>

<style scoped>
.comment-wrapper {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}
</style>