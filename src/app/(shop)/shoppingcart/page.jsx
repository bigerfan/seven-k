import { AddProduct } from '@/components/AddProduct'
import { ShoppingProds } from '@/components/shoppingcartproducts'
import { auth } from '@/lib/auth'
import shoppingCart from '@/providers/shoppingcart'
import Image from 'next/image'
import React from 'react'

const ShoppingCard =async () => {

  const user = await auth()
  return (

    <ShoppingProds user={user}/>

  )
}

export default ShoppingCard