import React from 'react'
import { BANNER } from '../utils/constant'
import GptMovieSuggesstions from './GptMovieSuggesstions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <>
        <div className=' -z-10 fixed'>
            <img className='h-screen object-cover md:h-auto'
            src={BANNER} alt='banner' />
        </div>
        <div>     
            <GptSearchBar/>
            <GptMovieSuggesstions/>
        </div>
    </>
    
  )
}

export default GptSearch