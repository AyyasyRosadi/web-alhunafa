import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useEditProject(succes: () => void, error: () => void) {
    const project = useMutation({
        mutationKey: ['edit-project'],
        mutationFn: (data: any) => api.put(`/api/project/edit/${data.id}`, data.data),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return project
}
