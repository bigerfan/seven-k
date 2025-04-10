import { logOut } from '@/lib/actions/authActions'
import { auth, signOut } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Profile = async () => {

    const user = (await auth())?.user

    if(!user)
        redirect('/')

    console.log(user);


    return (
        <div>
            <div className='flex items-center flex-col md:flex-row gap-12 border-b-[.3px] border-gray-300 py-8 rounded-md justify-evenly'>
                <div className='relative w-36 h-36'>
                    <Image src={user.image || '/usericon.svg.png'} alt='userimage' fill className=' object-cover rounded-full border-[.1px] border-gray-400' />
                </div>
                <div>
                    <h2 className='text-[var(--text)]'>{user.name}</h2>
                </div>
                <div>
                    <p>{user.email}</p>
                </div>
                <div>
                    <form action={async()=>{
                        'use server'
                        await signOut({redirect:'/'})
                    }}>
                        <button 
                        className='border-2 border-red-600 text-red-600 bg-transparent rounded-md hover:text-white hover:bg-red-600 transition-all px-4 py-3 text-base'
                        >خروج از حساب کاربری</button>
                    </form>
                </div>
            </div>
            <div className='m-auto w-fit my-8 border-[.1px] border-gray-300'>
                <Link href={'/shoppingcart'} className='defaultBtn'>سبد خرید شما</Link>
            </div>
        </div>
    )
}

export default Profile