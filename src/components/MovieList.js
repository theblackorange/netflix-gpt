import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-2 bg-black'>
        <h1 className='text-3xl p-6 text-white'>{title}</h1>   
        <div className='flex overflow-x-scroll'> 
            <div className='flex gap-2 p-2'>
                {movies && movies.map(movie => (
                    <MovieCard key={movie.poster_path} posterPath={movie.poster_path}/>
                ))}            
            </div>
        </div>
    </div>
  )
}

export default MovieList