import { type NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // find user from db
        console.log(email, password);
        if (email !== "rakib@gmail.com" || password !== "rakib123") {
          return null;
        }

        return {
          id: 1,
          name: "Rakib",
          email: "rakib@gmail.com",
          role: "ADMIN",
          accessToken: "kjfnbjdfbjkdnfjkdbkjfnkdjndfndkjn",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any;
      },
    }),
  ],
  secret: "rakibdfbdjfbnd",
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ token, session }) {
      session.user = token;
      return session;
    },
  },
};
