<script setup lang="ts">
import { ref } from 'vue'
import type { CategoryItem } from '@/types/index.d.ts'
const props = defineProps<{
  categoryList: CategoryItem[]
}>()
</script>
<template>
  <view class="category">
    <view class="grid-item flex-center" v-for="i in categoryList" :key="i.id">
      <image class="image" :src="i.icon" mode="aspectFill"></image>
      <view class="grid-item-name">{{ i.name }}</view>
    </view>
  </view>
</template>
<style scoped lang="scss">
.category {
  margin: 20rpx 0;
  padding: 20rpx;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100rpx, 1fr));
  gap: 20rpx 50rpx;
  .grid-item {
    flex-direction: column;
    .image {
      max-width: 100rpx;
      max-height: 100rpx;
    }
  }
}
</style>
