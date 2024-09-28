import GmailIcon from '@/assets/icon/gmail.svg'
import InstagramIcon from '@/assets/icon/instagram.svg'
import LinkedInIcon from '@/assets/icon/linkedin.svg'
import TwitterIcon from '@/assets/icon/twitter.svg'
import { ROUTES } from '@/constants'

export const footerMenu = [
  {
    title: 'home',
    link: ROUTES.home,
  },
  {
    title: 'functional',
    link: ROUTES.courses,
  },
  {
    title: 'prices',
    link: ROUTES.faq,
  },
  {
    title: 'questions',
    link: ROUTES.contact,
  },
]

export const footerSocialMedia = [
  {
    logo: TwitterIcon,
    link: '',
  },
  {
    logo: InstagramIcon,
    link: '',
  },
  {
    logo: LinkedInIcon,
    link: '',
  },
  {
    logo: GmailIcon,
    link: '',
  },
]
