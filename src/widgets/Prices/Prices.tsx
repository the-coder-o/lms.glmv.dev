'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CircleCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { prices } from './constants'

export const Prices = () => {
  const [isYearly, setIsYearly] = useState(false)
  const getPriceMonth = (price: number) => `$${price}/m`
  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-14">
      <div>
        <h2 className="text-center text-[48px] font-bold text-brand">{t('prices')}</h2>

        <div className="flex items-center justify-center">
          <p className="text-center text-[18px] text-brand md:w-1/2">{t('price.description')}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-4">
          <Label
            htmlFor="price-toggle"
            className={`cursor-pointer ${isYearly ? 'text-gray-400' : 'text-brand'}`}
          >
            {t('price.monthly')}
          </Label>

          <Switch
            id="price-toggle"
            checked={isYearly}
            onCheckedChange={(checked) => setIsYearly(checked)}
          />

          <Label
            htmlFor="price-toggle"
            className={`cursor-pointer ${isYearly ? 'text-brand' : 'text-gray-400'}`}
          >
            {t('price.yearly')}
          </Label>
        </div>

        <div className="grid w-full grid-rows-1 gap-5 md:grid-cols-3 [&>*:nth-child(even)]:bg-pink-light [&>*:nth-child(odd)]:bg-blue-light">
          {prices.map((item) => (
            <Card
              key={item.id}
              className="flex size-full min-h-[500px] flex-col justify-between rounded-md p-4"
            >
              <div className="flex flex-col items-start justify-start gap-5">
                <Badge variant="outline">{item.type}</Badge>

                <div>
                  <p className="text-[36px] font-bold text-brand">
                    {getPriceMonth(!isYearly ? item.monthly : item.yearly)}
                  </p>

                  <p className="text-[14px] text-brand">
                    {`${isYearly ? t('price.monthly') : t('price.yearly')} ${t('price.billed')}`}
                  </p>
                </div>
              </div>

              <Separator className="my-5 bg-white" />

              <div className="flex flex-col items-start justify-start gap-3">
                {item.details.map((detail) => (
                  <div key={detail.title} className="flex items-start justify-start gap-2">
                    <CircleCheck strokeWidth={1.5} />
                    <span className="text-[16px] text-brand">{detail.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button className="w-full rounded-md">{t('start')}</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
