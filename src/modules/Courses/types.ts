import { CategoriesType } from '@/types'

export type CategoryProps = {
  categories: CategoriesType[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}
