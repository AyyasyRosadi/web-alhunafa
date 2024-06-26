import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";


const api = axios.create({
    baseURL: 'https://api-alhunafa.diyaproject.id',
    // baseURL:'http://localhost:8080',
    
})

api.interceptors.request.use(async (req: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    if (req.url !== "/api/auth/login" && req.headers) {
        const session = await getSession()
        req.headers['Authorization'] = `Bearer ${session?.user?.token}`
    }
    return req
})
api.interceptors.response.use((res: AxiosResponse) => {
    return res;
}, (err) => {
    if (err.response.status === 401) {
        signOut()
    }
    throw err
}
)


export default api