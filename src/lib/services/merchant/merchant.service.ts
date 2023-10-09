/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */
import { createService } from '@poslive/configs/axios'
import { useQuery } from 'react-query'
import { MerchantDto } from './merchant.dto'

export namespace MerchantService {
  const baseURL = 'merchant.poslive.id/v1'
  const service = createService(baseURL)

  /**
   * @description GetMerchantList
   */

  export function GetMerchantList(page: number, limit: number) {
    return service.get<null, MerchantDto.Profile[]>('/profile', {
      params: { page, limit },
    })
  }

  GetMerchantList.useQuery = (...args: Parameters<typeof GetMerchantList>) =>
    useQuery<MerchantDto.Profile[]>({
      queryKey: [GetMerchantList.name, ...args],
      queryFn: () => GetMerchantList(...args),
    })

  /**
   * @description GetMerchantDetail
   */

  export function GetMerchantDetail(id: number) {
    return service.get<null, MerchantDto.Profile[]>(`/profile/${id}`)
  }

  GetMerchantDetail.useQuery = (...args: Parameters<typeof GetMerchantDetail>) =>
    useQuery<MerchantDto.Profile[]>({
      queryKey: [GetMerchantDetail.name, ...args],
      queryFn: () => GetMerchantDetail(...args),
    })
}
