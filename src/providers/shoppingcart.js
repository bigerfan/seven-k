import { create } from "zustand";
import { persist } from 'zustand/middleware'

const shoppingCart = create(
    persist((set, get) => ({
        products: [],
        addProduct: (product) => {
            const products = get().products
            const existing = products.find((prod) => prod?.title == product.title)
            if (existing) {
                set({products : products.map((prod) =>  prod.title == product.title ? { ...prod, count: prod.count + 1 } : prod 
                )})
            }
            else{
                set({ products: [...products, { ...product, count: 1 }] });
            }
        },
        decProduct:(product)=>{
            set({products:get().products
            .map(prod=> prod.title == product.title ? {...prod, count : prod.count - 1}: prod)
            .filter(prod=> prod.count > 0)})
        }

    })
        ,
        { name: 'cart-storage' }))

export default shoppingCart