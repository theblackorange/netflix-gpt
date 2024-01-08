import React from 'react'
import { IMAGE_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className='md:w-32 w-28'>
        <img alt='movie' src={`${IMAGE_URL}${posterPath}`}/>
    </div>
  )
}

export default MovieCard