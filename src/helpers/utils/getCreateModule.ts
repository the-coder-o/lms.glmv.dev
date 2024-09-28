import { ComponentType } from 'react'

type ModuleConfig = {
  Component: ComponentType
  isSwiper: boolean
}

export const getCreateModule = (
  Component: ComponentType,
  configModifier?: (config: ModuleConfig) => ModuleConfig
): ModuleConfig => {
  const baseConfig: ModuleConfig = {
    Component,
    isSwiper: false,
  }

  return configModifier ? configModifier(baseConfig) : baseConfig
}

export const isSwiper = (config: ModuleConfig): ModuleConfig => ({
  ...config,
  isSwiper: true,
})
