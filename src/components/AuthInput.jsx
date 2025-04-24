import React from 'react'

function AuthInput({lable, className, value, onchnage}) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label htmlFor='username' className='text-start text-base text-gray-600 mb-2 capitalize'>{lable}</label>
            <input
            required
                className='w-full bg-blue-200 rounded-md shadow focus:bg-white placeholder:text-[15px] text-[15px] py-2 px-4'
                value={value}
                onChange={onchnage}
            />
        </div>
    )
}

export default AuthInput
