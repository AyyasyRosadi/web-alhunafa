import api from '@/api/http'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function useGetMaps(status: boolean) {
    const location = useQuery({
        queryKey: ['get-maps'],
        queryFn: async () => {
            const res = await api.get(`/api/project/maps`)
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
    }, [status])
    return { data: location?.data, loading: location?.isPending }
}
