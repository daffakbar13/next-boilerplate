/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */
import { createService } from '@poslive/configs/axios'
import { useQuery } from 'react-query'
import { Service1Dto } from './merchant.dto'

export namespace MerchantService {
  const baseURL = 'merchant.poslive.id/v1'
  const service = createService(baseURL)

  /**
   * @description GetMerchantList
   */

  export function GetMerchantList(page: number, limit: number) {
    return service.get<null, Service1Dto.Profile[]>('/profile', {
      params: { page, limit },
    })
  }

  GetMerchantList.useQuery = (...args: Parameters<typeof GetMerchantList>) =>
    useQuery<Service1Dto.Profile[]>({
      queryKey: [GetMerchantList.name, ...args],
      queryFn: () => GetMerchantList(...args),
    })

  /**
   * @description GetMerchantDetail
   */

  export function GetMerchantDetail(id: number) {
    return service.get<null, Service1Dto.Profile[]>(`/profile/${id}`)
  }

  GetMerchantDetail.useQuery = (...args: Parameters<typeof GetMerchantDetail>) =>
    useQuery<Service1Dto.Profile[]>({
      queryKey: [GetMerchantDetail.name, ...args],
      queryFn: () => GetMerchantDetail(...args),
    })
}
