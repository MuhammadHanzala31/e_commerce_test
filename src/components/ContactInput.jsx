import React from 'react'

function ContactInput({ value, placeholder, classes, change }) {
    return <input
     className={`bg-[#F5F5F5] py-[12px] focus:outline-none px-[16px] rounded placeholder:text-[16px] placeholder:text-[#0000007a] placeholder:font-normal text-[#0000007a] text-[16px] font-normal ${classes}`}
      onChange={change}
      value={value}
      placeholder={placeholder} />
}

export default ContactInput
