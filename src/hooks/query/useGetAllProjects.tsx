'use client'
import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { number } from 'yup'

export default function useGetAllProjects(status:boolean,limit:number,page:number) {
    const location = useQuery({
        queryKey: ['get-all-projects'],
        queryFn: async () => {
            const res = await api.get(`/api/project?limit=${limit}&page=${[page]}`)
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
    }, [status,limit,page])
    return { data: location?.data, loading: location?.isPending,refetch:location.refetch }
}
