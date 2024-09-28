'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { CenterBlock, Spinner } from '@/components'
import { TabsContent } from '@/components/ui/tabs'
import { DRMConfig } from '@/constants'
import { VideoPlayer } from '@/features/videoPlayer'
import { useGetCourseDetail } from '@/shared/query-hooks'
import PriceCard from '../Courses/price-card'
import { CourseAbout } from './CourseAbout'
import { CourseBreadcrumb } from './CourseBreadcrumb'
import { CourseTab } from './CourseTab'
import { Lessons } from './Lessons'
import { TeacherAbout } from './TeacherAbout'
import { CourseDetailProps } from './types'

export const CourseDetail = ({ courseId }: CourseDetailProps) => {
  const { data, isLoading } = useGetCourseDetail(courseId)
  const searchParams = useSearchParams()
  const lessonId = searchParams.get('lesson')

  const courseDetail = data?.data

  const selectedLesson = useMemo(
    () =>
      lessonId
        ? courseDetail?.modules
            .flatMap((module) => module.lessons)
            .find((lesson) => lesson._id === lessonId)
        : null,
    [lessonId, courseDetail]
  )

  if (isLoading || !courseDetail) {
    return <Spinner />
  }

  return (
    <CenterBlock>
      <div className="flex flex-col gap-5">
        <CourseBreadcrumb pageName={courseDetail.name} />
        <div className="space-y-3">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">{courseDetail.name}</h1>

          <div className="flex w-full flex-col lg:flex-row">
            <div className="w-full">
              <VideoPlayer
                src={selectedLesson ? selectedLesson.youtube_link : courseDetail.short_video}
                drmConfig={DRMConfig}
              />
            </div>
            <CourseAbout courseAbout={courseDetail} />
          </div>
        </div>
        <CourseTab>
          <TabsContent value="lessons">
            <Lessons module={courseDetail.modules} />
          </TabsContent>
          <TabsContent value="teacher">
            <TeacherAbout teacher={courseDetail.teacher} />
          </TabsContent>
          <TabsContent value="comments">
            <h3 className="text-center text-2xl font-bold text-primary/50">Ulgurmadim :(</h3>
          </TabsContent>
        </CourseTab>
        <PriceCard />
      </div>
    </CenterBlock>
  )
}
