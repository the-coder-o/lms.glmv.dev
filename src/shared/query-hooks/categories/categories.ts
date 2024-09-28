import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/api'
import { queryKeys } from '../query-keys'

export const useGetCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.categories],
    queryFn: getCategories,
  })

  return { data, isLoading }
}
