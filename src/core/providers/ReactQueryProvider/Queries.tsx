/* eslint-disable import/no-extraneous-dependencies */
// import { useQueries } from 'react-query'
import { MerchantService } from '@poslive/lib/services/merchant/merchant.service'
import React from 'react'
import { useQueries } from 'react-query'

export default function Queries() {
  // const q = useQueryKeyStore()
  useQueries([
    {
      queryKey: MerchantService.GetMerchantList.name,
      queryFn: MerchantService.GetMerchantList,
    },
  ])

  return <></>
}
