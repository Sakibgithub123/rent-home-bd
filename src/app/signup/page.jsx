import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUp = () => {
    return (
        <div className='max-w-4xl mx-auto bg-base-200 my-10 py-10'>
            <div className='flex flex-row items-center justify-center gap-10 px-10'>
                <div className='my-10 rounded w-6/12'>
                    <Image className='rounded' src="/images/img2.jpg" alt="image" width={400} height={400} />

                </div>
                <div className='text-center w-6/12'>
                    <div className='space-y-2'>
                        <h3 className='text-xl text-stone-900 font-bold'>Sign UP? </h3>
                        <p className='text-sm'>Please Enter Your Details!</p>
                    </div>
                    <form action="" className='space-y-4 my-5'>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" name='name' className="grow" placeholder="Username" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" name='email' className="grow w-full" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"
                                    clipRule="evenodd"
                                />

                            </svg>
                            <input type="text" name='phone' className="grow w-full" placeholder="Phone" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" name='password' className="grow" placeholder="password" />
                        </label>
                        <div className='space-y-4'>
                            <p className='text-left text-sm text-blue-400'>Forget Password?</p>
                            <button className="input input-bordered bg-blue-400 hover:bg-blue-200 text-white w-full">Create Account</button>
                            <p className='text-sm text-stone-600'>Or</p>
                            <button className="input input-bordered hover:bg-transparent w-full">Sign In with Google</button>
                            <p className='text-sm text-stone-600'>Already have an account?<Link className='text-blue-400' href={'/login'}>Sign In</Link></p>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default SignUp;

