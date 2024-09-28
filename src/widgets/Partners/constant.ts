import { FC, SVGProps } from 'react'
import LogoOne from '@/assets/icon/logoipsun.svg'
import LogoTwo from '@/assets/icon/partners-logo.svg'
import LogoThree from '@/assets/icon/partners-logo-other.svg'

type Props = {
  logo: FC<SVGProps<SVGSVGElement>>
}[]

export const partners: Props = [
  {
    logo: LogoOne,
  },
  {
    logo: LogoTwo,
  },
  {
    logo: LogoThree,
  },
  {
    logo: LogoThree,
  },
  {
    logo: LogoThree,
  },
  {
    logo: LogoThree,
  },
]
