'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { inquiriesQuestions } from './constants'

export const Inquiries = () => {
  const { t } = useTranslation()
  const [activeButton, setActiveButton] = useState(inquiriesQuestions[0].name)

  const activeInquiry = inquiriesQuestions.find((button) => button.name === activeButton)

  return (
    <section className="flex flex-col gap-10 sm:gap-14" id="faqs">
      <div className="flex items-center justify-center">
        <div className="w-full text-center sm:w-2/3 md:w-1/2">
          <h2 className="text-[48px] font-bold text-brand">{t('inquiries.title')}</h2>
          <p className="text-[18px] text-brand">{t('inquiries.description')}</p>
        </div>
      </div>

      <div className="flex flex-col gap-16 sm:flex-row">
        <nav className="w-auto">
          <ul className="flex justify-start gap-4 overflow-x-scroll sm:flex-col sm:justify-center">
            {inquiriesQuestions.map((item) => (
              <li key={item.name}>
                <Button
                  onClick={() => setActiveButton(item.name)}
                  variant={activeButton === item.name ? 'default' : 'outline'}
                  className="w-full whitespace-nowrap rounded-md"
                >
                  {t(item.name)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-full flex-col justify-start">
          {activeInquiry && (
            <Accordion type="single" collapsible key={activeInquiry.name}>
              {activeInquiry.item.map((accordionItem, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{t(accordionItem.question)}</AccordionTrigger>
                  <AccordionContent>{t(accordionItem.answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  )
}
