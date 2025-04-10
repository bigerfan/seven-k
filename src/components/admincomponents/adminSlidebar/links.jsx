import React from 'react'
import { SlidbarLink } from './link'

export const Links = () => {
    const links = [
        { name: 'پنل', href: '/seller' },
        { name: 'افزودن محصول جدید', href: '/seller/addProd' },
        { name: 'مدیریت محصولات', href: '/seller/manageProd' },
        { name: 'مدیریت افراد', href: '/seller/manageUsers' },
    ]
    return (
        <div className='flex flex-col gap-4 '>
            {links.map(link => <SlidbarLink link={link} key={link.name}/>)}
        </div>
    )
}
