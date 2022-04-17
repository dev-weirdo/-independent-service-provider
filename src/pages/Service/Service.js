import React from 'react'

const Service = ({ service }) => {
  const { name, price, img, benefits } = service
  return <div>{name}</div>
}

export default Service
