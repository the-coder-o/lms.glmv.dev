'use client'

import { PropsWithChildren } from 'react'
import { CenterBlock } from '@/components'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-screen flex-col overflow-x-hidden">
    <CenterBlock className="fixed z-50 w-full bg-white">
      <Header />
    </CenterBlock>

    <div className="mb-20 mt-24 w-full flex-1">{children}</div>

    <CenterBlock className="mt-auto bg-brand">
      <Footer />
    </CenterBlock>
  </div>
)
