'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export const InstantlyBegin = () => {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center">
      <div className="w-auto sm:w-1/2">
        <h2 className="text-[48px] font-semibold text-brand">{t('instantlyBegin.title')}</h2>

        <p className="text-[18px] text-brand">{t('instantlyBegin.description')}</p>
      </div>

      <div className="flex items-center justify-center">
        <Button className="w-40">{t('start')}</Button>
      </div>
    </section>
  )
}
