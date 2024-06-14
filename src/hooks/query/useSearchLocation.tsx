'use client'
import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

export default function useSearchLocation(title: string) {
    const location = useQuery({
        queryKey: ['get-location'],
        queryFn: async () => {
            const res = await api.get(`/api/project/search?title=${title}`)
            if (res.status === 200) {
                return res.data
            }
        },
        enabled: title.length > 0 ? true : false
    })
    useEffect(() => {
        if (title.length > 0) {
            location.refetch()
        }
        // eslint-disable-next-line 
    }, [title])
    return { data: location?.data, loading: location?.isPending }
}
