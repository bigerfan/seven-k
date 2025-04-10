'use client'

import shoppingCart from '@/providers/shoppingcart'
import React from 'react'
import { AddProduct } from './AddProduct'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

export const ShoppingProds = ({ user }) => {
    const { products } = shoppingCart()
    const title = products[0]?.title

    return (
        <>
            {title ?
                <div className='my-20 md:mx-14 mx-3 flex flex-col gap-6 '>
                    {products.map((product) =>
                        <div className='flex flex-col md:flex-row py-10 justify-center rounded-md shadow-xl boxShadow transition-all px-14 items-center overflow-ellipsis md:gap-12 w-[80%] self-center border-[.8px] border-gray-400 ' key={product._id}  >
                            <div className='relative h-40 w-40 md:w-56 md:h-56 md:flex-[1]'>
                                <Image
                                    src={product.image}
                                    alt=';'
                                    className=' object-cover border-[.8px] border-gray-400'
                                    fill />
                            </div>
                            <Link className='md:flex-[3]' href={`./products/${product._id}`}>
                                <div className='flex flex-col gap-5 overflow-ellipsis  my-4'>

                                    <h2 className=' text-2xl mr-8'>{product.title}</h2>
                                    <span className=' border-b-[1px] border-red-800 '>{formatPrice(product.price)} تومان  </span>

                                    <div>
                                        <p className=' overflow-ellipsis self-center max-h-24 overflow-y-clip '>{product.description}</p><span className='md:hidden'>...</span>
                                    </div>
                                </div>
                            </Link>
                            <div className='md:flex-[1] flex items-left flex-col gap-5'>
                                <AddProduct product={product} />
                            </div>
                        </div>
                    )}
                    < div className='w-[80%] m-auto'>
                        <button className='defaultBtn w-[100%]'>سفارش محصولات</button>
                    </div>
                </div>
                : <div className='m-auto my-9 w-fit'>
                    {user ?
                        <div className='flex flex-col gap-5 items-center justify-center'>
                            <span>سبد خرید خالیه :(</span>
                            <Link className=' defaultBtn' href={'/products'}>دیدن محصولات</Link>
                        </div>
                        :
                        <div className='flex flex-col gap-5 items-center justify-center'>
                            <span>برای خرید محصولات وارد حساب کاربری خود شوید</span>
                            <Link className='defaultBtn' href={'/logup'}>ورود به حساب کاربری</Link>
                        </div>
                    }
                </div>}
        </>

    )
}
