import Image from 'next/image'
import React from 'react'

export const ProdMap = ({ product }) => {


    return (
        <div className='bg-gray-300 px-2 py-4 rounded-md shadow-xl shadow-gray-700 flex flex-col gap-3 prodCardAnimation 'dir='rtl'>
            <div>
                <Image src={product.image} width={250} height={400} alt='jfdska' />
            </div>
            <div className=''>
                <h2 className='mt-2 text-2xl'>{product.title}</h2>
                <span>{product.desc}</span>
            </div>
        </div>)
}
