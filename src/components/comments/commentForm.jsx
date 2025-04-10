'use client'

import { useState } from "react"

export const CommentForm = ({username, userId, prodId,setNewComment }) => {

    const [pending, setPending] = useState(false)
    const [content, setContent] = useState('')

    const submitComment = async (e) => {
        e.preventDefault()

        setPending(true)


        const formData = {
            content,
            productId: prodId,
            userId
        }

        try {
            const resault = await fetch('http://localhost:3000/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

        } catch (error) {
            throw new Error(error)
        }
        setPending(false)
        setNewComment(true)
        setContent('')




    }
    return (
        <form className='flex flex-col gap-2' onSubmit={submitComment}>
            <input
                type='text'
                placeholder='نام شما'
                className='inputUser '
                value={username}
                readOnly
            />
            <textarea
                placeholder='نظر خود را بنویسید...'
                className='inputUser'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            {pending ? <button disabled className="defaultBtn">درحال ارسال</button>
                :
                <button type='submit' className='defaultBtn'>ارسال نظر</button>

            }
        </form>
    )
}
