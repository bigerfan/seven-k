import React from 'react'
import { AddProduct } from '../AddProduct'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { TbArrowBackUp } from 'react-icons/tb'
import { formatPrice } from '@/lib/utils'

export const ProdInfoCard = ({ product }) => {
    return (
        <div className='flex flex-col bg-[var(--btnlight)] p-4 rounded-md shadow-lg min-h-[40vh] py-6 lg:w-[40vh] w-full '>
            <h2 className=' text-3xl border-b-2 pb-4 border-gray-400 '>{product.title}</h2>
            <div className='flex flex-col gap-8 border-b-2 py-4 border-gray-400'>
                <h2 className=' font-bold border-[var(--btnb)] border-b-[.1px] w-fit  text-2xl '>{formatPrice(product.price)} تومان</h2>
                <AddProduct product={product} />
            </div>
            <div className='items-center gap-8  py-6 ' >
                <div className='flex gap-2 text-base mb-2'>
                    <AiFillSafetyCertificate className=' text-2xl' />
                    <h3>گارانتی اصالت و سلامت فیزیکی کالا </h3>
                </div>
                <div className='flex gap-2 text-base'>
                    <TbArrowBackUp className='text-2xl' />
                    <h3>امکان مرجوعی تا یک هفته</h3>
                </div>
            </div>
        </div>)
}
