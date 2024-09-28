import { useTranslation } from 'react-i18next'
import Image, { StaticImageData } from 'next/image'
import { international, national } from './constants'

type ImageProps = {
  image: StaticImageData
}

type Props = {
  label: string
  methods: ImageProps[]
}

export const PaymentMethods = () => {
  const { t } = useTranslation()

  return (
    <div className="space-y-2">
      <PaymentMethodRow label={t('buy')} methods={national} />
      <PaymentMethodRow label={t('buy')} methods={international} />
    </div>
  )
}

const PaymentMethodRow = ({ label, methods }: Props) => (
  <div className="flex h-[50px] items-center justify-between rounded-md bg-gray-800 px-3 py-2">
    <p className="text-white">{label}</p>

    <div className="flex gap-2">
      {methods.map((method, index) => (
        <span
          key={index}
          className="flex h-8 w-12 items-center justify-center rounded-sm border border-gray-500 bg-transparent p-1"
        >
          <Image
            src={method.image}
            alt="payment method"
            width={40}
            height={24}
            className="h-auto w-full object-contain"
          />
        </span>
      ))}
    </div>
  </div>
)
