'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components'
import { Button } from '@/components/ui/button'
import { mainMenu, STUDENT_APP_LINK } from '@/constants'
import { cn } from '@/lib/utils'

export const Header = () => {
  const pathname = usePathname()
  const { t } = useTranslation()

  return (
    <div className="flex w-full items-center justify-between py-5">
      <Logo className="text-brand" />

      <nav className="flex gap-10">
        <ul className="hidden gap-10 sm:flex sm:items-center">
          {mainMenu.map(({ title, link }) => (
            <li key={title}>
              <Link
                href={link}
                className={cn(
                  'whitespace-nowrap font-semibold hover:text-text-color',
                  link === pathname ? 'text-text-color' : 'text-text-hover'
                )}
              >
                {t(title)}
              </Link>
            </li>
          ))}
        </ul>

        <ul>
          {STUDENT_APP_LINK && (
            <li>
              <Button asChild className="w-36 rounded-sm text-white hover:text-white">
                <Link href={STUDENT_APP_LINK}>{t('enter')}</Link>
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}
