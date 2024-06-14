import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useDeleteProject(succes: () => void, error: () => void) {
    const deleteProject = useMutation({
        mutationKey: ['delete-project'],
        mutationFn: (id: string) => api.delete(`/api/project/${id}`),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return deleteProject
}
