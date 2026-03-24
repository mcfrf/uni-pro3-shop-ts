export const goBack = (url = '/pages/index/index') => {
  const pages = getCurrentPages()
  console.log('pages', pages)
  if (pages.length > 1) {
    uni.navigateBack()
  } else {
    uni.switchTab({ url })
  }
}
