import React from 'react'
import {assets} from '../assets/assets'

const NavBar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(20%,80px)] cursor-pointer' src={assets.logo} alt='' />
      <button onClick={() => setToken('')} className='bg-black text-white px-5 sm:px-7 py-2 text-xs sm:text-sm rounded-full'>Log Out</button>
    </div>
  )
}

export default NavBar