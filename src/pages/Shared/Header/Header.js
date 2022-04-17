import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='md:flex justify-around mt-8'>
      <div className='text-4xl text-center'>
        <span className='text-violet-700'>FO</span>
        <span className='text-blue-600'>TO</span>
      </div>
      <div className='text-xl my-5 flex items-center justify-evenly md:w-2/4 lg:w-1/4 md:my-0'>
        <Link to='/home'>HOME</Link>
        <Link to='/blog'>BLOG</Link>
        <Link to='/about'>ABOUT</Link>
        <Link className='text-green-700' to='/login'>
          LOGIN
        </Link>
      </div>
    </div>
  )
}

export default Header
