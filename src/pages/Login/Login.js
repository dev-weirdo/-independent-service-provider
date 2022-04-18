import React, { useRef } from 'react'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import SocialLogin from '../../pages/SocialLogin/SocialLogin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  }

  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth)

  const handlePasswordReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email)
      toast('Email Sent');
    }
    else {
      toast('Enter your email!');
    }
  }



  const from = location.state?.from?.pathname || '/'

  if (user) {
    navigate(from, { replace: true })
  }

  let resetErrorMsg;
  if (resetError) {
    resetErrorMsg = <p className='text-red-700 text-xl text-center'>{resetError.message}</p>
  }

  if (loading || sending) {
    return (
      <>
        <div className='w-full flex justify-center items-center'>
          <svg role="status" className="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
          </svg>
        </div>
      </>
    )
  }
  let errMsg;
  if (error) {
    errMsg = <div>
      <p className='text-red-600 border-2 rounded-md my-2 py-1 px-2'>Error: {error.message}</p>
    </div>

  }

  return (
    <div className='mx-auto my-16 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <form className='space-y-6' onSubmit={handleLogin}>
        <h5 className='text-xl font-medium text-gray-900 dark:text-white'>
          Sign in to our platform
        </h5>
        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type='email'
            name='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
            placeholder='abc@xyz.com'
            required
          ></input>
        </div>
        <div>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type='password'
            name='password'
            id='password'
            placeholder='••••••••'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
            required
          ></input>
        </div>
        <div className='flex items-start'>
          <button onClick={handlePasswordReset} className='ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500'>Lost Password?</button>
        </div>
        <button
          type='submit'
          className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Login to your account
        </button>
        {errMsg}
        {resetErrorMsg}
        <div className='text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-between items-center'>
          Not registered?
          <Link to='/register' className='text-blue-700 hover:underline dark:text-blue-500'>Create Account</Link>
        </div>
      </form>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Login
