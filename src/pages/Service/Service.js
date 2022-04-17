import React from 'react'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'

const Service = ({ service }) => {
  const { name, price, img, benefits } = service
  return (
    <div className='flex justify-center m-5 relative'>
      <div className='rounded-lg shadow-lg bg-white max-w-sm'>
        <a href='#!'>
          <img className='rounded-lg w-3/5 mx-auto' src={img} alt='' />
        </a>
        <div className='p-6'>
          <h5 className='text-gray-900 font-bold text-2xl mb-2'>{name}</h5>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>${price}</h5>
          <ol type='A' className='text-gray-700 text-base mb-4'>
            {benefits.map(benefit => (
              <li className='flex'>
                <ArrowCircleRightIcon className='w-5 text-indigo-500 mr-2'></ArrowCircleRightIcon>
                {benefit}
              </li>
            ))}
          </ol>
          <div className='flex justify-center absolute bottom-0 left-1/3'>
            <button
              type='button'
              className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            >
              Get Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
