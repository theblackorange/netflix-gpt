import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const GptSearchBar = () => {
    const preferredLangauge = useSelector(store => store.config.language)
    console.log(preferredLangauge)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type='text' placeholder={lang[preferredLangauge].searchPlaceholder} className='p-4 m-4 col-span-9'/>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{lang[preferredLangauge].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar