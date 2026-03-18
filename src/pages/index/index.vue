<script setup lang="ts">
import customNav from '@/components/customNav.vue'
import bannerSwiper from '@/components/bannerSwiper.vue'
import recommend from '@/components/recommend.vue'
import guess from '@/components/guess.vue'
import allow from '@/components/allow.vue'

import { onLoad, onPullDownRefresh, onReachBottom, onPageScroll } from '@dcloudio/uni-app'
import { ref, watch } from 'vue'
import category from '@/components/category.vue'
import { getBannerApi, getCategoryApi, getRecommendApi, getGuessLikeApi } from '@/api/home.ts'
import type { GuessLike, BannerItem, CategoryItem, recommendItem } from '@/types/index.d.ts'
const list = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const recommendList = ref<recommendItem[]>([])
const guessLike = ref<GuessLike>({
  counts: 0,
  pageSize: 10,
  pages: 0,
  page: 0,
  items: [],
})
const getBanner = async () => {
  const res = await getBannerApi()
  list.value = res.result
  console.log('banner', res)
}
const getCategory = async () => {
  const res = await getCategoryApi()
  categoryList.value = res.result
  console.log('category', res)
}
const getRecommend = async () => {
  const res = await getRecommendApi()
  recommendList.value = res.result
  console.log('recommend', res)
}
const getGuessLike = async () => {
  const res = await getGuessLikeApi()
  guessLike.value = res.result
  console.log('guessLike', res)
}
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
const showAllow = ref(false)

const toTop = () => {
  console.log('回到顶部')
  uni.pageScrollTo({ scrollTop: 0, duration: 300 })
}
const loadAllData = async () =>
  await Promise.all([getBanner(), getCategory(), getRecommend(), getGuessLike()])
onPageScroll((e) => {
  showAllow.value = e.scrollTop > 300
})
onLoad(async () => {
  await loadAllData()
})
onReachBottom(async () => {
  await getMore()
})
onPullDownRefresh(async () => {
  try {
    console.log('下拉刷新')
    await loadAllData()
  } catch (e) {
    console.log(e)
  } finally {
    uni.stopPullDownRefresh()
    uni.pageScrollTo({ scrollTop: 0, duration: 0 })
  }
})
</script>

<template>
  <view class="index">
    <custom-nav></custom-nav>

    <view>
      <banner-swiper :list="list"></banner-swiper>
      <category :categoryList="categoryList"></category>
      <recommend :recommendList="recommendList"></recommend>
      <guess :guessLike="guessLike" :isMore="isMore" :isFinished="isFinished"></guess>
    </view>
    <allow v-show="showAllow" class="show-allow" @click="toTop"></allow>
  </view>
</template>

<style scoped lang="scss">
.index {
  .show-allow {
    position: fixed;

    right: 24px;
    bottom: 18%;
  }
}
</style>
