import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password});
        
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.msg);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {email, password});
        
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.msg);
        }
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  },[token]);

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none w-8 h-[1.5px] bg-gray-800" />
      </div>
      {currentState === 'Login' ? '' :<input onChange={(e) => setName(e.target.value)} value={name} className="w-full border border-gray-400 px-3 py-2" type="text" placeholder="Name"  required/>}
      <input onChange={(e) => setEmail(e.target.value)} value={email} className="w-full border border-gray-400 px-3 py-2" type="email" placeholder="Email"  required/>
      <input onChange={(e) => setPassword(e.target.value)} value={password} className="w-full border border-gray-400 px-3 py-2" type="password" placeholder="Password"  required/>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>Forgot your password?</p>
        {
          currentState === 'Login'
          ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Creat an account</p>
          : <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login here!</p>
        }
      </div>
      <button className="bg-black text-white px-8 py-2 mt-4 cursor-pointer">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login