'use client'

import { useEffect, useState } from 'react';
import { ColorSelect } from './colorSelect';
import { SizeSelect } from './sizeSelect';
import { OtherImages } from './OtherImages';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

export const AdminForm = ({ product }) => {

    const [formData, setFormData] = useState(product ? { ...product, mode: 'PUT' } : {
        title: '',
        price: '',
        category: 'pants',
        image: '',
        otherImages: [],
        colors: [],
        sizes: [],
        description: '',
        mode: 'POST'
    });

    console.log(formData);




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/api/product', {
            method: formData.mode,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            if (formData.mode == 'POST')
                setFormData({
                    title: '',
                    price: '',
                    category: 'pants',
                    image: '',
                    otherImages: [],
                    colors: [],
                    sizes: [],
                    description: '',
                });
            else
            redirect('../')

        } else {
            alert(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='bg-orange-400 rounded-md flex flex-col gap-5 py-8 px-2  md:w-[70%] w-[95%] self-center m-auto' >
            <h2 className=' text-pretty text-2xl mx-8 text-white font-bold'>اضافه کردن محصول جدید</h2>
            <div className='w-[80%] grid lg:grid-cols-2 grid-cols-1 m-auto gap-5 '>
                <input onChange={handleChange} type="text" name='title' value={formData.title} placeholder='نام محصول' className='  inputAdmin ' />
                <input onChange={handleChange} type="number" name='price' value={formData.price} placeholder='قیمت...' className=' inputAdmin' />
                <select onChange={handleChange} name="category" value={formData.category} id="cat" className=' inputAdmin'>
                    <option value="pants">شلوار</option>
                    <option value="coat">کت</option>
                    <option value="shoes">کفش</option>
                    <option value="jacket">پالتو</option>
                </select>
                <input onChange={handleChange} type="text" name='image' value={formData.image} className=' inputAdmin ' placeholder='عکس معرفی' />
                <div>
                    <h3>انتخاب سایزها:</h3>
                    <SizeSelect setFormData={setFormData} sizes={formData.sizes} />
                </div>
            </div>

            <div className='w-[80%] m-auto'>
                <ColorSelect setFormData={setFormData} formData={formData} />
                <OtherImages setFormData={setFormData} formData={formData} />
                <textarea
                    name="description" id="des" className='inputAdmin w-[100%] my-5' value={formData.description} onChange={handleChange} placeholder='درباره محصول ...'></textarea>
                <input type='submit' className='greenBtn w-[100%] m-auto' value={'افزودن'} />

            </div>

        </form>)
}
