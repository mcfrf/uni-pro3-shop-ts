<template>
  <view class="skeleton-container">
    <swiper class="banner sk" autoplay circular indicator-dots :interval="3000">
      <swiper-item class="sk" v-for="i in 5" :key="i" style="height: 300rpx"> </swiper-item>
    </swiper>
    <view class="category-grid">
      <view class="category-grid-item sk" v-for="i in 10" :key="i"></view>
    </view>
    <view class="recommend">
      <view class="recommend-item sk" v-for="i in 4" :key="i"></view>
    </view>
    <view class="guess sk"> </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.skeleton-container {
  height: 88vh;
  .banner {
    width: 100%;
    height: 300rpx;
  }
  .category-grid {
    margin: 75rpx 20rpx;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20rpx;
    .category-grid-item {
      width: 70%;
      height: 80%;
      min-height: 80rpx;
      border-radius: 10rpx;

      margin-left: 15rpx;
      margin-bottom: 35rpx;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        height: 24rpx;
        width: 80%;
        bottom: -36rpx;

        left: 10%;
        background-color: #ece8e8;
      }
    }
  }
  .recommend {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;
    height: 400rpx;
    margin: 30rpx;
    .recommend-item {
      width: 100%;
      height: 200rpx;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
    }
  }
  .guess {
    height: 100rpx;
    margin: 20rpx 15%;
    text-align: center;
    margin-top: 100rpx;
  }
}
.sk {
  background-color: #ece8e8;
  box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
}
</style>
