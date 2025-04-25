import React from "react";
import Slider from "react-slick";

import ProductCard from './ProductCard'
import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'
import Product4 from '../assets/product4.png'


import "../app.css";



function ProductSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


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
        <div className='container relative w-[80%] mx-auto my-[50px] py-[30px] border-b-2 border-[#b0b2b4]'>
            <div className='flex gap-4 items-center mb-[30px]'>
                <div className='h-[40px] w-[20px] bg-blue-950 rounded-md'></div>
                <h5 className='text-blue-950 text-[17px] font-semibold'>Our Products</h5>
            </div>
            <div className='flex justify-between items-center mb-[50px]'>
                <h3 className="text-[36px] font-semibold">Explore Our Products</h3>
            </div>

            <Slider {...settings} className="my-slider">
                {
                    products.map(slide => (
                        <div className="mx-2">
                            <ProductCard key={slide.id} img={slide.img} title={slide.title} price={slide.price} />
                        </div>
                    ))
                }
            </Slider>

        </div>
    )
}

export default ProductSlider
