import { Metadata } from 'next'
import { getMetadata } from '@/helpers/utils'
import { Courses } from '@/modules/Courses'

export const metadata: Metadata = getMetadata('courses')

export default function CoursesPage() {
  return <Courses />
}
