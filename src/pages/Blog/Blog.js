import React from 'react'

const Blog = () => {
  return (
    <div className='my-10 min-h-[80vh]'>
      <div className='w-3/4 mx-auto'>
        <div>
          <h1 className='text-xl'>1. Difference between authorization and authentication</h1>
          <p className='text-justify my-2'>Verifying and confirming a user's identity and password is known as authentication. Authorization is determining whether an authenticated user has access to an organization's resources. Authentication ensures who the user is, and authorization determines which resources the user has access to. The first step in a successful identity and access management strategy is authentication. Authentication is followed by authorization.</p>
        </div>
        <div>
          <h1 className='text-xl'>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
          <p className='text-justify my-2'>Cause firebase gives us a 'free start' feature and lets us develop applications without investing a penny. It gives us a real-time database, and it's fast and safe. To authenticate users in our project, Firebase Authentication provides backend services, simple SDKs, and ready-made UI libraries. It accepts passwords, phone numbers, and popular platform independent providers such as Google, Facebook, and Twitter.</p>
        </div>
        <div>
          <h1 className='text-xl'>3. What other services does firebase provide other than authentication</h1>
          <p className='text-justify my-2'>Firebase helps you build and run successful apps. Backed by Google, loved by developers. It provides many features other than authentication, such as real-time database, remote config, firebase ml, cloud functions, cloud messaging, hosting, and cloud storage.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
