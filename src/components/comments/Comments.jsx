'use client'

import React, { useState } from 'react'
import { CommentForm } from './commentForm'
import { ReadComments } from './readComments'
import Link from 'next/link'

export const Comments = ({ user, prodId, product }) => {

    const [newComment, setNewComment] = useState(false)
    return (
        <div className='w-[100%]'>
            <div className='w-[85%] md:w-[60%] m-auto'>
                {user ?
                    <CommentForm username={user.name} userId={user.id} prodId={prodId} setNewComment={setNewComment} />
                    :
                    <div className='flex flex-col items-center rounded-md bg-gray-200 shadow-xl gap-2 py-8 px-2'>
                        <p className='text-center'>برای کامنت گذاشتن ابتدا وارد اکانت خود شوید</p>
                        <Link href={'/logup'}>
                            <button className=' defaultBtn'>ورود</button>
                        </Link>
                    </div>
                }
            </div>
            <div className='mt-4 w-[100%]' >
                <ReadComments prodId={prodId} setNewComment={setNewComment} newComment={newComment} />
            </div>
        </div>)
}
