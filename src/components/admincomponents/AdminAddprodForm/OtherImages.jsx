import Image from 'next/image'
import React, { useState } from 'react'
import { AddImageModal } from './addimagemodal';

export const OtherImages = ({ formData, setFormData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);




    return (
        <>
            <div className='flex flex-col lg:flex-row  mt-10 gap-4 w-[100%] border-b-2 py-4 '>
                <div className='flex gap-1 h-fit flex-1 '>
                    <button className='defaultBtn ' onClick={() => setIsModalOpen(true)} type='button'>
                        افزودن عکس
                    </button>
                </div>
                <div className=' flex-[3] '>
                    <AddImageModal isOpen={isModalOpen} onClose={setIsModalOpen} setFormData={setFormData} />
                    {formData.otherImages?.length > 0 ?
                        <div className=' grid md:grid-cols-3 grid-cols-2  '>
                            {formData.otherImages?.map((singleImg, index) =>
                                <div className='relative my-2 mx-2 justify-between items-center w-fit ' key={singleImg}>
                                    <Image className='text-white border-2' src={singleImg} width={150} height={150} alt='prodImga'></Image>
                                    <button className=' bg-orange-600 px-2 py-2 text-white text-sm absolute  left-0 top-0 '
                                        onClick={() => setFormData(prev => ({ ...prev, otherImages: formData.otherImages.filter(img => img !== singleImg) }))}>X</button>
                                </div>)}
                        </div> : <div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
