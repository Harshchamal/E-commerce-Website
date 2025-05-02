import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [Visible, setVisible] = useState(false)

  return (
    <div className='relative'>
      <div className='container mx-auto flex items-center justify-between py-5 px-4 font-medium'>

        {/* Logo */}
        <img src={assets.logo} className='w-36' alt="Logo" />

        {/* Desktop Nav */}
        <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>
          <NavLink to="/" className='flex flex-col items-center gap-[2px]'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to="/collection" className='flex flex-col items-center gap-[2px]'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to="/about" className='flex flex-col items-center gap-[2px]'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          <NavLink to="/contact" className='flex flex-col items-center gap-[2px]'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>

        {/* Icons */}
        <div className='flex items-center gap-6'>

          <img src={assets.search_icon} className='w-5 cursor-pointer' alt="Search" />

          {/* Profile Dropdown */}
          <div className='group relative'>
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile" />
            <div className='group-hover:block hidden absolute right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
          </Link>

          {/* Mobile Menu Icon */}
          <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all duration-300 z-50 ${Visible ? 'w-full' : 'w-0 overflow-hidden'}`}>
        <div className='flex flex-col text-gray-600 px-6 pt-6'>

          {/* Back Button */}
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 pb-4 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>

          {/* Stacked Nav Links */}
          <NavLink onClick={()=>setVisible(false)} className='py-4 border-b' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-4 border-b' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-4 border-b' to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} lassName='py-4 border-b' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
