export interface Login {
  id: string
  mobile: string
  account: string
  nickname: string | null
  avatar: string
  token: string
}
export interface LoginParams {
  code: string
  encryptedData: string
  iv: string
}
