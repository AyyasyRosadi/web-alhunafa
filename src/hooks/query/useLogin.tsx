'use client'
import { SignInResponse, signIn } from "next-auth/react";


export async function UseLogin(data: { email: string, password: string }): Promise<SignInResponse | undefined> {
    const login = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: '/admin/home/form'
    })
    return login
}