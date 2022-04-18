import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../pages/SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('')
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const [passError, setPassError] = useState('')

    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true })
    }

    if (loading) {
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

    const handleRegister = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            return setPassError("Password dosen't match!!!")
        }

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='mx-auto my-16 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <form className='space-y-6' onSubmit={handleRegister}>
                <h5 className='text-xl font-medium text-gray-900 dark:text-white'>
                    Register to our platform
                </h5>
                <div>
                    <label
                        for='email'
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
                        for='password'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                        Password
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
                <div>
                    <label
                        for='confirmPassword'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                        Confirm password
                    </label>
                    <input
                        ref={confirmPasswordRef}
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder='••••••••'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                        required
                    ></input>
                </div>
                <p className='text-red-700 text-center text-xl'>{passError}</p>
                {errMsg}
                <button
                    type='submit'
                    className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Register
                </button>
                <div className='text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-between items-center'>
                    Already registered?
                    <Link to='/login' className='text-blue-700 hover:underline dark:text-blue-500'>Login</Link>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;