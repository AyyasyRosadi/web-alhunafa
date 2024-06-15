import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useAddNewUser(succes: () => void, error: () => void) {
    const user = useMutation({
        mutationKey: ['add-user'],
        mutationFn: (data: any) => api.post(`/api/user`, data),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return user
}
