import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function useGetProjectByStatus(status: number,limit:number,page:number) {
    const statusLabel = [0, 1, 2]
    const project = useQuery({
        queryKey: ['get-project-by-status'],
        queryFn: async () => {
            const res = await api.get(`/api/project/status/${status}?limit=${limit}&page=${page}`)
            if (res.status === 200) {
                return res.data
            }
        },
        enabled: statusLabel.includes(status)
    })
    useEffect(() => {
        if (statusLabel.includes(status)) {
            project.refetch()
        }
        // eslint-disable-next-line 
    }, [status,limit,page])
    return { loading: project?.isPending, data: project?.data }
}
