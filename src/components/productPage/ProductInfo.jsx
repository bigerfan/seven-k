import React from 'react'
import { AddProduct } from '../AddProduct'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { TbArrowBackUp } from 'react-icons/tb'
import Image from 'next/image'
import { ProductSlider } from './productSlider'
import { ProdInfoCard } from './prodInfoCard'

export const ProductInfo = ({ product }) => {

    function getContrastYIQ(hex) {
        hex = hex.replace(/^#/, "");
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        let yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? "#282A3A" : "#FFFFFF";
    }
    console.log(product.sizes);

    return (
        <div className='flex items-center md:mt-8 xl:flex-row flex-col justify-center lg:justify-between md:w-[100%]  '>
            <ProductSlider images={[product.image, ...product.otherImages]} />
            <div className=''>
                <div className='border-b-2 border-gray-400 m-3 px-6 py-3'>
                    <h3 className='mb-2'>رنگ ها</h3>
                    <div className=' gap-6 grid md:grid-cols-3 grid-cols-2  '>
                        {product.colors.map(color =>
                            <div className='flex md:px-4 px-2 gap-3 rounded-full py-3' style={{ backgroundColor: color.hex }} key={color.hex}>
                                <input className='w-5 h-5' type='radio' name='color' value={color.name} id={color.name} />
                                <label htmlFor={color.name} className=' text-sm ' style={{ color: getContrastYIQ(color.hex) }}>{color.name}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className='m-3 px-6 py-3'>
                    <h3 className='mb-2'>سایز ها:</h3>
                    <div className='flex gap-6 '>
                        {product.sizes.map(size => (
                            <div className='flex justify-center px-4 gap-3 bg-gray-400 rounded-full py-3' key={size}>
                                <input className='w-5 h-5' type='radio' name='sizes' value={size} id={size} />
                                <label htmlFor={size} className='text-slate-100 text-sm'>{size}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ProdInfoCard product={product} />
        </div>)
}
