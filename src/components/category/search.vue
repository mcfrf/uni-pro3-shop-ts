<template>
  <view class="search">
    <view class="content">
      <view class="icon">
        <uni-icons type="search" color="" size="24" />
      </view>
      <swiper :vertical="true" autoplay circular :interval="2000">
        <swiper-item class="" v-for="i in arr" :key="i">{{ i }}</swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script lang="ts" setup>
const arr = ['保温杯', '充电宝', '手机', '平板', '智能音箱']
</script>

<style lang="scss" scoped>
.search {
  height: 70rpx;

  background-color: #f4f2f2;
  border-radius: 30rpx;
  margin: 10rpx 30rpx;
  box-shadow: 0 0 5rpx rgba(0, 0, 0, 0.1);
  .content {
    padding: 0 2ch;
    color: #777575;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0 15rpx;
    swiper {
      height: 100%;
      swiper-item {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
