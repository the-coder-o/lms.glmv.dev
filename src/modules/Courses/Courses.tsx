'use client'

import { useCallback, useMemo, useState } from 'react'
import { CenterBlock, Spinner } from '@/components'
import { useCourseData } from '@/helpers/hooks'
import { useGroupedCourses } from '@/helpers/hooks/useCourses'
import { Category } from './Category'
import { CourseList } from './CourseList'

export const Courses = () => {
  const [activeCategory, setActiveCategory] = useState<string>('')
  const { courses, categories, isLoading } = useCourseData()
  const groupedCourses = useGroupedCourses(courses)

  const handleSetActiveCategory = useCallback((category: string) => {
    setActiveCategory(category)
  }, [])

  const orderedCategories = useMemo(() => {
    if (!activeCategory) {
      return Object.keys(groupedCourses)
    }

    return [
      activeCategory,
      ...Object.keys(groupedCourses).filter((name) => name !== activeCategory),
    ]
  }, [activeCategory, groupedCourses])

  if (isLoading) {
    return <Spinner />
  }

  if (!categories.length || !courses.length) {
    return null
  }

  return (
    <CenterBlock className="mt-4">
      <div className="flex flex-col gap-10">
        <Category
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={handleSetActiveCategory}
        />
        <div className="flex flex-col gap-10">
          {orderedCategories.map((categoryName) => (
            <CourseList
              key={categoryName}
              courses={groupedCourses[categoryName]}
              categoryName={categoryName}
            />
          ))}
        </div>
      </div>
    </CenterBlock>
  )
}
