import { DiscountType } from '@/types'
import { axiosInstance } from '../axios-insance'
import { endpoints } from '../endpoints'
import { Response } from '../types'

export const getDiscount = async (id: string) => {
  const discountId = endpoints.discountId.replace(':id', id)
  const { data } = await axiosInstance.get<Response<DiscountType>>(discountId)

  return data
}
