import { TbTruckDelivery } from "react-icons/tb";
import { FaLock, FaPhone } from "react-icons/fa";
import { ProdSlider } from "@/components/productSlider/proSlider";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { DesktopImgMapper } from "@/components/imgMapper/page";
import { Categories } from "@/components/categories/Categories";

export default async function Home() {


  return (
    <div className="">
      <div className="relative">
        <section className="text-center bg-gray-100 jk flex flex-col">
          <h2 className="text-4xl font-extrabold">بهترین خرید آنلاین با هفت!</h2>
          <p className="text-lg mt-4">با تنوعی بی‌نظیر از محصولات، تجربه‌ای سریع و آسان از خرید آنلاین داشته باشید.</p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg text-lg transition-all hover:bg-green-600">
            شروع خرید
          </button>
        </section>

        <div className="bg-[radial-gradient(circle,_rgba(255,255,255,1)_40%,_rgba(242,242,242,1)_100%)] landingPageShadow hidden md:block">
            <DesktopImgMapper />
        </div>

      </div>
      <Categories/>
      <section>
        <ProdSlider />
      </section>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-6 text-center my-24 justify-center mx-5 ">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-2 py-12 ">
          <div className="flex flex-col justify-center items-center gap-5">
            <TbTruckDelivery className="text-4xl" />
            <h3 className="font-bold text-lg mt-2">ارسال سریع و رایگان</h3>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-2 py-8">
          <div className="flex flex-col justify-center items-center gap-5">
            <FaLock className="text-4xl" />
            <h3 className="font-bold text-lg mt-2">پرداخت امن</h3>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-2 py-8">
          <div className="flex flex-col justify-center items-center gap-5">
            <FaPhone className="text-4xl" />
            <h3 className="font-bold text-lg mt-2">پشتیبانی ۲۴/۷</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
