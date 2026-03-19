<template>
  <div class="guess">
    <view class="title flex-center"> 猜你喜欢 </view>
    <view class="grid">
      <view class="grid-item" v-for="i in props.guessLike.items" :key="i.id">
        <view class="content">
          <!-- 商品图片 -->
          <image :src="i.picture" class="img" :lazy-load="true" mode="widthFix"></image>
          <!-- 文字区域 -->
          <view class="font">
            <view class="name ellipsis-dynamic" :style="{ '--line-clamp': 2 }">
              {{ i.name }}
            </view>
            <view class="price">¥{{ i.price }}</view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="is === 'ff'" class="btm flex-center">
      <text> 没有更多了</text>
    </view>
    <view v-else class="btm flex-center">
      <text v-show="is" v-for="i in 3" :key="i" class="dian"> .</text>
    </view>
  </div>
</template>

<script lang="ts" setup>
import type { GuessLike } from '@/types/index.d.ts'
import { computed } from 'vue'
const props = defineProps<{
  guessLike: GuessLike
  isMore: boolean
  isFinished: boolean
}>()
const is = computed(() => {
  if (props.isFinished) return 'ff'
  return props.isMore
})
</script>

<style lang="scss">
.guess {
  .title {
    font-size: 35rpx;
    font-weight: bold;
    color: #2c8290;
    width: 100%;
    padding: 10rpx 0 30rpx 0rpx;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(100rpx, 1fr));
    gap: 30rpx 20rpx;
    padding: 20rpx;
    box-sizing: border-box;
  }

  .grid-item {
    border-radius: 20rpx 20rpx 0 0;
    box-shadow: 0 0 15rpx rgba(0, 0, 0, 0.1);
    height: 100%;

    .content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .img {
      width: 100%;
      border-radius: 20rpx 20rpx 0 0;
      overflow: hidden;
      flex-shrink: 0;
    }

    .font {
      flex: 1;
      padding: 5rpx 10rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .name {
        font-size: 28rpx;
        color: #333;
        line-height: 1.4;
        width: 100%;
      }

      .price {
        font-size: 32rpx;
        color: #cf4444;
        font-weight: bold;
        margin-top: 10rpx;
      }
    }
  }
  .btm {
    text-align: center;
    color: #2c8290;
    font-weight: bold;
    height: 50rpx;
    padding-bottom: 70rpx;
    .dian {
      opacity: 0;
      font-size: 66rpx;
      animation: ddd 1.5s infinite ease-in-out;
    }
    .dian:nth-child(1) {
      animation-delay: 0s;
    }
    .dian:nth-child(2) {
      animation-delay: 0.2s;
    }
    .dian:nth-child(3) {
      animation-delay: 0.4s;
    }
    @keyframes ddd {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>
