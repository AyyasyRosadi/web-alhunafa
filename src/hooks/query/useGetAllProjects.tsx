'use client'
import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function useGetAllProjects(status:boolean) {
    const location = useQuery({
        queryKey: ['get-all-projects'],
        queryFn: async () => {
            const res = await api.get(`/api/project`)
            if (res.status === 200) {
                return res.data
            }
        },
        enabled: status
    })
    useEffect(() => {
        if (status) {
            location.refetch()
        }
        // eslint-disable-next-line 
    }, [status])
    return { data: location?.data, loading: location?.isPending }
}
