import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
  return (
    <div className='-mt-40'>
        <MovieList title={'Now playing movies'} movies={movies.nowPlayingMovies}/>
        <MovieList title={'Popular movies'} movies={movies.popularMovies}/>
        <MovieList title={'Top rated movies'} movies={movies.topRatedMovies}/>
        <MovieList title={'Upcoming movies'} movies={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer