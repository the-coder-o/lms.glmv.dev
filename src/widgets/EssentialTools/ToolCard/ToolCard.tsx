import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { EssentialToolsMarquee } from '../EssentialToolsMarquee'

export type ToolCardProps = {
  title: string
  description: string
  image?: string
  imageAlt?: string
  imageMotion?: boolean
  backgroundColor: string
  marquee?: boolean
  className?: string
}

export const ToolCard = ({
  title,
  description,
  image,
  imageAlt,
  imageMotion = false,
  backgroundColor,
  marquee = false,
  className,
}: ToolCardProps) => {
  const { t } = useTranslation()

  const cardClasses = cn('flex size-full w-full flex-col overflow-hidden', {
    'gap-20': marquee,
    'justify-between': !marquee,
    'bg-lavender': backgroundColor === 'lavender',
    'bg-dark-beige': backgroundColor === 'beige',
  })

  return (
    <Card className={cardClasses}>
      <div className="px-8 pt-8">
        <h3 className="text-4xl font-semibold">{t(title)}</h3>
        <p>{t(description)}</p>
      </div>

      {marquee && (
        <div className="flex h-full flex-col items-center justify-start gap-5">
          <EssentialToolsMarquee />
          <EssentialToolsMarquee direction="right" />
          <EssentialToolsMarquee />
        </div>
      )}

      {image && imageAlt && (
        <div className="flex w-full items-end justify-end">
          <motion.div
            whileHover={{ scale: imageMotion ? 1.1 : 1, x: imageMotion ? -20 : 0 }}
            whileTap={{ scale: 1.3 }}
            className={className}
          >
            <Image
              src={image}
              alt={imageAlt}
              className={marquee ? '' : 'size-full object-cover'}
              width={300}
              height={200}
            />
          </motion.div>
        </div>
      )}
    </Card>
  )
}
