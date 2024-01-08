import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { addTrailerVideo } from "../utils/movieSlice"

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const trailerVideoData = useSelector(store => store.movies.trailerVideo)
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const videoArray = await data.json();
        const filteredData = videoArray?.results?.filter(video => video.type === 'Trailer')
        const trailer = filteredData[12] ?? videoArray.results[0]
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        !trailerVideoData && getMovieVideos();
    },[])
}