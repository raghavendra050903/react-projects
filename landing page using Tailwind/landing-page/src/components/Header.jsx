import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-2'>
            <img src="./src/assets/Logo.svg" alt="logo" />
            <button className='bg-gradient-to-r from-orange-400 to-red-400 text-white px-2.5 py-1.5 rounded-2xl text-sm'>Hoster is Hiring !</button>
        </div>
        <div className=''>
            <FaBars/>
        </div>
    </div>
  )
}

export default Header