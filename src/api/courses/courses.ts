import { Courses } from '@/types'
import { axiosInstance } from '../axios-insance'
import { endpoints } from '../endpoints'
import { Response } from '../types'

export const getCourses = async () => {
  const { data } = await axiosInstance.get<Response<Courses[]>>(endpoints.courses)

  return data
}
