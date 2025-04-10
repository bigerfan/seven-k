import { ProdSchema } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectToDb();

  try {
    const { productId, userId, content } = await req.json();
    

    if (!productId || !userId || !content) {
      return NextResponse.json({ message: "تمامی فیلدها الزامی هستند" }, { status: 400 });
    }

    const product = await ProdSchema.findById(productId);
    if (!product) {
      return NextResponse.json({ message: "محصول یافت نشد" }, { status: 404 });
    }

    product.comments.push({
      user: userId,
      content: content,
      createdAt: new Date(),
    });

    await product.save();

    return NextResponse.json({ message: "کامنت با موفقیت اضافه شد" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "خطا در پردازش درخواست" }, { status: 500 });
  }
}

export async function GET(req) {
  await connectToDb()
  try {

    const url = new URL(req.url) 
    const productId = url.searchParams.get('productId')

    const comments = await ProdSchema.findById(productId).populate('comments.user','username avatar').select("comments");

    if (!comments)
      return NextResponse.json({ message: 'محصول یافت نشد' }, { status: 404 })

    return NextResponse.json(comments.comments, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'خطایی رخ داده' }, { status: 500 })
  }

}
