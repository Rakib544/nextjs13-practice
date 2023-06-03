import { type NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const users = [
  {
    id: 1,
    name: "User",
    email: "user@gmail.com",
    role: "USER",
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
    accessToken: "kjfnbjdfbjkdnfjkdbkjfnkdjndfndkjn",
  },
  {
    id: 2,
    name: "Instructor",
    email: "instructor@gmail.com",
    role: "INSTRUCTOR",
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
    accessToken: "kjfnbjdfbjkdnfjkdbkjfnkdjndfndkjn",
  },
  {
    id: 3,
    name: "Admin",
    email: "admin@gmail.com",
    role: "ADMIN",
    image:
      "https://lms-course.netlify.app/static/media/instructor.38efa4e9104ade8ec36b.png",
    accessToken: "kjfnbjdfbjkdnfjkdbkjfnkdjndfndkjn",
  },
];

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
        const { email } = credentials as {
          email: string;
          password: string;
        };
        // find user from db
        // console.log(email, password);
        // if (email !== "rakib@gmail.com" || password !== "rakib123") {
        //   return null;
        // }
        const user = users.find((user) => user.email === email);

        if (!user) {
          return null;
        }

        return {
          ...user,
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
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
};
