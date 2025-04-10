import React from 'react'
import { ProductCard } from './ProductCard'

export const Products = ({ prod }) => {

    return (
        <div className=' grid 2xl:grid-cols-5 gap-1 xl:grid-cols-4 md:grid-cols-3 grid-cols-2'>
            {prod.length > 0 ? prod.map(product =>
                    <ProductCard product={product} mod={'cart'} key={product._id} />
            ) : <span className='loader'></span>}
        </div>
    )
}
