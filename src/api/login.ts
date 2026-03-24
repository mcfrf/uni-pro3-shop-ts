import { http } from '@/utils/http'
import type { Login, LoginParams } from '@/types/login'
export const mockLoginApi = (phoneNumber: string) => {
  return http<Login>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: {
      phoneNumber,
    },
  })
}

export const wxLoginApi = (data: LoginParams) => {
  return http<Login>({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}
