import { useQuery } from '@tanstack/react-query'
import { getCourseDetail } from '@/api'
import { queryKeys } from '../query-keys'

export const useGetCourseDetail = (detailId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.courseDetail(detailId)],
    queryFn: () => getCourseDetail(detailId),
    refetchOnMount: true,
    enabled: !!detailId,
  })

  return { data, isLoading }
}
