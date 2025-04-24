import React from 'react'
import { useState } from 'react'
import Qr from '../assets/footer.png'

const Footer = () => {

    const [email, setemail] = useState("");



    return (
        <div className=' bg-black py-[50px] mt-[40px]'>
            <div className='flex  justify-between w-[90%] mx-auto'>
                <div className='w-1/5 flex flex-col gap-[17px] text-white font-sans '>
                    <h5 className='font-bold text-[24px]'>Exclusive</h5>
                    <h6 className='font-medium text-[20px]'>Subscribe</h6>
                    <span className='font-normal text-[16px]'>Get 10% off your first order</span>
                    <div className='relative pr-4'>
                        <input className='py-[10px]  px-[16px] rounded border-[1px] bg-transparent border-[#FAFAFA] placeholder:text-[#fafafa75]' placeholder='Enter your email' />
                        <i className="ri-send-plane-2-line absolute right-12 text-[20px] top-2"></i>
                    </div>
                </div>
                <div className='w-1/5 flex flex-col gap-[17px] text-white font-sans '>
                    <h5 className='font-medium text-[20px]'>Support</h5>

                    <span className='font-normal text-[16px] pr-16'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
                    <span className='font-normal text-[16px]'>exclusive@gmail.com</span>
                    <span className='font-normal text-[16px]'>+88015-88888-9999</span>
                </div>
                <div className='w-1/5 flex flex-col gap-[17px] text-white font-sans '>
                    <h5 className='font-medium text-[20px]'>Account</h5>
                    <span className='font-normal text-[16px] pr-16'>My Account</span>
                    <span className='font-normal text-[16px] pr-16'>Login / Register</span>
                    <span className='font-normal text-[16px] pr-16'>Cart</span>
                    <span className='font-normal text-[16px] pr-16'>Wishlist</span>
                    <span className='font-normal text-[16px] pr-16'>Shop</span>
                </div>
                <div className='w-1/5 flex flex-col gap-[17px] text-white font-sans '>
                    <h5 className='font-medium text-[20px]'>Quick Link</h5>
                    <span className='font-normal text-[16px] pr-16'>Privacy Policy</span>
                    <span className='font-normal text-[16px] pr-16'>Terms Of Use</span>
                    <span className='font-normal text-[16px] pr-16'>FAQ</span>
                    <span className='font-normal text-[16px] pr-16'>Contact</span>
                </div>
                <div className='w-1/5 flex flex-col gap-[17px] font-sans text-white'>
                    <h5 className='font-medium text-[20px] '>Download App</h5>
                    <span className='font-normal text-[12px] text-[#fafafa4f]'>Save $3 with App New User Only</span>
                    <img src={Qr} />
                    <div className='flex gap-[20px] items-center text-white text-[18px]'>
                        <i className="ri-facebook-line"></i>
                        <i className="ri-twitter-line"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-linkedin-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
