'use client'

import clsx from 'clsx'
import LoginForm from '@/components/forms/LoginForm'
import { SignupForm } from '@/components/forms/signupForm'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BsSignIntersection } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";

const Logup = () => {

  const [activeForm, setForm] = useState('signup')

  return (
    <div className="my-20 flex md:flex-row flex-col mx-8 justify-between items-stretch gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ 
          opacity: 1, 
          scale: 1, 
          flexGrow: activeForm === 'signup' ? 2 : 1 
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }} 
        className={clsx("signup flex rounded-md h-[660px]", activeForm === 'signup' ? 'bg-[#FFB534] flex-2' : 'bg-transparent flex-1')}>
        {activeForm === 'signup' ? <SignupForm /> : (
          <div className="flex items-center flex-col w-[100%]">
            <button
              onClick={() => setForm('signup')}
              className="btntransparent text-2xl m-auto w-[100%] md:h-[660px] border-[#FFB534!important] hover:bg-[#FFB534!important] hover:text-[#10375C!important] flex md:flex-col justify-center items-center gap-2">
              <span className="md:text-4xl"> ساخت اکانت جدید </span>
              <BsSignIntersection className='md:mx-auto md:text-9xl md:my-8 text-xl'/>
            </button>
          </div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ 
          opacity: 1, 
          scale: 1, 
          flexGrow: activeForm === 'signin' ? 2 : 1 
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }} 
        className={clsx("signin flex items-center justify-center rounded-md h-[660px]", activeForm === 'signin' ? 'bg-[#EB8317] flex-2' : 'bg-transparent flex-1')}>
        {activeForm === 'signin' ? <LoginForm /> : (
          <div className="flex items-center flex-col w-[100%]">
            <button onClick={() => setForm('signin')} className="btntransparent text-2xl m-auto w-[100%] md:h-[660px] flex md:flex-col justify-center items-center gap-2">
              <span className="md:text-4xl">وارد شدن با اکانت فعلی</span>
              <MdOutlineLogin className='md:text-9xl md:mx-auto md:my-8 text-xl '/>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Logup
