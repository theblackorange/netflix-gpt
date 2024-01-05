import React from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
    
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body