'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export const ProductSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction , setDirection] = useState(1)


    const handleNext = () => {
        setDirection(1)
        setCurrentIndex(prevState => (prevState + 1) % images.length)
    }

    const handlePrev = () => {
        setDirection(-1)
        setCurrentIndex(prevState => prevState === 0 ? images.length - 1 : prevState - 1);
    }

    const variants = {
        enter: (dir) => ({ x: dir * 100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: () => ({  opacity: 0,scale:.5 })  
    };

    return (
        <div className="relative w-fit overflow-hidden" >
            <div className='relative flex items-center justify-center'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={images[currentIndex]}
                        custom={direction}  
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className=" w-fit h-fit flex items-center justify-center"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt="Product Image"
                            width={450}
                            height={450}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrev}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNext}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>)
}
