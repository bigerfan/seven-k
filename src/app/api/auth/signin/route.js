import { connectToDb } from "@/lib/utils";
import { User } from "@/lib/models";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    await connectToDb();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "لطفاً همه فیلدها را پر کنید" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "کاربر با این ایمیل وجود ندارد" }, { status: 400 });
    }

    const checkPassword = await bcrypt.compare(password,user.password);

    if(!checkPassword){
      return NextResponse.json({message : 'گذرواژه معتبر نمیباشد' },{status:400})
    }

    return NextResponse.json({ message: "ورود با موفقیت انجام شد" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "خطا در ثبت‌نام" }, { status: 500 });
  }
}
