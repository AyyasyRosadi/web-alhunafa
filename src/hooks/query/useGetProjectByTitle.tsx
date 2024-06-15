'use client'
import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

export default function useGetProjectByTitle(title: string) {
    const project = useQuery({
        queryKey: ['get-project-by-title'],
        queryFn: async () => {
            const res = await api.get(`/api/project/admin/search?title=${title}`)
            if (res.status === 200) {
                return res.data
            }
        },
        enabled: title.length > 0 ? true : false
    })
    useEffect(() => {
        if (title.length > 0) {
            project.refetch()
        }
        // eslint-disable-next-line 
    }, [title])
    return { data: project?.data, loading: project?.isPending }
}
