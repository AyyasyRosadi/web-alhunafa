import api from '@/app/api/http'
import { useMutation } from '@tanstack/react-query'

export default function useDeleteUser(succes: () => void, error: () => void) {
    const user = useMutation({
        mutationKey: ['delete-user'],
        mutationFn: (id: string) => api.delete(`/api/user/${id}`),
        onSuccess: (response) => {
            succes()
        },
        onError: (err) => {
            error()
        }
    })
    return user
}
