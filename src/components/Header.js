import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { preferredLangauge } from '../utils/configSlice';
import { AVATAR, LANGUAGES, LOGO } from '../utils/constant';
import { auth } from '../utils/firebase';
import { toggleGptSearchView } from '../utils/gptSlice';
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
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (value) => {
    dispatch(preferredLangauge(value))
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
          <select onChange={(e) => handleLanguageChange(e.target.value)} className='h-[50%] mt-6'>
            {/* {LANGUAGES.map((lang) => (
              <option value={lang.value}>{lang.identifier}</option>
            )} */}
            {LANGUAGES.map((lang)=>(
              <option value={lang.value}>{lang.identifier}</option>)
            )}
            
          </select>
          <button className='bg-green-900 p-2 m-4 rounded-lg' onClick={handleGptSearch}>GPT Movie search</button>
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