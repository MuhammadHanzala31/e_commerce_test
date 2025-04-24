import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux';
import { removeUser } from '../reduxStore/slices/userSlice';
import { useSelector } from 'react-redux';
function Navbar() {

    const token = Cookies.get('accessToken')

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [session, setSession] = useState(true);
    const [userModal, setUserModal] = useState(false);
    const [search, setSearch] = useState("");
    
    useEffect(()=>{
        const token = Cookies.get('accessToken')
        if(!token){
            setSession(false)
        }
    },[session])


    const handleLogout = async ()=>{
        const url = 'http://localhost:8000/api/v1/user/logout';
        const res = await fetch(url,{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,  // Make sure token exists and is valid
              },
        }
        )
        dispatch(removeUser())
        Cookies.remove("accessToken")
        Cookies.remove("refreshToken")
        setSession(false)
    }

    return (
        <header className='border-b-[1px] border-gray-400 shadow'>
            <div className='py-[15px] bg-black w-full'>
                <p className='mb-0 text-white text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            </div>
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h1 className='text-[24px] font-bold text-black'>
                    Exclusive
                </h1>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap gap-8 items-center text-base justify-center">
                    <NavLink to={"/"} className={({ isActive }) =>
                        `${isActive ? "border-b-[1px] border-gray-400" : ""} text-[16px] font-medium font-inter`
                    }>
                        Home
                    </NavLink>
                    <NavLink to={"/contact"} className={({ isActive }) =>
                        `${isActive ? "border-b-[1px] border-gray-400" : ""} text-[16px] font-medium font-inter`
                    }>
                        Contact
                    </NavLink>
                    <NavLink to={"/about"} className={({ isActive }) =>
                        `${isActive ? "border-b-[1px] border-gray-400" : ""} text-[16px] font-medium font-inter`
                    }>
                        About
                    </NavLink>
                    <NavLink to={"/all-products"} className={({ isActive }) =>
                        `${isActive ? "border-b-[1px] border-gray-400" : ""} text-[16px] font-medium font-inter`
                    }>
                        All Products
                    </NavLink>
                </nav>
                <div className='flex items-center gap-5'>
                   {session ?   <div className='relative flex items-center gap-4'>
                    <div className='relative'>
                        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='What are you looking for?' className='bg-[#F5F5F5] placeholder:text-[#7D8184] py-2 px-2 w-[300px] shadow' />
                        <i className="ri-search-line text-[20px] absolute top-1 right-[10px]"></i>
                    </div>
                    <i className="ri-heart-line text-[20px]"></i>
                    <i onClick={()=> navigate('/cart')} className="ri-shopping-cart-line text-[20px] cursor-pointer hover:scale-[1.1]"></i>
                    <i className="ri-account-circle-line text-[20px] cursor-pointer hover:scale-[1.1]" onClick={()=>setUserModal(!userModal)}></i>
                    {
                        userModal && <div className='bg-black absolute right-1 top-9 z-[9999999] w-fit p-3 shadow-white shadow-lg rounded-lg'>
                      <p className='text-white px-2 mb-3'>{user?.data.user?.email}</p>
                       <button className='bg-blue-950 px-2 py-1 rounded-md shadow shadow-white flex justify-between items-center w-[90%] mx-auto' onClick={handleLogout}>
                        <p className='mb-0 text-white'>logout</p>
                        <i class="ri-logout-box-line text-[20px] text-white"></i>
                       </button>
                    </div>
                    }
                   </div> : <Link to={'/login'} className='py-2 px-4 bg-blue-950 text-white'>Login</Link>
                   }
                </div>
            </div>
        </header>
    )
}

export default Navbar
