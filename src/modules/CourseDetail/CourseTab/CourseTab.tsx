'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter, useSearchParams } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

type TabValue = 'lessons' | 'teacher' | 'comments'

export const CourseTab = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [currentTab, setCurrentTab] = useState<TabValue>('lessons')

  useEffect(() => {
    const tab = searchParams.get('q') as TabValue

    if (tab && ['lessons', 'teacher', 'comments'].includes(tab)) {
      setCurrentTab(tab)
    }
  }, [searchParams])

  const handleTabChange = (value: string) => {
    setCurrentTab(value as TabValue)
    const newParams = new URLSearchParams(searchParams.toString())

    newParams.set('q', value)
    router.push(`?${newParams.toString()}`, { scroll: false })
  }

  return (
    <div className="flex w-full items-center justify-start">
      <Tabs
        value={currentTab}
        onValueChange={handleTabChange}
        className="flex w-full flex-col gap-5"
      >
        <TabsList className="flex border-b border-gray-200 pb-3">
          <TabsTrigger value="lessons">{t('lessons')}</TabsTrigger>
          <TabsTrigger value="teacher">{t('aboutTeacher')}</TabsTrigger>
          <TabsTrigger value="comments">{t('comments')}</TabsTrigger>
        </TabsList>

        {children}
      </Tabs>
    </div>
  )
}
