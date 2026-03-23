<template>
  <view class="container">
    <view class="sidebar">
      <view class="list">
        <view
          class="list-item flex-center"
          :class="{ 'item-active': index === selected }"
          v-for="(item, index) in sideList"
          :key="index"
          @click="selected = Number(index)"
        >
          <text>{{ item }}</text>
        </view>
      </view>
    </view>
    <view class="main">
      <scroll-view scroll-y>
        <swiper class="banner" autoplay :interval="3000" circular indicator-dots>
          <swiper-item v-for="item in bannerList?.result || []" :key="item.id">
            <image :src="item.imgUrl" mode="scaleToFill"></image>
          </swiper-item>
        </swiper>
        <view class="list" v-for="i in list?.[selected]?.children || []" :key="i.id">
          <view class="header">
            <view class="left">{{ i.name }}</view>
            <view class="right">更多</view>
          </view>
          <view class="grid">
            <view @click="onClick(j.id)" class="grid-item" v-for="j in i.goods" :key="j.id">
              <image :lazy-load="true" :src="j.picture" mode="scaleToFill"></image>
              <view class="text">
                <view class="name ellipsis-dynamic" :style="{ '--line-clamp': 2 }">{{
                  j.name
                }}</view>

                <view class="price">￥{{ j.price }}</view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getBannerApi } from '@/api/home'
import type { BannerItem } from '@/types'
import { getCategoryApi } from '@/api/category'

const s = uni.getSystemInfoSync().safeAreaInsets
console.log('safeArea', s)
const sideList = ref(['居家', '美食', '服饰', '母婴', '个护', '严选', '数码', '运动', '杂项'])
const selected = ref(0)
const bannerList = ref<Result<BannerItem[]>>()
const list = ref()
onLoad(() => {
  getBannerApi(2).then((res) => {
    console.log('bannerList', res)
    bannerList.value = res
  })
  getCategoryApi().then((res) => {
    list.value = res.result || []

    console.log('categoryList', list.value)
    console.log('category---goods', list.value[0].children[0].goods)
  })
})
const onClick = (id: number) => {
  uni.navigateTo({
    url: `/pages/goods/goods?id=${id}`,
  })
}
</script>

<style lang="scss">
.container {
  display: flex;
  height: 100%;
  margin-top: 40rpx;
  .sidebar {
    width: 100px;
    background-color: #f5f5f5;
    text-align: center;
    flex-shrink: 0;
    height: 100%;
    .list {
      display: flex;
      flex-direction: column;
      &-item {
        height: 60px;
        color: #6d6b6b;
        position: relative;
        &::after {
          content: '';
          display: block;
          width: 60%;
          height: 1px;
          background-color: #edeaea;
          position: absolute;
          bottom: 0;
          left: 20%;
        }
      }
      .item-active {
        background-color: #fff;
        position: relative;
        &::before {
          content: '';
          height: 80%;
          border: 5rpx solid #64e02a;
          border-radius: 10rpx;
          position: absolute;
          left: 0;
        }
      }
    }
  }
  .main {
    padding-bottom: 130rpx;
    flex: 1;
    margin: 0 20rpx;
    height: 100%;
    .banner {
      height: 250rpx;
      swiper-item {
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .list {
      .header {
        margin: 20rpx 0;
        display: flex;

        justify-content: space-between;
        .left {
          font-size: 32rpx;
          font-weight: 500;
        }
        .right {
          font-size: 28rpx;
          color: #b0b0af;
        }
      }
      .grid {
        display: grid;
        gap: 20rpx;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 100rpx;
        &-item {
          display: flex;
          flex-direction: column;
          image {
            height: 150rpx;
            width: 100%;
          }
          .text {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .name {
              font-size: 28rpx;
            }
            .price {
              font-size: 30rpx;
              color: #e54e24;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>
