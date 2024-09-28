import Link from 'next/link'
import LogoIcon from 'public/logo.svg'
import { ROUTES } from '@/constants'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => (
  <Link href={ROUTES.home}>
    <LogoIcon className={cn(className)} />
  </Link>
)
