<template>
  <view class="skeleton" v-if="!goods"> </view>

  <view class="goods-detail">
    <view class="swiper-container" @click="previewImage" v-if="goods?.mainPictures">
      <swiper @change="changePic" class="" circular>
        <swiper-item v-for="item in goods.mainPictures" :key="item">
          <image :src="item" mode="aspectFill" />
        </swiper-item>
      </swiper>
      <view class="indicator">{{ currentPic + 1 }}/{{ goods.mainPictures.length }}</view>
    </view>
    <view class="price">￥{{ goods?.price }}</view>
    <list :goods="goods"></list>
    <allow v-show="isAllow" class="show-allow"></allow>
    <view class="tool">
      <view class="tool-left">
        <view class="item">
          <image
            v-show="isFavorite"
            @click="favorite"
            src="@/common/img/hasFavorite.svg"
            mode="aspectFill"
          />
          <image
            v-show="!isFavorite"
            @click="favorite"
            src="@/common/img/favorite.svg"
            mode="scaleToFill"
          />
          <text class="name">收藏</text>
        </view>
        <view class="item">
          <image src="@/common/img/cart.svg" mode="aspectFill" />
          <text class="cart">购物车</text></view
        >
      </view>
      <view class="tool-right">
        <button>加入购物车</button>
        <button>立即购买</button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Goods } from '@/types/goodsDetail'
import list from './list.vue'
import allow from '@/components/index/allow.vue'
import { onPageScroll } from '@dcloudio/uni-app'
const props = defineProps<{ goods: Goods }>()
const currentPic = ref(0)
const changePic = (event: any) => {
  currentPic.value = event.detail.current
}
const previewImage = () => {
  uni.previewImage({
    urls: props.goods.mainPictures,
    current: currentPic.value,
  })
}
const isAllow = ref(false)
onPageScroll((e) => {
  isAllow.value = e.scrollTop > 300 ? true : false
})
const isFavorite = ref(false)
const favorite = () => {
  isFavorite.value = !isFavorite.value
  if (isFavorite.value)
    uni.showToast({
      title: '收藏成功',
      icon: 'success',
    })
  else
    uni.showToast({
      title: '取消收藏',
      icon: 'none',
    })
}
</script>
<style scoped lang="scss">
.skeleton {
  background-color: #f5f5f5;
  height: 700rpx;
}
.show-allow {
  position: fixed;

  right: 24px;
  bottom: 18%;
}
.goods-detail {
  position: relative;
  .swiper-container {
    position: relative;
    swiper {
      height: 700rpx;
      width: 100%;

      swiper-item {
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .indicator {
      position: absolute;
      right: 8%;
      bottom: 7%;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 5rpx 10rpx;
      border-radius: 5rpx;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(4px);
    }
  }
  .price {
    color: #fff;
    font-size: 64rpx;
    font-weight: bold;
    background-color: #35c8a9;
    width: 750rpx;
    padding: 20rpx 0 20rpx 20rpx;
  }
  .tool {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 136rpx;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 20rpx;
    background-color: #fff;
    box-shadow: 0 0 20rpx 0 rgba(0, 0, 0, 0.4);
    &-left {
      display: flex;
      gap: 0 40rpx;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      image {
        width: 60rpx;
        height: 60rpx;
      }
      /*  .item:nth-child(2) image {
        width: 80rpx;
        height: 80rpx;
      } */
      .name {
        font-size: 30rpx;
        color: #333;
        margin-left: 10rpx;
      }
    }
    &-right {
      display: flex;
      justify-content: space-between;
      gap: 0 40rpx;
      button:nth-child(1) {
        background-color: #35c8a9;
        color: #fff;
      }
      button:nth-child(2) {
        background-color: #ff6600;
        color: #fff;
      }
    }
  }
}
</style>
