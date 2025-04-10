import { User } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"

export async function GET(req) {

    try {
        await connectToDb()


        const users = await User.find()

        if (!users) {
            return NextResponse.json({ message: 'کاربری پیدا نشد' }, { status: 400 })
        }

        return NextResponse.json(users, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'مشلی پیش اومده بعدا تلاش کن' }, { status: 500 })
    }
}