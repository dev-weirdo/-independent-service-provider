import React from 'react'

const Blog = () => {
  return (
    <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div>
        <h1 className='text-xl'>Difference between authorization and authentication</h1>
        <p>Verifying and confirming a user's identity and password is known as authentication. Authorization is determining whether an authenticated user has access to an organization's resources. Authentication ensures who the user is, and authorization determines which resources the user has access to. The first step in a successful identity and access management strategy is authentication. Authentication is followed by authorization.</p>
      </div>
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div>
        <h1></h1>
        <p></p>
      </div>
    </div>
  )
}

export default Blog
