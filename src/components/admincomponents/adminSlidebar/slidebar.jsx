import React from 'react'
import { Links } from './links'

export const AdminSlideBar = () => {
  return (
    <aside className=' md:block flex-1 hidden'>
        <div className='fixed bg-[#EB8317] text-white px-8 py-10 min-h-[100vh] w-1/5 shadow-2xl shadow-gray-600 '>
            <Links/>
        </div>
    </aside>
  )
}
