import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='w-full px-4'>
      <div className='flex flex-col sm:flex-row border border-gray-400 h-[600px]'>

        {/* Hero Left Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center px-6'>
          <div className='text-[#414141] space-y-4'>
            {/* Tagline */}
            <div className='flex items-center gap-2'>
              <div className='w-8 md:w-11 h-[2px] bg-[#414141]'></div>
              <p className='font-medium text-sm md:text-base uppercase'>OUR BESTSELLERS</p>
              <div className='w-8 md:w-11 h-[2px] bg-[#414141]'></div>
            </div>

            {/* Heading */}
            <h1 className='text-3xl lg:text-5xl leading-relaxed prata-regular'>Latest Arrivals</h1>

            {/* Shop Now */}
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base uppercase'>SHOP NOW</p>
              <div className='w-8 md:w-11 h-[1.5px] bg-[#414141]'></div>
            </div>
          </div>
        </div>

        {/* Hero Right Side */}
        <div className='w-full sm:w-1/2 h-full'>
          <img
            src={assets.hero_img}
            alt="Hero"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
