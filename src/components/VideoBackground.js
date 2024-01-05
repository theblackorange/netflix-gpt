import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useMovieTrailer } from '../hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => { 
    useMovieTrailer(movieId)
    const trailer = useSelector(store => store.movies.trailerVideo)
  return (
    <div className='w-screen'> 
        <iframe 
            className='w-screen aspect-video'
            src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground