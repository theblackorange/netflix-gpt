import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const gpt = useSelector(store => store.gpt)
  return (
    <div>
      <Header/>
      {gpt.showGptSearch ? 
        <GptSearch/>:
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }
    </div>
  )
}

export default Browse