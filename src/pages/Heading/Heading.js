import React from 'react'
import banner from '../../assets/banner.jpg'

const Heading = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className='my-8 w-full h-60 md:h-64 lg:h-screen bg-no-repeat bg-contain md:bg-cover md:bg-center flex items-center'
    >
      <p className='px-3 w-3/5 md:w-2/4 text-white leading-10 text-lg md:text-3xl lg:text-6xl font-bold ml-auto'>
        Let's capture some beautiful moments to make it memorable!
      </p>
    </div>
  )
}

export default Heading
