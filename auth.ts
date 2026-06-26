import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    ...authConfig.providers,
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { dbConnect } = await import("./lib/dbConnect");
        const User = (await import("./models/User")).default;
        if (!credentials?.email || !credentials?.password) return null;
        await dbConnect();
        const user = await User.findOne({ email: credentials?.email }).select(
          "+password",
        );
        if (!user) {
          throw new Error("No user found with this email");
        }
        const isPasswordCorrect = bcrypt.compareSync(
          credentials?.password as string,
          user.password,
        );
        if (!isPasswordCorrect) {
          throw new Error("Password is Incorrect");
        }
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          phoneNumber: user.phoneNumber,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
});
