import { Metadata } from 'next'
import { getMetadata } from '@/helpers/utils'
import { Contact } from '@/modules/Contact'

export const metadata: Metadata = getMetadata('')

export default function ContactPage() {
  return <Contact />
}
