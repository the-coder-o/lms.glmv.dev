'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import CourseFlowImage from 'public/images/product-of-one-day.webp'
import { Button } from '@/components/ui/button'

export const CourseFlow = () => {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col items-center justify-between gap-14 md:flex-row">
      <div className="flex flex-col items-start justify-center gap-4 text-center md:items-start md:justify-start md:text-start">
        <p className="text-lg text-text-color">{t('courseFlow.content')}</p>

        <div className="m-auto flex items-center justify-center md:m-px">
          <Button className="w-40 rounded-sm">{t('start')}</Button>
        </div>
      </div>

      <div className="w-full max-w-[380px] p-5">
        <Image
          src={CourseFlowImage}
          alt="Course Flow"
          className="h-auto w-full object-contain"
          priority
        />
      </div>
    </section>
  )
}
