import { CourseDetail } from '@/types'
import { axiosInstance } from '../axios-insance'
import { endpoints } from '../endpoints'
import { Response } from '../types'

export const getCourseDetail = async (detailId: string) => {
  const { data } = await axiosInstance.get<Response<CourseDetail>>(
    endpoints.courseId.replace(':id', detailId)
  )

  return data
}
