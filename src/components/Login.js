import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BANNER } from '../utils/constant'
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
import { checkValidData } from '../utils/validate'
import Header from './Header'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const emailID = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  const handleButtonClick = () => {
    const validation = checkValidData(emailID.current.value, password.current.value)
    setErrorMessage(validation)

    if(errorMessage) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, emailID.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        updateProfile(user, {
          displayName: name.current.value, photoURL:''
        }).then(() => {
          console.log('auth.currentUser',auth.currentUser)
          const {uid, email, displayName} = auth.currentUser;
          dispatch(addUser({email: email, uid: uid, displayName: displayName}))
          // Profile updated!
          navigate('/browse')
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + errorMessage)
        // ..
      });
    }else{
      signInWithEmailAndPassword(auth, emailID.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browse')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + errorMessage)
      });
    }
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
          src={BANNER} alt='banner' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black py-12 my-36 mx-auto right-0 left-0 p-4 w-3/12 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input 
          ref={name}
          type='text' 
          placeholder='enter your name' 
          className='my-4 p-4 w-full bg-gray-700'/>}
        <input
          ref={emailID}
          type='text' 
          placeholder='enter your email' 
          className='my-4 p-4 w-full bg-gray-700'/>
        <input
          ref={password}
          type='password' 
          placeholder='enter your password' 
          className='my-4 p-4 w-full bg-gray-700'/>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        <button
          onClick={handleButtonClick}
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