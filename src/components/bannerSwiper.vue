<script setup lang="ts">
import { ref } from 'vue'

import type { SwiperList } from '@/types/index.d.ts'
const props = defineProps<{
  list: SwiperList[]
}>()
console.log('子组件：', props.list)
</script>

<template>
  <swiper indicator-dots autoplay :interval="3000" circular class="banner-swiper">
    <swiper-item v-for="item in props.list" :key="item.id">
      <image :src="item.imgUrl" mode="aspectFill" />
    </swiper-item>
  </swiper>
</template>
<style scoped lang="scss">
.banner-swiper {
  height: 300rpx;
  image {
    width: 100%;
    height: 100%;
  }
}
</style>
