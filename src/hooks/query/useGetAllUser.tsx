'use client'
import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function useGetAllUser(status:boolean) {
    const user = useQuery({
        queryKey: ['get-all-user'],
        queryFn: async () => {
            const res = await api.get(`/api/user`)
            if (res.status === 200) {
                return res.data
            }
        },
        enabled: status
    })
    useEffect(() => {
        if (status) {
            user.refetch()
        }
        // eslint-disable-next-line 
    }, [status])
    return { data: user?.data, loading: user?.isPending,refetch:user.refetch }
}
