import React from 'react'

const Footer = () => {
  const date = new Date()
  const fullYear = date.getFullYear()
  return (
    <div>
      <p className='text-center'>&#169;{fullYear} FOTO. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
