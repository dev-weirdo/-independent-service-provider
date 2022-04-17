import React from 'react'

const Service = ({ service }) => {
  const { name, price, img, benefits } = service
  return (
    <div>
      <p>{name}</p>
      <p>{benefits}</p>
      <p>{price}</p>
      <img src={img} alt='' />
    </div>
  )
}

export default Service
