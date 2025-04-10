'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const SlidbarLink = ({ link }) => {
    const pathName = usePathname()

    return (
        <Link href={link.href} className={`text-xl text-pretty hover:bg-[#10375C] py-4 px-5 rounded-md transition-all ${pathName == link.href && 'bg-[#10375C]'}`}>
            {link.name}
        </Link>
    )
}
