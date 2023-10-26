import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);

  const toggleSignInFrom = () => {
    setIsSignInFrom(!isSignInFrom);
  }

  return (
    <div> 
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='backgroundimg'>
       </img>
      </div> 
      <form className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {! isSignInFrom && (<input type='text' placeholder='Full Name'
        className='p-4 my-2 w-full rounded-lg bg-gray-500'/>)}
        <input type='text' placeholder='Email Address'
        className='p-4 my-2 w-full rounded-lg bg-gray-500'/>
        <input type='password' placeholder='Password'
         className='p-4 my-2 w-full rounded-lg bg-gray-500'/> 
        <button className='p-4 my-6 w-full bg-red-700 rounded-lg'>
        {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInFrom}>
        {isSignInFrom ? "New to Netflix? Sign up Now" : "AlReady registered? Sign In Now"} </p>
      </form>
    </div>
  )
}

export default Login