'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export const ReadComments = ({ prodId, newComment, setNewComment }) => {

    const [comments, setComments] = useState([])

    console.log(prodId);

    useEffect(() => {
        const fetchComments = async () => {
            const productId = new URLSearchParams()
            productId.append('productId', prodId)
            let url = 'http://localhost:3000/api/comments'
            url += `?${productId.toString()}`
            const data = await fetch(url)
            const comment = await (data.json())
            setComments(comment)

            setNewComment(false)
        }
        fetchComments()
    }, [prodId, newComment])


    return (
        <>
        {
            comments[0] ?
                <ul className = 'w-[85%] md:w-[60%] m-auto '>
            {
                comments.map(comment =>
                    <li key={comment._id} className='flex flex-col rounded-md shadow-xl bg-slate-100 m-7'>
                        <div className='flex gap-6 items-center mx-7 my-4'>
                            <Image src={comment.user.avatar || '/usericon.svg.png'} width={50} height={50} alt='user avatar'
                                className=' object-cover rounded-full border-[.1px] border-gray-400' />
                            <span>{comment.user.username}</span>
                        </div>
                        <div className='my-4 mx-7'>
                            <p className=' whitespace-pre-line'>
                                {comment.content}
                            </p>
                        </div>
                    </li>)}
                </ul >
                : <p className='m-auto w-fit'>اولین نفری باش که نظر میده</p>}

                </>
    )
}
