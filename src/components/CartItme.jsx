import React from 'react'
import product from '../assets/product4.png'


function CartItme() {
  return (
    <div className='flex shadow-lg rounded bg-white items-center p-[20px] justify-between mt-[30px]'>
    <div className='flex gap-2 items-center justify-center w-1/4'>
      <img src={product} width={40} height={40} />
      <span className='text-gray-700 text-[14px]'>Table wooden</span>
    </div>
    <h6 className='text-gray-700 text-[14px] text-center w-1/4'>$ 39,99</h6>
    <div className='w-1/4'>
      <div className='border-[1px] border-gray-400 rounded px-[8px] flex gap-[16px] items-center w-fit mx-auto'>
        <span>2</span>
        <div className='flex flex-col'>
          <i className="ri-arrow-up-s-line"></i>
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>
    </div>
    <h6 className='text-gray-700 text-[14px] text-center w-1/4'>$ 39,99</h6>
  </div>
  )
}

export default CartItme
