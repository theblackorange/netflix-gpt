import React from 'react'
import { IMAGE_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-32'>
        <img alt='movie' src={`${IMAGE_URL}${posterPath}`}/>
    </div>
  )
}

export default MovieCard