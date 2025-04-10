import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CommentCard = ({ comment, user, prodInfo }) => {
    return (
        <div className='bg-white shadow-xl rounded-md py-4 px-4'>
            <div className='flex items-center gap-4 '>
                <div className='relative w-16 h-16 '>
                    <Image src={user.avatar || '/usericon.svg.png'} fill alt='userImage' className='rounded-full border-2 border-gray-500' />
                </div>
                <div>
                    {user.username}
                </div>
            </div>
            <div className='mx-4 py-4'>
                {comment.content}
            </div>
            <div className='border-t-2 border-gray-400 pt-4 mb-4'>
                در محصول <Link className=' hover:text-orange-400 transition-colors' href={`/products/${prodInfo.id}`}>"{prodInfo.title}"</Link>
            </div>
            <div className='flex gap-4 justify-end'>
                <button className=' defaultBtn text-base'>پاسخ</button>

                <button className=' redBtn'>حذف </button>
            </div>
        </div>
    )
}
