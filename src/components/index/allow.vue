<template>
  <view @click="toTop" class="allow-wrap">
    <image src="@/common/img/allow.svg" mode="scaleToFill" class="allow-icon" />
  </view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const toTop = () => {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 300,
  })
}
</script>
<style scoped>
.allow-wrap {
  width: 80rpx;
  height: 80rpx;
  background-color: #f3ecec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.allow-icon {
  width: 80%;
  height: 80%;
}
</style>
