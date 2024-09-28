export type DiscountCourse = {
  _id: string
  name: string
  description: string
  short_description: string
  level: string
}

export type DiscountType = {
  _id: string
  course: DiscountCourse
  discount_percentage: number
}
