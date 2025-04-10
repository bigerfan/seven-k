'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'


export const ProdFiltering = () => {
    const [category, setCategory] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [pending, setpending] = useState(false)

    const router = useRouter()

    async function fetchProducts(e) {
        e.preventDefault()

        setpending(prev => !prev)

        console.log(pending);

        let url = "http://localhost:3000/products";

        const params = new URLSearchParams();
        if (category) params.append("category", category);
        if (maxPrice) params.append("maxPrice", maxPrice);
        if (minPrice) params.append("minPrice", minPrice);

        if (params.toString()) {
            url += `?${params.toString()}`;
        }

        router.push(url)

        setpending(prev => !prev)

    };


    return (
        <div className=' lg:w-[20%]'>
            <form onSubmit={fetchProducts} className='filterContainer flex flex-col gap-4 px-5 lg:sticky right-0 '>
                    <select
                        className="inputDefault text-base"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        <option value="" className='text-base'>همه دسته‌ها</option>
                        <option value="pants" className='text-base'>شلوار</option>
                        <option value="coat" className='text-base'>کت</option>
                        <option value="shoes" className='text-base'>کفش</option>
                        <option value="jacket" className='text-base'>پالتو</option>
                    </select>

                    <input

                        type="number"
                        placeholder="حداکثر قیمت"
                        className="inputDefault"
                        onChange={(e) => setMaxPrice(e.target.value)}
                        value={maxPrice} />

                    <input

                        type="number"
                        placeholder="حداقل قیمت "
                        className="inputDefault"
                        onChange={(e) => setMinPrice(e.target.value)}
                        value={minPrice} />
                    {pending ?
                        <button className='defaultBtn' disabled>در حال جست و جو...</button>
                        :
                        <button className='defaultBtn '>اعمال فیلتر</button>
                    }
            </form>
        </div>
    )
}
