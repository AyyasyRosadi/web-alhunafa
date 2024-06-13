import api from '@/app/api/http'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function useGetProjectByStatus(status: number) {
    const statusLabel = [0, 1, 2]
    const project = useQuery({
        queryKey: ['get-project-by-status'],
        queryFn: async () => {
            const res = await api.get(`/api/project/status/${status}`)
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
    }, [status])
    return { loading: project?.isPending, data: project?.data }
}
