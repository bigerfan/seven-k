'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const CartCategory = ({ category, Active, setActive }) => {
  const [currentImage, setCurrentImage] = useState(0)



  useEffect(() => {
    const interval = setInterval(() => { setCurrentImage(prev => (prev + 1) % category.images.length) }, 4000)
    return () => clearInterval(interval)
  }, [Active])


  return (
    <Link href={`/products?category=${category.name}`}>
      <AnimatePresence mode='wait'>
        <motion.div
          className='flex flex-col items-center gap-4'
          onMouseEnter={() => setActive(category.name)}
          onMouseLeave={() => setActive(null)}

        >
          <motion.div
            className='relative w-40 h-40 md:w-64 md:h-64 xl:w-52 xl:h-52  '
            whileHover={()=>setActive(category.name)}
            style={Active == category.name ? { scale: 1.1 } : {}}
            key={Active == category.name ? 'hoverImage' : currentImage}
            initial={{ opacity: 0, x: 20, }}
            animate={{ opacity: 1, x: 0, }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}

          >
            <Image
              src={Active == category.name ? category.hoverImage : category.images[currentImage]}
              fill alt={category.name} className='rounded-full object-cover border-[#10375C]  border-2  ' />
          </motion.div>
          <div className='mt-5 w-full md:w-[80%] '>
            <button className='btntransparent text-base w-[100%]'>{category.title}</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </Link>
  )
}
