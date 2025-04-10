import Image from 'next/image'
import React from 'react'

export const ProdCard = ({ product }) => {
    return (
        <div className='flex flex-col bg-[var(--btnlight)] px-3 pb-6 pt-3 items-center justify-center w-fit rounded-md my-4 gap-4 '>
            <div className='relative md:w-60 md:h-60 w-44 h-44'>
                <Image src={product.image} alt='product' fill />
            </div>
            <div className=' flex flex-col items-center justify-center gap-5'>
                <h2 className=' text-2xl text-[var(--text)]'>
                    {product.title}
                </h2>
                <div className='flex gap-5'>
                    <div className='h-max my-auto border-b-2 border-[var(--btnb)]'>
                        <span className=' font-bold '>{product.price}</span>
                    </div>
                    <button className='defaultBtn'>خرید</button>
                </div>
            </div>

        </div>
    )
}
