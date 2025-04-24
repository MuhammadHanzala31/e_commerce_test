import React from 'react'
import preFooter1 from '../assets/pre_footer-1.png'

function PreFooterBox({icon, title, para}) {
  return (
    <div className='w-[31%] bg-white'>
      <img src={icon} width={80} height={80} className='mx-auto text-center'/>
      <div className='flex flex-col gap-1 mt-[24px]'>
        <h5 className='text-[#000000] font-mono text-center text-[20px] font-semibold'>{title}</h5>
        <span className='text-[#000000] font-mono text-center text-[14px] font-normal'>{para}</span>
      </div>
    </div>
  )
}

export default PreFooterBox
