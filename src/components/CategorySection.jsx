import React from 'react'
import mens from '../assets/mens.webp'
import womens from '../assets/womens.png'
import electric from '../assets/electric.png'
import jewelery from '../assets/jewelry.jpeg'
import { Link } from 'react-router-dom'
function CategorySection() {
    return (
        <>
            <div className='flex gap-2 w-[90%] mx-auto justify-center rounded-l-2xl'>
                <div style={{ backgroundImage: `url(${electric})`, backgroundSize: '100%',  }} className='w-1/4 h-[250px] '>
                    <Link to={'/category/electronics'} className='text-white bg-[#00000086] h-full flex items-end justify-start p-4 font-bold font-sans text-[20px] hover:underline'>Electronic</Link>
                </div>
                <div className='flex flex-col gap-2 w-2/3' >
                    <div className='w-full h-[250px]' style={{ backgroundImage: `url(${mens})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Link to={'/category/men'} className='text-white bg-[#00000086] h-full flex items-end justify-end p-4 font-bold font-sans text-[20px] hover:underline'>Men's Clothing</Link>
                    </div>
                </div>

            </div>
            <div className='flex gap-2 w-[90%] mx-auto my-2 justify-center'>
                <div className='flex flex-col gap-2 w-2/3' >
                    <div className='w-full h-[250px]' style={{ backgroundImage: `url(${womens})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Link to={'/category/women'} className='text-white bg-[#00000086] h-full flex items-end justify-start p-4 font-bold font-sans text-[20px] hover:underline'>Women's Clothing</Link>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${jewelery})`, backgroundSize: 'cover' }} className='w-1/4 h-[250px]'>
                    <Link to={'/category/jewelery'} className='text-white bg-[#00000086] h-full flex items-end justify-start p-4 font-bold font-sans text-[20px] hover:underline'>jewelery</Link>
                </div>

            </div>

        </>
    )
}

export default CategorySection
