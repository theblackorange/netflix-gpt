import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const nowPopularMoviesData = useSelector(store => store.movies.popularMovies)
  const popularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=IN', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    !nowPopularMoviesData && popularMovies()
  },[])
}

export default usePopularMovies;