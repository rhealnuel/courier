import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' '>
       <div className='flex justify-between items-center px-4  lg:px-20 bg-white py-8 w-screen fixed z-50 shadow-xl'>
            <div>
                <img src={logo} alt="" className=' w-1/2 lg:w-fit' />
            </div>
            <div className='flex gap-10 lg:text-[20px] font-semibold '>
                <Link to={'/'} ><p>Home</p></Link>
                <Link to={'/'} ><p>Track</p></Link>            
            </div>
       </div>
    </div>
  )
}

export default Navbar