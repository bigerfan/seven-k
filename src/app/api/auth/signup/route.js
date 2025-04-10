import { User } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'


export async function POST(req) {
    try {
        await connectToDb()
        const { username, email, password } = await req.json()
        if (!email || !password || !username) {
            return NextResponse.json({ message: 'filds not fill' }, { status: 400 })
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] })

        if (existingUser) {
            return NextResponse.json({ message: 'کاربر با این ایمیل وجود دارد' }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newuser = new User({ username, email, password: hashedPassword })

        await newuser.save()

        return NextResponse.json({ message: 'کاربر با موفقیت افزوده شد' }, { status: 201 })



    } catch (error) {
        throw new Error(error)
    }
}