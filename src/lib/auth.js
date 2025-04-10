import NextAuth from "next-auth";
import Google from 'next-auth/providers/google'
import { User } from "./models";
import { connectToDb } from "./utils";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "ایمیل", type: "email", placeholder: "example@example.com" },
                password: { label: "رمز عبور", type: "password" },
            },
            async authorize(credentials) {
                await connectToDb();

                const user = await User.findOne({ $or: [{ email: credentials.email }, { username: credentials.name }] });

                if (!user) {
                    throw new Error("کاربری با این ایمیل یافت نشد");
                }

                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordCorrect) {
                    throw new Error("رمز عبور اشتباه است");
                }

                const userData = {
                    id: user._id.toHexString(),
                    email: user.email,
                    name: user.username
                };

                return userData;
            },
        }),
    ], callbacks: {
        async signIn({ user, account }) {
            await connectToDb();

            if (account.provider === "google") {
                let existingUser = await User.findOne({ email: user.email });

                if (!existingUser) {
                    existingUser = await User.create({
                        username: user.name,
                        email: user.email,
                        avatar: user.image,
                        provider: "google"
                    });
                }
                user.id = existingUser._id.toHexString();
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        }
    }
})