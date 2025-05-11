import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios"
import getBaseUrl from '../utils/baseURL';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
            const [message, setMessage] = useState("")
            const navigate = useNavigate()
        
         const onSubmit = async(data) => {
            console.log(data)
      try{
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
         headers:{
            'Content-type': 'application/json'
         }
      })
      const auth = response.data;
      console.log(auth)
      if(auth.token){
        localStorage.setItem('token', auth.token);
        setTimeout(()=>{
            localStorage.removeItem('token')
            alert("Token expired pleaase login again")
            navigate("/")
        }, 3600*1000)
      }
      alert("Admin Login Successfull")
      navigate("/dashboard")

      }catch(error){
        setMessage("Please provide a valid email password")
        console.log(error)
      }
    }
    
  return (
     <div className='h-screen flex justify-center items-center'>
     <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
     <h2 className='text-xl font-semibold mb-4'>Admin Dashboard Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
            <label htmlFor="username" className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
            <input 
             {...register("username", { required: true })}
            type="text" name="username" id="username" placeholder='Username' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
        </div>
        <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input 
             {...register("password", { required: true })}
            type="password" name="password" id="password" placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
        </div>
        {
            message && <p className='text-red-500 text-xs italic mb-3'>Please enter valid email and password</p>
        }
        <div>
            <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none cursor-pointer'>Login </button>
        </div>
      </form>
      <p className='mt-5 text-center  text-xs' style={{color:'gray'}}>©2025 Book Store. All rights reserved.</p>
     </div>
    </div>
  )
}

export default AdminLogin