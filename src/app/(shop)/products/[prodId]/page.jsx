import { AddProduct } from '@/components/AddProduct';
import { Comments } from '@/components/comments/Comments';
import { ProductInfo } from '@/components/productPage/ProductInfo';
import { ProdSlider } from '@/components/productSlider/proSlider';
import { auth } from '@/lib/auth';
import Image from 'next/image';
import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbArrowBackUp } from "react-icons/tb";

const Page = async ({ params }) => {

  const user = (await auth())?.user

  const { prodId } = await params
  let url = 'http://localhost:3000/api/product'
  const id = new URLSearchParams();
  id.append('id', prodId)
  url += `?${id.toString()}`;
  const data = await fetch(url)
  const product = (await data.json()).products
  console.log(user);



  return (
    <>
      {!product ?
        <div>please try again later</div>
        :
        <div className='my-15 flex flex-col justify-center items-center px-4 md:w-[80%] w-full mx-auto'>
          <ProductInfo product={product} />
          <div className='flex flex-col md:flex-row gap-6 lg:my-8 my-6'>
            <div className='w-fit bg-gray-300 py-5 px-3 rounded-md shadow-md md:flex-[2]'>
              <p>{product.description}</p>
            </div>
            <table className='shadow-lg md:flex-[1]'>
              <tbody className=' items-center border-collapse gap-5'>
                <tr>
                  <td>جنس</td>
                  <td>چرم</td>
                </tr>
                <tr>
                  <td>طرح</td>
                  <td>بدون طرح</td>
                </tr>
                <tr>
                  <td>دکمه</td>
                  <td>دکمه دار</td>
                </tr>
                <tr>
                  <td>رنگ</td>
                  <td>صورتی</td>
                </tr>
                <tr>
                  <td>سایز</td>
                  <td>آزاد</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='w-[100%] '>
            <h2 className=' text-xl mt-8 mb-6'>محصولات مشابه</h2>
            <ProdSlider />
            <div className='my-8'>
              <h2 className='text-xl'>نظرات</h2>
            </div>
          </div>
          <Comments user={user || ''} prodId={prodId} product={product} />
        </div>

      }

    </>
  )
}

export default Page