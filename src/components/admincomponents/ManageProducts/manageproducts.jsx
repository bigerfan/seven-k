'use client'

import React, { useEffect, useState } from 'react'
import { ProdCard } from './productCard'

export const ManageProd = () => {
    const [prod, setProd] = useState([])
    const [isDelete,setDelete] = useState(false)

    async function getProducts() {
        try {
            const res = await fetch('http://localhost:3000/api/product', { 
                method: 'GET', 
                cache: 'no-store' 
            })
            const data = await res.json()
            setProd(data.products)
        } catch (error) {
            console.error("خطا در دریافت محصولات:", error)
        }

        setDelete(false)
    }

    useEffect(() => {
        getProducts()
    }, [isDelete])

    return (
        <div className="overflow-x-auto">
            <table className="w-full max-w-[90%] mx-auto my-8 border border-gray-300 rounded-md shadow-sm">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="p-3 text-start">اسم محصول</th>
                        <th className="hidden md:table-cell p-3 text-start">درباره</th>
                        <th className="hidden md:table-cell p-3 text-start">سایز و رنگ</th>
                        <th className="p-3 text-start">قیمت</th>
                        <th className="p-3 text-start">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {prod.length > 0 ? (
                        prod.map(product => <ProdCard product={product} key={product._id} setDel={setDelete} />)
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center p-5 text-gray-500">
                                هیچ محصولی یافت نشد!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}