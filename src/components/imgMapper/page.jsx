'use client'

import { useEffect, useState } from 'react'
import ImageMapper from 'react-img-mapper'
import deskimage from '../../../public/desktoplanding.jpg'
import { ProdMap } from './productmapCart'
import { clothes } from '@/script/fakedata'


export const DesktopImgMapper = () => {

    const [hoveredItem, setHoveredItem] = useState(null);
    const [position, setPosition] = useState({})
    const [cloth, setCloth] = useState(null)

    const areas = [
        {
            name: "boot",
            shape: "rect",
            coords: [590, 460, 261, 58],
            href: "/product/boots",
        },
        {
            name: "pant",
            shape: "rect",
            coords: [664, 236, 909, 28],
            href: "/product/belt",
        },
        {
            name: "t shirt",
            shape: "rect",
            coords: [675, 344, 973, 544],
            href: "/product/t-shirt",
        }, {
            name: "watch",
            shape: "rect",
            coords: [331, 474, 589, 520],
            href: "/product/watch",
        }, {
            name: 'glass',
            shape: 'rect',
            coords: [714, 257, 903, 335],
            href: '/product/glass'
        }
    ]

    const areaProps = (area) => ({
        style: {
            border: '2px solid transparent',
            transition: 'border 0.3s ease, transform 0.3s ease',
        },
        className: activeArea === area.alt ? 'active-area' : 'deactive',
        onClick: () => handleAreaClick(area),
    });

    function handleMouseEnter(area) {
        setHoveredItem((provState) => area)
        const foundCloth = clothes.find(singleCloth => singleCloth.name === area.name);
        setCloth(foundCloth);


        const [x1, y1, x2, y2] = area.coords


        const imageCenter = 600

        const positionStyles = { top: `${y2 / 2}px` }

        if (x1 < imageCenter) {
            console.log(true);


            positionStyles.left = `calc(1200 - ${x1}px)`;
        } else {

            positionStyles.left = `${x2}px`;
        }

        setPosition(positionStyles);



    }


    return (
        <>
            <div className='relative left-[calc(50%_-_600px)] ' dir='ltr' >
                <div className=' w-fit mask-gradient '>
                    <ImageMapper
                        src={'/desktoplanding.jpg'} areas={areas} name='desktop'
                        width={1200}
                        height={800}
                        onMouseEnter={(area) => handleMouseEnter(area)}
                        onMouseLeave={() => setHoveredItem(null)}
                        areaProps={areaProps}
                        strokeColor='black'
                    />

                    <button className='absolute bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition text-lg'>دیدن محصولات</button>
                </div>
                {
                        hoveredItem && cloth && (
                            <div
                                style=
                                {{
                                    position: 'absolute',
                                    top: position.top,
                                    left: position.left,
                                    right: position.right,
                                    zIndex: 1000
                                }}>
                                <ProdMap product={cloth} />
                            </div>
                        )
                    }
            </div>

        </>
    )
}

