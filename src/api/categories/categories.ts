import { CategoriesType } from '@/types'
import { axiosInstance } from '../axios-insance'
import { endpoints } from '../endpoints'
import { Response } from '../types'

export const getCategories = async () => {
  const { data } = await axiosInstance.get<Response<CategoriesType[]>>(endpoints.categories)

  return data
}
