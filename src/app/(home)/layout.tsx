import { PropsWithChildren } from 'react'
import { Layout } from '@/layouts'

export default function HomeLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>
}
