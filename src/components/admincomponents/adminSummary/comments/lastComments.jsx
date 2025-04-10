import React, { useEffect, useState } from 'react'
import { CommentCard } from './commentCard'

export const LastComments = () => {
    const [comments ,setComments ] = useState([])
    useEffect(
        () => {
            async function getComments() {
                const resault = await fetch('http://localhost:3000/api/comments/lastComments',{method:'GET'})
                const comments = await resault.json()
                console.log(comments);
                
                setComments(comments)
            }
            getComments()
        },[]
    )
    return (
        
        <div className=' grid md:grid-cols-2 grid-cols-1 gap-6'>
            {comments[0]?.comment ?
            comments.map(comment=><CommentCard comment={comment.comment} user={comment.user} prodInfo={{title:comment.productTitle,id:comment.productId}} key={comment.comment._id}/>)
            :<p>در دریافت کامنت ها مشکلی پیش اومده</p>}
        </div>
    )
}
