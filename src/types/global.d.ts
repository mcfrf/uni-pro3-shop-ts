export {}

export type PageObj = {
  page: number
  pageSize: number
  subType?: string
}

declare global {
  type Result<T> = {
    code: string
    msg: string
    result: T
  }
}
