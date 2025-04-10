'use client'

import { UserRow } from '@/components/admincomponents/manageUsers/userRow'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [users,setUsers]= useState([])
    useEffect(()=>{
        const getUsers = async ()=>{
            const resault = await fetch('http://localhost:3000/api/users')
            const data = await resault.json()
            setUsers(data)
        }
        getUsers()
    })
    return (
        <div>
            <table className='w-full max-w-[90%] mx-auto my-8 border border-gray-300 rounded-md shadow-sm'>
                <thead>
                    <tr className='bg-gray-100 text-gray-700'>
                        <th>نام کاربری</th>
                        <th>ایمیل </th>
                        <th>عملیات </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=><UserRow user={user}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default page