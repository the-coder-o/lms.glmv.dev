import { useMemo } from 'react'
import { useGetCategories, useGetCourses } from '@/shared/query-hooks'
import { Courses } from '@/types'

export const useCourseData = () => {
  const { data: courseData, isLoading: coursesLoading } = useGetCourses()
  const { data: categoryData, isLoading: categoriesLoading } = useGetCategories()

  const courses = courseData?.data || []
  const categories = categoryData?.data || []

  const isLoading = coursesLoading || categoriesLoading

  return { courses, categories, isLoading }
}

export const useGroupedCourses = (courses: Courses[]) =>
  useMemo(
    () =>
      courses.reduce(
        (acc, course) => {
          const categoryName = course.category.name

          if (!acc[categoryName]) {
            acc[categoryName] = []
          }
          acc[categoryName].push(course)

          return acc
        },
        {} as Record<string, Courses[]>
      ),
    [courses]
  )
