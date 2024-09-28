import { useQuery } from '@tanstack/react-query'
import { getDiscount } from '@/api'
import { queryKeys } from '../query-keys'

export const useGetDiscount = (discountId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.discountId(discountId)],
    queryFn: () => getDiscount(discountId),
    refetchOnMount: true,
    enabled: !!discountId,
  })

  return { data, isLoading }
}
