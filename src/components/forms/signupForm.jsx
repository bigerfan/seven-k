'use client'

import { LoginwithGoogle, signupAction } from '@/lib/actions/authActions'
import { BsSignIntersection } from "react-icons/bs";
import { motion } from 'framer-motion'
import React from 'react'
import { useActionState } from 'react'
import { FcGoogle } from 'react-icons/fc'

export const SignupForm = React.memo(() => {

    const [state, formAction] = useActionState(signupAction, {})

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className=' px-4 py-8 bg-[#FFB534] w-[100%]  md:w-[80%] m-auto min-h-[500px]   '>
            <form action={formAction} className='flex flex-col gap-6 my-4 text-gray-600 '>
                <div className='flex flex-col px-8 gap-2'>
                    <label htmlFor='username'>نام کاربری</label>
                    <input className='inputDefault' type="text" name='username' id='username' placeholder='نام کاربری...' />
                </div>
                <div className='flex flex-col px-8 gap-2'>
                    <label htmlFor='email'>ایمیل</label>
                    <input className='inputDefault' type="text" name='email' id='email' placeholder='ایمیل...' />
                </div>
                <div className='flex flex-col px-8 gap-2'>
                    <label htmlFor="password">گذرواژه</label>
                    <input className=' inputDefault' type="password" name='password' id='password' placeholder='پسوورد ...' />
                </div>
                <div className='flex flex-col px-8 gap-2'>
                    <label htmlFor="repassword">تایید گذرواژه</label>
                    <input className='inputDefault' type="password" name='repassword' id='repassword' placeholder='تایید پسوورد...' />
                </div>
                <button className='defaultBtn mx-8'>ورود</button>
                {state.error ? <span>{state.error}</span> : <></>}
            </form>
            <form action={LoginwithGoogle} className='mx-8'>
                <button type='submit' className='w-[100%] flex justify-center items-center gap-2 defaultBtn bg-[transparent!important]'>
                    <FcGoogle className="text-4xl" />
                    وارد شدن با اکانت گوگل</button>
            </form>
        </motion.div>
    )
})
