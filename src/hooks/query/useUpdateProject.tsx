import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useUpdateProject(succes: () => void, error: () => void) {
    const updateProject = useMutation({
        mutationKey: ['update-project'],
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
