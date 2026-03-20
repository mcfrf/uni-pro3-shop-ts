<template>
  <view class="goods-detail">
    <goods-detail :goods="goods!"> </goods-detail>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { Goods } from '@/types/goodsDetail'
import { getGoodsInfoApi } from '@/api/goods'
import goodsDetail from '@/components/goods/goodsDetail.vue'

const goods = ref<Goods>()
onLoad((options) => {
  getGoodsInfoApi(options?.id ?? '1').then((res: Result<Goods>) => {
    console.log('goodsInfo', res.result)
    goods.value = res.result
  })
})
</script>
<style scoped lang="scss"></style>
