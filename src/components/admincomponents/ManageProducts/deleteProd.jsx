import React from 'react'

export const DeleteProd = ({ ProdId, setDel }) => {
    async function deleteProduct(e) {
        e.preventDefault()
        const resault = await fetch('http://localhost:3000/api/product', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: ProdId }),
        })

        setDel(true)
    }


    return (
        <form onSubmit={deleteProduct}>
            <button className='redBtn' >حذف</button>
        </form>
    )
}
