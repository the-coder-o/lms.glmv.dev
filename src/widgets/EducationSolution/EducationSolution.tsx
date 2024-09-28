'use client'

import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CenterBlock } from '@/components'

export const EducationSolution = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const title = t('educationSolution.title')

  const charProgress = useTransform(scrollYProgress, [0, 1], [0, title.length])

  return (
    <div className="bg-brand" ref={ref}>
      <CenterBlock>
        <div className="p-[30px]">
          <p className="py-[60px] text-center text-[30px] font-bold leading-tight sm:text-[40px] md:text-[52px]">
            {title.split('').map((char, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const color = useTransform(charProgress, [index, index + 1], ['#1e2830', '#fff'])

              return (
                <motion.span
                  key={index}
                  initial={{ color: '#1e2830' }}
                  style={{ color }}
                  transition={{ duration: 1.5 }}
                >
                  {char}
                </motion.span>
              )
            })}
          </p>
        </div>
      </CenterBlock>
    </div>
  )
}
