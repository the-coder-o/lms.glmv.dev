import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Courses } from '@/types'
import { CourseCard } from '../CourseCard'

type Props = {
  courses?: Courses[]
  categoryName: string
}

export const CourseList = memo(({ courses = [], categoryName }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">{categoryName}</h1>
        <Badge
          variant="outline"
          className="flex size-8 items-center justify-center rounded-full border-black/10 p-0 text-sm text-gray-500"
        >
          {courses.length}
        </Badge>
      </div>
      <div>
        {courses.length ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center text-3xl font-bold text-brand/50">
            {t('course.empty')}
          </div>
        )}
      </div>
    </div>
  )
})

CourseList.displayName = 'CourseList'
