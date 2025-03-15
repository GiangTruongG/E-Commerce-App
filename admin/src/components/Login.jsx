import axios from 'axios';
import React, { useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      
      const response = await axios.post(backendUrl + '/api/user/admin', {email, password});
      
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.msg);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
      <div className='bg-white shadow-md rounded-lg max-w-md px-8 py-6'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-73'>
            <p className='text-sm font-medium text-gray-600 mb-2'>Email Address</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full rounded-md border border-gray-300 outline-none px-3 py-2' type='email' placeholder='youremail@gmail.com' required />
          </div>
          <div className='mb-3 min-w-73'>
            <p className='text-sm font-medium text-gray-600 mb-2'>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full rounded-md border border-gray-300 outline-none px-3 py-2' type='password' placeholder='Enter your password' required />
          </div>
          <button className='bg-black text-white py-2 px-4 w-full rounded-md mt-2' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login