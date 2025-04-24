import React from 'react'

function CartTotal() {
    return (
        <div className='border-[1px] border-black rounded px-[24px] py-[32px] w-1/3'>
            <h4 className='text-[20px] font-medium text-black mb-[24px]'>Cart Total</h4>
            <div className='flex justify-between border-b-[1px] border-gray-400 pb-[10px] mb-[16px]'>
                <span className='text-gray-700 text-[16px]'>Subtotal:</span>
                <span className='text-gray-700 text-[16px]'>$1750</span>
            </div>
            <div className='flex justify-between border-b-[1px] border-gray-400 pb-[10px] mb-[16px]'>
                <span className='text-gray-700 text-[16px]'>Shipping:</span>
                <span className='text-gray-700 text-[16px]'>Free</span>
            </div>
            <div className='flex justify-between pb-[10px] mb-[16px]'>
                <span className='text-gray-700 text-[16px]'>Total:</span>
                <span className='text-gray-700 text-[16px]'>$1750</span>
            </div>
            <button className='border-[1px] bg-blue-950 py-3 px-12 rounded text-white text-[16px] font-medium mx-auto flex justify-center'>Procees to checkout</button>

        </div>
    )
}

export default CartTotal
