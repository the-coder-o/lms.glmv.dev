'use client'

import { PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18n } from '@/shared/i18n'
import { QueryProvider } from './QueryProvider'
import { ThemeProvider } from './ThemeProvider'

export const Provider = ({ children }: PropsWithChildren) => (
  <ThemeProvider defaultTheme="light" attribute="class">
    <QueryProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </QueryProvider>
  </ThemeProvider>
)
