import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='banner' />
      </div>
      <form className='absolute bg-black py-12 my-36 mx-auto right-0 left-0 p-4 w-3/12 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input 
          type='text' 
          placeholder='enter your name' 
          className='my-4 p-4 w-full bg-gray-700'/>}
        <input 
          type='text' 
          placeholder='enter your email' 
          className='my-4 p-4 w-full bg-gray-700'/>
        <input 
          type='password' 
          placeholder='enter your password' 
          className='my-4 p-4 w-full bg-gray-700'/>
        <button 
          type='submit' 
          className='my-4 p-4 bg-red-700 w-full rounded-lg'>
            {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? 'New to netflix? sign-up now' : 'Already registered? sign-in now'}</p>
      </form>
    
    </div>
  )
}

export default Login