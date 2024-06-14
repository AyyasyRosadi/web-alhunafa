import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useAddVideo(file: any, succes: () => void, error: () => void) {
    const form = new FormData()
    form.append('file', file)
    const addVideo = useMutation({
        mutationKey: ['add-video'],
        mutationFn: (data: any) => api.post(`/api/historical-project/${data.id}`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return addVideo
}
