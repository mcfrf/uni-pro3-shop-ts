<script setup lang="ts">
import search from '@/components/category/search.vue'
import categoryList from '@/components/category/categoryList.vue'
</script>

<template>
  <view class="category">
    <search></search>
    <categoryList></categoryList>
  </view>
</template>

<style lang="scss">
.category {
  background-color: white;
  padding: 20rpx 0;
  height: 88.6vh;
  overflow: hidden;
}
</style>
