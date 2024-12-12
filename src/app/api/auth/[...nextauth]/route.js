import { connectDB } from "@/lib/connectDB"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!email || !password) {
                    return null
                }
                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null
                }
                const matchHashPass = bcrypt.compareSync(password, currentUser.password);
                if (!matchHashPass) {
                    return null
                }
                return currentUser;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google' || account.provider === 'github') {
                const {name, email, image } = user;
                try {
                    const db = await connectDB();
                    const existsUser = await db.collection('users').findOne({ email })
                    if (!existsUser) {
                        const res = await db.collection('users').insertOne(user)
                        return user;
                    } else {
                        return user
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                return user
            }

        },

    }
})

export { handler as GET, handler as POST }