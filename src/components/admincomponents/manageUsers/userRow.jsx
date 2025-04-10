import React from 'react'

export const UserRow = ({user}) => {
  return (
    <tr className='even:bg-white even:text-gray-900 odd:bg-[#10375C] odd:text-white '>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <div className='py-4'>
          <button className='redBtn '>حذف کاربر</button>
        </div>
      </td>
    </tr>
  )
}
