'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import BonusImage from 'public/images/bonus-bg.webp'

export const Bonus = () => {
  const { t } = useTranslation()

  return (
    <section className="relative">
      <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black/70 to-transparent" />
      <Image
        src={BonusImage}
        alt="bonus"
        width={1000}
        height={500}
        layout="responsive"
        className="h-full max-h-[530px] rounded-md object-cover"
      />

      <div className="absolute bottom-5 left-5 w-full sm:w-1/2 md:bottom-10 md:left-10">
        <h1 className="text-xl font-bold text-white sm:text-3xl md:text-5xl">{`${t('bonus')}: ${t('bonusAbout')}`}</h1>
      </div>
    </section>
  )
}
