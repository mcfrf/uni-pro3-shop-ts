<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import { mockLoginApi } from '@/api/login'
const memberStore = useMemberStore()
let code = ''
onLoad(async () => {
  const res = await wx.login()
  console.log('wx.login', res)
})
const loginInfo = ref({
  code: '',
  iv: '',
  encryptedData: '',
})
const getPhoneNumber: UniHelper.ButtonOnGetphonenumber = (e: any) => {
  loginInfo.value = {
    code,
    iv: e.detail.iv,
    encryptedData: e.detail.encryptedData,
  }
  console.log('loginInfo', loginInfo.value)
}
const mockLogin = async () => {
  const res = await mockLoginApi('13800000000')
  console.log('mockLogin', res)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
  </view>
  <view>
    <button
      @getphonenumber="getPhoneNumber"
      open-type="getPhoneNumber"
      size="mini"
      plain
      type="primary"
    >
      获取用户信息
    </button>
    <button @tap="mockLogin">模拟登录</button>
  </view>
</template>

<style lang="scss">
//
</style>
