import React from 'react'
import PreFooterBox from './PreFooterBox'
import preFooter1 from '../assets/pre_footer-1.png'
import preFooter2 from '../assets/pre_footer-2.png'
import preFooter3 from '../assets/pre_footer-3.png'


function PreFooter() {

    const data = [
        {
            _id : 1,
            icon : preFooter1,
            title : 'FREE AND FAST DELIVERY',
            para : 'Free delivery for all orders over $140'
        },
        {
            _id : 2,
            icon : preFooter2,
            title : '24/7 CUSTOMER SERVICE',
            para : 'Friendly 24/7 customer support'
        },
        {
            _id : 3,
            icon : preFooter3,
            title : 'MONEY BACK GUARANTEE',
            para : 'We reurn money within 30 days'
        },
    ]

  return (
    <div className='flex gap-4 justify-evenly items-center mt-[40px]'>
    {
        data.map(e => (
            <PreFooterBox {...e}/>
        ))
    }
    </div>
  )
}

export default PreFooter
