import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMoviesData = useSelector(store => store.movies.nowPlayingMovies)
  const nowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json)
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    if(!nowPlayingMoviesData) nowPlayingMovies()
  },[])
}

export default useNowPlayingMovies;