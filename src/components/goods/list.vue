<template>
  <view class="list" v-if="arr">
    <view class="card1">
      <view class="name d">{{ props.goods?.name }}</view>
      <view class="desc d">{{ props.goods?.desc }}</view>
      <view class="l">
        <view class="item" v-for="i in arr" :key="i.id">
          <text class="tag">{{ i.tag }}</text>

          <text class="content">{{ i.content }}</text></view
        >
      </view>
    </view>
    <view class="detail">
      <view class="description">
        <text class="title">详情</text>
        <view class="item2" v-for="(i, index) in props.goods.details?.properties" :key="index">
          <text class="tag2">{{ i.name }}</text>
          <text class="content2">{{ i.value }}</text>
        </view>
      </view>
      <view class="imgList">
        <image v-for="i in props.goods?.details?.pictures" :key="i" :src="i" mode="widthFix" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Goods } from '@/types/goodsDetail'

import { ref, computed, watch } from 'vue'
const props = defineProps<{ goods: Goods }>()
const specs = computed(() => props.goods?.specs)

type Arr = {
  id: number
  tag: string
  content: string
}
let arr = ref<Arr[]>([])

watch(specs, (val) => {
  arr.value = [
    {
      id: 0,
      tag: '选择',
      content: val[0].values[0].name,
    },
    {
      id: 1,
      tag: '送至',
      content: '请选择收获地址',
    },
    {
      id: 2,
      tag: '服务',
      content: '无忧退 快速退款 免费包邮',
    },
  ]
})
</script>

<style scoped lang="scss">
.list {
  .card1 {
    background-color: white;

    .d {
      padding: 3rpx 0 3rpx 15rpx;
    }
    .name {
      font-size: 40rpx;
    }
    .desc {
      font-size: 32rpx;
      color: #4b8a93;
    }
    .l {
      padding: 20rpx 20rpx;
      .item {
        display: flex;
        align-items: center;
        margin: 10rpx 15rpx;
        padding: 15rpx 0;
        position: relative;
        border-top: 1rpx solid #e0d4d4;
        .tag {
          font-size: 28rpx;
          color: #b3a9a9;
        }
        .content {
          margin-left: 50rpx;
          font-size: 32rpx;
        }
        &::after {
          content: '';
          background-image: url('@/common/img/rightAllow.svg');
          position: absolute;
          right: 10rpx;
          top: 35%;
          opacity: 0.5;
          width: 40rpx;
          height: 40rpx;
          background-size: 100% 100%;
        }
      }
    }
  }
  .detail {
    margin-top: 40rpx;

    background-color: white;
    width: 100%;
    .description {
      padding: 40rpx 20rpx;
      box-shadow: 0 0 10rpx 0 rgba(0, 0, 0, 0.1);
      .title {
        font-size: 40rpx;
        margin-left: 60rpx;
        font-weight: bold;
        position: relative;
        &::before {
          content: '';
          height: 80%;
          width: 10rpx;
          background-color: #65c994;
          position: absolute;
          left: -20rpx;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .item2 {
        display: flex;
        align-items: center;
        margin: 10rpx 10rpx;
        padding: 15rpx 0;
        position: relative;
        border-top: 1rpx solid #e0d4d4;
        display: flex;
        .tag2 {
          width: 12%;
          font-size: 28rpx;
          color: #b3a9a9;
        }
        .content2 {
          flex: 1;
          margin-left: 50rpx;
          font-size: 32rpx;
        }
      }
    }

    .imgList {
      width: 750rpx;
      image {
        width: 750rpx;
        height: 100%;
      }
    }
    padding-bottom: 120rpx;
  }
}
</style>
