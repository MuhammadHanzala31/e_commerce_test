import React, { useState, useContext } from 'react'
import AuthInput from '../components/AuthInput';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { modalContext } from '../context/ModalContext';
import AlertModal from '../components/AlertModal';



function Register() {

  const context = useContext(modalContext)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);




  const handleRegister = async (e) => {
    e.preventDefault()
    const formData = {
      username,
      email,
      password
    }
    const url = 'http://localhost:8000/api/v1/user/register'

    try {
      const resposne = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      })

      console.log(resposne.data)
      setData(resposne.data)
      setErrorMessage("")
      setError(false)
      context.setModalOpen(true)

    }
    catch (error) {
      context.setModalOpen(true)
      setErrorMessage(error.message)
      setError(true)
      console.log(error);
      

    }


    console.log(context.modalOpen);



  }
  return (
    <div className='flex h-screen overflow-y-hidden'>
      <div className='bg-blue-950 h-screen w-1/2 flex items-center justify-center'>
        <h1 className='text-white text-3xl drop-shadow-md font-mono'>Welcome to E-commerce</h1>
      </div>
      <div className='w-1/2 flex flex-col gap-3 h-screen justify-center items-center'>
        <h3 className='text-3xl text-blue-950 mb-5'>Register Account</h3>
        <form className='flex flex-col gap-2 w-[300px]' onSubmit={(e) => handleRegister(e)}>
          <AuthInput lable={'username'} value={username} onchnage={(e) => setUsername(e.target.value)} />
          <AuthInput lable={'Email'} value={email} onchnage={(e) => setEmail(e.target.value)} />
          <AuthInput lable={'password'} value={password} onchnage={(e) => setPassword(e.target.value)} />
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 font-mono text-[14px]'>Already have account ?</span>
            <Link to={'/login'} className='text-blue-900 font-mono text-[14px]'>Login Account</Link>
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

export default Register
