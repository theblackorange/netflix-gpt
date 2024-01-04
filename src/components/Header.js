import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Header = () => {
  const navigate = useNavigate();
  const signout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-[100%] z-10 flex justify-between'>
        <img
          className='w-52' 
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' 
        />
        <div className='flex'>
          <img 
            className='w-14 h-14'
            alt='usericon'
            src='https://occ-0-2661-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABb-8vVI7sndeLpeKmju4PDnE0NKcVv9S6SuAZoi44Jueraamryof18JEKPH21DTc8oPB-E1ItVQdqZpFOPDKvAQKMROjPUw.png?r=bb0'
          />
          <button onClick={signout}> Sign me out </button>
        </div>
    </div>
  )
}

export default Header