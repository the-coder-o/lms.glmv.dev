import { PropsWithChildren } from 'react'
import { Layout } from '@/layouts'

export default function CourseLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>
}
