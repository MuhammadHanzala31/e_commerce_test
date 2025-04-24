import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import iphone from '../assets/iphone.png'
import apple from '../assets/apple.png'



import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

function BannerSlider() {

    const bannerSlides = [
        {
            id: 1,
            heading: 'Up to 10% off Voucher',
            title: 'iPhone 14 Series',
            titleImg: apple,
            product: iphone

        },
        {
            id: 2,
            heading: 'Up to 10% off Voucher',
            title: 'iPhone 14 Series',
            titleImg: apple,
            product: iphone

        },
        {
            id: 2,
            heading: 'Up to 10% off Voucher',
            title: 'iPhone 14 Series',
            titleImg: apple,
            product: iphone

        },
        {
            id: 2,
            heading: 'Up to 10% off Voucher',
            title: 'iPhone 14 Series',
            titleImg: apple,
            product: iphone

        },
        {
            id: 2,
            heading: 'Up to 10%  off Voucher',
            title: 'iPhone 14 Series',
            titleImg: apple,
            product: iphone

        }
    ]


    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {
                bannerSlides.map(slider => (
                    <SwiperSlide className='bg-black flex px-6 py-4'>
                        <div className='w-1/2 flex flex-col justify-between py-4'>
                            <div className='flex gap-3 items-center'>
                                <img src={apple} />
                                <p className='mb-0 text-white'>{slider.title}</p>
                            </div>
                            <h1 className='text-[55px] line tracking-tighter mb-[25px] text-white font-semibold w-[55%]' style={{lineHeight: '70px'}}>{slider.heading}</h1>
                            <Link to={'/'} className=' w-fit text-white border-b-2 border-white text-[20px] ml-3 pr-4'>
                                Shop now
                            </Link>
                        </div>
                        <div className='w-1/2 flex flex-col gap-[20px]'>
                            <img src={iphone}/>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default BannerSlider
