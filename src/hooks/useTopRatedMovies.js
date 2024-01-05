import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(()=>{
    topRatedMovies()
  },[])
}

export default useTopRatedMovies;