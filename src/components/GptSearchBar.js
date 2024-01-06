import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'
import lang from '../utils/languageConstant'
import openAI from '../utils/openAI'

const GptSearchBar = () => {
    const preferredLangauge = useSelector(store => store.config.language)
    const dispatch = useDispatch()
    const searchText = useRef(null)

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}`, API_OPTIONS)
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        //make and API call to openAI to get movie results
        const query = 'act as movie recommendation system and suggest some movies for the following query: '+searchText.current.value+'. only give me names of 5 movies, comma separated like example result. Example result: jawan, 12th fail, sholay, golmaal, bahubali.'
        const gptResults = 
            await openAI.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });
        const finalMovieResult = gptResults.choices[0]?.message?.content.split(',')
        const movieDetailsPromiseArray = finalMovieResult.map((movie) => (
            searchMovieTMDB(movie)
        ))
        const resolvedMovieDetails = await Promise.all(movieDetailsPromiseArray)
        dispatch(addGptMovieResult({movieNames: finalMovieResult,movieResults: resolvedMovieDetails}))
        console.log(resolvedMovieDetails)
    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input type='text' ref={searchText} placeholder={lang[preferredLangauge].searchPlaceholder} className='p-4 m-4 col-span-9'/>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick}>{lang[preferredLangauge].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar