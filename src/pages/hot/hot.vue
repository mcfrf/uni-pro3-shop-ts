<template>
  <view class="hot"
    ><view class="cover">
      <image :src="list?.bannerPicture" mode="widthFix" />

      <view class="tabs"
        ><text
          :class="active === index ? 'active' : ''"
          @click="onCategory(index)"
          v-for="(i, index) in subTypes"
          :key="i.id"
          >{{ i.title }}</text
        ></view
      >
    </view>
    <view class="grid">
      <view
        class="grid-item flex-center"
        v-for="i in subTypes[active].goodsItems.items"
        :key="i.id"
      >
        <image :src="i.picture" mode="widthFix" :lazy-load="true" />
        <view class="content">
          <view class="name">{{ i.name }}</view>

          <view class="price">{{ i.price }}</view>
        </view>
      </view>
    </view>
    <view v-if="isFinished === active">没有更多了</view>
    <view v-else>...</view>
    <allow class="allow" v-show="isAllow" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { hotRecommendApi } from '@/api/hot'
import allow from '@/components/index/allow.vue'
import { onLoad, onPageScroll, onReachBottom } from '@dcloudio/uni-app'
import type { Hot, SubTypes } from '@/types/hot.d.ts'
import type { PageObj } from '@/types/global'
const arr = ['/hot/preference', '/hot/inVogue', '/hot/oneStop', '/hot/new']
const list = ref<Hot>()
const subTypes = ref<SubTypes[]>([])
const pageObj = ref<PageObj>({
  page: 1,
  pageSize: 30,
})
const url = ref('')
onLoad((options) => {
  url.value = arr[Math.max((Number(options?.id) || 0) - 1, 0)]
  hotRecommendApi(url.value, pageObj.value).then((res) => {
    list.value = res.result
    subTypes.value = res.result.subTypes

    uni.setNavigationBarTitle({ title: res.result.title ?? '特惠推荐' })

    console.log('hotRecommend', res.result)
  })
})
const active = ref(0)
const onCategory = (index: number) => {
  console.log(index)
  active.value = index
}
const isAllow = ref(false)
onPageScroll((e) => {
  isAllow.value = e.scrollTop > 300
})
const isFinished = ref(0)
const getMore = () => {
  pageObj.value.page++
  if (
    Math.ceil(Number(subTypes.value[active.value].goodsItems.counts) / pageObj.value.pageSize) <
    pageObj.value.page
  ) {
    isFinished.value = active.value
    return
  }
  hotRecommendApi(url.value, { ...pageObj.value, subType: subTypes.value[active.value].id }).then(
    (res) => {
      subTypes.value[active.value].goodsItems.items.push(
        ...res.result.subTypes[active.value].goodsItems.items,
      )
    },
  )
}
onReachBottom(() => {
  getMore()
})
</script>

<style lang="scss">
.hot {
  .cover {
    width: 100%;
    height: 225rpx;
    image {
      width: 100%;
      height: 100%;
      border-radius: 0 0 80rpx 80rpx;
    }
    position: relative;
    .tabs {
      position: absolute;
      border-radius: 20rpx;
      box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.2);
      left: 5%;
      bottom: -50rpx;
      z-index: 10;
      background-color: white;
      width: 90%;
      padding: 20rpx;
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-height: 100rpx;
      font-size: 33rpx;
      .active {
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 60%;
          height: 5rpx;
          background-color: #ff6600;
          bottom: -5px;
          left: 20%;
        }
      }
    }
  }
  .grid {
    display: grid;
    gap: 20rpx;
    margin: 80rpx 20rpx 0 20rpx;
    grid-template-columns: repeat(auto-fill, minmax(250rpx, 1fr));
    .grid-item {
      width: 100%;
      height: 400rpx;

      flex-direction: column;
      overflow: hidden;
      image {
        width: 80%;
        height: 70%;
        border-radius: 20rpx;
      }
      .content {
        flex: 1;
        padding: auto 20rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 20rpx;
        align-items: flex-start;
        .price {
          font-size: 36rpx;
          color: #fc0c0c;
          font-weight: 500;
        }
      }
    }
  }
  .allow {
    position: fixed;
    right: 24px;
    bottom: 18%;
  }
}
</style>
