import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useUpdateStatusProject(succes: () => void, error: () => void) {
    const updateProject = useMutation({
        mutationKey: ['update-project-status'],
        mutationFn: (data: any) => api.put(`/api/project/${data.id}`, data.data),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return updateProject
}
