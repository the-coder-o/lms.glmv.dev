import { Prices, PriceTypes } from './types'

export const prices: Prices[] = [
  {
    id: 1,
    type: PriceTypes.FREE,
    monthly: 0,
    yearly: 0,
    details: [
      {
        title: 'Project Management',
      },
      {
        title: 'Frontend developer',
      },
      {
        title: 'Backend developer',
      },
    ],
  },
  {
    id: 2,
    type: PriceTypes.BASIC,
    monthly: 14.99,
    yearly: 99.99,
    details: [
      {
        title: 'Project Management',
      },
      {
        title: 'Frontend developer',
      },
      {
        title: 'Backend developer',
      },
      {
        title: 'Software developer',
      },
    ],
  },
  {
    id: 3,
    type: PriceTypes.PRO,
    monthly: 29.99,
    yearly: 189.99,
    details: [
      {
        title: 'Project Management',
      },
      {
        title: 'Frontend developer',
      },
      {
        title: 'Backend developer',
      },
      {
        title: 'Software developer',
      },
      {
        title: 'Software developer',
      },
    ],
  },
]
