import React from 'react'

const Footer = () => {
  const date = new Date()
  const fullYear = date.getFullYear()
  return (
    <footer className="bg-white shadow p-6 dark:bg-gray-800 flex justify-center">
      <span className="text-sm text-gray-500 text-center dark:text-gray-400">©{fullYear} FOTO™. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
