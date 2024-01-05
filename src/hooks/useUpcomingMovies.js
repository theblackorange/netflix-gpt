import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results))
  }

  useEffect(()=>{
    upcomingMovies()
  },[])
}

export default useUpcomingMovies;