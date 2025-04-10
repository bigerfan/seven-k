import { Products } from '@/components/products/products'
import styles from './style.module.css'
import { ProdFiltering } from '@/components/productFiltering'

const Page = async ({ searchParams }) => {

  const params = await searchParams
  console.log(params);
  
  const setParams = params? new URLSearchParams({ ...params }):''
  const res = (await fetch(`http://localhost:3000/api/product?${setParams.toString()}`, { method: 'GET' }))
  const products = (await res.json()).products

  return (

    <div className='flex my-20 flex-col lg:flex-row'>
      <ProdFiltering/>
      <div className='productContainer '>
        <Products prod={products} />
      </div>
    </div>
  )
}

export default Page