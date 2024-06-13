import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useAddFile(succes: () => void, error: () => void) {
    const addFile = useMutation({
        mutationKey: ['add-file'],
        mutationFn: (data: any) => api.post(`/api/project`, data),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return addFile
}
