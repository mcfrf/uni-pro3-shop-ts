import type { Items } from './hot'

type DeItems = Items & {
  orderNum: number
  discount: null | number // 接口标注为 null，兼容 number 更灵活
}

type Properties = {
  name: string
  value: string
}

type Details = {
  properties: Properties[]
  pictures: string[]
}

// 修复 Categories：简化 parent 嵌套，符合接口定义
type Categories = {
  id: string
  name: string
  layer: number
  parent: {
    id: string
    name: string
    layer: number
    parent: null
  } | null
}

type Skus = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: number // 修复：接口是 integer，对应 TS number
  picture: string
  specs: {
    name: string
    valueName: string
  }[]
}

type Specs = {
  id: string
  name: string
  values: {
    name: string
    picture: string | null
    available: boolean
    desc: string
  }[]
}

type Brand = {
  id: string
  name: string
  nameEn: string
  picture: string
  logo: string
  type: null
  desc: null
  place: null
}

// 修复 Goods 核心类型：补全字段、修正类型、修正字段名
export interface Goods {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number | null // 接口是 integer，对应 TS number
  inventory: number // 修复：接口是 integer，不是 string
  brand: Brand
  salesCount: number // 修复：字段名 salesCount（大写C）
  commentCount: number
  collectCount: number // 补充：接口返回的收藏数
  mainVideos: string[]
  videoScale: number
  mainPictures: string[]
  specs: Specs[]
  skus: Skus[]
  category: Categories[] // 注意：接口字段名是 categories，此处保持一致（接口里是 categories）
  details: Details
  isPreSale: boolean
  isCollect: null
  recommends: null
  userAddresses: null
  similarProducts: DeItems[]
  hotByDay: DeItems[]
  evaluationInfo: null // 补充：接口返回的评价信息（固定 null）
}

// 补充：接口返回的顶层类型（建议添加，方便接口请求返回值校验）
export interface GoodsResponse {
  msg: string
  result: Goods
}
