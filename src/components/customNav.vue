<script setup>
const safeAreaTop = uni.getSystemInfoSync().safeAreaInsets.top
</script>

<template>
  <view class="custom-nav" :style="{ paddingTop: safeAreaTop ? safeAreaTop + 'px' : '10px' }">
    <view class="custom-nav-row1">
      <img class="title-logo" src="@/static/images/logo.png" alt="小兔鲜儿Logo" />
      <text class="sub-title">新鲜 · 亲民 · 快捷</text>
    </view>
    <view class="custom-nav-row2">
      <text class="icon-search"></text>

      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.custom-nav {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  padding: 0 40rpx 10rpx 40rpx;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
  .custom-nav-row1 {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    padding: 0 20rpx;
    .title-logo {
      width: 166rpx;
      height: 39rpx;

      margin-right: 20rpx;
    }

    .sub-title {
      font-size: 24rpx;
      color: #fff;
      padding-left: 20rpx;
      border-left: 1rpx solid rgba(255, 255, 255, 0.8);
    }
  }

  .custom-nav-row2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12rpx 20rpx;
    padding: 15rpx 20rpx;
    border-radius: 20rpx;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.444);

    .icon-search::after {
      content: '搜索商品';
      margin-left: 10rpx;
    }
  }
}
</style>
