import Image from 'next/image'
import React from 'react'
import { AddProduct } from '../AddProduct'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

export const ProductCard = ({ product, mod }) => {

  return (
    <div className='border-gray-300 rounded-sm px-2 py-4 flex flex-col gap-4  border-[.2px]  shadow-md boxShadow transition-shadow duration-300 ease-in-out md:w-fit sm:w-44' >
      <Link href={`/products/${product._id}`} key={product.title} className='flex flex-col gap-5  overflow-hidden '>
        <div className='relative md:w-60 md:h-60 w-44 h-44'>
          <Image
            src={product.image || 'https://dkstatics-public.digikala.com/digikala-products/df47a993826f648ddc4d68ba8b9b4d6c74215471_1737969515.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'}
            alt='product'
            className=' object-cover'
            fill />
        </div>
        <div className='flex gap-3 justify-between px-4 flex-col '>
          <h3 className='font-bold text-sm flex-1 h-5  '>{product.title}</h3>
          <span className=' border-b-2 border-[var(--btnb)] text-sm flex-1 w-fit pr-1 pl-10 font-bold text-orange-800'>{formatPrice(product.price)} </span>
        </div>
      </Link>
      <div>
        <AddProduct product={product} mod={mod} />
      </div>
    </div>
  )
}
