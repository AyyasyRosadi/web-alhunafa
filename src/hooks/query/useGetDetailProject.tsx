'use client'
import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function useGetDetailProject(id: string) {
  const project = useQuery({
    queryKey: ['get-detail-project'],
    queryFn: async () => {
      const res = await api.get(`/api/project/detail/${id}`)
      if (res.status === 200) {
        return res.data
      }
    },
    enabled: id.length !== 0
  })
  useEffect(() => {
    if (id.length !== 0) {
      project.refetch()
    }
  }, [id])
  return { loading: project?.isPending, data: project?.data }
}
