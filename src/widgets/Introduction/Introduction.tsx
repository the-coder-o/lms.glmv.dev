'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { appDictionary } from '@/locales'
import { containerVariants, contentVariants, iconVariants, titleVariants } from './motion'
import { VideoIntroduction } from './VideoIntroduction'

export const Introduction = () => {
  const { t } = useTranslation()

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center gap-8 lg:grid lg:grid-cols-2"
    >
      <motion.div>
        <div className="flex items-center gap-2">
          <motion.div variants={iconVariants} className="m-auto flex lg:m-px">
            <div className="rounded-full bg-blue-light p-5">
              <Mail className="size-14 text-text-color" />
            </div>

            <div className="relative z-10 -ml-8 rounded-full bg-pink-light p-5">
              <Send className="size-14 text-text-color" />
            </div>
          </motion.div>

          <motion.h1
            variants={titleVariants}
            className="hidden text-[80px] font-bold leading-[96px] text-brand lg:block"
          >
            {appDictionary.brand}:
          </motion.h1>
        </div>

        <motion.h1
          variants={contentVariants}
          className={cn(
            'text-center text-[80px] font-bold lg:text-start',
            'leading-[96px] text-text-color'
          )}
        >
          {t('instroduction.title')}
        </motion.h1>
      </motion.div>

      <VideoIntroduction />
    </motion.section>
  )
}
