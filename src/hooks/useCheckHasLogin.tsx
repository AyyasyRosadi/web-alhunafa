import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function UseCheckHasLogin(): void {
    const session = useSession()
    const navigate = useRouter()
    useEffect(() => {
        if (session?.data?.user?.token !== null) {
            navigate.push('/admin/home/project')
        } else {
            navigate.push('/admin')
        }
    }, [session?.data?.user, navigate])
}
