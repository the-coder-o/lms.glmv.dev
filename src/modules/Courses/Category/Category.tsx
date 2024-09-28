import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CircleX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CategoryProps } from '../types'

export const Category = ({ categories, activeCategory, setActiveCategory }: CategoryProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const activeCategoryParam = searchParams.get('category') || ''

    setActiveCategory(activeCategoryParam)
  }, [searchParams, setActiveCategory])

  const handleCategoryClick = (type: string) => {
    const params = new URLSearchParams(window.location.search)

    if (type === activeCategory) {
      params.delete('category')
    } else {
      params.set('category', type)
    }

    router.push(`?${params.toString()}`)
  }

  const buttonVariants = (type: string) =>
    cn(
      `rounded-full border-none px-4 text-base flex gap-5 ${type !== activeCategory ? 'bg-accent' : ''}`
    )

  return (
    <div className="flex gap-[10px] overflow-x-auto overflow-y-hidden pb-2">
      {categories?.map((item) => (
        <Button
          key={item._id}
          variant={item.name === activeCategory ? 'default' : 'outline'}
          onClick={() => handleCategoryClick(item.name)}
          className={buttonVariants(item.name)}
        >
          <span>{item.name}</span>
          {item.name === activeCategory && <CircleX />}
        </Button>
      ))}
    </div>
  )
}
