import React from 'react';
import Product from '../assets/product1.png'

const ProductCard = ({ img, title, price, discount }) => {
    return (
        <div className='relative'>
            <div className='bg-[#F5F5F5] py-4 h-[220px] shadow-md'>
                <img src={img}  className='mx-auto flex justify-center items-center w-[200px] h-[200px]' />
            </div>
            <div className='p-3'>
                <p className='text-black text-[16px] font-[500]'>{title}</p>
                <div className='flex gap-2 items-center'>
                    <p className='text-blue-950 font-[500]'>$ {price}</p>
                    <span className='text-gray-600 line-through'>{discount ? discount : ''}</span>
                </div>
                <div className='flex items-center'>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                    <i class="ri-star-fill text-yellow-500"></i>
                </div>
            </div>

            <div className='absolute top-1 right-2'>
            <i class="ri-heart-line text-[24px]  my-2 cursor-pointer shadow bg-white h-[30px] w-[30px] flex justify-center items-center rounded-full"></i>
            <i class="ri-eye-line text-[24px] my-2 cursor-pointer  shadow bg-white h-[30px] w-[30px] flex justify-center items-center rounded-full"></i>
            </div>
        </div>
    )
}

export default ProductCard
