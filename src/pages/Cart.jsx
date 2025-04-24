import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartItme from '../components/CartItme'
import CartTotal from '../components/CartTotal'

function Cart() {
  return (

    <div>
      <Navbar />
      <div className='py-[60px] mx-auto w-[90%]'>
        <span>Home / <span>Cart</span></span>
        <div className='flex shadow-lg rounded bg-white items-center p-[20px] justify-between mt-[30px]'>
          <h6 className='text-center w-1/4'>Product</h6>
          <h6 className='text-center w-1/4'>Price</h6>
          <h6 className='text-center w-1/4'>Quantity</h6>
          <h6 className='text-center w-1/4'>Subtotal</h6>
        </div>
        <CartItme />
        <CartItme />
        <div className='flex justify-between my-4 items-center'>
          <button className='border-[1px] border-[#00000080] py-3 px-10 rounded text-[#000000] text-[16px] font-medium'>Return To Shop</button>
          <button className='border-[1px] border-[#00000080] py-3 px-10 rounded text-[#000000] text-[16px] font-medium'>Update Cart</button>
        </div>
        <div className='flex justify-between my-4'>
          <div></div>
          <CartTotal/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
