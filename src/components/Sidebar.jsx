import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='border-r-[1px] border-gray-400 px-4 pl-8 py-3 w-[20%] flex flex-col gap-4'>
      <div className='flex justify-between items-center font-bold'>
        <Link to={'#'}>
          Woman’s Fashion
        </Link>
        <i className="ri-arrow-right-s-line font-bold"></i>
      </div>
      <div className='flex justify-between items-center font-bold '>
        <Link to={'#'}>
          Mens Fashion
        </Link>
        <i className="ri-arrow-right-s-line font-bold"></i>
      </div>
      <Link to={'/'} className='text-[16px] font-[500] font-sans'>
        Electronics
      </Link>
      <Link to={'/'} className='text-[16px] font-[500] font-sans'>
        Home & Lifestyle
      </Link>
      <Link to={'/'} className='text-[16px] font-[500] font-sans'>
        Medicine
      </Link>
      <Link to={'/'} className='text-[16px] font-[500] font-sans'>
        Sports & Outdoor
      </Link>
      <Link to={'/'} className='text-[16px] font-[500] font-sans'>
        Baby’s & Toys
      </Link>
      <Link to={'/'} className='text-[16px] font-[500] font-sans'>
        Groceries & Pets
      </Link>
      <Link to={'/'} className='text-[16px] font-[500] font-sans'>
        Health & Beauty
      </Link>
    </aside>
  )
}

export default Sidebar
