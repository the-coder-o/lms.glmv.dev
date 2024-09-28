'use client'

import { ReactNode, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Clock, Globe, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials, getPrice } from '@/helpers/utils'
import { CourseDetail } from '@/types'
import { PaymentMethods } from './PaymentMethods'

type Props = {
  courseAbout: CourseDetail
}

type infoItemProps = {
  icon: ReactNode
  label: string
  value: string
}

export const CourseAbout = ({ courseAbout }: Props) => {
  const { t } = useTranslation()

  const lessonCount = useMemo(
    () =>
      courseAbout.modules?.reduce((total, module) => total + (module.lessons?.length || 0), 0) || 0,
    [courseAbout]
  )

  return (
    <div className="w-[400px] overflow-hidden rounded-r-md border-r border-gray-300 bg-skies max-md:w-full max-md:rounded-r-none">
      <div className="flex h-full flex-col justify-around">
        <div className="flex items-center gap-3 px-4 py-6">
          <Avatar className="size-14 border-2 border-white">
            <AvatarImage
              src={courseAbout.teacher.image}
              alt={courseAbout.teacher.full_name}
              className="object-cover"
            />
            <AvatarFallback>{getInitials(courseAbout.teacher.full_name)}</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm text-gray-500">{t('Mentor')}</p>
            <h4 className="text-lg font-semibold">{courseAbout.teacher.full_name}</h4>
          </div>
        </div>

        <div className="space-y-3 bg-white px-4 py-6">
          <InfoItem icon={<Clock className="size-5" />} label={t('term')} value="3 hafta" />
          <InfoItem icon={<Globe className="size-5" />} label={t('courseLang')} value="O'zbek" />
          <InfoItem
            icon={<BookOpen className="size-5" />}
            label={t('lessonCount')}
            value={`${lessonCount} ta`}
          />
          <InfoItem
            icon={<Users className="size-5" />}
            label={t('studentCount')}
            value={`${courseAbout.student_count} ta`}
          />
        </div>

        <div className="p-4">
          <p className="mb-1 text-sm text-gray-500">{t('coursePrice')}</p>
          <h5 className="mb-4 text-2xl font-bold">{getPrice(courseAbout.price)} so'm</h5>

          <PaymentMethods />
        </div>
      </div>
    </div>
  )
}

const InfoItem = ({ icon, label, value }: infoItemProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-gray-600">
      {icon}
      <p>{label}:</p>
    </div>
    <p className="font-medium">{value}</p>
  </div>
)

export default CourseAbout
