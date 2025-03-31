import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about us"/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Hoodify is your go-to online store for top-quality computers and stylish clothing. We combine the best of tech and fashion, offering powerful laptops, desktops, and accessories alongside trendy apparel that fits your lifestyle.</p>
          <p>Whether you need high-performance devices for work or gaming, or you’re looking to upgrade your wardrobe with the latest streetwear, Hoodify has you covered. We focus on delivering quality, style, and value, ensuring every product meets your needs.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Hoodify aims to deliver quality tech and fashion, blending innovation and style for today’s consumer.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Asuarance</b>
            <p className='text-gray-600'>We offer reliable, high-performance computers and stylish clothing.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Affordable Prices</b>
            <p className='text-gray-600'>Get the best value without compromising on quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenient Shopping</b>
            <p className='text-gray-600'>A seamless, user-friendly online experience.</p>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default About