import { CategoriesType } from './categories'

export type Courses = {
  _id: number
  name: string
  short_description: string
  description: string
  benefits: string[]
  module: string[]
  short_video: string
  price: number
  lessons: string[]
  level: string
  banner_image: string
  teacher: string
  category: CategoriesType
}
