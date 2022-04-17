import React from 'react'

const Login = () => {
  return (
    <div className='mx-auto my-16 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <form className='space-y-6'>
        <h5 className='text-xl font-medium text-gray-900 dark:text-white'>
          Sign in to our platform
        </h5>
        <div>
          <label
            for='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
            placeholder='name@company.com'
            required=''
          ></input>
        </div>
        <div>
          <label
            for='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='••••••••'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
            required=''
          ></input>
        </div>
        <div className='flex items-start'>
          <p
            href='#'
            className='ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500'
          >
            Lost Password?
          </p>
        </div>
        <button
          type='submit'
          className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Login to your account
        </button>
        <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
          Not registered?
          <p
            href='#'
            className='text-blue-700 hover:underline dark:text-blue-500'
          >
            Create account
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
