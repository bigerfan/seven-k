import { formatPrice } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import { DeleteProd } from './deleteProd';
import Link from 'next/link';

export const ProdCard = ({ product,setDel }) => {

    function getContrastYIQ(hex) {
        hex = hex.replace(/^#/, "");
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        let yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? "#282A3A" : "#FFFFFF";
    }
    return (
        <tr className=' even:bg-white even:text-gray-900 odd:bg-[#10375C] odd:text-white '>
            <td className=''>
                <p className=' text-nowrap'>
                    {product.title}
                </p>
            </td>
            <td className='hidden md:table-cell'>
                <p className=' line-clamp-3 my-3 px-2'>
                    {product.description}
                </p>
            </td>
            <td className='hidden md:table-cell text-black'>
                <div className='py-2'>
                    <select name="sizes" id="sizes" className='inputDefault'>
                        {product.sizes?.map(size => <option key={size}>{size}</option>)}
                    </select>
                </div>
                <div className='border-t-2 w-full py-2  '>
                    <select name="color" id="color" className='inputDefault ' >
                        {product.colors.map(color =>
                            <option style={{ backgroundColor: color.hex, color: getContrastYIQ(color.hex) }} key={color.hex}>{color.name}</option>)}
                    </select>
                </div>
            </td>
            <td>{formatPrice(product.price)}</td>
            <td>
                <div className='flex gap-4'>
                    <Link className='defaultBtn' href={`manageProd/editProduct?id=${product._id}`}>ویرایش</Link>
                    <DeleteProd ProdId={product._id} setDel={setDel}/>
                </div>
            </td>
        </tr>
    )
}
