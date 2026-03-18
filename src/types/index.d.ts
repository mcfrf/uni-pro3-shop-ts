export interface SwiperList {
  id: number | string
  imgUrl: string
  hrefUrl: string
  type: number
}
export interface BannerItem {
  id: string | number
  imgUrl: string
  hrefUrl: string
  type: number
}
export interface CategoryItem {
  id: string
  name: string
  icon: string
}
export interface recommendItem {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}
type GuessItemList = {
  id: string
  name: string
  price: number
  desc: string
  picture: string
  discount: number
  orderNum: number
}
export interface GuessLike {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: Array<GuessItemList>
}
