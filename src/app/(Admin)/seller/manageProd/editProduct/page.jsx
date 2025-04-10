'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AdminForm } from '@/components/admincomponents/AdminAddprodForm/adminform'

const page = () => {
  const id = useSearchParams().get('id')
  console.log(id);
  
  const [product, setProduct] = useState({})

  useEffect(() => {
    async function getProduct() {
      const resault = await fetch(`http://localhost:3000/api/product?id=${id}`,{method:'GET'})
      const prodData = (await resault.json()).products
      setProduct(prodData)
      console.log(prodData);
      
      
    }

    getProduct()

  },[])




  return (
    <div>
      {product.title? <AdminForm product={product}/>:<div></div>}
    </div>
  )
}

export default page