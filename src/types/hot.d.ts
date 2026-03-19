export type Items = {
  desc: string
  id: string
  name: string
  picture: string
  price: number
}
interface GoodsItems {
  items: Items[]
  counts: string
  pages: string
  page: string
  pageSize: string
}
export interface SubTypes {
  id: string
  title: string
  goodsItems: GoodsItems
}
export interface Hot {
  title: string
  bannerPicture: string
  id: string
  subTypes: SubTypes[]
}

export type HotData = {
  page: number
  pageSize: number
  subType?: string
}
