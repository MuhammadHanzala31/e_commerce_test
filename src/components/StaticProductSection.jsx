import React, { useState } from 'react'
import ProductCard from './ProductCard'
import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'
import Product4 from '../assets/product4.png'


function StaticProductSection() {
    const products = [
        {
            id: 1,
            title: 'The north coat',
            price: '$260',
            img: Product1
        },
        {
            id: 2,
            title: 'Gucci duffle bag',
            price: '$960',
            img: Product2
        },
        {
            id: 3,
            title: 'RGB liquid CPU Cooler',
            price: '$160',
            img: Product3
        },
        {
            id: 4,
            title: 'Small BookSelf',
            price: '$360',
            img: Product4
        },
    ]



    return (
        <div className='container relative w-[80%] mx-auto my-[50px] py-[30px] '>
            <div className='flex gap-4 items-center mb-[30px]'>
                <div className='h-[40px] w-[20px] bg-blue-950 rounded-md'></div>
                <h5 className='text-blue-950 text-[17px] font-semibold'>This Month</h5>
            </div>
            <div className='flex justify-between items-center mb-[50px]'>
                <h3 className="text-[36px] font-semibold">Best Selling Products</h3>
                 <button className='bg-blue-950 text-white rounded-md shadow px-4 py-2 text-[16px]'>view all</button>
            </div>
            <div className='flex items-center gap-3 '>
                {
                    products.map(product => (
                        <div className='w-1/4'>
                        <ProductCard key={product.id} img={product.img} title={product.title} price={product.price} />
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default StaticProductSection
