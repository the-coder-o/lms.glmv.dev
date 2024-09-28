import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ROUTES } from '@/constants'
import { getPrice } from '@/helpers/utils'
import { cn } from '@/lib/utils'
import { Courses } from '@/types'

type Props = {
  course: Courses
}

export const CourseCard = memo(({ course }: Props) => {
  const { t } = useTranslation()
  const router = useRouter()

  const getLessonCount = (count: string[]) => `${t('lessonCount')}: ${count.length}`

  const badgeVariant = cn(
    'flex items-center border border-white bg-white/50 text-[14px] text-brand/80 hover:bg-white/60'
  )

  const handleClickButton = () => {
    router.push(ROUTES.courseDetail.replace(':id', String(course._id)))
  }

  return (
    <Card key={course._id} className="mt-5 h-full overflow-hidden rounded-[24px] shadow-none">
      <div className="relative h-full max-h-[200px]">
        <Image
          src={course.banner_image}
          alt={course.name}
          className="size-full object-cover"
          width={500}
          height={300}
        />
        <div className="absolute bottom-5 left-5 flex gap-[5px]">
          <Badge className={badgeVariant}>
            <span className="mr-2 block size-1.5 rounded-full bg-brand/80" aria-hidden="true" />
            {course.level}
          </Badge>
          <Badge className={badgeVariant}>{getLessonCount(course.lessons)}</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-b-[24px] border border-black/10 p-5">
        <h3 className="mb-2 text-[20px] font-medium">{t(course.name)}</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[14px] line-through opacity-60">{getPrice(course.price)}</p>
            <p className="text-[25px] font-bold">{getPrice(course.price)}</p>
          </div>
          <Button asChild onClick={handleClickButton} className="cursor-pointer">
            <span>{t('seeCourse')}</span>
          </Button>
        </div>
      </div>
    </Card>
  )
})
