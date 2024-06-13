import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Api from "./http";

export const authOption: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/admin',

    },
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                email: {
                    type: "string"
                },
                password: {
                    type: "password"
                },
            },
            async authorize(credentials): Promise<any> {
                try {
                    const res = await Api.post(`/api/auth/login`, { email: credentials?.email, password: credentials?.password })
                    if (res.status === 200) {
                        return {
                            token: res!.data!.token,
                        }
                    }
                } catch (e: any) {
                    console.log(e)
                    throw new Error(JSON.stringify({ msg: e.response?.data?.msg, status: 401 }))
                }
            }
        })
    ],
    callbacks: {
        session: ({ session, token }): any => {
            return {
                ...session,
                user: {
                    ...session.user,
                    token: token.token,
                }
            }
        },
        jwt: ({ token, user }) => {
            const u = user as unknown as any
            if (user) {
                return {
                    ...token,
                    token: u.token,
                }
            }
            return token
        }
    }
}