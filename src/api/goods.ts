import { http } from '@/utils/http'
import type { Goods } from '@/types/goodsDetail'
export const getGoodsInfoApi = (id: string) => {
  return http<Goods>({
    url: '/goods',
    method: 'GET',
    data: { id },
  })
}
