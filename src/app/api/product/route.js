import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";
import { ProdSchema } from "@/lib/models";

export async function GET(req) {
  await connectToDb();

  const url = new URL(req.url);
  const category = url.searchParams.get('category');
  const maxPrice = url.searchParams.get('maxPrice');
  const minPrice = url.searchParams.get('minPrice')
  const id = url.searchParams.get('id')


  let query = {};

  if (category && category !== '') {
    query.category = category;
  }

  if (minPrice || maxPrice) {
    query.price = {}
    if (maxPrice && maxPrice !== '') {
      query.price.$lte = Number(maxPrice)
    }

    if (minPrice && minPrice !== '') {
      query.price.$gte = Number(minPrice)
    }
  }


  try {
    if (id) {
      const products = await ProdSchema.findById(id)
      return NextResponse.json({ products }, { status: 200 })
    }
    const products = await ProdSchema.find(query);
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'خطا در دریافت محصولات' }, { status: 500 });
  }
}

export async function POST(req) {
  await connectToDb();
  const { title, price, category, image, description, colors, sizes, otherImages } = await req.json();

  if (!title || !price || !category || !image || !description || !colors || !sizes || !otherImages) {
    return NextResponse.json({ message: "لطفاً همه فیلدها را پر کنید" }, { status: 400 });
  }

  try {
    const newProduct = new ProdSchema({ title, price, category, image, description, colors, sizes, otherImages });
    await newProduct.save();

    return NextResponse.json({ message: "محصول جدید اضافه شد!", product: newProduct }, { status: 201 });
  } catch (error) {
    console.log(error.message);

    return NextResponse.json({ message: "خطا در اضافه کردن محصول" }, { status: 500 });
  }
}

export async function PUT(req) {
  await connectToDb()

  const data = await req.json()

  const { _id: id, ...body } = data

  if (!id || Object.keys(body).length == 0) {
    return NextResponse.json({ message: 'محصول پیدا نشد' }, { status: 400 })
  }

  try {
    const product = await ProdSchema.findByIdAndUpdate(id, body, { new: true })

    if(!product){
      return NextResponse.json({message:'محصول یافت نشد'},{status:404})
    }

    return NextResponse.json({ message: 'محصول با موفقیت آپدیت شد' }, { status: 200 })

  } catch (error) {
    console.log(error.message);

    return NextResponse.json({ message: 'مشکلی پیش اومده لطفا بعدا تلاش کنید' }, { status: 500 })
  }

}

export async function DELETE(req) {
  await connectToDb()

  const { id } = await req.json()

  if (!id) {
    return NextResponse.json({ message: 'آیدی وارد شده صحیح نیست' }, { status: 400 })
  }

  try {
    const deletedProd = await ProdSchema.findByIdAndDelete(id)
    if (!deletedProd)
      return NextResponse.json({ message: 'محصول پیدا نشد' }, { status: 404 })

    return NextResponse.json({ message: 'کالا با موفقیت حذف شد' }, { status: 200 })

  } catch (error) {
    console.log(error.message);

    return NextResponse.json({ message: ' مشکلی پیش اومده لطفا بعدا تلاش کن' }, { status: 500 })
  }
}