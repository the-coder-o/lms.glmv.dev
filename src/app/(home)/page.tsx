import { Metadata } from 'next'
import { CenterBlock } from '@/components'
import { mainMetadata } from '@/constants'
import { HomePageModules } from './constants'

export const metadata: Metadata = mainMetadata

export default function HomePage() {
  return (
    <div className="mt-16 flex flex-col gap-20 md:gap-40">
      {Object.entries(HomePageModules).map(([displayName, { Component, isSwiper }]) => (
        <div key={displayName}>
          {isSwiper ? (
            <CenterBlock>
              <Component />
            </CenterBlock>
          ) : (
            <Component />
          )}
        </div>
      ))}
    </div>
  )
}
