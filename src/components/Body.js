import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import Browse from './Browse'
import Login from './Login'

const Body = () => {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path : '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        }
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName} = user;

              dispatch(addUser({email: email, uid: uid, displayName: displayName}))
              
            } else {
              // User is signed out
              dispatch(removeUser())
            }
          });
    },[])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body