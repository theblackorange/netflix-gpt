import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AVATAR, LOGO } from '../utils/constant';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const signout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName} = user;

          dispatch(addUser({email: email, uid: uid, displayName: displayName}))
          navigate('/browse')
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate('/')
        }
      });
    return () => unsubscribe()  
},[])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-[100%] z-10 flex justify-between'>
        <img
          className='w-52' 
          src={LOGO} alt='logo' 
        />
        {user && <div className='flex'>
          <span>{user?.displayName}</span>
          <img 
            className='w-14 h-14'
            alt='usericon'
            src={AVATAR}
          />
          <button onClick={signout}> Sign me out </button>
        </div>}
    </div>
  )
}

export default Header