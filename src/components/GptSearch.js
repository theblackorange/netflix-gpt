import React from 'react'
import { BANNER } from '../utils/constant'
import GptMovieSuggesstions from './GptMovieSuggesstions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img 
            src={BANNER} alt='banner' />
        </div>
        <GptSearchBar/>
        <GptMovieSuggesstions/>
    </div>
  )
}

export default GptSearch