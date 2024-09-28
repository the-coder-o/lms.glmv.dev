import { i18n } from '@/shared/i18n'

export const getPrice = (price: number) => {
  const t = i18n.getFixedT(i18n.language)
  const prices = `${price} ${t('sum')}`

  return prices
}
