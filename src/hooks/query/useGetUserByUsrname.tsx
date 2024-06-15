'use client'
import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function useGetUserByUsrname(key:string) {
    const user = useQuery({
        queryKey: ['get-all-user-by-name'],
        queryFn: async () => {
            const res = await api.get(`/api/user/${key}`)
            if (res.status === 200) {
                return res.data
            }
        },
        enabled: key.length > 2
    })
    useEffect(() => {
        if (key.length > 2) {
            user.refetch()
        }
        // eslint-disable-next-line 
    }, [key])
    return { data: user?.data, loading: user?.isPending,refetch:user.refetch }
}
