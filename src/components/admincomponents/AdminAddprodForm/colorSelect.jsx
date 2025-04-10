import { useState } from 'react'

export const ColorSelect = ({ setFormData, formData }) => {
    const [currentColor, setCurrentColor] = useState({ name: '', hex: '' })


    const handleColorChange = (field, value) => {
        setCurrentColor(prev => ({ ...prev, [field]: value }))

    }

    const AddColor = () => {

        if (currentColor.name.trim() !== '' && currentColor.hex && currentColor.hex !== '') {
            setFormData((prevData) => ({ ...prevData, colors: [...formData.colors, { name: currentColor.name, hex: currentColor.hex }] }))

            setCurrentColor({ name: '', hex: '' })
        }
    }

    const deleteColor = (hex) => {
        setFormData(prevform => ({ ...prevform, colors: formData.colors.filter(color => color.hex !== hex) }))
    }
    return (
        <div className='flex gap-5 flex-col md:flex-row border-b-2'>
            <div className='flex-1'>
                <div className='flex w-[100%] justify-between'>
                    <input type="text" value={currentColor.name} placeholder='نام رنگ' onChange={e => handleColorChange('name', e.target.value)} className='w-[40%] inputAdmin flex-1' />
                    <input type="color" value={currentColor.hex} onChange={e => handleColorChange('hex', e.target.value)} className='colorInput flex-1' />
                </div>
                <button className='defaultBtn text-base my-4' type='button' onClick={AddColor}>افزودن رنگ</button>
            </div>
            <div className='flex-1'>
                {formData.colors.length > 0 ?
                    <div className=' py-2'>
                        <div className='grid xl:grid-cols-3 gap-3 grid-cols-2   '>
                            {formData.colors.map((color, index) =>
                                <div className=' rounded-full flex border-2 border-slate-800 w-32 overflow-hidden text-sm  ' key={`${color.hex}-${color.name}`}>
                                    <div className='flex-[2] flex items-center justify-center '><span className='self-center m-auto px-2 ' >{color.name}</span></div>
                                    <div dir='ltr' className={` flex-[2] `} style={{ backgroundColor: color.hex }}>
                                        <button type='button' onClick={() => deleteColor(color.hex)} className='text-center rounded-full border-2 border-gray-700 text-gray-700 bg-red-700 py-1 px-2 text-sm'>X</button>
                                    </div>
                                </div>
                            )}</div></div> : <div></div>
                }
            </div>
        </div>
    )
}
