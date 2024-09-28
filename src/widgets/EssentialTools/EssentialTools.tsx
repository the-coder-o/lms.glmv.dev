'use client'

import { useTranslation } from 'react-i18next'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { toolCards } from './constants'
import { ToolCard } from './ToolCard'

export const EssentialTools = () => {
  const { t } = useTranslation()

  return (
    <section className="flex w-full flex-col gap-10">
      <div className="flex flex-col items-center justify-center gap-10 text-center text-brand">
        <div className="flex w-full flex-col items-center md:w-1/2">
          <h2 className="text-5xl font-semibold">{t('essentialTool.title')}</h2>
        </div>

        <div className="flex w-full flex-col items-center md:w-1/2">
          <p className="text-[18px]">{t('essentialTool.content')}</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-3 md:hidden">
          {toolCards.map((cardProps, index) => (
            <ToolCard key={index} {...cardProps} />
          ))}
        </div>

        <div className="hidden md:flex">
          <ResizablePanelGroup direction="horizontal" className="flex w-full flex-col gap-3">
            <ResizablePanel className="md:max-w-[354px]">
              <ToolCard {...toolCards[0]} />
            </ResizablePanel>

            <ResizablePanel className="flex w-full flex-col gap-3">
              <ToolCard {...toolCards[1]} />

              <ResizablePanelGroup direction="horizontal" className="flex w-full gap-3">
                <ToolCard {...toolCards[2]} />
                <ToolCard {...toolCards[3]} />
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </section>
  )
}
