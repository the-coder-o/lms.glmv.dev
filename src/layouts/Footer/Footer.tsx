'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { CenterBlock, Logo } from '@/components'
import { appDictionary } from '@/locales'
import { footerMenu, footerSocialMedia } from './constants'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      {/* <footer className="bg-brand py-10">
        <CenterBlock>
          <div className="flex flex-col gap-5 py-10 md:flex md:flex-row md:items-center md:justify-between">
            <div className="flex items-start justify-start gap-5">
              <Logo className="text-white" />

              <h2 className="text-[28px] font-semibold text-white">{appDictionary.brand}</h2>
            </div>

            <nav>
              <ul className="flex flex-col gap-6 md:flex md:flex-row md:items-center md:justify-end">
                {footerMenu.map(({ title, link }) => (
                  <li key={title}>
                    <Link href={link} className="text-white hover:text-white/70">
                      {t(title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-5 border-t border-white/20 pt-10 md:flex-row">
            <p className="text-[14px] text-dark-souls">{t('footer.poweredBy')}</p>

            <div className="flex items-center justify-center gap-5">
              <nav>
                <ul className="flex items-center gap-5">
                  {footerSocialMedia.map((item) => (
                    <li key={item.link}>
                      <Link href={item.link} target="_blank" rel="noopener noreferrer">
                        <item.logo className="size-5 text-white hover:text-white/70" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </CenterBlock>
      </footer> */}
    </>
  )
}
