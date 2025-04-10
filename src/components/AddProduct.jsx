'use client'

import React from 'react'
import shoppingCart from '@/providers/shoppingcart'
import { motion } from 'framer-motion'

export const AddProduct = ({ product, mod }) => {

    const { addProduct, decProduct, products } = shoppingCart();

    const currentProd = products.find(prod => prod.title == product.title)




    return (
        <div className=''>
            {currentProd?.count > 0 ?
                <div className='flex items-center gap-5   '>
                    <button className='defaultBtn' onClick={() => addProduct(product)}>+</button>
                    <motion.span
                        key={currentProd.count}
                        className='text-orange-600 md:text-xl '
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: .3, ease: 'easeInOut' }}
                    >{currentProd.count}</motion.span>
                    <button className='defaultBtn' onClick={() => decProduct(product)}>-</button>
                </div> :
                <button className=' btntransparent w-[100%]' onClick={() => addProduct(product)} >{mod == 'cart' ? 'افزودن' : 'افزودن به سبد خرید'}</button>
            }
        </div>
    )
}
