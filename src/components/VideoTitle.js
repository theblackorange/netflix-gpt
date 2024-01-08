import React from 'react'

const VideoTitle = (props) => {
    const {title, overview} = props;
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-tr from black w-screen aspect-video'>
        <h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='p-2 px-6 bg-white text-black md:p-4 md:px-16 rounded-lg bg-opacity-80 hover:bg-opacity-70'>Play</button>
            <button className='hidden md:inline-blockmx-4 bg-gray-500 text-black p-4 px-16 rounded-lg bg-opacity-50 hover:bg-opacity-90'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle