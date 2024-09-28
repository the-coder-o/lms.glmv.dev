import { CategoriesType } from './categories'
import { TeacherType } from './teacher'

type CourseDiscountType = {
  _id: string
  course: string
  discount_percentage: number
  start_date: string
  end_date: string
  is_active: true
}

type CourseLessons = {
  _id: string
  name: string
  description: string
  youtube_link: string
  download_link: string
  course: string
  is_open: boolean
  module: string
  order: number
  duration: number
  banner_image: string
}

export type CourseModules = {
  _id: string
  name: string
  description: string
  order: number
  course: string
  lessons: CourseLessons[]
}

type CourseComments = {
  _id: number
  comment_body: string
}

export type CourseDetail = {
  _id: string
  name: string
  description: string
  short_description: string
  banner_image: string
  level: string
  benefits: string[]
  short_video: string
  price: number
  category: CategoriesType
  teacher: TeacherType
  discount: CourseDiscountType
  modules: CourseModules[]
  comments: CourseComments
  student_count: number
}
