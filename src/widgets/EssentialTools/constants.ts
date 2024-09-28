import LogoOne from 'public/images/logo-one.webp'
import LogoThree from 'public/images/logo-three.webp'
import LogoTwo from 'public/images/logo-two.webp'
import { ToolCardProps } from './ToolCard'

export const partnersEssentialTool = [
  {
    logo: LogoOne,
  },
  {
    logo: LogoThree,
  },
  {
    logo: LogoTwo,
  },
  {
    logo: LogoOne,
  },
]

export const toolCards: ToolCardProps[] = [
  {
    title: 'essentialTool.price',
    description: 'essentialTool.priceDesc',
    backgroundColor: 'lavender',
    marquee: true,
  },
  {
    title: 'essentialTool.easyDownload',
    description: 'essentialTool.easyDownloadDesc',
    image: '/images/essential-tools-lib.webp',
    imageAlt: 'lib-image',
    backgroundColor: 'beige',
    imageMotion: true,
    className: 'w-1/2',
  },
  {
    title: 'essentialTool.analytics',
    description: 'essentialTool.analyticsDesc',
    image: '/images/essential-tool-chart.webp',
    imageAlt: 'chart',
    backgroundColor: 'lavender',
    imageMotion: true,
    className: 'w-full',
  },
  {
    title: 'essentialTool.protection',
    description: 'essentialTool.protectionDesc',
    image: '/images/essential-tools-protected.webp',
    imageAlt: 'protec-image',
    backgroundColor: 'beige',
    imageMotion: true,
    className: 'w-1/2',
  },
]
