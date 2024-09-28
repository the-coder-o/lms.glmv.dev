'use client'

import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { partners } from './constant'
import { containerVariants, itemVariants } from './motion'

export const Partners = () => (
  <motion.section initial="hidden" animate="visible" variants={containerVariants}>
    <Marquee gradient gradientWidth={200} speed={50}>
      <motion.div
        className="flex w-full items-center justify-center gap-8 bg-background py-4"
        variants={itemVariants}
      >
        {partners.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <item.logo className="h-16 w-auto opacity-50" />
          </motion.div>
        ))}
      </motion.div>
    </Marquee>
  </motion.section>
)
