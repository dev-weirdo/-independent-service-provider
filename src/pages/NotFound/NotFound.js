import React from 'react'
import nf from '../../assets/404.jpg'

const NotFound = () => {
  return (
    <div className='my-8'>
      <img className=' w-3/4 md:w-4/6 lg:w-2/6 mx-auto rounded-lg' src={nf} alt="" />
    </div>
  )
}

export default NotFound
