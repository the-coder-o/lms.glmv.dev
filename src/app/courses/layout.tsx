import { PropsWithChildren } from 'react'
import { Layout } from '@/layouts'

export default function CoursesLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>
}
