export enum PriceTypes {
  PRO = 'PRO',
  BASIC = 'BASIC',
  FREE = 'FREE',
}

export type DetailPrices = {
  title: string
}

export type Prices = {
  id: number
  type: PriceTypes
  monthly: number
  yearly: number
  details: DetailPrices[]
}
