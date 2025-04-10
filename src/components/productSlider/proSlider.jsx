"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProdCard } from "../productCard/ProdCard";
import { PiNumberSquareSevenBold } from "react-icons/pi";

export const ProdSlider = ({code}) => {

  return (
    <div className="bg-orange-500 py-4 px-3 flex justify-center items-center w-full">
      <div
        className=" overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory custom-scrollbar"

      >
        <div className="flex gap-5">
          <div className="mt-20">
            <h2 className=" font-bold text-white text-4xl md:text-5xl my-4  ">محصولات ویژه</h2>
            <PiNumberSquareSevenBold className="font-bold text-white md:text-7xl m-auto text-6xl"/>
          </div>
          {[
            "https://dkstatics-public.digikala.com/digikala-products/7b688bbfe77954e3031a4eec4ea00506b63f323e_1678567427.jpg",
            "https://dkstatics-public.digikala.com/digikala-products/5c7a9ad2b493adcce667ffcd23a0ae521cd44fdd_1731320743.jpg",
            "https://dkstatics-public.digikala.com/digikala-products/df47a993826f648ddc4d68ba8b9b4d6c74215471_1737969515.jpg",
            "https://dkstatics-public.digikala.com/digikala-products/115249669.jpg",
            "https://dkstatics-public.digikala.com/digikala-products/dbd1b4aac86486610b57742837b1a89070b9189a_1735462278.jpg",
          ].map((src, index) => (
            <div key={index} className="md:w-[250px] flex-shrink-0">
              <ProdCard product={{ image: src, price: 14000000, title: index + "محصول" }} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
