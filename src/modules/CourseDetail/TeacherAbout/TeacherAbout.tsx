import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TeacherType } from '@/types'
import { socialIcons } from './constants'

type Props = {
  teacher: TeacherType
}

export const TeacherAbout = ({ teacher }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="flex w-full flex-col gap-8 overflow-hidden rounded-md border border-gray-200 p-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="inline-block shrink-0 rounded-md border border-gray-200 bg-white p-2 shadow-xl">
          <Image
            src={teacher.image}
            alt={teacher.full_name}
            width={200}
            height={240}
            className="h-60 w-52 rounded-sm object-cover max-md:w-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-2xl font-bold">{teacher.full_name}</h3>
            <p className="text-xl font-medium">{teacher.bio}</p>
          </div>
          <div>
            <div className="flex gap-5 text-base">
              <p className="text-primary/70">{`${t('experience')}:`}</p>
              <span>{teacher.experience}</span>
            </div>

            <div className="flex gap-5 text-base">
              <p className="text-primary/70">{`${t('workPlace')}:`}</p>
              <span>{teacher.workplace}</span>
            </div>
          </div>
          <div className="flex gap-4">
            {socialIcons.map((social, index) => (
              <Link
                key={social.name}
                href={teacher.social_links[index] || '/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 p-2">
                  <social.icon />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="text-base text-primary">{teacher.description}</p>
      </div>
    </div>
  )
}
