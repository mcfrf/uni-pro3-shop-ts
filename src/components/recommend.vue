<template>
  <view class="recommend">
    <view class="grid">
      <view class="grid-item" v-for="i in recommendList" :key="i.id">
        <view class="title">
          <text class="title-text">{{ i.title }}</text>
          <text class="title-alt">{{ i.alt }}</text>
        </view>
        <view class="imgList">
          <image v-for="item in i.pictures" :key="item" :src="item" mode="aspectFit" />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { recommendItem } from '@/types/index.d.ts'
const props = defineProps<{
  recommendList: recommendItem[]
}>()
</script>

<style lang="scss">
.recommend {
  margin: 20rpx 0;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250rpx, 1fr));
    margin: 0 20rpx;
    border-radius: 10rpx;
    background-color: white;
    background-image: linear-gradient(#e5e5e5, #e5e5e5),
      /* 竖线 */ linear-gradient(#e5e5e5, #e5e5e5); /* 横线 */
    background-size: 1rpx 100%, 100% 1rpx; /* 线宽和高度 */
    background-position: center center; /* 线的位置 */
    background-repeat: no-repeat;
    &-item {
      box-sizing: border-box;
      padding: 20rpx 25rpx 10rpx 25rpx;

      .title {
        &-text {
          font-size: 33rpx;
          font-weight: 500;
        }
        &-alt {
          margin-left: 30rpx;
          font-size: 26rpx;

          color: #7c7878;
        }
      }

      .imgList {
        display: flex;

        width: 100%;
        height: 230rpx;
        image {
          width: 50%;
          height: 100%;
        }
      }
    }
  }
}
</style>
