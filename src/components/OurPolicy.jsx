import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img  className='m-auto w-12 mb-5' src={assets.exchange_icon} alt="exchange icon" />
            <p className='font-semibold'>Exchange Policy</p>
            <p className='text-gray-400' >
                We offer a 30-day return policy on all products. Please return the product in its original packaging, along with a valid return label and receipt.
            </p>
        </div>
        <div>
            <img  className='m-auto w-12 mb-5' src={assets.quality_icon} alt="exchange icon" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400' >
                We offer a 30-day return policy on all products. Please return the product in its original packaging, along with a valid return label and receipt.
            </p>
        </div>
        <div>
            <img  className='m-auto w-12 mb-5' src={assets.support_img} alt="exchange icon" />
            <p className='font-semibold'>Best customer Support</p>
            <p className='text-gray-400' >
                We offer a 24/7 customer Support
            </p>
        </div>
    </div>
  )
}

export default OurPolicy