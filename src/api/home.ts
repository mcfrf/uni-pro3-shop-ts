import { http } from '@/utils/http.ts'
import type { GuessLike, BannerItem, CategoryItem, recommendItem } from '@/types/index.d.ts'
export const getBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}

export const getCategoryApi = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

export const getRecommendApi = () => {
  return http<recommendItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}

type PagesParams = {
  page: number
  pageSize: number
}
export const getGuessLikeApi = (data?: PagesParams) => {
  return http<GuessLike>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
}
