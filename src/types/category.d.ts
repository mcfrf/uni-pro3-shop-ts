type GoodsItem = {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount: string | null
  orderNum: number
}
type ChildrenItem = {
  id: string
  name: string
  picture: string
  parentId: string | null
  parentName: string | null
  goods: GoodsItem[]
  categories?: null | unknown[]
  brands?: null | unknown[]
  saleProperties?: null | unknown[]
}

export interface Category {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: ChildrenItem[]
}
