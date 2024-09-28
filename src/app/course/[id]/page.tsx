import { Metadata } from 'next'
import { getMetadata } from '@/helpers/utils'
import { CourseDetail } from '@/modules/CourseDetail'

export const metadata: Metadata = getMetadata('courses')

type Props = {
  params: {
    id: string
  }
}

export default function CourseDetailPage({ params }: Props) {
  return <CourseDetail courseId={params.id} />
}
