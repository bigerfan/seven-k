'use client'

import React, { useState } from 'react'
import { Category } from '@/script/fakedata'
import { CartCategory } from './cartCategory'

export const Categories = () => {

    const [ActiveCategory, setActive] = useState(null)
    return (
        <section className="my-24">
            <h2 className="m-10 md:text-3xl text-2xl"> دسته بندی محصولات</h2>
            <div className="grid xl:grid-cols-4 grid-cols-2 grid-row-1 w-fit m-auto md:gap-40 gap-20 ">
                {Category.map(SingleCategory=><CartCategory category={SingleCategory} key={SingleCategory.name} Active={ActiveCategory} setActive={setActive}/>)}
            </div>
        </section>)
}
