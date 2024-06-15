import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useResetPassword(succes: () => void, error: () => void) {
    const user = useMutation({
        mutationKey: ['reset-password'],
        mutationFn: (data: any) => api.put(`/api/user/${data.id}`, data.data),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return user
}
