import React, { useState, useContext } from 'react'
import Cookies from 'js-cookie'
import AuthInput from '../components/AuthInput'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { modalContext } from '../context/ModalContext';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../reduxStore/slices/userSlice';
import AlertModal from '../components/AlertModal';

function Login() {

  const context = useContext(modalContext);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false)
  const [data, setData] = useState("")


  const handleLogin = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:8000/api/v1/user/login'
    const formData = {
     email : username,
      password
    }

    try {
      const response = await axios.post(url, formData,{
          headers: {
            'Content-Type': 'application/json',
          }
        })

        setData(response.data)
        setError(false)
        setErrorMessage(data.message)
        context.setModalOpen(true)
        Cookies.set("refreshToken", response.data.data.refreshToken, {expires : 7})
        Cookies.set("accessToken", response.data.data.accessToken, {expires : 2})
        dispatch(addUser(response.data))
        console.log(response.data.data.accessToken);
        navigate('/')

    } catch (error) {
      setData({})
      setError(true)
      setErrorMessage(error.message)
      context.setModalOpen(true)
    }
  }


  return (
    <div className='flex h-screen overflow-y-hidden'>
      <div className='bg-blue-950 h-screen w-1/2 flex items-center justify-center'>
        <h1 className='text-white text-3xl drop-shadow-md font-mono'>Welcome to E-commerce</h1>
      </div>
      <div className='w-1/2 flex flex-col gap-3 h-screen justify-center items-center'>
        <h3 className='text-3xl text-blue-950 mb-5'>Login</h3>
        <form className='flex flex-col gap-2 w-[300px]' onSubmit={(e) => handleLogin(e)}>
          <AuthInput lable={'email'} value={username} onchnage={(e) => setUsername(e.target.value)} />
          <AuthInput lable={'password'} value={password} onchnage={(e) => setPassword(e.target.value)} />
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 font-mono text-[14px]'>Don't have account ?</span>
            <Link to={'/register'} className='text-blue-900 font-mono text-[14px]'>Register account</Link>
          </div>
          <button className='bg-blue-900 text-white py-2 px-4 my-3 rounded-md'>Submit</button>
        </form>
      </div>
      {
        error ? <AlertModal title={'Failed'} message={errorMessage}  circleClass={'bg-red-100'}/> : <AlertModal title={'success'} circleClass={'bg-green-100'} message={data.message} />
      }
    </div>
  )
}

export default Login
