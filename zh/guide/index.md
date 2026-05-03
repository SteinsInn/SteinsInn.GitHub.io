---
layout: false
---
<!-- 以下所有内容来自：https://github.com/siiway/homepage/blob/main/index.md  -->
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  // 访问根域名时，直接跳到中文版
  router.go('/zh/guide/getting-started')
})
</script>
