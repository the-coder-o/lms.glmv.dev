import { Metadata } from 'next'
import { getMetadata } from '@/helpers/utils'
import { Layout } from '@/layouts'
import { NotFound } from '@/modules/NotFound'

export const metadata: Metadata = getMetadata('notFound.message')

export default function NotFoundPage() {
  return (
    <Layout>
      <NotFound />
    </Layout>
  )
}
