import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useAddNewProject(succes: () => void, error: () => void) {
    const project = useMutation({
        mutationKey: ['add-project'],
        mutationFn: (data: any) => api.post(`/api/project`, data),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return project
}
