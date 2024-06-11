import api from '@/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useAddFile(succes: () => void, error: () => void) {
    const addFile = useMutation({
        mutationKey: ['add-file'],
        mutationFn: (data: any) => api.post(`/api/project`, data),
        onSuccess: (response) => {
            console.log(response)
            succes()
        },
        onError: (err) => {
            console.log(err)
            error()
        }
    })
    return addFile
}
