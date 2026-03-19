import { http } from '@/utils/http'
import type { Hot, HotData } from '@/types/hot.d.ts'
export const hotRecommendApi = (url: string, data: HotData) => {
  return http<Hot>({
    url,
    method: 'GET',
    data,
  })
}
