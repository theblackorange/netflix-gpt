import React from 'react'
import { BANNER } from '../utils/constant'
import GptMovieSuggesstions from './GptMovieSuggesstions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className=' -z-10 fixed'>
            <img 
            src={BANNER} alt='banner' />
        </div>
        <GptSearchBar/>
        <GptMovieSuggesstions/>
    </div>
  )
}

export default GptSearch