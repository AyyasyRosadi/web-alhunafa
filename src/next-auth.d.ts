import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      username: string;
      name: string;
      generalUser: boolean;
      role: string;
      sistem: string;
      superAdmin: boolean;
    } & DefaultSession["user"]
  }
}