import { useQuery } from '@tanstack/react-query'
import { getCourses } from '@/api'
import { queryKeys } from '../query-keys'

export const useGetCourses = () => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.courses],
    queryFn: getCourses,
  })

  return { data, isLoading }
}
