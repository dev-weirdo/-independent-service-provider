import React, { useEffect, useState } from 'react'
import Service from '../Service/Service'

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='mt-10'>
      <h1 className='text-5xl font-bold text-center'>Our Services</h1>
      <div className='grid col-span-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {services.map(service => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  )
}

export default Services
