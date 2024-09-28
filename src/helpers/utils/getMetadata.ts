import { Metadata } from 'next'
import { appDictionary } from '@/locales'
import { i18n } from '@/shared/i18n'

export const getMetadata = (title: string): Metadata => {
  const t = i18n.getFixedT(i18n.language)

  return {
    title: `${t(title)} | ${appDictionary.brand}`,
    description: `${appDictionary.brand} | ${t(title)}`,
  }
}
