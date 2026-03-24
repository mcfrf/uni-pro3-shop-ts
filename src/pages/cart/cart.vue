<script setup lang="ts">
import guess from '@/components/index/guess.vue'
import { getGuessLikeApi } from '@/api/home'
import { ref } from 'vue'
import type { GuessLike } from '@/types'
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
const guessLike = ref<GuessLike>({
  counts: 0,
  pageSize: 10,
  pages: 0,
  page: 0,
  items: [],
})
const getGuessLike = async () => {
  const res = await getGuessLikeApi()
  guessLike.value = res.result
  console.log('guessLike', res)
}
onLoad(async () => {
  await getGuessLike()
})

const isMore = ref(false)
const isFinished = ref(false)
const getMore = async () => {
  isMore.value = true
  guessLike.value.page++
  if (
    !isFinished.value &&
    isMore.value &&
    Math.ceil(guessLike.value.counts / guessLike.value.pageSize) >= guessLike.value.page
  ) {
    uni.showLoading({
      title: '加载中...',
    })
    const res = await getGuessLikeApi({
      page: guessLike.value.page,
      pageSize: guessLike.value.pageSize,
    })
    guessLike.value.items.push(...res.result.items)
    console.log('more', res)
    uni.hideLoading()
    isMore.value = false
  } else {
    isFinished.value = true
    uni.showToast({
      title: '没有更多了',
      icon: 'none',
    })
  }
}
onReachBottom(async () => {
  await getMore()
})
</script>

<template>
  <view class="cart">
    <view class="top1 flex-center">
      <view>登录后可查看购物车中的商品</view>

      <navigator class="btn" url="/pages/login/login" open-type="navigate"> 去登录 </navigator>
    </view>

    <guess :guessLike="guessLike" :isMore="isMore" :isFinished="isFinished"></guess>
  </view>
</template>

<style lang="scss" scoped>
.cart {
  background-color: white;

  .top1 {
    min-height: 60vh;
    flex-direction: column;
    font-size: 35rpx;
  }
  .btn {
    width: fit-content;
    background-color: #2c1212;
    color: white;
    border-radius: 10rpx;
    padding: 5rpx 20rpx;
    margin-top: 20rpx;
  }
}
</style>
